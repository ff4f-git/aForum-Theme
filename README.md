# aForum · Alpha 34

**Ein eigenständiges Discourse-Haupttheme für [aForum.net](https://aforum.net) – die Aprilia-Community.**

Alpha 34 verbindet eine klassische, übersichtliche Forenansicht mit einer eigenständigen aForum-Gestaltung. Der Schwerpunkt liegt auf klarer Navigation, gut lesbaren Themenlisten und einer konsistenten Darstellung in hellen und dunklen Farbpaletten.

## Einheitliches Markenblau

Als zentraler Blauton wird jetzt **`#0F7EC9`** aus dem aForum-Logo verwendet. Das gilt für die mitgelieferten hellen und dunklen Farbpaletten (Tertiärfarbe), den aktiven Kategorien-Tab, die blaue Bereichslinie und das Listen-Icon sowie den Slogan im Willkommensbanner, sofern kein individueller Farbwert eingetragen ist. Bestehende manuelle Farbeinstellungen in Discourse haben weiterhin Vorrang.

**Wichtig:** Die Farbe der Kategorie **Community** und anderer Kategorie-Badges wird separat in den jeweiligen Discourse-Kategorieeinstellungen gepflegt und nicht durch das Theme überschrieben. Für Community dort `#0F7EC9` einstellen. Das Logo selbst ist eine Bilddatei und bleibt unverändert.

## Alpha 34: Smartphone-Querformat

- Bei Querformat auf kleinen Bildschirmen (max. 1200 px breit und max. 600 px hoch) stehen Unterkategorie-Kacheln in einer Spalte.
- Der Button „Neues Thema“ wird in dieser Ansicht auf ein kompaktes Symbol reduziert.
- Kategorien und Aktuell werden untereinander angeordnet.
- Desktop bleibt unverändert. Die Hochkantansicht nutzt möglicherweise anderes Discourse-Markup; ohne DOM-Nachweis können dort fehlende Unterkategorien nicht per CSS ergänzt werden.

## Alpha 33: responsive Kacheln in voller Breite

- Die Kategorietabelle und ihr Tabellenkörper werden im aktivierten Kachelmodus als Block dargestellt, damit die Zeilen nicht länger auf die alte Themen-Spaltenbreite begrenzt sind.
- Desktop: zwei flexible, gleich breite Kachelspalten; unter 768 px: eine Kachelspalte über die volle verfügbare Breite.
- Themenzahl bleibt oben rechts, Tabellenkopf bleibt sichtbar; CSS gilt nur für `.categories-and-latest` bei aktivierten Kacheln.
- Nach Update bitte Desktop, Mobilansicht, Tabellenkopf und den Ein-/Ausschalter prüfen.

## Alpha 32: Korrektur anhand der echten Discourse-Struktur

- Die tatsächlich verwendete Kategoriezeile ist `tr.has-description.no-logo` mit `td.category` und `td.topics`; Alpha 31 hatte irrtümlich `tr.category-list-item` angenommen.
- Die volle Zeilenbreite wird nun über den vorhandenen Kategorie-Tabellenkörper und die realen Zellen hergestellt; die Themenanzahl wird rechts oben platziert.
- Die Regel greift nur bei aktivierten Unterkategorie-Kacheln und vorhandener `.subcategories`-Struktur.
- Bitte nach dem Update besonders den Themenzähler, den rechten Rand der Kacheln sowie Mobilansicht prüfen.

## Alpha 31: volle Breite der Unterkategorie-Kacheln

- Nur auf der Startseite mit Kategorien links und Aktuell rechts nehmen die Unterkategorie-Kacheln die volle Breite der linken Kategoriezeile ein, auch unterhalb der Themenanzahl.
- Themenanzahl bleibt rechts oben; der Kategorietitel erhält Abstand zum Zähler.
- Nur aktiv, wenn `subcategory_tiles` eingeschaltet ist. Bei ausgeschaltetem Modus bleibt das Tabellenlayout unverändert.
- Nach Git-Update bitte die Darstellung in Discourse auf Desktop und Mobilgeräten prüfen; die Tabellenzellen werden gezielt für diese Ansicht umgestellt.

## Alpha 30: Unterkategorie-Kacheln mit Feinschliff

- Zwei gleich breite, flexible Kachelspalten füllen die Kategorie-Zelle aus, ohne die Themenanzahl-Spalte zu beanspruchen.
- Lange Unterkategorienamen dürfen umbrechen statt abgeschnitten zu werden.
- Neue Theme-Einstellung `subcategory_tiles` (Standard: aktiv) schaltet zwischen Kacheln und kompakten Textlinks um.
- Bei deaktivierten Kacheln greifen wieder die vorhandenen festen Spaltenbreiten (`subcategory_column_width`).
- Die Farblinien und der Hover-Effekt bleiben erhalten.

## Alpha 29: Unterkategorie-Kacheln

- Gleich große, kantige Link-Kacheln mit dezentem Hintergrund und Hover-/Fokuszustand.
- Die linke Farblinie übernimmt die echte Kategoriefarbe aus der Kategorienliste; kein manuelles Farbmapping.
- Zwei Spalten auf Desktop (bestehende Einstellungen), eine auf schmalen Bildschirmen.
- Umsetzung in `common/common.scss` und `javascripts/discourse/api-initializers/aforum-subcategory-tiles.js`.
- Nach Theme-Update Desktop, Mobilgeräte und beide Farbmodi prüfen; insbesondere die tatsächliche Discourse-DOM-Struktur.

## Highlights

- **Klassische Kategorienübersicht:** Kategorien links, aktuelle Themen rechts. Statuszähler „neu“ und „ungelesen“ werden nur neben Unterkategorien in der Kategorienliste ausgeblendet, damit deren Namen lesbar bleiben.
- **Klare Navigation:** Kategorien, Aktuell, Neu und Heiß mit markiertem aktivem Bereich. Die Kopfzeilen der vollständigen Themenlisten erhalten eine 3-px-Linie im aForum-Blau `#0F7EC9`, passend zur Kategorienübersicht.
- **aForum-Akzente:** schwarzer Header, blaue Navigationsmarkierung, rote Akzentlinie und auffälliger „Neues Thema“-Button.
- **Dezenter Hover-Rahmen:** 1 px rote Innenkontur (`#d81c1c`) für Themenzeilen rechts auf der Kategorienseite sowie in den Listen **Aktuell**, **Neu** und **Heiß**. Kantige Ecken (`border-radius: 0`), 180 ms Übergang, keine Layoutverschiebung.
- **Willkommensbanner:** Slogan „Die Aprilia Community von Biker für Biker“ in aForum-Blau (`#0F7EC9`); Begrüßung, Suchfeld und Hintergrund bleiben unverändert. Der Banner wird weiterhin von einer separaten Komponente bereitgestellt. Eine dauerhaft sichtbare, kantige 1-px-Kontur in Sponsorenrot (`#d81c1c`) fasst ihn ein. Beide Farben sind ab Alpha 25 je Farbmodus über die Theme-Einstellungen anpassbar.
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

**Hinweis:** Discourse kann den lokal vergebenen Anzeigenamen eines bereits installierten Themes beibehalten. In `about.json` sind der Name `aForum Alpha 29` und die Version `alpha-29` hinterlegt; bei Bedarf den Anzeigenamen in der Discourse-Administration anpassen.

## Bannerfarben einstellen

Unter **Admin → Erscheinungsbild → Themes & Komponenten → aForum Alpha 28 → Einstellungen** stehen vier zusätzliche Textfelder bereit:

| Einstellung | Standard, wenn leer |
| --- | --- |
| Sloganfarbe Hell | `#0F7EC9` |
| Sloganfarbe Dunkel | `#0F7EC9` |
| Bannerrahmen Hell | `#d81c1c` |
| Bannerrahmen Dunkel | `#d81c1c` |

Eine gewünschte Farbe als **Hexwert mit `#`** eingeben, zum Beispiel `#0088cc`. **Leere Felder** behalten die bisherige aForum-Farbe bei. Die Werte werden für die jeweilige helle oder dunkle Farbpalette separat verwendet. Rahmenstärke (1 px), eckige Kanten (0 px) und Layout bleiben unverändert. Ungültige Farbwerte vermeiden.

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
| **Alpha 28** | Blendet Neu-/Ungelesen-Zähler bei Unterkategorien in der Kategorienübersicht aus; Themenlisten und übrige Benachrichtigungen bleiben unverändert |
| **Alpha 27** | Blaue Trennlinie unter den Tabellenkopfzeilen in Aktuell, Neu und Heiß, passend zur Kategorienübersicht |
| **Alpha 25** | Vereinheitlichung der Theme-Blautöne auf das Logoblau `#0F7EC9` |
| **Alpha 24** | Vier optionale Hex-Farbwerte für Slogan und Bannerrahmen, separat für Hell und Dunkel; leer = bisheriger Standard |
| **Alpha 23** | Dauerhafte 1-px-Rotkontur um den Willkommensbanner, eckig und ohne Layoutverschiebung |
| **Alpha 22** | Blaue Unterzeile im Willkommensbanner, gezielt über `.welcome-banner__subheader` |
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


### Alpha 27

- Harmonisiert Hover-, Fokus- und Aktivzustände im Hamburger-Menü und in der Sidebar.
- Verhindert einen hellen aktiven Menühintergrund im Dunkelmodus und erhält die rote aktive Markierung.
- Verwendet die vorhandene Theme-Farbvariable `--af-hover` statt zusätzlicher externer CSS-Overrides.

### Alpha 28

- Ergänzt in `common/common.scss` eine auf `.category-list .subcategory` begrenzte CSS-Regel für `.badge-notification`, `.unread-new` und `.category-unread`.
- Unterkategorienamen sollen dadurch nicht mehr von Statusangaben wie „1 ungelesenes“ und „2 neue“ verdrängt werden.
- Keine Änderung an Discourse-Einstellungen, JavaScript, Themenstatus oder der Anzeige außerhalb der Kategorienliste.
- Nach Installation mit einem Benutzerkonto mit neuen/ungelesenen Unterkategorie-Themen auf Desktop und Mobilgerät prüfen; je nach Discourse-Version können zusätzliche CSS-Klassen relevant sein.
