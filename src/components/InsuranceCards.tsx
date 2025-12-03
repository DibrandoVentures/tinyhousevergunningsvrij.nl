import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, AlertTriangle, Shield, FileText } from "lucide-react";

const InsuranceCards = () => {
  return (
    <section id="wielen" className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Tiny house op wielen – telt dat als bouwwerk?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Veel mensen denken: "Als ik mijn tiny house op wielen zet, is het geen gebouw – dus vergunningsvrij." In de praktijk zien gemeenten dat vaak anders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Langdurig op één plek</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Staat je tiny house langdurig op één plek, met aansluitingen, terras en inrichting?
              </p>
              <p className="text-muted-foreground">
                Dan kan de gemeente het alsnog zien als een <strong>bouwwerk of woonunit</strong>, ondanks de wielen.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <AlertTriangle className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Gebruik als woning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Wordt het gebruikt als woning (ook al is het "tijdelijk"), dan valt het eerder onder <strong>woningregels</strong> dan onder "aanhanger".
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Recreatie- en vakantieparken</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ook op recreatie- of vakantieparken gelden <strong>parkvergunningen</strong> en eigen regels.
              </p>
              <p className="text-muted-foreground">
                Wielen zijn ook daar geen automatische vrijstelling van de regels.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2">
            <CardHeader>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-2xl mb-2">Conclusie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-semibold">
                Een trailer of wielen zijn géén vrijbrief.
              </p>
              <p className="text-muted-foreground">
                Ook een tiny house op wielen kan vergunningplichtig zijn of in strijd met het omgevingsplan.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg">
          <p className="text-muted-foreground">
            Wil je dieper in tiny houses op wielen duiken, inclusief verplaatsing en vervoer? Ga dan naar{" "}
            <a href="https://tinyhouseopwielen.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
              tinyhouseopwielen.nl
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCards;