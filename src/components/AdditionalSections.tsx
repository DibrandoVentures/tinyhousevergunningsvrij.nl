import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, Ruler, MapPin, Home as HomeIcon, Building } from "lucide-react";
import tinyPergolaGardenImage from "@/assets/tiny-pergola-garden.jpg";

const AdditionalSections = () => {
  return (
    <>
      {/* Section 1 - Waarom geen gewoon schuurtje */}
      <section id="waarom" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Waarom een tiny house geen "gewoon schuurtje" is voor de regels
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Veel mensen denken: "Als ik een klein huisje in de tuin zet, valt het wel onder een schuurtje." Voor de wet ligt dat genuanceerder. Een tiny house wijkt op meerdere punten af van een standaard bijgebouw:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Gebruik</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Bijgebouw:</strong> berging, kantoor, hobbyruimte, gastenverblijf.</li>
                    <li><strong>Tiny house:</strong> vaak (semi)permanente bewoning of logiesfunctie.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Omvang</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Schuur:</strong> 6–15 m² is normaal.</li>
                    <li><strong>Tiny house:</strong> meestal 20–40 m², vaak hoger dan een standaard berging.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Voorzieningen</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tiny houses hebben keuken, badkamer, wc, slaapruimte en installaties.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Gemeente kan jouw tiny house zien als (zelfstandige) woning in plaats van "bijgebouw".
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-6">
              <p className="text-muted-foreground mb-2">
                <strong>Dat heeft grote gevolgen:</strong>
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Als jouw tiny house wordt gezien als <strong>bijbehorend bouwwerk</strong> bij een bestaande woning, kun je soms vergunningsvrij bouwen binnen strikte grenzen.</li>
                <li>• Wordt het gezien als <strong>zelfstandige woning</strong> (hoofdwoning), dan is vrijwel altijd een omgevingsvergunning nodig én moet de bestemming kloppen.</li>
              </ul>
            </div>

            <p className="text-muted-foreground">
              Wil je precies weten hoe jouw gemeente tiny houses juridisch ziet? Check de woon- en gebruiksregels rondom tiny houses op{" "}
              <a href="https://tinyhousewoonregels.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                tinyhousewoonregels.nl
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Wat betekent vergunningsvrij */}
      <section id="betekenis" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wat betekent "vergunningsvrij" in de praktijk?
          </h2>
          
          <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-destructive">Belangrijk misverstand</h3>
                <p className="text-muted-foreground text-lg">
                  Vergunningsvrij betekent <strong>níet</strong> "regelvrij".
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Ook als je vergunningsvrij mag bouwen:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• moet je bouwwerk nog steeds voldoen aan technische eisen (veilig, stabiel, brandveilig);</li>
              <li>• moet je rekening houden met het omgevingsplan (voorheen bestemmingsplan);</li>
              <li>• kunnen er beeldkwaliteits- of welstandseisen gelden als het zichtbaar is;</li>
              <li>• kan de gemeente ingrijpen als het gebruik strijdig is (bijv. illegale bewoning).</li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
              <p className="text-muted-foreground mb-2"><strong>Kort gezegd:</strong></p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Vergunningsvrij</strong> = je hoeft geen omgevingsvergunning voor bouwen aan te vragen.</li>
                <li>• De overige regels blijven gewoon gelden.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Wanneer vergunningsvrij */}
      <section id="voorwaarden" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wanneer kan een tiny house vergunningsvrij zijn?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            In de meeste gevallen waarin tiny houses (deels) vergunningsvrij zijn, gaat het om een tiny house dat juridisch wordt gezien als <strong>bijgebouw bij een bestaande woning</strong>.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  een tiny house in de achtertuin als kantoor, atelier of gastenverblijf
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  een (mantelzorg)unit voor een familielid bij je woning
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">
                  een luxe tuinhuis met overnachtingsmogelijkheid, maar géén zelfstandige woning
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold mb-6">De regeling voor vergunningsvrij bouwen kijkt naar:</h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>1. Ligging op het perceel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Meestal moet het bouwwerk op het <strong>achtererfgebied</strong> staan (achtergevel van de woning).</li>
                  <li>• Aan de straatkant (voorerf) gelden veel strengere regels; vergunningsvrij mag daar vaak weinig.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Ruler className="h-6 w-6 text-primary" />
                  <CardTitle>2. Maximale hoogte</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Er geldt een maximumhoogte (bijvoorbeeld rond 3–5 meter, afhankelijk van dakvorm en precieze regels).</li>
                  <li>• Hoe dichter bij de erfgrens, hoe meer beperkingen.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-primary" />
                  <CardTitle>3. Maximale oppervlakte</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Je mag maar een bepaald aantal m² van je erf bebouwen met bijgebouwen.</li>
                  <li>• Heb je al een schuur, veranda of uitbouw, dan gaat dat van de "ruimte" voor vergunningsvrij bouwen af.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <HomeIcon className="h-6 w-6 text-primary" />
                  <CardTitle>4. Gebruik</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Het bouwwerk is <strong>ondergeschikt</strong> aan de hoofdwoning.</li>
                  <li>• Permanente bewoning als zelfstandige woning is meestal niet toegestaan zonder vergunning en juiste bestemming.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">In de praktijk betekent dit:</h4>
            <p className="text-muted-foreground mb-3">
              Een compact tiny house van bijvoorbeeld 20–30 m², achter op het perceel, gebruikt als gastenverblijf/werkkamer en binnen de hoogte- en oppervlaktegrenzen, heeft een reële kans om vergunningsvrij te kunnen worden geplaatst.
            </p>
            <p className="text-muted-foreground font-semibold">
              Een tiny house als échte, zelfstandige woning vrijwel nooit.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Recreatiewoning */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tiny house en vergunningsvrij bouwen in 2025–2026
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Sinds de Omgevingswet is de regelgeving veranderd en wordt in 2025 en 2026 stap voor stap verder aangescherpt en verduidelijkt. Gemeenten krijgen meer ruimte om:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• tiny houses toe te staan op specifieke locaties;</li>
                  <li>• met tijdelijke vergunningen te werken (bijv. 10–15 jaar);</li>
                  <li>• maatwerkregels in hun omgevingsplan op te nemen.</li>
                </ul>
                <p className="text-muted-foreground mb-4">
                  <strong>Belangrijk om te weten:</strong>
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• De hoofdlijnen voor vergunningsvrije bijgebouwen blijven bestaan (achtererf, m², hoogte, ondergeschikt).</li>
                  <li>• Gemeenten vullen de details in hun eigen omgevingsplan in, waardoor de uitkomst per gemeente anders kan zijn.</li>
                  <li>• Nieuwe lokale beleidsnota's voor tiny houses verschijnen vooral richting 2026.</li>
                </ul>
                <p className="text-muted-foreground font-semibold">
                  Daarom is het cruciaal om niet uit te gaan van "wat bij iemand anders mocht", maar steeds jouw eigen locatie en gemeente te laten checken.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={tinyPergolaGardenImage} alt="Tiny house met pergola en terras in een groene tuin" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section - Risico's */}
      <section id="risicos" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Risico's als je "gewoon begint" zonder vergunning
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Lekker pragmatisch beginnen klinkt aantrekkelijk, maar de risico's zijn groot:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Handhaving door de gemeente</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Last onder dwangsom (boete per dag).</li>
                  <li>• In het uiterste geval een sloop- of verwijderingsbevel.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Problemen bij verkoop</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Kopers, makelaars en notarissen stellen vragen over "illegale bijgebouwen".</li>
                  <li>• Je huis kan minder waard worden of slechter verkoopbaar zijn.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Discussie met de verzekeraar</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Onzekerheid of schade aan een illegaal geplaatst tiny house wel vergoed wordt.</li>
                  <li>• Hoger risico op afwijzing bij brand- of stormschade.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Gedoe met buren</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Buren kunnen klagen over inkijk, schaduw, geluid.</li>
                  <li>• Eén klacht kan genoeg zijn voor een onderzoek en handhaving.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg">
            <p className="text-muted-foreground font-semibold">
              Kortom: Een korte voorsprong zonder vergunning kan eindigen in een duur, stressvol en tijdrovend traject.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Fouten */}
      <section id="fouten" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veelgemaakte fouten bij "vergunningsvrij bouwen"
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Tiny house als woning presenteren, terwijl het vergunningsvrij moest zijn</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Je meldt bij de gemeente of op social media trots dat je "in je tiny house woont", terwijl je juridisch alleen een bijgebouw had mogen plaatsen. → Grote kans op discussie bij controle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Voor- en achtererf door elkaar halen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Je zet het tiny house (deels) in het zicht van de straat of op het voorerf, terwijl de vergunningsvrije regeling vooral voor achtererf geldt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">M² bijgebouwen onderschatten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Je denkt: "Het is maar klein", maar in totaal met schuur, overkapping en uitbouw kom je boven de toegestane oppervlakte. → Dan is het niet meer vergunningsvrij.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">"Op wielen dus vrijgesteld" denken</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Een tiny house op wielen langdurig op één plek, aangesloten en ingericht als woning, wordt alsnog vaak als bouwwerk gezien.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Geen schriftelijke bevestiging of check</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Je vertrouwt op een losse opmerking van een baliemedewerker of buurman ("zal wel mogen"), zonder echte check of document.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section - Over */}
      <section id="over" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Over tinyhousevergunningsvrij.nl & vervolgstappen
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground mb-4">
              Tinyhousevergunningsvrij.nl is een praktische gids voor iedereen die wil weten:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• of een tiny house op zijn/haar locatie vergunningsvrij kan;</li>
              <li>• welke voorwaarden en grenzen er gelden voor bijgebouwen;</li>
              <li>• welke risico's je loopt als je zonder overleg gaat bouwen.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              We verkopen geen vergunningen, maar helpen je om:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• beter voorbereid het gesprek met gemeente of adviseur in te gaan;</li>
              <li>• realistische plannen te maken (geen luchtkastelen);</li>
              <li>• bewuste keuzes te maken tussen vergunningsvrij, vergunningstraject of een combinatie.</li>
            </ul>
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Wil je breder kijken dan alleen vergunningsvrij bouwen?</h3>
            <p className="text-muted-foreground mb-6">
              Bezoek dan ook:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <a href="https://tinyhousescompleet.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhousescompleet.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Totaaloverzicht van types, bouw, kosten en voorbeelden
                </p>
              </a>
              <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhousevergunning.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Alles over de vergunningsroute voor tiny houses
                </p>
              </a>
              <a href="https://tinyhousewoonregels.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhousewoonregels.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Uitleg over omgevingsplannen, bestemmingen en woonmogelijkheden
                </p>
              </a>
              <a href="https://tinyhouse2026.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhouse2026.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Ontwikkelingen in regelgeving en beleid richting 2026
                </p>
              </a>
            </div>
          </div>

          <div className="border-l-4 border-muted-foreground p-6 rounded-lg bg-zinc-300">
            <h4 className="font-semibold text-lg mb-3">Disclaimer</h4>
            <p className="text-muted-foreground text-sm">
              De informatie op tinyhousevergunningsvrij.nl is bedoeld als algemene uitleg over vergunningsvrij bouwen van tiny houses in Nederland. Regels kunnen per gemeente verschillen en veranderen in de tijd. Dit is geen juridisch advies en geen officiële uitspraak van een gemeente. Voor jouw eigen situatie, perceel en plannen: laat altijd een actuele vergunningscheck doen en raadpleeg indien nodig de gemeente of een gespecialiseerd adviseur.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;