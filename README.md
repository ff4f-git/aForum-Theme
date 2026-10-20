# aForum – Discourse Theme · Alpha 14

Eigenständiges Discourse-Haupttheme für [aForum.net](https://aforum.net), die Aprilia-Community. Die Version **Alpha 14** aktualisiert die Versionsangaben und die Dokumentation gegenüber Alpha 13; das sichtbare Layout und die Funktionen bleiben unverändert.

## Gestaltung

- Schwarze Kopfzeile, weiße Inhaltsfläche auf hellgrauem Seitenhintergrund.
- Schwarze Navigationsleiste mit blauem aktivem Tab und rotem Button **Neues Thema**.
- Schlichter Link **★ Abonnieren** in Bronze (`#D6B36A`), ohne Hintergrund, Rahmen oder Animation.
- Zweispaltiger Startseitenbereich: Kategorien links, aktuelle Themen rechts.
- Kategorie-Kopfzeile mit blauem Listensymbol und blauer Linie; Aktuell-Kopfzeile mit roter Akzentlinie und vorgesehenem Font-Awesome-Flammensymbol.
- Helles und dunkles Farbschema; viele Farben und Maße über `settings.yml` konfigurierbar.

## Installation und Aktualisierung

1. Dateien aus dieser ZIP **direkt in das Stammverzeichnis** des bestehenden GitHub-Theme-Repositories kopieren (nicht in einen zusätzlichen Unterordner).
2. Bestehende Dateien überschreiben und die Änderungen committen.
3. In Discourse unter **Admin → Darstellung → Themes & Komponenten** das installierte Git-Theme auswählen und auf Updates prüfen.
4. Nach der Aktualisierung die Startseite auf Desktop und Mobilgeräten testen.

**Hinweis zur Versionsanzeige:** Die Felder `name` und `theme_version` in `about.json` stehen hier auf **aForum Alpha 14** und **alpha-14**. Discourse kann einen einmal lokal vergebenen Theme-Namen beibehalten. Falls in der Administration weiterhin „Alpha 11“ steht, den **Anzeigenamen des installierten Themes in Discourse selbst** bearbeiten. Eine Git-Aktualisierung benennt ein vorhandenes Theme nicht zwingend um.

## Separat installierte Komponenten

Das Willkommens-/Suchbanner wird über die Discourse-Bannerfunktion bzw. die dazugehörige Einrichtung verwaltet. Die drei Sponsor-Kacheln stammen aus der **separaten Theme-Komponente aForum Premium Sponsors** und gehören **nicht** zu diesem Repository. Diese Komponente muss weiterhin dem Haupttheme zugewiesen sein; ihre Einstellungen und Sponsoren werden durch dieses Theme-Update nicht verändert.

## Dateien

- `about.json` – Theme-Name, Metadaten, Farbschemata und Icon-Freigaben.
- `settings.yml` – konfigurierbare Theme-Einstellungen.
- `common/color_definitions.scss` – Farbvariablen.
- `common/common.scss` – Layout, Navigation und Tabellenköpfe.
- `javascripts/discourse/api-initializers/aforum-subscribe-glow.js` – bestehender Dateiname aus Kompatibilitätsgründen; steuert den schlichten Bronze-Link, **keinen** Glow mehr.
- `javascripts/discourse/api-initializers/aforum-section-icons.js` – ergänzt Icons und Markierung der Kopfzeilen.

## Versionsverlauf

- **Alpha 10:** Bronze-Link „★ Abonnieren“, blaue und rote Akzentlinien für die beiden Tabellenbereiche.
- **Alpha 11:** Überarbeitung der Icon-Darstellung und Schriftgrößen.
- **Alpha 12:** Anpassung der Erkennung der rechten Kopfzeile.
- **Alpha 13:** Registrierung von `fire` und `list` in `about.json`, verbesserte Überschriftenerkennung.
- **Alpha 14:** Korrigierte Theme-Metadaten, konsistente Versionierung und vollständig aktualisierte README. Keine zusätzlichen Layoutänderungen.

## Bekannte Einschränkungen

Die Icon-Ausgabe hängt vom tatsächlichen Discourse-Markup und der geladenen Icon-Bibliothek ab. Die Anzeige der roten Flamme rechts ist noch nicht durch einen erfolgreichen Live-Screenshot bestätigt. Ein erfolgreicher ZIP-Test ist kein Ersatz für einen Browser-Test.

- **Alpha 18:** Discourse-konforme SVG-Icon-Registrierung über `about.json` → `modifiers.svg_icons` als Array (`fire`, `list`), statt des wirkungslosen Top-Level-Eintrags `svg_icons`. Dadurch wird `#fire` in die SVG-Sprite-Sammlung aufgenommen.

- **Alpha 18:** Rückkehr zur nativen Discourse-Navigation. Sämtliche Racing-Sidebar-Styles aus Alpha 16 und das eigene „Mehr“-Popup samt JavaScript aus Alpha 17 sind entfernt. Das Layout und die Sidebar verhalten sich wieder wie im Discourse-Standard. Die funktionierende Flamme und alle übrigen Alpha-15-Designmerkmale bleiben erhalten. Die Navigationseinstellung (Sidebar oder Header Dropdown) wird ausschließlich in der Discourse-Administration festgelegt.
