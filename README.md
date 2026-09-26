# Dienstbeginn

Mobile Lern- und Informationsseite für Rekrutinnen und Rekruten.

## Aufbau

- `legacy/site.html` enthält die vollständige HTML-Oberfläche.
- `public/` enthält Styles, Browser-JavaScript und Medien.
- `app/route.ts` liefert die bestehende Oberfläche unverändert über den Worker aus.
- `app/api/nato-leaderboard/route.ts` stellt die dauerhafte Bestenliste des Alphabet-Drills bereit.
- `db/schema.ts` und `drizzle/` verwalten das D1-Schema.

Vor Entwicklung und Build erzeugt `scripts/embed-legacy-html.mjs` aus der HTML-Oberfläche das importierbare Worker-Modul.

## Befehle

```sh
pnpm dev
pnpm build
pnpm db:generate
```
