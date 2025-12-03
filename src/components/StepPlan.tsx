import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";
const steps = [{
  number: 1,
  title: "Bepaal wat je precies hebt",
  description: "Inventariseer het type tiny house, wel/geen wielen, materialen en gebruik (permanent wonen of recreatief).",
  details: ["Is het een tiny house op wielen of vast fundament?", "Welke materialen zijn gebruikt?", "Woon je er permanent of recreatief?"]
}, {
  number: 2,
  title: "Bepaal de waarde",
  description: "Bereken de herbouwwaarde en schat de waarde van je inboedel realistisch in.",
  details: ["Herbouwwaarde: wat kost het om te herbouwen?", "Inboedelwaarde: tel alle spullen bij elkaar op", "Houd rekening met inflatie en prijsstijgingen"]
}, {
  number: 3,
  title: "Check regels & bestemming",
  description: "Controleer het bestemmingsplan, of je ingeschreven bent en welke lokale regels er gelden.",
  details: ["Bestemmingsplan: wonen of recreatie?", "Ben je ingeschreven in de gemeente?", "Zijn er bijzondere lokale voorschriften?"],
  link: {
    text: "Meer over regels op tinyhousewoonregels.nl",
    url: "https://tinyhousewoonregels.nl"
  }
}, {
  number: 4,
  title: "Vergelijk offertes en voorwaarden",
  description: "Haal offertes op bij meerdere verzekeraars en adviseurs. Let goed op dekking, eigen risico en uitsluitingen.",
  details: ["Vraag minimaal 3 offertes aan", "Vergelijk niet alleen de prijs, maar ook de voorwaarden", "Let op uitsluitingen en beperkingen"]
}, {
  number: 5,
  title: "Polis afsluiten en up-to-date houden",
  description: "Sluit de polis af en pas deze aan bij verhuizing, uitbreiding of een andere manier van gebruiken.",
  details: ["Meld wijzigingen altijd direct", "Bij verhuizing: nieuwe locatie doorgeven", "Bij verbouwing of uitbreiding: waarde aanpassen"]
}];
const StepPlan = () => {
  return <section id="stappenplan" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
             Stappenplan: in 5 stappen je tiny house verzekeren
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Volg dit stappenplan voor een goed verzekerd tiny house
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>)}
                    </ul>
                    {step.link && <a href={step.link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 text-sm font-medium">
                        {step.link.text}
                        <ExternalLink className="h-4 w-4" />
                      </a>}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default StepPlan;