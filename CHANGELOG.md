# Versionsgeschichte

Die folgende Übersicht beschreibt die wesentlichen Entwicklungsschritte. Die vollständige Historie einschließlich einzelner Korrekturen steht in den [Git-Commits](https://github.com/ff4f-git/aForum-Theme/commits/main/).

## Beta 1.54

- Banner und Neues-Thema-Icon-Button der Zwischenansicht auf 600–699 px erweitert.
- Keine Aenderungen an Themenkarten und Smartphone-Hochkantansicht.

## Beta 1.53

- Nachgeladene Themenlisten: MutationObserver am stabilen document.body statt am austauschbaren #main-outlet.
- Hover- und Fokus-Ereignisse werden zentral am document abgefangen; dadurch erhalten auch später hinzugefügte Themenzeilen ihre Badgefarbe.
- DOM-Aktualisierungen pro Animationsframe gebündelt, bestehende Kategorie-Kacheln und Layout unverändert.

## Beta 1.52

- Die Hover-Farbübertragung für Themenkarten in den bereits funktionierenden Kategorie-Initializer integriert.
- Den separaten, offenbar nicht zuverlässig gestarteten Themenfarben-Initializer entfernt, um doppelte Logik zu vermeiden.
- Farben werden beim Laden, nach DOM-Nachladen, beim Hover und bei Tastaturfokus direkt aus dem Discourse-Badge übernommen.
- Keine Änderungen an Karten, Abständen, Typografie oder Hover-Geometrie.

## Beta 1.51

- Fehler bei nachträglich aktualisierten Kategorie-Badgefarben behoben: Themenzeilen synchronisieren die echte Discourse-Farbe zusätzlich unmittelbar beim Hover und Tastaturfokus.
- Veraltete feste Kategorie-Farbzuordnungen aus den Desktop- und 700–767-px-Hoverregeln entfernt.
- Kartenlayout, Abstände, Typografie und 3-px-Hoverstreifen unverändert.

## Beta 1.50

- Hoverfarben der Themenkarten auf der Startseite und in Aktuell/Neu/Heiß (ab 700 px) lesen die aktuelle Farbe direkt aus dem Discourse-Kategorie-Badge.
- Änderungen an Kategoriefarben und neu angelegte Kategorien brauchen keine feste Zuordnung im Theme mehr.
- Seitenwechsel und nachgeladene Themen werden berücksichtigt; Layout, Typografie und Abstände bleiben unverändert.

## Beta 1.49

- Zwischenansicht 700–767 px: Aktuell, Neu und Heiß erhalten einzelne Themenkarten mit 10 px Abstand und 3 px Eckenradius.
- Titel auf 18 px und Kategoriezeile auf 13 px abgestimmt.
- Hoverstreifen übernimmt die Kategoriezuordnung (u. a. Stammtisch blau, Biete grün, Bilder/Umbau violett) statt pauschal rot.
- Native Tabellenstruktur, Besuchstrenner, Avatare, Antwortzahlen und andere Ansichten bleiben erhalten.

## Beta 1.48

- Zwischenansicht 700–767 px: Thementitel in der rechten „Aktuell“-Spalte auf 18 px und 1,3 Zeilenhöhe abgestimmt.
- Kategoriezeile auf 13 px und 1,3 Zeilenhöhe reduziert.
- Avatare, Antwortzahlen, Kartenabstand (10 px), Hoverfarben und alle anderen Ansichten unverändert.

## Beta 1.47

- Willkommensbanner bei 700–767 px: Begrüßung und Untertitel linksbündig statt zentriert.
- Begrüßungsschrift in der Zwischenansicht verkleinert, um die Überschneidung mit dem Motorrad zu verringern.
- Suchleiste links ausgerichtet und auf 62 % Bannerbreite begrenzt.
- Hintergrundbild, Navigation, Desktop ab 768 px und schmalere Mobilansichten unverändert.

## Beta 1.46

- Zwischenansicht 700–767 px: zusätzliches vertikales Padding der älteren Mobile-Navigationsregel entfernt.
- Höhe der schwarzen Navigationsleiste an Desktop angepasst; roter Icon-Button und dessen 2-px-Überstand bleiben unverändert.
- Keine Änderungen an Menüelementen, Kategorien, Themenkarten oder anderen Breakpoints.

## Beta 1.45

- Zwischenansicht 700–767 px: „Neues Thema“ als 52-px-Icon-Button mit zentriertem Symbol, 3-px-Radius und 2-px-Überstand.
- Rechte „Aktuell“-Spalte: einzelne Themenkarten mit 10-px-Abstand, dezentem Rahmen und Kategorie-Hoverfarbe; rote Kopf-Unterstreichung entfernt.
- Navigationselemente, Antwortzahlen, Desktop ab 768 px und kleinere Mobilansichten bleiben unangetastet.

## Beta 1.44

- Schmale Zwischenansicht (700–767 px): Kategorie-Icons wieder 44 × 44 px mit Kategorie-Farbvariable und 3-px-Ecken.
- Linke Kategorien als neutrale Karten; Unterkategorien einspaltig mit dezenten Rahmen statt dauerhafter farbiger Seitenstreifen.
- Sowohl Tabellen- als auch mobile Kategorie-Struktur gezielt berücksichtigt; Navigation, rechte Themenliste und Banner unverändert.

## Beta 1.43

- Schmaler Desktop (768–979 px): Roter Icon-Button wieder mit 2 px Überstand oben und unten (insgesamt 4 px), passend zur Desktop-CTA.
- Buttonbreite auf 52 px angepasst, damit die kompakte Schaltfläche weiterhin annähernd quadratisch bleibt; Icon-Zentrierung erhalten.

## Beta 1.42

- Schmaler Desktop (768–979 px): Standardabstand des Icons im kompakten „Neues Thema“-Button entfernt, damit es trotz ausgeblendeter Beschriftung mittig sitzt.
- Quadratische 48-px-Schaltfläche und Mobilansicht bleiben unverändert.

## Beta 1.41

- Schmaler Desktop (768–979 px): Der kompakte „Neues Thema“-Icon-Button ist jetzt exakt 48 × 48 px statt höher als breit.
- Der 2-px-Überstand des großen Buttons wird nur in diesem Breitenbereich zurückgenommen; übrige Ansichten unverändert.

## Beta 1.40

- Desktop 768–979 px: Unterkategorien wechseln von zwei auf eine Kachelspalte, bevor Bezeichnungen unschön umbrechen.
- Desktop 768–979 px: „Neues Thema“ bleibt als roter, 48 px breiter Icon-Button erhalten; nur die sichtbare Beschriftung wird ausgeblendet.
- Die zwei Hauptspalten, Admin-Werkzeuge und die Discourse-Mobilansicht bleiben unverändert. Kein JavaScript.

## Beta 1.39

- Desktop: „Neues Thema“ als wichtigste Aktion dezent betont – 2 px Überstand oben und unten, 3-px-Ecken und leichter Schatten.
- Keine Änderungen an Navigationstabs, Werkzeugen, JavaScript oder Mobilansicht.

## Beta 1.38

- Rückbau der optischen Navigationsänderungen aus Beta 1.37: ursprüngliche klare Tab-Markierung, Abstände und Button-Darstellung wiederhergestellt.
- Keine Änderungen an Themenkarten, Banner, Werbung, JavaScript oder Mobilansicht.

## Beta 1.37

- Desktop-Navigation optisch verfeinert: dezente untere Kontur, 3-px-Tab-Ecken, etwas mehr Tab-Innenabstand und zurückhaltende Hoverfarben.
- „Neues Thema“ mit 8 px Abstand, 3-px-Ecken und leichtem Schatten als eigenständige Aktion betont.
- Keine Änderung an Anordnung, Funktionen, Admin-Werkzeugen, JavaScript oder Mobilansicht.

## Beta 1.36

- Desktop-Themenkarten: 3-px-Hoverstreifen links in der Kategoriefarbe (u. a. Stammtisch blau, Biete grün, Boxengasse rot, RSV4/Tuono violett).
- CSS-only mit vorhandenen Discourse-Kategorieklassen; unbekannte Kategorien verwenden die Akzentfarbe.
- Tabellenstruktur, Markierung „letzter Besuch“, Mobilansicht und JavaScript unverändert.

## Beta 1.35

- Desktop: Themenzeilen der vollständigen Themenliste als dezente Karten mit 10 px Abstand, 3-px-Ecken, Rahmen und mehr Innenabstand.
- Tabellenstruktur, Avatarspalten, Zähler, Sortierung, Lesestatus und „letzter Besuch“ bleiben unverändert.
- Noch keine neuen Kategorie-Hoverfarben; Mobilansicht und JavaScript unverändert.

## Beta 1.34

- Desktop-Willkommensbanner: Suchfeldbreite von 55 % auf 48 % reduziert.
- Ausrichtung, Hintergrundbild, Bannerhöhe, Kontur und Mobilansicht unverändert.

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
