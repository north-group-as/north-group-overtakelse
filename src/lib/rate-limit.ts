/**
 * Enkel in-memory rate limiter med sliding window per nøkkel (typisk IP).
 *
 * BEVISST ENKEL: holder seg i én prosess (Vercel Function instance) og
 * resetter ved cold start. Det er akseptabelt for et kontaktskjema som
 * har lavt legitimt volum og hvor målet er å bremse opportunistisk
 * spamming. For sterkere garanti på tvers av instanser bør dette byttes
 * mot Vercel KV / Upstash når trafikken øker.
 *
 * Bruk:
 *   const result = checkRateLimit(ip, { limit: 5, windowMs: 60_000 });
 *   if (!result.ok) return new Response(..., { status: 429 });
 */

interface Bucket {
  // Tidsstempler (ms) for nylige requests innenfor vinduet.
  timestamps: number[];
}

interface RateLimitOptions {
  limit: number;
  windowMs: number;
}

export interface RateLimitResult {
  ok: boolean;
  remaining: number;
  retryAfterMs: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

// Maks antall nøkler vi holder i minnet samtidig. Hindrer at en
// distribuert flood kan blåse opp prosessens minne. Når vi treffer
// taket droppes den eldste/utløpte oppføringen først.
const MAX_TRACKED_KEYS = 10_000;

function evictExpired(now: number, windowMs: number): void {
  // Tøm buckets som ikke har hatt aktivitet på over ett vindu. Begrenset
  // til en liten andel hver gang for å unngå O(n) per request.
  if (buckets.size < MAX_TRACKED_KEYS) return;
  let evicted = 0;
  for (const [key, bucket] of buckets) {
    if (
      bucket.timestamps.length === 0 ||
      bucket.timestamps[bucket.timestamps.length - 1] < now - windowMs
    ) {
      buckets.delete(key);
      evicted += 1;
      if (evicted >= 1_000) break;
    }
  }
}

export function checkRateLimit(key: string, options: RateLimitOptions): RateLimitResult {
  const { limit, windowMs } = options;
  const now = Date.now();
  evictExpired(now, windowMs);

  const bucket = buckets.get(key) ?? { timestamps: [] };
  // Behold bare tidsstempler innenfor det aktive vinduet.
  const cutoff = now - windowMs;
  const recent = bucket.timestamps.filter((t) => t > cutoff);

  if (recent.length >= limit) {
    const oldest = recent[0];
    const retryAfterMs = Math.max(0, oldest + windowMs - now);
    buckets.set(key, { timestamps: recent });
    return {
      ok: false,
      remaining: 0,
      retryAfterMs,
      resetAt: oldest + windowMs,
    };
  }

  recent.push(now);
  buckets.set(key, { timestamps: recent });

  return {
    ok: true,
    remaining: Math.max(0, limit - recent.length),
    retryAfterMs: 0,
    resetAt: now + windowMs,
  };
}

/**
 * Henter beste tilgjengelige klient-IP fra request-headers. Faller
 * tilbake til en konstant nøkkel ("unknown") så vi fortsatt rate-limiter
 * når IP mangler: heller for strengt enn for løst.
 */
export function getClientIp(headers: Headers): string {
  // Vercel/Cloudflare/standard proxy-headere, i prioritert rekkefølge.
  const candidates = [
    headers.get("x-real-ip"),
    headers.get("cf-connecting-ip"),
    headers.get("x-forwarded-for"),
  ];

  for (const raw of candidates) {
    if (!raw) continue;
    // x-forwarded-for kan være kommaseparert; ta første ikke-tomme.
    const first = raw.split(",")[0]?.trim();
    if (first) return first;
  }

  return "unknown";
}

// Eksportert kun for tester.
export function __resetRateLimitForTests(): void {
  buckets.clear();
}
