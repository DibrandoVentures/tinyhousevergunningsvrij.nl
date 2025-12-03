import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, AlertTriangle, FileText, Shield, Home as HomeIcon } from "lucide-react";
import tinyPergolaGardenImage from "@/assets/tiny-pergola-garden.jpg";
const AdditionalSections = () => {
  return <>
      {/* Section 1 */}
      <section id="waarom" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Waarom een tiny house geen "gewone" woning is voor verzekeraars
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-4">
              Veel verzekeraars zijn ingericht op klassieke rijtjeswoningen en appartementen. Een tiny house wijkt op meerdere punten af:
            </p>
            <ul className="space-y-2 mb-6">
              <li><strong>Bouwmateriaal:</strong> vaak hout, houtskelet of lichte prefab elementen.</li>
              <li><strong>Locatie:</strong> in een natuurgebied, op een erf, in een community of tijdelijk op een kavel.</li>
              <li><strong>Gebruik:</strong> permanente bewoning, recreatief gebruik of een mix.</li>
              <li><strong>Mobiliteit:</strong> sommige tiny houses kunnen verplaatst worden of staan op wielen.</li>
            </ul>
            <p className="text-muted-foreground mb-4">
              Dat betekent dat een standaard woonhuisverzekering niet altijd automatisch past. Verzekeraars willen weten:
            </p>
            <ul className="space-y-2 mb-6">
              <li>hoe het tiny house is gebouwd (constructie, brandveiligheid, installaties);</li>
              <li>waar het staat en of dat woon- of recreatiebestemming heeft;</li>
              <li>of je er permanent ingeschreven staat of recreatief verblijft;</li>
              <li>of het tiny house verplaatsbaar is (op wielen, op slede, modulair).</li>
            </ul>
            <p className="text-muted-foreground">
              Wil je precies weten wat er volgens de regels mag op jouw locatie? Check de woon- en gebruiksregels rondom tiny houses op{" "}
              <a href="https://tinyhousewoonregels.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                tinyhousewoonregels.nl
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section id="acceptatie" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Wanneer accepteert een verzekeraar jouw tiny house?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Niet ieder tiny house wordt zomaar geaccepteerd. Veel verzekeraars kijken onder andere naar:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Bouwregels en veiligheid<FileText className="h-5 w-5 text-primary" />
                  2.1 Bouwregels en veiligheid
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Voldoet het tiny house zo veel mogelijk aan de bouwkundige eisen (zoals die in het Besluit Bouwwerken Leefomgeving/BBL worden gesteld aan veilige en gezonde gebouwen)?
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">Vergunning en bestemming<Shield className="h-5 w-5 text-primary" />
                  2.2 Vergunning en bestemming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Is er een omgevingsvergunning verleend, of valt je tiny house onder een regeling binnen het bestemmingsplan?
                </p>
                <p className="text-muted-foreground mb-3">
                  Wordt jouw tiny house door de gemeente gezien als woning, recreatiewoning, bijgebouw of iets anders?
                </p>
                <p className="text-muted-foreground">
                  Voor verzekeraars is het belangrijk dat de juridische status van je tiny house duidelijk is. Dat beperkt hun risico én geeft jou zekerheid. Meer hierover lees je op{" "}
                  <a href="https://tinyhousewoonregels.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    tinyhousewoonregels.nl
                  </a>.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"> Gebruik: permanent wonen of recreatief?<HomeIcon className="h-5 w-5 text-primary" />
                  2.3 Gebruik: permanent wonen of recreatief?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  <strong>Permanente bewoning:</strong> soms kan een tiny house dan verzekerd worden als woonhuis of als "bijzonder woonobject".
                </p>
                <p className="text-muted-foreground">
                  <strong>Recreatief gebruik:</strong> dan wordt het tiny house vaker ondergebracht bij polissen voor recreatiewoningen, chalets of stacaravans.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">        Locatie en omgeving<CheckCircle className="h-5 w-5 text-primary" />
                  2.4 Locatie en omgeving
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Verzekeraars kijken naar:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• staat het tiny house op een recreatiepark, erf, community of eigen kavel</li>
                  <li>• hoe is de bereikbaarheid voor hulpdiensten</li>
                  <li>• is er verhoogd risico op stormschade, wateroverlast, vandalisme of inbraak</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-3">Praktische tip:</h3>
            <p className="text-muted-foreground">
              Verzamel vóórdat je gaat bellen of offertes aanvraagt: bouwtekeningen, foto's van binnen en buiten, info over fundering, materialen en installaties.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - handled by InsuranceCards component */}

      {/* Section 4 - handled by ComparisonSection component */}

      {/* Section 5 */}
      <section id="wielen" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tiny house op wielen: onderweg en op de weg
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Voor een tiny house op wielen krijg je met extra verzekeringen te maken.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>WA-verzekering auto + trailer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Wanneer je een tiny house op wielen verplaatst, heb je een trekauto nodig. Controleer:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• of je WA-autoverzekering ook geldt voor aanhangers/trailers;</li>
                  <li>• of het maximale trekgewicht en technische eisen kloppen;</li>
                  <li>• of je eventueel een aparte trailerverzekering nodig hebt voor schade aan het tiny house tijdens transport.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Casco-dekking tijdens verplaatsing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Bij caravanverzekeringen heb je vaak de keuze uit WA, beperkt casco of volledig casco. Bij tiny houses op wielen is dit vergelijkbaar:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>WA:</strong> dekt schade die jij aan anderen toebrengt.</li>
                  <li>• <strong>Beperkt casco:</strong> dekt bijvoorbeeld brand, diefstal, storm.</li>
                  <li>• <strong>Volledig casco:</strong> ook botsschade aan het tiny house zelf.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Beveiliging en preventie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">Veel verzekeraars eisen of adviseren:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Wielklem/disselslot:</strong> voorkomt dat het tiny house wordt meegenomen.</li>
                  <li>• <strong>GPS-tracker:</strong> helpt bij opsporing na diefstal.</li>
                  <li>• <strong>Goede stalling:</strong> bewaakt terrein of omheinde locatie kan premie verlagen.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Kenteken en registratie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Een tiny house op wielen kan in sommige gevallen een kenteken krijgen (bijvoorbeeld als caravan of aanhangwagen). Dit is niet altijd verplicht, maar kan wel van invloed zijn op verzekering en verzekerbaarheid. Check bij de RDW en je verzekeraar wat de status is.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
            <p className="text-muted-foreground">
              Wil je dieper in tiny houses op wielen duiken, inclusief wet- en regelgeving en praktische tips? Ga naar{" "}
              <a href="https://tinyhouseopwielen.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                tinyhouseopwielen.nl
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="recreatie" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tiny house als recreatiewoning, chalet of stacaravan
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground mb-4">
                  Gebruik je je tiny house vooral recreatief (weekenden, vakanties), dan wordt het door verzekeraars vaak ingedeeld als recreatiewoning, chalet of stacaravan. Dat heeft gevolgen voor dekking en premie:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>Je gebruikt het tiny house niet het hele jaar intensief → verzekeraar rekent vaak met lager risico.</li>
                  <li>Recreatiewoningen hebben soms beperktere dekking (geen aansprakelijkheid voor permanente bewoning, geen dekking buiten het seizoen).</li>
                  <li>Check of de polis geldt voor het hele jaar of alleen tijdens gebruiksperiodes.</li>
                </ul>
                <p className="text-muted-foreground">
                  Ga je van recreatief naar permanent wonen (of andersom), meld dit dan tijdig bij je verzekeraar. Anders loop je het risico dat je niet goed gedekt bent.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={tinyPergolaGardenImage} alt="Tiny house met pergola en terras in een groene tuin" className="rounded-2xl shadow-lg w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 */}
      <section id="verhuur" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tiny house verhuren, delen of via Airbnb aanbieden
          </h2>
          
          <div className="bg-destructive/10 border-2 border-destructive rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3 text-destructive">Let op: meld verhuur altijd!</h3>
                <p className="text-muted-foreground mb-3">
                  Bij veel standaardverzekeringen is commerciële verhuur of het beschikbaar stellen van je tiny house via platforms zoals Airbnb uitgesloten. Doe je dit toch zonder het te melden, dan loop je het risico dat de verzekeraar bij schade niet uitkeert.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-semibold mb-4">Wat moet je regelen?</h3>
            <ul className="space-y-3 mb-6">
              <li>
                <strong>Meld verhuur bij je verzekeraar:</strong> sommige verzekeraars bieden een aanvullende verhuurdekking, andere sluiten verhuur helemaal uit.
              </li>
              <li>
                <strong>Aansprakelijkheid gasten:</strong> check of schade door gasten (bijv. brand, waterlekkage, beschadiging) gedekt is.
              </li>
              <li>
                <strong>Inboedelverzekering:</strong> standaard dekt deze alleen je eigen spullen. Bij verhuur kun je vaak een uitbreiding afsluiten.
              </li>
              <li>
                <strong>AVP en eventuele bedrijfsaansprakelijkheid:</strong> afhankelijk van hoe vaak je verhuurt, kan een zakelijke aansprakelijkheidsverzekering nodig zijn.
              </li>
            </ul>

            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-2">Incidentele verhuur vs. commercieel verhuren</h4>
              <p className="text-muted-foreground mb-2">
                <strong>Incidenteel (bijv. een paar weken per jaar):</strong> soms kun je dit nog onder een particuliere polis regelen met een kleine aanvulling.
              </p>
              <p className="text-muted-foreground">
                <strong>Commercieel/regelmatig:</strong> dan is vaak een aparte zakelijke of verhuurpolis verstandig.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - handled by SafetySection component */}

      {/* Section 9 - handled by StepPlan component */}

      {/* Section 10 */}
      <section id="polisvoorwaarden" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Polisvoorwaarden: hier moet je extra scherp op zijn
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Een paar punten waar veel tiny house-eigenaren overheen lezen:
          </p>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Onderverzekering & herbouwwaarde</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  Kies een realistische herbouwwaarde (wat kost het om je tiny house opnieuw te bouwen?).
                </p>
                <p className="text-muted-foreground">
                  Kijk of een garantie tegen onderverzekering mogelijk is, zodat je bij totale schade niet met een groot gat blijft zitten.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Storm, hagel en waterschade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Controleer of storm, hagel, regen en lekkage goed zijn gedekt.</li>
                  <li>• Let op voorwaarden rond onderhoud van dak en gevel.</li>
                  <li>• Check of schade door sneeuw, vorst of bevriezing van leidingen is meeverzekerd.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Uitsluitingen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground mb-2">Veelvoorkomende uitsluitingen:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• schade door achterstallig onderhoud;</li>
                  <li>• constructiefouten/bouwfouten;</li>
                  <li>• schade tijdens verplaatsing;</li>
                  <li>• bepaalde vormen van verhuur of commercieel gebruik.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Glas & ruiten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">
                  Soms alleen verzekerd met een extra glasdekking.
                </p>
                <p className="text-muted-foreground">
                  Check dit zeker als je veel of grote ramen hebt.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Diefstalgevoelige spullen & techniek</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Niet alles is standaard volledig meeverzekerd (bijv. dure elektronica, e-bikes, losse accu's).
                </p>
                <p className="text-muted-foreground">
                  Een thuisbatterij, losse lithium-accu's en bepaalde apparatuur kunnen aparte regels hebben.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 11 */}
      <section id="fouten" className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Veelgemaakte fouten bij tiny house verzekeren
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Tiny house aanmelden als "gewone" woning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Daardoor kan de verzekeraar bij schade zeggen dat het risico verkeerd is opgegeven. Meld dus altijd dat het om een tiny house gaat en hoe je het gebruikt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Tiny house verplaatsen zonder dit te melden</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Bij een nieuwe locatie hoort vaak een nieuwe risicobeoordeling en soms een andere premie. Geef verhuizingen en nieuwe standplaatsen altijd door.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Te lage herbouwwaarde opgeven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Als de herbouwwaarde veel hoger is dan verzekerd, krijg je bij schade mogelijk niet genoeg uitgekeerd om opnieuw te bouwen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive">
              <CardHeader>
                <CardTitle className="text-lg">Inboedel onderschatten</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Door maatwerkmeubels en compacte high-end apparatuur kan de waarde verrassend hoog zijn. Maak een lijst met indicatieve waarden.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-destructive md:col-span-2">
              <CardHeader>
                <CardTitle className="text-lg">Voorwaarden niet lezen bij tiny house op wielen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Schade tijdens transport, tijdelijke standplaatsen, stalling en verhuur zijn niet altijd standaard meeverzekerd. Lees voorwaarden per situatie en product.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 12 - handled by FAQ component */}

      {/* Section 13 */}
      <section id="over" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Over tinyhouseverzekeren.nl & vervolgstappen
          </h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-muted-foreground mb-4">
              Tinyhouseverzekeren.nl is een informatieve gids voor iedereen die zijn tiny house veilig en verantwoord wil verzekeren. We verkopen zelf geen verzekeringen, maar helpen je om:
            </p>
            <ul className="space-y-2 mb-6">
              <li>de juiste vragen te stellen aan verzekeraars of adviseurs;</li>
              <li>valkuilen te vermijden;</li>
              <li>beter voorbereid offertes te vergelijken.</li>
            </ul>
          </div>

          <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Wil je breder kijken dan alleen verzekeren?</h3>
            <p className="text-muted-foreground mb-6">
              Bijvoorbeeld naar bouw, types, kosten en woonvormen? Bezoek dan ook:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href="https://tinyhousecompleet.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhousecompleet.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Totaaloverzicht van types, bouw, kosten en voorbeelden
                </p>
              </a>
              <a href="https://tinyhousewoonregels.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhousewoonregels.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Uitleg over regels, bestemmingsplannen en woonmogelijkheden
                </p>
              </a>
              <a href="https://tinyhouseopwielen.nl" target="_blank" rel="noopener noreferrer" className="block p-4 bg-white rounded-xl hover:shadow-lg transition-shadow border-2 border-transparent hover:border-primary">
                <h4 className="font-semibold text-primary mb-2">tinyhouseopwielen.nl</h4>
                <p className="text-sm text-muted-foreground">
                  Alles over tiny houses op wielen, verplaatsing en wet- en regelgeving
                </p>
              </a>
            </div>
          </div>

          <div className="border-l-4 border-muted-foreground p-6 rounded-lg bg-zinc-300">
            <h4 className="font-semibold text-lg mb-3">Disclaimer</h4>
            <p className="text-muted-foreground text-sm">
              De informatie op tinyhouseverzekeren.nl is bedoeld als algemene uitleg over het verzekeren van tiny houses. Het is geen persoonlijk advies en geen aanbod van een specifiek verzekeringsproduct. Voor jouw eigen situatie, polisvoorwaarden en dekking: neem altijd contact op met een verzekeringsadviseur of verzekeraar.
            </p>
          </div>
        </div>
      </section>
    </>;
};
export default AdditionalSections;