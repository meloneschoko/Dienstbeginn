# Dienstbeginn

Mobile Lern- und Informationsseite für Rekrutinnen und Rekruten.

## Vercel

Das Repository enthält eine eigenständige Vercel-Konfiguration. Root Directory ist
das Repository-Hauptverzeichnis. `vercel.json` legt Framework, Installation und Build fest.
Der Vercel-Build benötigt keine npm-Pakete und keine Cloudflare-Zugangsdaten.

```sh
node scripts/build-vercel.mjs
node --test tests/vercel.test.mjs
```

Der Build kopiert `legacy/site.html` als Startseite sowie alle Medien aus `public/`
nach `.vercel/output/static`. Die Bestenlisten-API wird als Node.js-22-Funktion
über die Vercel Build Output API bereitgestellt. Quellcode und Zugangsdaten
werden nicht in das öffentliche Ausgabeverzeichnis kopiert.

## Bestenliste

Ohne Datenbank speichert die Website Ergebnisse ausschließlich im Browser auf
dem jeweiligen Gerät und zeigt dies an. Das Löschen von Browserdaten entfernt
diese Ergebnisse. Nach dem ersten Online-Besuch funktioniert die lokale
Bestenliste auch nach einem Offline-Neustart: Ergebnisse können gelesen und
gespeichert werden. Es gibt dann keine gemeinsame Rangliste zwischen Geräten.

Für eine gemeinsame, dauerhafte Bestenliste eine Upstash-Redis-Datenbank mit
dem Vercel-Projekt verbinden und diese serverseitigen Umgebungsvariablen setzen:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Alternativ werden `KV_REST_API_URL` und `KV_REST_API_TOKEN` unterstützt.
Variablen für Production und gegebenenfalls Preview konfigurieren; anschließend
neu deployen. Der Token benötigt Lese- und Schreibrechte und darf niemals als
öffentliche Browservariable angelegt werden. Preview sollte eine separate
Datenbank verwenden. Die Top 10 werden atomar in Redis aktualisiert.
Lokale Ergebnisse und Daten einer bisherigen Cloudflare-Datenbank werden nicht
automatisch in die gemeinsame Liste übernommen.

## Bisherige Cloudflare-Entwicklung

Die vorhandenen `app/`-, `db/`- und Vite-Dateien bleiben für den bisherigen
Cloudflare-Weg erhalten. `pnpm dev`, `pnpm build` und `pnpm db:generate`
gehören zu diesem Weg. Für Vercel gilt ausschließlich der oben beschriebene Build.
