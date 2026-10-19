# aForum – Discourse-Theme (alpha-1)

Helles, flaches, eckiges Design: eine weiße Forenfläche mit Schatten auf hellgrauem Grund, schwarze Kopfzeile, rote Navigationsleiste, Kategorien als Kachelreihe. Dunkler Modus ist enthalten.

## Farbrollen

| Rolle | Standard | Wofür |
| --- | --- | --- |
| Akzent | Rot `#ff0000` | Hauptbuttons, Navigationsleiste, Antwortzahlen, aktiver Sidebar-Eintrag, Unterstreichung aktiver Tabs |
| Link | Blau `#0e76bd` | Textlinks |
| Flächen | Schwarz, Weiß, Hellgrau | Kopfzeile, Forenfläche, Seitenhintergrund |

Drei Ebenen: Farbpalette (`about.json`) → Theme-Einstellungen (`settings.yml`, leer = Wert aus der Palette) → CSS-Variablen `--af-*`. Im SCSS stehen keine festen Farben.

## Installation

1. Alle Dateien ins Hauptverzeichnis eines GitHub-Repositorys legen.
2. Admin → Darstellung → Themes & Komponenten → Installieren → „Aus einem Git-Repository“.
3. Das Theme nicht sofort zum Standard machen, sondern in der **Vorschau** testen. Dein altes Theme bleibt bis dahin unberührt.
4. Palette zuweisen: „aForum Hell“ als helles, „aForum Dunkel“ als dunkles Farbschema des Themes.

## Das stellst du in Discourse selbst ein

- **Kategorien-Seitenstil** auf die Variante mit Boxen stellen (Admin → Einstellungen, nach „Kategorienseite“ bzw. „category page style“ suchen). Ohne diese Einstellung greift das Kachel-Layout nicht.
- **Kachelbilder:** je Kategorie als Logo hochladen, quadratisch. Kategorien ohne Bild zeigen eine graue Platzhalterkachel.
- **Logo und Schrift:** über die Discourse-Einstellungen, das Theme setzt nichts davon fest.
- **Hero-Banner:** bleibt deine eigene Komponente.

## Grenzen von alpha-1

- Nicht gegen eine laufende Discourse-Instanz getestet. Einige Selektoren (Kopfzeile, Navigationsleiste, Kategorieboxen) beruhen auf dem bekannten Aufbau von Discourse und können in deiner Version leicht abweichen.
- Die rote Leiste ist die Navigationszeile der Seite. Auf Seiten ohne diese Zeile (z. B. Profil) gibt es sie nicht.
- Das Zusammenspiel mit dem Hero-Banner ist ungeprüft.
