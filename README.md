# North Group

Nettsiden til North Group AS: [www.northgroup.no](https://www.northgroup.no).
Rekruttering, HR-tjenester og kurs innen HMS, sikkerhet og elektro.

## Stack

- Next.js 16.2 (App Router) med TypeScript
- React 19.2 og Tailwind CSS v4
- Innhold i koden: sider som komponenter, blogg som MDX
- Hostet på Vercel med auto-deploy fra `main`
- Node 24.x (pinnet i `package.json`, plukkes opp automatisk av Vercel)

## Kom i gang

```bash
npm install
cp .env.example .env.local   # fyll inn verdier, se tabellen under
npm run dev                  # http://localhost:3000
```

## Kommandoer

| Kommando | Gjør |
|---|---|
| `npm run dev` | Lokal utviklingsserver |
| `npm run build` | Språk-sjekk + produksjonsbygg |
| `npm run lint` | ESLint |
| `npm run lint:words` | Kun språk-sjekken (rask) |

## Miljøvariabler

Settes i `.env.local` lokalt og i Vercel (Project Settings, Environment
Variables) i produksjon. Full mal i `.env.example`.

| Variabel | Status | Funksjon |
|---|---|---|
| `MONDAY_API_TOKEN` | påkrevd | Leads fra kontaktskjema til Monday |
| `MONDAY_BOARD_ID` | påkrevd | Board-ID for CRM-tavlen |
| `LOG_HASH_SALT` | påkrevd | Salt for anonymisering i logger. Uten den feiler `/api/contact` med 500. Generer med `openssl rand -hex 32` |
| `RESEND_API_KEY` | valgfri | E-postkopi av leads |
| `RESEND_FROM_ADDRESS` | valgfri | Fra-adresse, default `noreply@northgroup.no` |

## Slik gjør du vanlige endringer

| Oppgave | Hvor |
|---|---|
| Telefon, e-post, adresse, statistikk | `src/lib/business-data.ts` og `src/lib/stats.ts` |
| Ansatte og roller | `src/lib/team.ts` + bilde i `public/images/team/` |
| Kurs (titler, priser, beskrivelser) | `src/lib/courses.ts` |
| Tjenester og HR-innhold | `src/lib/services.ts`, `src/lib/hr-services.ts` |
| Anmeldelser | `src/lib/reviews.ts` |
| Nytt blogginnlegg | Ny `.mdx`-fil i `src/content/blogg/` + bilde i `public/images/blogg/` |
| Tekst på en side | `src/app/<rute>/page.tsx` |

Frontmatter-mal for blogginnlegg:

```yaml
---
title: "Tittel på innlegget"
description: "Kort beskrivelse for søkemotorer."
date: "2026-07-04"
category: "guide"
image: "/images/blogg/mitt-bilde.webp"
author: "Kristoffer Holand"
keywords: ["nokkelord", "flere nokkelord"]
---
```

## Viktig: språk-sjekken i bygget

`npm run build` kjører `scripts/check-forbidden-words.sh` før `next build`
og stopper bygget hvis teksten inneholder ord fra forbudslisten (juridisk
begrunnet, se `CLAUDE.md`) eller tankestrek. Feiler bygget: kjør
`npm run lint:words` for å se nøyaktig hvilken fil og linje.
Ikke endre build-kommandoen i Vercel til bare `next build`; da forsvinner
denne sikkerheten.

## Struktur

| Sti | Innhold |
|---|---|
| `src/app/` | Alle sider og API-ruter (App Router) |
| `src/components/` | Delte komponenter og seksjoner |
| `src/lib/` | Alt redigerbart innhold som datafiler |
| `src/content/blogg/` | Blogginnlegg som MDX |
| `public/` | Bilder (webp), video og statiske filer |

## Verdt å vite

- Kanonisk adresse er `www.northgroup.no`; apex skal redirecte til www.
- `next.config.ts` inneholder en stor redirect-liste fra den gamle
  WordPress-siden pluss sikkerhetsheaders. Ikke slett redirects.
- `/api/contact` er herdet med rate-limiting, honeypot og hashing av
  persondata i logger.
- Alle bilder skal være `.webp` for ytelse.
