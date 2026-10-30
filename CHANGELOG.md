# Versionsgeschichte

Die folgende Übersicht beschreibt die wesentlichen Entwicklungsschritte. Die vollständige Historie einschließlich einzelner Korrekturen steht in den [Git-Commits](https://github.com/ff4f-git/aForum-Theme/commits/main/).

## Beta 1.33

- Desktop-Willkommensbanner: Begrüßung und Untertitel linksbündig mit 32 px Innenabstand.
- Suchfeld linksbündig mit 55 % Bannerbreite; Suchfunktion unverändert.
- Hintergrundbild, Bannerhöhe, rote Kontur und Mobilansicht bleiben unverändert.

## Beta 1.32

- Desktop-Startseite: Hauptkategorie-Icon-Kacheln links von 36 × 36 auf 44 × 44 px vergrößert, bei unveränderter Symbolgröße.
- Kategorie-Farben, weiße Icons, 3-px-Ecken, Unterkategorien, rechte Themenliste und Mobilansicht bleiben unverändert.

## Beta 1.31

- Desktop-Startseite: vorhandene Discourse-Benutzeravatare in der rechten Spalte „Aktuell“ von 48 × 48 auf 52 × 52 px vergrößert.
- Kartenlayout, Kategorie-Hoverfarben, Titelstatus, Antwortzahlen und Mobilansicht unverändert.

## Beta 1.30

- Desktop-Spalte „Aktuell“: CSS-Hoverfarben für die zusätzlich verifizierten Kategorien Technik | Hilfe, Newsletter, Wiki, Guzzi-Diag, Benzingespräche und Bilder | Umbau ergänzt.
- Zuordnung anhand der tatsächlichen Discourse-Kategorieklassen und -IDs aus der Browserkonsole; vorhandene Kategorie-Farbvariablen mit den gemessenen Farben als Fallback.
- Stammtisch und Biete bleiben erhalten. Unbekannte Kategorien behalten den bisherigen Hover-Akzent. Kein JavaScript und keine Änderungen an der Mobilansicht.

## Beta 1.29

- CSS-only: Der 3-px-Hover-Streifen in der Desktop-Spalte „Aktuell“ folgt bei den bestätigten Themenkategorien Stammtisch (Discourse-Kategoriefarbe) und Biete (grüne Theme-Erfolgsfarbe) ihrer Kategorie.
- Keine neue JavaScript-Datei; unbekannte Kategorien behalten vorerst den bisherigen Akzent. Weitere Zuordnungen benötigen bestätigte Kategorie-IDs.
- Mobilansicht, Normalzustand und Kartenlayout bleiben unverändert.

## Beta 1.28

- Desktop-Unterkategorien: deutlich sichtbarer Hover mit Kategoriefarb-Tönung, farbigem Rahmen und Pointer-Cursor.
- Tastaturfokus erhält zusätzlich eine gut sichtbare Kontur; Light/Dark nutzen dieselben Theme-Farbvariablen.
- Normalzustand, 3-px-Rundung, Inhalte und Mobilansicht bleiben unverändert.

## Beta 1.27

- Desktop: roten Unterstrich unter „Aktuell“ entfernt und die Spaltenüberschriften „Kategorie / Themen“ und „Aktuell“ mit identischem neutralem Hintergrund ohne Farblinie gestaltet.
- Rahmen der Themenkarten im Normalzustand dezenter, beim Hover weiterhin erkennbar.
- Rote Flamme, Themenstatus, Antwortzahlen und sämtliche Mobilregeln bleiben unverändert.

## Beta 1.26

- Desktop: rechte Startseiten-Spalte „Aktuell“ mit einzelnen, dezent umrandeten Themenkarten und 3 px Eckenrundung.
- Mehr Innenabstand, gleichmäßige Kartenabstände und zurückhaltender Hover-Effekt.
- Titel-/Gelesen-Status, rote Antwortzahlen, Themenreihenfolge und Mobilansicht bleiben unverändert.

## Beta 1.25

- Desktop-Unterkategorien mit 48 px Mindesthöhe, etwas mehr Innenabstand und 10 px Rasterabstand luftiger gestaltet.
- Dezente Rahmen und abgestimmte Flächenfarben in Hell/Dunkel, weiterhin 3 px Eckenrundung.
- Kategorie-Farbquadrate, Hauptkarten, rechte Themenliste und sämtliche Mobilregeln unverändert.

## Beta 1.24

- Mobile Hochkant: Schloss-Icons aus der farbigen Kategorie-Kachel ausgenommen und wieder klein/grau dargestellt.
- Kategorie-Kopf und Unterkategorie-Abstände verdichtet, ohne die 44-px-Touch-Ziele zu reduzieren.
- Reihenfolge Kategorie → drei Themen → Unterkategorien und Desktop-Layout unverändert.

## Beta 1.23

- Mobile Hochkant-Kategorien an das Kartenlayout angeglichen: dezente Rahmen, 3 px Radius und konsistente Abstände.
- Mobile Unterkategorien erhalten ruhige Kacheln ohne Seitenstreifen; einspaltiges Raster und 44-px-Touch-Ziele bleiben erhalten.
- Mobile Kategorie-Symbole erhalten weiße Icons auf Kategoriefarbe, sofern die native Discourse-Farbvariable verfügbar ist.
- Themenzeilen und Landscape-Sonderlayout bleiben in ihrer Geometrie unverändert.

## Beta 1.22

- Behebt graue Hauptkategorie-Icon-Kacheln: Die Kategoriefarbe bleibt als CSS-Border-Farbe erhalten, obwohl der sichtbare Seitenstreifen ausgeblendet ist.
- Icon-Kacheln verwenden dadurch wieder die jeweilige Discourse-Kategoriefarbe in Hell und Dunkel.

## Beta 1.21

- Linke Desktop-Kategoriespalte in eigenständige, dezent umrandete Karten gegliedert.
- Icon, Titel, Beschreibung und Themenanzahl als zusammenhängender Kopfbereich mit abgestimmten Abständen.
- Unterkategorien als ruhige, leicht abgesetzte Flächen ohne dominante Seitenstreifen, mit 3 px Eckenrundung.
- Mobile-Sonderlayout und rechte Themenliste bleiben unverändert.

## Beta 1.2

- Native Hauptkategorie-Symbole als 36 × 36 px große Farbkacheln mit 3 px Eckenrundung und weißem Icon.
- Kachelfarbe wird aus dem vorhandenen Kategoriefarb-Streifen übernommen; keine manuelle Farbliste.
- Unterkategorien, Schloss-Symbole, Themenlisten und Navigation bleiben unverändert.

## Beta 1.1

- Theme-Einstellungen nach dem KISS-Prinzip bereinigt und auf ausgewählte Funktionen konzentriert.
- Schatten, Desktop-Headerhöhe, Avatar-Radius und Navigationsleistenhöhe einstellbar.
- Banner-Untertitelfarben getrennt für Hell und Dunkel.
- Navigationshintergrund abschaltbar und je Farbmodus mit eigener HEX-Farbe.
- Alten Schalter zum Ausblenden der Sidebar-Kategorien entfernt.
- Themenlisten verwenden einheitlich einen linken roten Hover-Streifen mit 3 px Breite und `#FF0000`.
- Projektdokumentation neu aufgebaut und um einen Screenshot der öffentlichen Startseite ergänzt.

## Beta 1

- Überkategorie-Titel auf der Kategorien-Startansicht optional für Mausklicks sperrbar.
- Eigene Einstellung `lock_parent_category_links`.
- Selektoren für die tatsächliche Desktop- und mobile Titelstruktur korrigiert.
- Kategorie-Berechtigungen und Unterkategorie-Links bleiben unverändert.

## Alpha 44–51 · Typografie und Feinschliff

- Inter für Lesetexte, Thementitel und Beschreibungen.
- Vertikal ausgerichtete Unterkategorie-Beschriftungen.
- Kompakter, gerader und bündiger Desktop-Button „Neues Thema“.
- Kräftigerer Kontrast für Beitragsaktionen und Zeitleiste im Light Mode.
- Gerade Beschriftung des unteren Antworten-Buttons.
- Linker roter Hover-Streifen für „Aktuell“ auf der Startseite.

## Alpha 29–43 · Responsive Unterkategorien

- Einführung des abschaltbaren Unterkategorie-Kachelmodus.
- Flexible Spalten und Anpassungen an die Discourse-Tabellenstruktur.
- Einspaltige Kacheln und kompakter Neuer-Thema-Button im Smartphone-Querformat.
- Eigene Gestaltung der mobilen Hochkant-Kategorienansicht: Themen vor Unterkategorien.
- Mehrere aufeinanderfolgende Korrekturen an mobilen Breiten und Themenzeilen.

## Frühere Alpha-Versionen · Grundlage

- Native Discourse-Navigation als Basis.
- Schwarzer Header, Markenblau und rote Bereichsakzente.
- Helle und dunkle Farbpaletten.
- Gestaltung von Bereichsüberschriften, Banner-Akzenten und Themenlisten.

Frühere Änderungsnotizen dokumentierten auch Zwischenstände und später ersetzte Ansätze. Für den aktuellen Funktionsumfang und die gültigen Einstellungen gilt die [README](README.md).
