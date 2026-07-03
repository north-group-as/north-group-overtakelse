@AGENTS.md

# North Group - Prosjektregler

## Prosjekt
- **Nettside:** northgroup.no (kanonisk: www.northgroup.no)
- **Bransje:** Rekruttering, HR-tjenester og kurs (HMS, sikkerhet, elektro)
- **Teknologi:** Next.js 16.2 (App Router), React 19, TypeScript, Tailwind CSS v4
- **Deploy:** Vercel, auto-deploy fra `main`, Node 24.x pinnet i package.json
- **Kontakt:** post@northgroup.no, +47 928 16 581

## Arkitektur
- Seksjonbasert sidekomposisjon; sider i `src/app/`, seksjoner i `src/components/`
- Alt redigerbart innhold ligger som datafiler i `src/lib/`:
  `business-data.ts` (firmainfo), `courses.ts` (kurs), `team.ts` (ansatte),
  `services.ts`/`hr-services.ts` (tjenester), `reviews.ts` (anmeldelser)
- Blogg som MDX i `src/content/blogg/` med bilder i `public/images/blogg/`
- Norsk bokmål overalt, `lang="nb"`

## Skjema-flyt
- Kontakt- og kursbestillingsskjema poster til `/api/contact`
- Ruten er herdet: rate-limiting, same-origin-sjekk, honeypot og hashing av
  persondata i logger (krever env-variabelen `LOG_HASH_SALT`, ellers 500)
- Leads opprettes i Monday; Resend sender valgfri e-postkopi

## Språkbruk og juridisk (VIKTIG)
- **Aldri bruk "bemanning"** noe sted. Rettsak avsluttet november 2025.
- **Aldri bruk "levert", "leverte", "sto for" eller "Vi installerte"** om prosjekter/caser.
- **Godkjente ord:** "bidro", "bidrar", "deltaker i", "samarbeidet med", "var med på"
- Generelle bedriftsbeskrivelser er OK, men prosjektspesifikke tekster må bruke godkjente ord.
- `npm run build` håndhever dette via `scripts/check-forbidden-words.sh` og
  blokkerer også tankestrek (em-dash). Ikke overstyr build-kommandoen.

## Innhold og design
- Eget fargeskjema definert i `globals.css` `@theme inline`
- Zebra-seksjonmønster: seksjoner alternerer mellom `bg-white` og `bg-gray-50`;
  seksjonen før footer er alltid `bg-white`
- Ingen baby blue/cyan-farger som bakgrunn
- Ekte bilder fra `public/images/` med beskrivende filnavn, alltid `.webp`
- **Aldri bruk Sparkles-ikonet** (AI-klisje). Bruk bransjerelevante lucide-ikoner:
  `HardHat`, `Wrench`, `Zap`, `ClipboardCheck`, `Briefcase`, `Award`, `Compass`,
  `Target`, `HeartHandshake`
- Ingen emoji i kode, innhold eller commits

## SEO
- Kanonisk URL, robots og sitemap antar www-subdomenet
- Stor redirect-liste fra gammel WordPress-side i `next.config.ts`; ikke slett
- `src/app/llms.txt/route.ts` og `robots.ts` er satt opp for AI-crawlere med vilje

## Generelle regler
- Ikke slett filer eller gjør destruktive endringer uten å spørre først
- Spør før du committer, pusher eller gjør irreversible handlinger
- Aldri commit `.env` eller hemmeligheter
