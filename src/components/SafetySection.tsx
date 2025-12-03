import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

const SafetySection = () => {
  return (
    <section id="voorbeelden" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Voorbeelden: wél en níet vergunningsvrij
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Om het concreet te maken, drie voorbeelden uit de praktijk.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Voorbeeld 1 - Wel vergunningsvrij */}
          <Card className="border-2 border-primary overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle className="h-8 w-8 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Vaak wél vergunningsvrij</span>
              </div>
              <CardTitle className="text-xl">Kantoor/gastenverblijf in achtertuin</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground text-sm">
                Je hebt een vrij ruime achtertuin. Je wilt een tiny house van 24 m² plaatsen als kantoor/gastenverblijf, achter de woning, niet zichtbaar vanaf de straat.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Past binnen de maximale m² voor bijgebouwen</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Hoogte past binnen de toegestane hoogte</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>Geen zelfstandige bewoning of losse verhuur</span>
                </li>
              </ul>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-sm font-semibold text-primary">
                  Kans: Goed mogelijk dat dit (grotendeels) vergunningsvrij kan, zolang ontwerp en situering kloppen.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Voorbeeld 2 - Niet vergunningsvrij */}
          <Card className="border-2 border-destructive overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-destructive/10">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="h-8 w-8 text-destructive" />
                <span className="text-sm font-semibold text-destructive uppercase tracking-wide">Vaak níet vergunningsvrij</span>
              </div>
              <CardTitle className="text-xl">Tiny house als hoofdwoning op kavel</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground text-sm">
                Je koopt een losse kavel en wilt daarop een tiny house van 40 m² plaatsen als hoofdwoning, met inschrijving op dat adres.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Geen bestaande woning waaraan het ondergeschikt is</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span>Tiny house is je primaire woonhuis</span>
                </li>
              </ul>
              <div className="bg-destructive/10 p-4 rounded-lg">
                <p className="text-sm font-semibold text-destructive">
                  Kans: Vrijwel zeker vergunningplichtig (woningbouwproject). Vergunningsvrij bouwen is hier niet aan de orde.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Voorbeeld 3 - Grijs gebied */}
          <Card className="border-2 border-amber-500 overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="bg-amber-500/10">
              <div className="flex items-center gap-3 mb-2">
                <HelpCircle className="h-8 w-8 text-amber-600" />
                <span className="text-sm font-semibold text-amber-600 uppercase tracking-wide">Grijs gebied</span>
              </div>
              <CardTitle className="text-xl">Tiny house op wielen als "logeerplek"</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-muted-foreground text-sm">
                Je zet een tiny house op wielen in je achtertuin, 30 m², en zegt dat het "logeerplek" is, maar in de praktijk woon je er fulltime.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <HelpCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Technisch lijkt het op een bijgebouw, maar het gebruik is woning</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <HelpCircle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span>Gemeente kan bij controle stellen dat het feitelijk een tweede woning is</span>
                </li>
              </ul>
              <div className="bg-amber-500/10 p-4 rounded-lg">
                <p className="text-sm font-semibold text-amber-700">
                  Kans: Groot grijs gebied. Dit vraagt om een goede vergunningscheck en duidelijke afspraken met de gemeente.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;