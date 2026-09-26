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
Die Vercel-Integration darf auch das Präfix `dienstbeginn_database_` verwenden:
`dienstbeginn_database_KV_REST_API_URL` und
`dienstbeginn_database_KV_REST_API_TOKEN` werden ebenfalls erkannt.
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

## Geprüfte Bestenlisten-Runden

Die Vercel-API erstellt kurzlebige Spielrunden in Redis. Antworten werden in der vom Server vorgegebenen Reihenfolge geprüft. Nur 26 richtige Antworten im ersten Durchlauf qualifizieren; die Zeit berechnet der Server. Eine Runde kann genau einmal eingetragen werden. Pro von Vercel übermittelter Client-IP gelten 30 Starts und 900 weitere Spielanfragen je 10 Minuten. Gespeichert wird nur ein HMAC der IP, der Redis-Zähler verfällt nach 10 Minuten. Die Vercel-Header sind unter https://vercel.com/docs/headers/request-headers dokumentiert.

Die Prüfung verhindert frei erfundene Ergebniswerte und Wiederverwendung eines Ergebnisses. Sie ist kein vollständiger Schutz gegen automatisiertes Spielen. Netzwerkzeiten beeinflussen die serverseitig gemessene Dauer. Ohne Verbindung bleibt der Drill als Übung verfügbar; gemeinsame Rekorde benötigen eine online gestartete und vollständig geprüfte Runde. Die zuletzt geladene gemeinsame Liste wird offline ausdrücklich als veraltet angezeigt.

### Lokales Knotenbild

`public/sackstich.webp`: David J. Fred, „Overhand-loop-ABOK-1046.jpg“, https://commons.wikimedia.org/wiki/File:Overhand-loop-ABOK-1046.jpg, CC BY-SA 2.5 (https://creativecommons.org/licenses/by-sa/2.5/). Verkleinert auf 1000 Pixel Breite und nach WebP konvertiert; auch diese Fassung steht unter CC BY-SA 2.5.

Prüfung: `node scripts/build-vercel.mjs` und `node --test tests/*.test.mjs`.
