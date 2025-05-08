# Gamexchange-Forbedring
Retter opp på Gamexchange-nettstedet.

# Table of contents
1. # [Ting som er fikset](#ting-som-er-fikset)

    1.1 [Farge kontrast](#farge-kontrast)

    1.2 [Dark mode](#dark-mode)

    1.3 [Generell HTML og CSS](#generell-html-og-css)

    1.4 [Hjemmesidens forbedringer](#hjemmesidens-forbedringer)

2. # [Evner du bør prøve å forbedre](#evner-du-bor-prove-å-forbedre)


# Ting som er fikset

## Farge kontrast
* Fargene følger nå WCAG AAA-kriteriene.

## Dark mode
* Dark mode er nå tilgjengelig.
* Dark modes lagres i localStorage og vil bli lagret og lastet opp på alle deler av nettsiden.

## Generell HTML og CSS struktur
* HTML og CSS har blitt forbedret og følger kode standarder.
* Fjernet unødvendig kode eller HTML som kan gjøre koden mer forrvirrende.

## Hjemmesidens forbedringer
* Har riktig standard for nettside struktur. (Navn, header, main, footer)
* Har riktig standard for CSS og JavaScript filstruktur.
* Har riktig standard for og HTML struktur.
* Skiftet farger som følger WCAG AAA-kriteriene som bidrar til god UU og brukervennlighet.
* Skiftet ut Hero bildet til et som følger UU loven.
* La til en trending seksjon som viser noen av produktene fordi når en bruker kommer inn på nettsiden bør de fort  kunne se hva nettsiden faktisk seller. Det er også en standerd å vise noen av produktene på hjemmesiden.

## Filstruktur


# Evner du bor prove å forbedre
- Ikke blandt CSS/JavaScript I både HTML og deres egne filer, aller heldt hold all CSS og JavaScript i egne filer.

- Test for bedre kontrast og fargeblindhet. Så at du bruke mye rød og grønn, det ble ogstå brukt i banneret, dette er dårlig for de med rød-grønn fargeblindhet. Du kan sjekke kontrast gjennom [WebAIM](https://webaim.org/resources/contrastchecker/). Eller så kan du sjekke for både kontras og fargeblindhet gjennom nettutvidelsen [WCAG Color contrast checker](https://chromewebstore.google.com/detail/WCAG%20Color%20contrast%20checker/plnahcmalebffmaghcpcmpaciebdhgdf).

- Gi beskrivende navn til alle filer og elementer. Dette er viktig for å få en bedre oversikt over hvor alt i prosjektet er og hva de gjør. Dette inkludeer filnavn, bildenavn, IDnavn, Klassenavn og elementene i nettsiden. F.eks. Kommentarfeltet bør ikke hete "Dagbok", men heller noe som kansje "Kommentarer"

- Ikke bruk masse break tags for å skille innhold. Dette er uvanlig og gjør koden mer forvirrende og rotete. Heller bruk CSS for å skille innhold. F.eks. Du kan bruke Margin.

- Ikke ha for store mellomrom i HTML siden, det er greit å skille HTML innholdet, men det blir veldig rart om mellomromene blir for store. 

- Ikke lag HTML elementer utenfor body.

- Lenken til CSS bør være på toppen av HTML siden inni head og javascript bør være på bunnen av siden rett over body. Dette handler om hvordan nettsiden lastes inn, vi vil at CSS lastes inn først sånn at brukeren ikke ender opp med å se en stygg versjon av nettsiden uten CSS. JavaScript bør ligge nederst på siden fordi det kan stoppe nettleseren fra å vise innhold mens det lastes. Ved å plassere det nederst, får brukeren se nettsiden raskere. Det er måter å putte JavaScript på topp uten at den stopper HTML (defer) men standard er at det er på bunnen.

- Ikke sett masse elementer på samme linje. Det gjør det veldig vanskelig å lese. Heller skriv en linje under når du skaper nytt element.

## Fil/mappe struktur

## HTML struktur