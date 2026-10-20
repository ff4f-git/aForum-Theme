# aForum – Discourse Theme · Alpha 17

Eigenständiges Discourse-Haupttheme für [aForum.net](https://aforum.net), die Aprilia-Community. **Alpha 17** ergänzt eine dunkle Racing-Sidebar auf Desktop-Geräten. Die funktionierende Font-Awesome-Flamme aus Alpha 15 und alle übrigen Theme-Bereiche bleiben erhalten.

## Gestaltung

- Schwarze Kopfzeile, weiße Inhaltsfläche auf hellgrauem Seitenhintergrund.
- Desktop-Sidebar im Racing-Look: Anthrazit (`#111317`), helle Texte, rote aktive Markierung und dezenter Hover (`#22262B`); auf 220 px Zielbreite abgestimmt. Auf schmalen Ansichten bleibt das native mobile Discourse-Verhalten erhalten.
- Schwarze Navigationsleiste mit blauem aktivem Tab und rotem Button **Neues Thema**.
- Schlichter Link **★ Abonnieren** in Bronze (`#D6B36A`), ohne Hintergrund, Rahmen oder Animation.
- Zweispaltiger Startseitenbereich: Kategorien links, aktuelle Themen rechts.
- Kategorie-Kopfzeile mit blauem Listensymbol und blauer Linie; Aktuell-Kopfzeile mit roter Akzentlinie und sichtbarem Font-Awesome-Flammensymbol.
- Helles und dunkles Farbschema; viele Farben und Maße über `settings.yml` konfigurierbar.

## Installation und Aktualisierung

1. Dateien aus dieser ZIP **direkt in das Stammverzeichnis** des bestehenden GitHub-Theme-Repositories kopieren (nicht in einen zusätzlichen Unterordner).
2. Bestehende Dateien überschreiben und die Änderungen committen.
3. In Discourse unter **Admin → Darstellung → Themes & Komponenten** das installierte Git-Theme auswählen und auf Updates prüfen.
4. Nach der Aktualisierung die Startseite auf Desktop und Mobilgeräten testen.

**Hinweis zur Versionsanzeige:** Die Felder `name` und `theme_version` in `about.json` stehen hier auf **aForum Alpha 17** und **alpha-17**. Discourse kann einen einmal lokal vergebenen Theme-Namen beibehalten. Falls in der Administration weiterhin „Alpha 11“ steht, den **Anzeigenamen des installierten Themes in Discourse selbst** bearbeiten. Eine Git-Aktualisierung benennt ein vorhandenes Theme nicht zwingend um.

## Separat installierte Komponenten

Das Willkommens-/Suchbanner wird über die Discourse-Bannerfunktion bzw. die dazugehörige Einrichtung verwaltet. Die drei Sponsor-Kacheln stammen aus der **separaten Theme-Komponente aForum Premium Sponsors** und gehören **nicht** zu diesem Repository. Diese Komponente muss weiterhin dem Haupttheme zugewiesen sein; ihre Einstellungen und Sponsoren werden durch dieses Theme-Update nicht verändert.

## Dateien

- `about.json` – Theme-Name, Metadaten, Farbschemata und Icon-Freigaben.
- `settings.yml` – konfigurierbare Theme-Einstellungen.
- `common/color_definitions.scss` – Farbvariablen.
- `common/common.scss` – Layout, Navigation, Tabellenköpfe, Racing-Sidebar und Popup-Styling.
- `javascripts/discourse/api-initializers/aforum-more-popup.js` – positioniert das native Desktop-„Mehr“-Menü als Popup.
- `javascripts/discourse/api-initializers/aforum-subscribe-glow.js` – bestehender Dateiname aus Kompatibilitätsgründen; steuert den schlichten Bronze-Link, **keinen** Glow mehr.
- `javascripts/discourse/api-initializers/aforum-section-icons.js` – ergänzt Icons und Markierung der Kopfzeilen.

## Versionsverlauf

- **Alpha 10:** Bronze-Link „★ Abonnieren“, blaue und rote Akzentlinien für die beiden Tabellenbereiche.
- **Alpha 11:** Überarbeitung der Icon-Darstellung und Schriftgrößen.
- **Alpha 12:** Anpassung der Erkennung der rechten Kopfzeile.
- **Alpha 13:** Registrierung von `fire` und `list` in `about.json`, verbesserte Überschriftenerkennung.
- **Alpha 14:** Korrigierte Theme-Metadaten, konsistente Versionierung und vollständig aktualisierte README. Keine zusätzlichen Layoutänderungen.

- **Alpha 15:** Discourse-konforme SVG-Icon-Registrierung über `about.json` → `modifiers.svg_icons` als Array (`fire`, `list`); die rote Flamme wurde auf der Live-Seite bestätigt.
- **Alpha 17:** Dunkle Racing-Sidebar für Desktop mit 220-px-Zielbreite, roten aktiven Markierungen, hellen Texten und dezentem Hover. Keine Änderungen an Icon-JavaScript, Sponsor-Komponente oder mobilen Layouts.

- **Alpha 17:** Desktop-„Mehr“-Menü als schwebendes, dunkles Racing-Popup mit roter Akzentkante, begrenzter Höhe und Scrollbereich. Die nativen Discourse-Links bleiben erhalten; außerhalb klicken oder Escape schließt über den vorhandenen Menüschalter. Mobil unverändert.

## Hinweise zur Sidebar

Die Gestaltung verwendet die nativen Discourse-Sidebar-Klassen und `--d-sidebar-width`. Je nach Discourse-Version können einzelne Sidebar-Elemente abweichende Klassen besitzen. Nach dem Theme-Update die geöffnete Sidebar sowie die mobile Ansicht prüfen. Die drei Sponsor-Kacheln gehören weiterhin zur separaten Theme-Komponente.

**Testhinweis Alpha 17:** Nach dem Update auf Desktop „Mehr“ öffnen, Links und Escape/Außenklick prüfen. Die konkrete DOM-Struktur des installierten Discourse-Builds kann abweichen; falls das Menü nicht schwebt, bitte einen Screenshot der geöffneten Sidebar senden.
