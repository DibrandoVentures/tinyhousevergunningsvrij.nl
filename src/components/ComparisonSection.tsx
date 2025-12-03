import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building, ExternalLink, CheckCircle, XCircle } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section id="vergelijking" className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tiny house als bijgebouw vs. als hoofdwoning
          </h2>
          <p className="text-muted-foreground text-lg">
            Als het om vergunningsvrij gaat, is de juridische status van je tiny house het belangrijkste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bijgebouw */}
          <Card className="border-2 border-primary hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Home className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Tiny house als bijgebouw</CardTitle>
              <p className="text-sm text-muted-foreground">(bijbehorend bouwwerk)</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Je hebt al een hoofdwoning op het perceel, en je tiny house:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>staat op hetzelfde erf</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>is ondergeschikt aan de hoofdwoning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>wordt gebruikt als kantoor, hobbyruimte, logeerplek, mantelzorg, etc.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>wordt niet als zelfstandige woning verhuurd of permanent bewoond</span>
                </li>
              </ul>

              <div className="pt-4 border-t bg-primary/5 p-4 rounded-lg">
                <p className="font-semibold text-primary mb-2">Gevolg:</p>
                <p className="text-muted-foreground">
                  Als je ook aan de regels voor oppervlak, hoogte en ligging voldoet, kun je in veel gevallen <strong>vergunningsvrij</strong> bouwen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hoofdwoning */}
          <Card className="border-2 border-destructive hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <Building className="h-7 w-7 text-destructive" />
              </div>
              <CardTitle className="text-2xl mb-2">Tiny house als zelfstandige woning</CardTitle>
              <p className="text-sm text-muted-foreground">(hoofdwoning)</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Je tiny house is bedoeld als echte woning:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>je wilt je er inschrijven in de BRP</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>het is een aparte woning op een (nieuwe) kavel</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>of je wilt meerdere tiny houses als zelfstandige wooneenheden plaatsen</span>
                </li>
              </ul>

              <div className="pt-4 border-t bg-destructive/5 p-4 rounded-lg">
                <p className="font-semibold text-destructive mb-2">Gevolg:</p>
                <p className="text-muted-foreground mb-3">
                  Vrijwel altijd <strong>vergunningplichtig</strong>:
                </p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  <li>• omgevingsvergunning voor bouwen</li>
                  <li>• passende woonbestemming of wijziging van het omgevingsplan</li>
                  <li>• extra eisen aan veiligheid, brandcompartimentering, parkeren, etc.</li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3">
                  Wil je tiny houses als echte woningen realiseren? Kijk dan ook op:
                </p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://tinyhousevergunning.nl" target="_blank" rel="noopener noreferrer">
                      tinyhousevergunning.nl
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href="https://tinyhouse2026.nl" target="_blank" rel="noopener noreferrer">
                      tinyhouse2026.nl
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;