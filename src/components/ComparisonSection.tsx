import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Truck, ExternalLink } from "lucide-react";
const ComparisonSection = () => {
  return <section id="vergelijking" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tiny house op eigen grond vs. tiny house op wielen
          </h2>
          <p className="text-muted-foreground text-lg">
            Of je tiny house vast staat of op wielen is, maakt groot verschil voor de verzekering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tiny house op eigen grond */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Tiny house op eigen grond</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Wordt vaker verzekerd als (recreatie)woning of bijzonder woonobject.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Staat meestal op een vast fundament en heeft een duidelijke, vaste locatie.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span>Combineer de opstalverzekering van je tiny house met de verzekering van de grond of het perceel (bijvoorbeeld via een VvE of grondeigenaar).</span>
                </li>
              </ul>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Wil je meer weten over fundering, plaatsing en typen tiny houses? Kijk op tinyhousecompleet.nl voor een totaaloverzicht.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://tinyhousecompleet.nl" target="_blank" rel="noopener noreferrer">
                    Meer over types, bouw en kosten
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tiny house op wielen */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Tiny house op wielen (THOW)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Een tiny house on wheels (THOW) wordt door verzekeraars eerder vergeleken met:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>een stacaravan,</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>een chalet, of</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>in sommige gevallen een aanhangwagen/caravan (vooral tijdens transport).</span>
                </li>
              </ul>

              <div className="pt-3">
                <p className="font-semibold mb-3 text-foreground">Let bij tiny houses op wielen op:</p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>is de schade tijdens transport gedekt (bijvoorbeeld door een caravan- of transportverzekering);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>gelden er speciale beveiligingseisen (wielklem, disselslot, GPS-tracker);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>waar staat het tiny house als het niet rijdt? Die standplaats moet bekend zijn bij de verzekeraar.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Wil je dieper in tiny houses op wielen duiken, inclusief wet- en regelgeving en praktische tips? Ga naar tinyhouseopwielen.nl.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://tinyhouseopwielen.nl" target="_blank" rel="noopener noreferrer">
                    Alles over tiny houses op wielen
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default ComparisonSection;