# aForum · Alpha 21

**Ein eigenständiges Discourse-Haupttheme für [aForum.net](https://aforum.net) – die Aprilia-Community.**

Alpha 21 verbindet eine klassische, übersichtliche Forenansicht mit einer eigenständigen aForum-Gestaltung. Der Schwerpunkt liegt auf klarer Navigation, gut lesbaren Themenlisten und einer konsistenten Darstellung in hellen und dunklen Farbpaletten.

## Highlights

- **Klassische Kategorienübersicht:** Kategorien links, aktuelle Themen rechts.
- **Klare Navigation:** Kategorien, Aktuell, Neu und Heiß mit markiertem aktivem Bereich.
- **aForum-Akzente:** schwarzer Header, blaue Navigationsmarkierung, rote Akzentlinie und auffälliger „Neues Thema“-Button.
- **Dezenter Hover-Rahmen:** 1 px rote Innenkontur (`#d81c1c`) für Themenzeilen rechts auf der Kategorienseite sowie in den Listen **Aktuell**, **Neu** und **Heiß**. Kantige Ecken (`border-radius: 0`), 180 ms Übergang, keine Layoutverschiebung.
- **Light & Dark:** zwei mitgelieferte Farbschemata und palettenabhängige Feinabstimmungen.
- **Konfigurierbar:** zentrale Farben und weitere Designparameter über `settings.yml`.
- **Native Discourse-Navigation:** keine eigene Sidebar-Nachbildung und kein zusätzliches „Mehr“-Popup.

## Installation

### Neues Theme

1. Repository in GitHub bereitstellen.
2. In Discourse **Admin → Darstellung → Themes & Komponenten** öffnen.
3. **Installieren → Aus einem Git-Repository** auswählen.
4. Repository-URL eingeben und das Theme installieren.
5. Theme aktivieren und die Darstellung auf Desktop und Mobilgeräten prüfen.

### Bestehendes Alpha-Theme aktualisieren

1. Die Dateien dieses Releases in das **Stammverzeichnis** des bestehenden Theme-Repositories übernehmen – nicht in einen zusätzlichen Unterordner.
2. Änderungen committen und nach GitHub übertragen.
3. In Discourse das Git-Theme aktualisieren.
4. Kategorienübersicht, Aktuell, Neu und Heiß sowie Light/Dark prüfen.

**Hinweis:** Discourse kann den lokal vergebenen Anzeigenamen eines bereits installierten Themes beibehalten. In `about.json` sind der Name `aForum Alpha 21` und die Version `alpha-21` hinterlegt; bei Bedarf den Anzeigenamen in der Discourse-Administration anpassen.

## Theme-Komponenten

Das Theme ist das **Haupttheme**. Folgende Erweiterungen werden separat verwaltet und sind **nicht** Bestandteil dieses Repositories:

- **aForum Premium Sponsors:** Sponsor-Kacheln und deren Konfiguration.
- **Category Badge Styles EVO:** unabhängig konfigurierbare Kategorie-Badges.
- **Force Mobile Homepage:** mobile Startseitensteuerung, sofern installiert.

Diese Komponenten müssen bei Bedarf separat installiert und dem aktiven Theme zugewiesen sein. Das Willkommens-/Suchbanner wird ebenfalls über die jeweilige Discourse-Einrichtung verwaltet.

## Projektstruktur

| Datei | Zweck |
| --- | --- |
| `about.json` | Theme-Metadaten, Farbpaletten und SVG-Icon-Registrierung |
| `settings.yml` | Konfigurierbare Farben und Designoptionen |
| `common/color_definitions.scss` | Zentrale Farbdefinitionen |
| `common/common.scss` | Layout, Navigation, Themenlisten und Hover-Effekte |
| `javascripts/discourse/api-initializers/aforum-section-icons.js` | Icons und Markierung der Bereichsüberschriften |
| `javascripts/discourse/api-initializers/aforum-subscribe-glow.js` | Darstellung des schlichten Bronze-Abonnieren-Links; Dateiname aus Kompatibilitätsgründen beibehalten |

## Versionsverlauf

| Version | Wesentliche Änderung |
| --- | --- |
| **Alpha 21** | Rote, kantige 1-px-Hover-Kontur auch in den vollständigen Themenlisten Aktuell, Neu und Heiß |
| **Alpha 20** | Einführung der feinen roten Hover-Kontur für die aktuellen Themen auf der Kategorienseite; anschließend Eckenradius auf 0 gesetzt |
| **Alpha 19** | Dezenter, palettenbasierter Dark-Mode-Feinschliff für Zeilenflächen und Lesbarkeit |
| **Alpha 18** | Rückkehr zur nativen Discourse-Navigation; Discourse-konforme SVG-Icon-Registrierung |
| **Alpha 17** | Zwischenstand mit eigener „Mehr“-Navigation, später wieder entfernt |
| **Alpha 16** | Zwischenstand mit angepasster Sidebar, später wieder entfernt |
| **Alpha 14** | Bereinigung der Metadaten und Dokumentation |
| **Alpha 13** | Verbesserte Erkennung der Bereichsüberschriften |
| **Alpha 12** | Überarbeitete Erkennung der rechten Kopfzeile |
| **Alpha 11** | Anpassungen an Icons und Schriftgrößen |
| **Alpha 10** | Bronze-Abonnieren-Link sowie blaue und rote Bereichsakzente |

## Hinweise

Die tatsächliche Darstellung hängt von der verwendeten Discourse-Version, den aktiven Farbpaletten und weiteren Theme-Komponenten ab. Besonders nach Updates sollten Kategorienübersicht, Themenlisten, Mobilansicht und beide Farbmodi geprüft werden.

**Projekt:** [aForum.net](https://aforum.net) · Entwickelt und erprobt für die Aprilia-Community.
