# Gamexchange-Forbedring
Retter opp på Gamexchange-nettstedet.

# Table of contents
1. ## [Oppsummering ting som er fikset](#oppsummering-ting-som-er-fikset)
    1.1 [Dark mode](#dark-mode)
    
    1.2 [Generell HTML og CSS struktur](#generell-html-og-css-struktur)
    
    1.3 [Filstruktur](#filstruktur)
    
    1.4 [UU og brukervennlighet](#uuuniversiell-utforming-og-brukervennlighet)
    
    1.5 [Responsive design](#responsive-design)

2. ## [Side spesefike fikser](#side-spesefike-fikser)
    2.1 [Forbedringer gjort i alle sider](#forbedringer-gjort-i-alle-sider)
    
    2.2 [Hjemmesidens forbedringer](#hjemmesidens-forbedringer)
    
    2.3 [Alle produkter forbedringer](#alle-produkter-forbedringer)
    
    2.4 [Kontakt oss forbedringer](#kontakt-oss-forbedringer)
    
    2.5 [Login og Register forbedringer](#login-og-register-forbedringer)

3. ## [Ambefalinger for fremtidige utvidelser](#ambefalinger-for-fremtidige-utvidelser)

4. ## [Ting jeg fikset på og du bør fortsette å gjøre](#ting-jeg-fikset-på-og-du-bør-fortsette-å-gjøre)
    4.1 [Brukervennlighet](#brukervennlighet)
    
    4.2 [UU](#uu-universiell-utforming)
    
    4.3 [Fil/mappe struktur](#filmappe-struktur)
    
    4.4 [HTML/css/js](#htmlcssjs)

# Oppsummering ting som er fikset

## Dark mode
* Dark mode er nå tilgjengelig.
* Dark modes lagres i localStorage og vil bli lagret og lastet opp på alle deler av nettsiden.

## Generell HTML og CSS struktur
* HTML og CSS har blitt forbedret og følger kode standarder.
* Fjernet unødvendig kode eller HTML som kan gjøre koden mer forrvirrende.
* Endret lang til nb (norsk bokmål) viktig for at andre som jobber med deg og søkemotor skal vite hvilket språk innholdet er i eller skal være i.

## Filstruktur
* Har organisert filene i mapper og filer.
* Har brukt navn som er beskrivende og korrekt.

## UU(Universiell utforming) og brukervennlighet
* Test for bedre kontrast og fargeblindhet (WCAG testet).
* Alle bilder har riktig alt tekst for bildene dette er veldig viktig for UU.
* Brukervennlighet er nå bedre hva de ulike delene av nettstedet er mer klart og enklere å forstå.

## Responsive design
* Implementerte media queries for ulike skjermstørrelser
* Navigasjonsmenyen stables vertikalt på mobilenheter
* Justerte bildestørrelser og spillkort for å skalere riktig på mindre skjermer
* Gjorde forms responsive
* Forbedret tekstlesbarhet på tvers av ulike enheter

# Side spesefike fikser

## Forbedringer gjort i alle sider
* Har riktig standard for nettside struktur. (Navn, header, main, footer)
* Har riktig standard for CSS og JavaScript filstruktur.
* Har riktig standard for og HTML struktur.
* Skiftet farger som følger WCAG AAA-kriteriene som bidrar til god UU og brukervennlighet.

## Hjemmesidens forbedringer
* Skiftet ut Hero bildet til et som følger UU loven.
* La til en trending seksjon som viser noen av produktene fordi når en bruker kommer inn på nettsiden bør de fort  kunne se hva nettsiden faktisk seller. Det er også en standerd å vise noen av produktene på hjemmesiden.

## Alle produkter forbedringer
* Gjorde om dit kortbasert layout som er vannlig å ha i nettbutikker.

## Kontakt oss forbedringer
* Har endret fra "Om oss og kontakt" til "Kontakt oss" fordi det er det siden hovedsaklig handler om.
* Fikset på klassenavn. Fiket også på mail funksjonen
* Endret på Henvendelsesvalg til en dropdown meny

## Login og Register forbedringer
* Gjorde det klart hvilke bokser er for brukernavn og hvilke som er for passord.
* Lage in link under formen der man kan klikke for å gå mellom login eller register.
* Endret på Henvendelsesvalg til en dropdown meny. Dette er viktig f.eks. Om hendvendelsen er i dropdown meny trenger man bare å ha tre kategorier i en database som gjør det ryddig, men om man bruker checkboxer må man tenke på de ulike kombinasjonene som er mulig som kan gjøre ting unødvendig komplisert.
* Satt opp standard oppsett for registrerings siden. (E-post, brukernavn, passord og bekreft passord)

# Ambefalinger for fremtidige utvidelser
- Søkefunksjonalitet for alle produktene, om det blir mange produkter kan det bli vanskelig å scrolle gjennom alt.
- En måte for brukeren å legge til spillene de vil selge.

# Ting jeg fikset på og du bør fortsette å gjøre

## Brukervennlighet
- Gi beskrivende navn til elementene på nettsiden. f.eks. Kommentarfeltet bør ikke hete "Dagbok", men heller noe som kansje "Kommentarer". Og IDen til kjøp knappen bør

## UU (Universiell utforming)
- Test for bedre kontrast og fargeblindhet. Så at du bruke mye rød og grønn, det ble ogstå brukt i banneret, dette er dårlig for de med rød-grønn fargeblindhet. Du kan sjekke kontrast gjennom [WebAIM](https://webaim.org/resources/contrastchecker/). Eller så kan du sjekke for både kontras og fargeblindhet gjennom nettutvidelsen [WCAG Color contrast checker](https://chromewebstore.google.com/detail/WCAG%20Color%20contrast%20checker/plnahcmalebffmaghcpcmpaciebdhgdf).
- Husk å gi alt tekst til bildene dette er veldig viktig for UU.

## Fil/mappe struktur
- Gi beskrivende navn til alle filer og mapper, dette er viktig for å få en bedre oversikt over hvor alt i prosjektet er og hva de gjør. Dette inkluder filnavn, bildenavn, og mappenavn.

## HTML/css/js
- Ikke blandt CSS/JavaScript I både HTML og deres egne filer, aller heldt hold all CSS og JavaScript i egne filer.

- Gi passende klassenavn og ID navn til elementer.

- Ikke lag HTML elementer utenfor body.

- Ikke sett masse elementer på samme linje. Det gjør det veldig vanskelig å lese. Heller skriv en linje under når du skaper nytt element.

- Lenken til CSS bør være på toppen av HTML siden inni head og javascript bør være på bunnen av siden rett over body. Dette handler om hvordan nettsiden lastes inn, vi vil at CSS lastes inn først sånn at brukeren ikke ender opp med å se en stygg versjon av nettsiden uten CSS. JavaScript bør ligge nederst på siden fordi det kan stoppe nettleseren fra å vise innhold mens det lastes. Ved å plassere det nederst, får brukeren se nettsiden raskere. Det er måter å putte JavaScript på topp uten at den stopper HTML (defer) men standard er at det er på bunnen.

- Ikke ha for store mellomrom i HTML siden, det er greit å skille HTML innholdet, men det blir veldig rart om mellomromene blir for store. 

- Ikke bruk masse break tags for å skille innhold. Dette er uvanlig og gjør koden mer forvirrende og rotete. Heller bruk CSS for å skille innhold. F.eks. Du kan bruke Margin.
