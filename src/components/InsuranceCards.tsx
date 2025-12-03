import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Package, Shield, Plus } from "lucide-react";
const InsuranceCards = () => {
  return <section id="verzekeringen" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Welke verzekeringen heb je nodig voor een tiny house?
          </h2>
          <p className="text-muted-foreground text-lg">
            In de basis kijk je bij een tiny house naar dezelfde drie pijlers als bij een gewone woning: opstal, inboedel en aansprakelijkheid.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Opstalverzekering */}
          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Opstalverzekering voor je tiny house</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                De opstalverzekering dekt schade aan alles wat "vastzit" aan de woning, zoals:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• de constructie van het tiny house;</li>
                <li>• vaste installaties (keuken, badkamer, sanitair, verwarming);</li>
                <li>• zonnepanelen, dakbedekking, gevels en eventueel vaste buitenaanbouw.</li>
              </ul>
              
              <div className="pt-4 border-t">
                <p className="font-semibold mb-3 text-foreground">Belangrijk voor tiny houses:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Geef duidelijk door dat het om een tiny house gaat, niet om een standaard woonhuis.</li>
                  <li>• Lever bij voorkeur een bouwtekening, foto's en omschrijving van materialen aan.</li>
                  <li>• Check of de verzekeraar tiny houses als (recreatie)woning, chalet, stacaravan of aparte categorie in de polis benoemt.</li>
                  <li>• Let op de herbouwwaarde: wat kost het om jouw tiny house opnieuw te laten bouwen?</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Inboedelverzekering */}
          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Inboedelverzekering tiny house</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Met een inboedelverzekering verzeker je alles wat "los" in je tiny house staat:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• meubels, apparatuur, kleding, elektronica;</li>
                <li>• persoonlijke spullen en decoratie.</li>
              </ul>
              
              <div className="pt-4 border-t">
                <p className="font-semibold mb-3 text-foreground">Tiny house-specifiek:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• omdat de ruimte compact is, kan de waarde per m² hoog zijn (maatwerkmeubels, hoogwaardige apparatuur);</li>
                  <li>• check of diefstal en inbraak goed zijn gedekt, zeker als je wat afgelegen woont;</li>
                  <li>• let op maximale vergoedingen voor elektronica en kostbare spullen.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Aansprakelijkheidsverzekering */}
          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Aansprakelijkheidsverzekering (WA/AVP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Een aansprakelijkheidsverzekering voor particulieren (AVP) dekt schade die jij of je gezinsleden per ongeluk toebrengen aan anderen, bijvoorbeeld:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• schade aan de grond/eigendommen van de eigenaar van het perceel;</li>
                <li>• letselschade van bezoekers of buren (bijvoorbeeld uitglijden op een trap);</li>
                <li>• schade door losgeraakte onderdelen bij storm.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Aanvullende dekkingen */}
          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Plus className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Aanvullende dekkingen</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-3">
                Voor tiny house-eigenaren zijn aanvullend interessant:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Rechtsbijstandverzekering</strong> – bij geschillen rondom huur van de grond, burenruzies of bouwproblemen.</li>
                <li>• <strong>Extra dekking voor zonnepanelen / thuisbatterij</strong> – als die niet volledig onder de opstal vallen.</li>
                <li>• <strong>Doorlopende reis-/kampeerverzekering</strong> – kan relevant zijn als je tiny house (op wielen) regelmatig verhuist.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default InsuranceCards;