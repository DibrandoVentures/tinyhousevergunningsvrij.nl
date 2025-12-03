import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, Lock, CloudRain } from "lucide-react";
import fireImage from "@/assets/safety-fire.jpg";
import securityImage from "@/assets/safety-security.jpg";
import weatherImage from "@/assets/safety-weather.jpg";
const SafetySection = () => {
  return <section id="risicos" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Risico's & preventie: zo beperk je schade
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-6">
            Tiny houses lopen risico's op brand, inbraak en weersinvloeden. Goede preventie beperkt schade én kan je premie verlagen.
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Veel verzekeraars geven korting of betere voorwaarden als je aantoonbaar goede preventiemaatregelen neemt. Dat is veiliger én kan premie schelen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={fireImage} alt="Brandpreventie voor tiny house" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Flame className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Brand</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Houten constructie en kleine ruimtes maken brandrisico extra serieus.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Gebruik gekeurde rookmelders, bij voorkeur gekoppeld.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Laat kachels, hout- of pelletkachel en elektrische installaties door een professional aanleggen.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Zorg voor een blusdeken en kleine brandblusser binnen handbereik.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Inbraak & diefstal */}
          <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={securityImage} alt="Beveiliging en diefstalpreventie tiny house" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Inbraak & diefstal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Tiny houses staan soms afgelegen: zorg voor goede sloten, eventueel een alarmsysteem of camera.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Bij tiny houses op wielen: denk aan wielklem, disselslot en plaatsing uit het zicht.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Registreer dure spullen (serienummers) en maak foto's.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Storm & water */}
          <Card className="border-2 overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img src={weatherImage} alt="Bescherming tegen storm en waterschade" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CloudRain className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl">Storm & waterschade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Bevestig het tiny house goed aan de ondergrond (stormankers, degelijke fundering).</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Zorg dat dakbekleding, zonnepanelen en regenafvoer stormbestendig zijn.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Controleer of overstroming/hoogwater gedekt is – dat is niet altijd standaard.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 font-bold">✓</span>
                  <span>Voorkom lekkages door regelmatig onderhoud.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SafetySection;