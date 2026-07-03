#!/bin/bash
# \bbemanning matcher "bemanning", "bemannings*" som standalone ord eller
# prefiks (bemanningsforetak, bemanningsbyrå), men IKKE "nedbemanning"
# som er en lovlig HR-term (se Live northgroup.no for kontekst).
FORBIDDEN="\bbemanning|\blevert|\bleverte|\bsto for"
WORDS=$(grep -rn --include="*.ts" --include="*.tsx" --include="*.mdx" -E "$FORBIDDEN" src/ 2>/dev/null)

# Em-dash (U+2014) er forbudt i kode per ~/.claude/rules/language-style.md.
# Sjekken ekskluderer src/content/ inntil blogg-MDX er scrubbet (se egen issue).
EMDASH_CODE=$(grep -rn --include="*.ts" --include="*.tsx" --exclude-dir=content "—" src/ 2>/dev/null)
EMDASH_ENV=$(grep -n "—" .env.example 2>/dev/null)
EMDASH="$EMDASH_CODE"
if [ -n "$EMDASH_ENV" ]; then
  EMDASH=".env.example:$EMDASH_ENV${EMDASH:+$'\n'$EMDASH}"
fi

EXIT=0
if [ -n "$WORDS" ]; then
  echo "FEIL: Forbudte ord funnet:"
  echo "$WORDS"
  EXIT=1
fi
if [ -n "$EMDASH" ]; then
  echo "FEIL: Em-dash funnet i kode. Bruk komma, kolon, semikolon eller bindestrek:"
  echo "$EMDASH"
  EXIT=1
fi
if [ "$EXIT" -eq 0 ]; then
  echo "OK: Ingen forbudte ord eller em-dash funnet."
fi
exit "$EXIT"
