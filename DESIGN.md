---
name: Mal-Dach
description: Mycie i malowanie dachów i elewacji, prace na wysokości. Standard kategorii zrobiony czysto i uczciwie.
colors:
  ink: "#16212b"
  ink-soft: "#3b4752"
  ink-raised: "#24323e"
  night: "#16212b"
  night-soft: "#b9c4cd"
  paper: "#ffffff"
  mist: "#eef1f3"
  line: "#d5dbe0"
  brand: "#fc3030"
  accent: "#d91f26"
  accent-hover: "#b5161d"
  error: "#b42318"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "\"wdth\" 72"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "\"wdth\" 72"
  numeral:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 1
    fontVariation: "\"wdth\" 72"
  title-display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.005em"
    fontVariation: "\"wdth\" 72"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.556
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.1
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
rounded:
  focus: "2px"
  caption: "4px"
  card: "6px"
  pill: "999px"
spacing:
  gutter: "1.25rem"
  chip-gap: "0.5rem"
  field-gap: "0.75rem"
  card: "1.5rem"
  grid: "1.5rem"
  panel: "2rem"
  panel-lg: "2.5rem"
  block: "2.5rem"
  heading-to-content: "3rem"
  section: "5rem"
  section-lg: "7rem"
components:
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-accent-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.paper}"
  button-accent-lg:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "1rem 1.9rem"
    height: "3.75rem"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  button-ink-hover:
    backgroundColor: "{colors.ink-raised}"
    textColor: "{colors.paper}"
  button-ghost:
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.6rem"
    height: "3.25rem"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.7rem 0.9rem"
    height: "3rem"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.8rem"
    height: "2.25rem"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  card-service:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  panel-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.card}"
    padding: "{spacing.panel}"
  panel-quote-form:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  nav-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "4.5rem"
  photo-caption:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.caption}"
    padding: "0.5rem 0.75rem"
---

# Design System: Mal-Dach

## Overview

**Creative North Star: "Czysta robota"**

Mal-Dach wygląda jak firma dekarska, którą właściciel domu rozpoznaje w sekundę: białe tło, duże zdjęcia dachów, ciemny granat, jeden czerwony przycisk do dzwonienia w kolorze logo. Siła nie leży w odmienności, tylko w wykonaniu. Każdy element ma porządne wykończenie, równe odstępy i jedną funkcję. To strona, która robi to samo co konkurencja, ale czyściej i bez ściemy: bez punktorów z ptaszkami, bez dekoracyjnych ikonek, bez wymyślonych liczb i cen.

Gęstość jest umiarkowana i rytmiczna. Sekcje naprzemiennie białe, chłodno-szare i granatowe, każda z jednym wersalikowym nagłówkiem w wąskim Archivo i treścią w zwykłej szerokości tego samego kroju. Dowodem są zdjęcia (zdjęcia realizacji, suwak przed/po), a nie ozdobniki. Ruch jest oszczędny: elementy raz wchodzą przy pierwszym pokazaniu, a jedynym autorskim momentem jest suwak przed/po, który sam raz się przeciąga, żeby pokazać, że da się nim ruszać.

Zakres: kierunek „standard kategorii” (canon) użytkownik wybrał wyłącznie dla strony głównej (`makieta/index.html`). To decyzja dla tej powierzchni, nie stała preferencja marki; kolejne powierzchnie mogą dziedziczyć tokeny i komponenty, ale wybór formy dla nich jest otwarty. Docelowo system przechodzi 1:1 do motywu WordPress z Tailwind CSS (tokeny z bloku `@theme`).

**Key Characteristics:**
- Biel, chłodna mgła i granat-antracyt; jedna czerwień z logo zarezerwowana dla akcji.
- Jeden krój (Archivo, zmienne osie): wąski wersalik w nagłówkach, normalna szerokość w tekście.
- Przyciski-pigułki, karty i zdjęcia z łagodnym promieniem 6px.
- Płasko na co dzień; cień tylko tam, gdzie coś leży nad zdjęciem lub nad treścią.
- Telefon zawsze w zasięgu: przycisk w nawigacji, w hero, w pasie CTA i w dolnym pasku na telefonie.

## Colors

Chłodna, stonowana baza z jednym ciepłym, głośnym akcentem, który oznacza wyłącznie „zrób coś”.

