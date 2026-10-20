# aForum – Discourse-Theme (alpha-8)

Helles, flaches, eckiges Design: schwarze Kopfzeile in voller Breite, darunter eine weiße Forenfläche mit Schatten auf hellgrauem Grund, schwarze Navigationsleiste mit blauem aktivem Tab, roter Hauptbutton, Kategorien als Kachelreihe. Dunkler Modus ist enthalten.

## Farbrollen

| Rolle | Standard | Wofür |
| --- | --- | --- |
| Akzent | Rot `#ff0000` | Hauptbutton „Neues Thema“, Antwortzahlen, aktiver Sidebar-Eintrag, übrige Hauptbuttons |
| Aktiver Tab | Aprilia-Blau `#0e76bd` | Aktueller Eintrag in der schwarzen Navigationsleiste |
| Link | Aprilia-Blau `#0e76bd` | Textlinks |
| Flächen | Schwarz, Weiß, Hellgrau | Kopfzeile, Forenfläche, Seitenhintergrund |

Drei Ebenen: Farbpalette (`about.json`) → Theme-Einstellungen (`settings.yml`, leer = Wert aus der Palette) → CSS-Variablen `--af-*`. Im SCSS stehen keine festen Farben.

## Installation und Update

1. Alle Dateien ins **Hauptverzeichnis** des Repositorys legen (nicht in einen Unterordner).
2. Admin → Darstellung → Themes & Komponenten → Installieren → „Aus einem Git-Repository“.
3. Zuerst über „Vorschau“ testen. Spätere Änderungen: Dateien in GitHub ersetzen, im Theme auf Updates prüfen.
4. Palette zuweisen: „aForum Hell“ als helles, „aForum Dunkel“ als dunkles Farbschema.

## Das stellst du in Discourse selbst ein

- **Kategorien-Seitenstil** auf die Variante mit Boxen (Admin → Einstellungen, nach „Kategorienseite“ suchen). Ohne diese Einstellung greift das Kachel-Layout nicht.
- **Kachelbilder:** je Kategorie als Logo hochladen, quadratisch. Ohne Bild gibt es eine graue Platzhalterkachel.
- **Logo und Schrift:** über die Discourse-Einstellungen.

## Komponenten des alten Themes

Komponenten hängen an einem Theme und werden nicht automatisch ins neue übernommen. Was im alten Theme als Komponente lief (z. B. Hero-Banner, Dark-Mode-Umschalter), musst du dem neuen Theme zuweisen: Admin → Darstellung → Themes & Komponenten → aForum → Komponenten → hinzufügen.

## Banner

Der Hero-Banner ist deine eigene Komponente. Zwei Dinge dazu:

1. **Schatten:** Trage in der Theme-Einstellung `banner_selector` den CSS-Namen des Banners ein. So findest du ihn: Auf der Startseite Rechtsklick auf den Banner → „Untersuchen“ → in der markierten Zeile steht `class="…"`. Daraus wird der Selektor, z. B. `.hero-banner`. Mehrere Klassen schreibst du ohne Leerzeichen mit Punkten: `.a.b`.
2. **Position:** Der Banner soll unter der roten Leiste liegen. Das legt die Komponente fest, nicht das Theme. Schau in ihren Einstellungen nach einer Auswahl für die Position (Plugin-Outlet). Ein Ort, der nach der Navigationsleiste kommt, wäre richtig.

## Grenzen von alpha-8

- Kategorien: Die Liste zeigt je Kategorie Name, Beschreibung, Themenzahl und Unterkategorien. Letzter Beitrag und Beitragszahl je Kategorie lassen sich mit reinem CSS nicht ergänzen.
- Nicht gegen eine laufende Discourse-Instanz getestet, Selektoren können in deiner Version abweichen.
- Die rote Leiste sitzt in der Inhaltsspalte rechts neben der Sidebar, nicht über deren gesamter Breite.
- Die Leiste existiert nur auf Seiten mit Navigationszeile (Startseite, Listen), nicht im Profil oder in Themen.