### Primary
- **Czerwień Marki** (brand): czysta czerwień z logo Mal-Dach (#fc3030). Żyje w logo; nie jest tłem tekstu (zob. reguła niżej).
- **Czerwień Akcji** (accent): czerwień marki o krok ciemniejsza (#d91f26); tło przycisków „Zadzwoń” w nawigacji, hero, pasie CTA i dolnym pasku. Zawsze z białym tekstem (5,03:1). Ten sam kolor służy jako sygnał interakcji: obrys fokusu (3px), zaznaczenie tekstu, kursor tekstowy.
- **Ciemna Czerwień** (accent-hover): stan najechania przycisku akcji (#b5161d, biały tekst 6,78:1), tylko na urządzeniach z kursorem; najechanie podnosi kontrast.

### Neutral
- **Granat-Antracyt** (ink): podstawowy kolor tekstu, tło ciemnych sekcji („Jak pracujemy”, panel „Sprzęt i technika”), tło przycisku „Wyślij zapytanie” i zaznaczonych chipów. Jego wartości RGB (22 33 43) budują też granatowe przyciemnienie zdjęcia w hero.
- **Noc** (night): ten sam granat, nazwany osobno dla górnego paska i stopki. Wartość identyczna z ink.
- **Stonowany Granat** (ink-soft): tekst drugorzędny na jasnym tle: opisy usług, leady sekcji, odpowiedzi FAQ, dopiski przy etykietach.
- **Granat Podniesiony** (ink-raised): wyłącznie stan najechania przycisku granatowego.
- **Szron** (night-soft): tekst drugorzędny i linki na ciemnych sekcjach i w stopce.
- **Papier** (paper): tło strony, nawigacji, formularza wyceny, pól formularza, podpisów zdjęć.
- **Mgła** (mist): tło sekcji naprzemiennych („Przed i po”, kalkulator, pas CTA), tło kart usług i panelu „Terminowość”, tło suwaka przed załadowaniem zdjęć.
- **Linia** (line): obramowanie pól i chipów, dolna krawędź nawigacji, separatory FAQ i kalkulatora, górna krawędź dolnego paska.
- **Błąd** (error): obramowanie niepoprawnego pola i treść komunikatu błędu.

Kolory pomocnicze wpisane na sztywno w CSS, nie w `@theme`: placeholder pól (#6b7884), suwak przewijania (#9aa6b0), separatory w stopce (biel 15%).

### Named Rules
**The Red Means Action Rule.** Czerwień akcji pojawia się tylko na kontrolkach akcji (przyciski telefonu) i jako sygnał interakcji (fokus, zaznaczenie, kursor). Nigdy na nagłówkach, ikonach, liniach dekoracyjnych, tłach sekcji ani na samym tekście. Reguła wynika z poprawki po przeglądzie: drugi kolor akcji to granat, nie inny odcień czerwieni. Czerwień marki (#fc3030) zostaje w logo; na przyciskach używamy jej o krok ciemniejszej wersji.

**The White Text On Red Rule.** Na czerwieni akcji (#d91f26) zawsze biały tekst: 5,03:1. Czysta czerwień logo (#fc3030) nie przechodzi AA ani z bielą (3,75:1), ani z granatem (4,36:1), dlatego nie jest tłem tekstu.

**The Three Grounds Rule.** Sekcje stoją na jednym z trzech teł: papier, mgła albo granat. Naprzemienność tych trzech robi rytm strony; czwarte tło sekcji nie istnieje.

## Typography

**Display Font:** Archivo, wąski wariant (oś szerokości 72%), z fallbackiem ui-sans-serif, system-ui
**Body Font:** Archivo w normalnej szerokości, ten sam plik
**Label/Mono Font:** brak osobnego; etykiety to Archivo 600

**Character:** Jeden krój w dwóch rolach. Wąski, gruby wersalik brzmi jak szyld na budowie i tablica na samochodzie firmowym; normalna szerokość w tekście jest spokojna i czytelna dla każdego. Archivo jest hostowane lokalnie (OFL 1.1, osie wdth 62–125%, wght 400–800, podzbiory latin i latin-ext dla polskich znaków).

### Hierarchy
- **Display** (800, clamp(2.5rem, 5.2vw, 4.5rem), 1, wersaliki, wąski): wyłącznie H1 w hero, w dwóch liniach.
- **Headline** (800, clamp(2.25rem, 4vw, 3.5rem), 1, wersaliki, wąski): nagłówek każdej sekcji. Pas CTA dostaje nieco większy wariant clamp(2.25rem, 4.5vw, 3.75rem).
- **Numeral** (800, 3.75rem, wąski): cyfry kroków w „Jak pracujemy” i wynik kalkulatora (3rem, bez wersalików).
- **Title Display** (800, 1.5rem, wersaliki, wąski): tytuły kart usług. Większe stopnie tej samej roli: 1.75rem znak słowny w nawigacji, 1.875rem panele wyróżników i stopka, 2rem nagłówek formularza wyceny.
- **Title** (700, 1.375rem, 1.25, normalna szerokość, zdanie): podtytuły w treści: powody w „Dlaczego warto”, nazwy kroków.
- **Body Large** (400, 1.125rem): leady sekcji i zdanie w hero, szerokość 44–52ch.
- **Body** (400, 1rem, 1.6): cała reszta tekstu; maksymalnie około 70ch.
- **Button** (700, 1rem, 1.1; 1.125rem w dużym wariancie): treść przycisków.
- **Label** (600, 0.875rem): etykiety pól, legenda chipów, podpisy zdjęć, górny pasek.

Pytania FAQ i pozycje menu mobilnego używają 1.125rem w grubości 700 lub 600. Nagłówki mają `text-wrap: balance`, akapity `text-wrap: pretty`.

### Named Rules
**The Narrow Caps Rule.** Wąski wersalik (wdth 72, 800) jest zarezerwowany dla nagłówków, znaku słownego i cyfr. Tekst ciągły, etykiety i przyciski nigdy nie są wąskie ani wersalikowe.

**The One Family Rule.** Cała strona stoi na jednym kroju. Hierarchię robią szerokość, grubość i wielkość Archivo, nie drugi krój.

## Layout

Kontener ma szerokość min(100% − 2.5rem, 78rem): na telefonie 1.25rem marginesu z każdej strony, na dużym ekranie 78rem wyśrodkowane. Sekcje mają pionowy oddech 5rem, od 1024px 7rem (pas CTA i stopka 4–5rem). Od nagłówka sekcji do jej treści jest 3rem; siatki kart mają odstęp 1.5rem, układy dwukolumnowe 2.5–3rem.

Punkty przełamania to domyślne Tailwind: 640px (dwie kolumny kart, pełne przyciski przestają być na całą szerokość), 768px, 1024px (pełna nawigacja zamiast menu mobilnego, układy dwukolumnowe, dolny pasek z telefonem znika). Charakterystyczne siatki: hero `1fr | 27rem` (treść i biały formularz), sekcje z nagłówkiem po lewej `22rem | 1fr` („Przed i po”, FAQ), karty usług w siatce 6-kolumnowej (trzy po 2 kolumny, dwie po 3), realizacje w siatce 3-kolumnowej z pierwszym zdjęciem na dwa rzędy.

Pierwszy ekran (wybrany w trybie live): na górze pas zdjęcia realizacji w prawdziwych kolorach, bez przyciemnienia (26rem na desktopie, 16rem na telefonie). Pod nim na białym tle H1, zdanie, przycisk telefonu i fakty; formularz wyceny pływa po prawej i nachodzi na zdjęcie o 10rem. Na telefonie formularz schodzi pod treść hero, a od momentu przewinięcia poza hero przy dole ekranu pojawia się biały pasek z dwoma przyciskami („Zadzwoń”, „Wycena”).

### Named Rules
**The Phone Within Reach Rule.** Na każdej szerokości przycisk telefonu jest widoczny bez szukania: w nawigacji od 640px, w hero, w pasie CTA, a na telefonie i tablecie w dolnym pasku, który chowa się tylko wtedy, gdy na ekranie jest już inny przycisk telefonu.

## Elevation & Depth

System jest płaski. Głębię robią tła sekcji (papier, mgła, granat) i zdjęcia. Cień pojawia się tylko tam, gdzie element fizycznie leży nad czymś innym: biały formularz nad zdjęciem w hero, uchwyt suwaka nad zdjęciem, menu mobilne nad treścią. Cienie są miękkie i zabarwione granatem, nigdy twarde ani przesunięte.

### Shadow Vocabulary
- **Uniesienie nad zdjęciem** (`box-shadow: 0 24px 60px rgb(22 33 43 / 0.22)`): formularz wyceny w hero, nachodzący na pas zdjęcia.
- **Uchwyt** (`box-shadow: 0 4px 14px rgb(15 24 32 / 0.25)`): okrągła gałka suwaka przed/po.
- **Rozwinięcie** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`): menu mobilne pod nawigacją.

### Named Rules
**The Flat Unless Floating Rule.** Karty, panele i przyciski nie mają cienia. Cień dostaje tylko element, który unosi się nad zdjęciem albo nad treścią.

## Shapes

Łagodne narożniki 6px na wszystkim, co jest płaszczyzną: karty usług, panele, zdjęcia, suwak, formularz, pola. Wszystko, co się klika lub oznacza stan, jest pigułką: przyciski, chipy, etykiety „Przed”/„Po”. Gałka suwaka jest kołem 3rem. Podpisy zdjęć w realizacjach mają 4px. Obramowania są cienkie (1.5px na polach i chipach, 2px na przycisku-konturze), w kolorze linii albo bieżącego tekstu. Zdjęcia są kadrowane do 4:3 lub 16:9 przez `object-fit: cover` z ręcznie ustawionym punktem ostrości.

## Components

### Buttons
Pewne, pełne pigułki; zawsze z czytelnym celem, często z ikoną telefonu.
- **Shape:** pigułka (999px), min. wysokość 3.25rem, duży wariant 3.75rem.
- **Akcja (czerwony):** czerwień akcji z białym tekstem; telefon i „Zadzwoń”. Z ikoną słuchawki 20–24px przed tekstem.
- **Granatowy:** granat z białym tekstem; wysłanie formularza, „Dodaj do zapytania”, „Wycena” w dolnym pasku. Drugi poziom akcji.
- **Kontur (ghost):** przezroczysty, 2px obramowania w kolorze tekstu; „Zamów wycenę” obok przycisku telefonu, przycisk menu. Biały na granacie, granatowy na mgle.
- **Hover / Focus / Active:** najechanie tylko przy kursorze (`hover: hover` i `pointer: fine`): czerwień ciemnieje, granat podnosi się do ink-raised, kontur dostaje biel 12%. Wciśnięcie: `scale(0.97)` w 160ms. Fokus: 3px obrysu w czerwieni akcji z odstępem 3px.

### Chips
- **Style:** pigułka, 1.5px linii, papier, 1rem tekstu, wysokość 2.25rem (kompaktowe, żeby formularz zmieścił się w pierwszym ekranie).
- **State:** zaznaczony = granatowe tło i biały tekst; najechanie = granatowe obramowanie. To checkboxy wyboru usług, nie filtry.

### Cards / Containers
- **Corner Style:** 6px.
- **Background:** karty usług i panel „Terminowość” na mgle, panel „Sprzęt i technika” na granacie, formularz wyceny i kalkulator na papierze.
- **Shadow Strategy:** brak, poza formularzem w hero (patrz Elevation & Depth).
- **Border:** brak.
- **Internal Padding:** 1.5rem w kartach i formularzu, 2rem–2.5rem w panelach wyróżników.
- **Karta usługi:** cała karta jest linkiem do formularza (zaznacza odpowiedni chip). Zdjęcie u góry, tytuł wąskim wersalikiem, opis, link „Zapytaj o wycenę” ze strzałką; najechanie karty pogrubia podkreślenie linku.

### Inputs / Fields
- **Style:** papier, 1.5px linii, 6px, min. 3rem wysokości, etykieta nad polem (0.875rem, 600).
- **Focus:** obramowanie w czerwieni akcji plus 3px obrysu w tej czerwieni 55%.
- **Error / Disabled:** obramowanie w kolorze błędu i komunikat pod polem (0.875rem, 600, kolor błędu).

### Navigation
- **Górny pasek:** granat, 0.875rem szronu, region, telefon i godziny.
- **Nawigacja:** przyklejona, papier 95%, 4.5rem wysokości, dolna linia. Znak słowny po lewej, linki 600 bez podkreślenia (podkreślenie pojawia się przy najechaniu), przycisk akcji po prawej.
- **Mobile:** poniżej 1024px przycisk-kontur z ikoną menu; menu opada spod nawigacji (opacity + translateY(-8px), 200ms wejście, 150ms wyjście), pozycje 1.125rem z wierszem 3rem do kliknięcia.

### Links
- **Style:** podkreślenie 2px z odstępem 0.25em w bieżącym kolorze 35%; przy najechaniu pełny kolor (150ms).

### Suwak przed/po (Signature Component)
Zdjęcie „po” jest przycinane przez `clip-path: inset(0 0 0 var(--pos))`, a uchwyt przesuwa się czystym `translateX(var(--pos))`. Steruje nim natywny `input type=range` nałożony na całą ramkę (dostępny z klawiatury, fokus rysowany na gałce). Ramka 16:9, 6px, biała linia 3px i biała gałka 3rem z ikoną strzałek, pigułki „Przed”/„Po” na granacie 78%. Jedyny autorski moment ruchu: gdy suwak pierwszy raz pokaże się w 60%, po 550ms raz sam przeciąga się 50% → 34% → 64% → 50% w 1200ms (krzywa ease-in-out), animując zarejestrowaną właściwość `@property --pos`. Podpowiedź przerywa dotknięcie lub ruch suwaka; przy `prefers-reduced-motion: reduce` nie występuje.

### FAQ
Lista między liniami. Pytanie 1.125rem 700 z chevronem; rozwinięcie przez `grid-template-rows` 0fr → 1fr z kryciem, chevron obraca się o 180°, wszystko 200ms ease-out.

### Ruch
Ruch powstaje wyłącznie przez skill „animate” (zasady Emila Kowalskiego). Tokeny: ease-out `cubic-bezier(0.23, 1, 0.32, 1)` dla wejść i stanów, ease-in-out `cubic-bezier(0.77, 0, 0.175, 1)` dla ruchu z miejsca na miejsce (podpowiedź suwaka). Wejście sekcji: opacity i translateY(16px) w 500ms, raz, opóźnienie 60ms na element; hero przy ładowaniu: zdjęcie osiada ze skali 1.06 w 1100ms, treść wjeżdża od dołu (16px, 600ms, start 150ms, krok 70ms), formularz dołącza na końcu (24px, 700ms, start 250ms). Stany interfejsu 150–200ms, wciśnięcie 160ms. Stan ukryty istnieje tylko z JS (`html.js`); przy ograniczonym ruchu zostaje samo krycie w 200ms, bez przesunięć.

### Konwencje treści zastępczych (tymczasowe)
Do czasu dostarczenia danych przez właściciela makieta używa trzech widocznych konwencji. Nie są częścią systemu i znikają przed publikacją:
- **Znacznik braków** `[DO UZUPEŁNIENIA]`: element `mark.todo`, żółte tło #fff1c2 z brązowym tekstem #4a3500 (na ciemnym tle #4a3a10 / #ffe08a), 3px, 600.
- **Zdjęcia zastępcze:** tylko w suwaku „Przed i po” i w „Dlaczego warto” (Wikimedia Commons); opisy alt zaczynają się od „Zdjęcie zastępcze”. Pozostałe zdjęcia to realizacje Mal-Dach z Facebooka firmy.
- **Źródła zdjęć:** zwijana lista „Źródła zdjęć” w stopce: realizacje Mal-Dach oraz autorzy i licencje zdjęć zastępczych.
- **Logo:** prawdziwe logo Mal-Dach z Facebooka firmy (`makieta/assets/img/logo-mal-dach.png`, białe tło usunięte). Na granacie stoi na białej plakietce, bo czarne elementy logo znikałyby na ciemnym tle. Czerwień logo to token `brand`.

## Do's and Don'ts

### Do:
- **Do** używać czerwieni akcji (#d91f26) tylko na przyciskach akcji i jako sygnału fokusu, zawsze z białym tekstem.
- **Do** stawiać każdą sekcję na papierze, mgle albo granacie i naprzemiennie je układać.
- **Do** pisać nagłówki wąskim wersalikiem Archivo (wdth 72, 800), a resztę tekstu normalną szerokością.
- **Do** dawać płaszczyznom 6px, a kontrolkom kształt pigułki.
- **Do** pokazywać dowód zdjęciem: duże kadry dachów i elewacji, przed/po.
- **Do** budować każdy ruch skillem „animate”: tylko transform, opacity i clip-path (jedyny wyjątek: akordeon FAQ przez grid-template-rows), krzywe z tokenów, stagger 60ms, hover tylko przy kursorze, wariant dla ograniczonego ruchu.
- **Do** utrzymywać przycisk telefonu w zasięgu na każdej szerokości.

### Don't:
- **Don't** stawiać granatowego tekstu na czerwieni, używać czystej czerwieni logo (#fc3030) jako tła tekstu ani dawać czerwieni na nagłówki, ikony, linie czy tła sekcji.
- **Don't** dodawać punktorów z ptaszkami, kafelków z ikonkami ani ikon dekoracyjnych; ikony (inline SVG) są tylko funkcyjne: telefon, strzałka, chevron, menu, uchwyt suwaka.
- **Don't** wpisywać wymyślonych liczb, cen, opinii, gwarancji ani lat na rynku; brakujące dane oznaczać znacznikiem `[DO UZUPEŁNIENIA]`.
- **Don't** dodawać cieni kartom, panelom ani przyciskom; cień tylko dla elementu nad zdjęciem lub nad treścią.
- **Don't** wprowadzać drugiego kroju pisma.
- **Don't** traktować znaczników `[DO UZUPEŁNIENIA]`, zdjęć zastępczych ani listy źródeł Wikimedia jako stylu do powielania na nowych powierzchniach.
