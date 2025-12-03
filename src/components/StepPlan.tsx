import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ExternalLink } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Bepaal jouw situatie",
    description: "Inventariseer wat je precies wilt en hoe je het tiny house gaat gebruiken.",
    details: [
      "Staat er al een hoofdwoning op het perceel?",
      "Wil je het tiny house gebruiken als kantoor/atelier, gastenverblijf/logeerplek, mantelzorg, of als echte woning?",
      "Wil je op wielen bouwen of vast op fundering?"
    ]
  },
  {
    number: 2,
    title: "Meet je perceel en plan uit",
    description: "Teken je erf globaal uit en bepaal waar je tiny house zou moeten komen.",
    details: [
      "Waar ligt de achtergevel van je woning?",
      "Wat is achtererfgebied?",
      "Waar zou je tiny house moeten komen?"
    ]
  },
  {
    number: 3,
    title: "Bereken hoeveel m² je nog vergunningsvrij hebt",
    description: "Tel alle bestaande bijgebouwen en vergelijk met wat er maximaal is toegestaan.",
    details: [
      "Tel alle bestaande bijgebouwen (schuur, veranda, garage, uitbouw)",
      "Vergelijk met wat er op jouw kavel maximaal aan bijgebouwen is toegestaan",
      "Blijft er ruimte over? Dan is er kans op vergunningsvrij bouwen"
    ]
  },
  {
    number: 4,
    title: "Check de regels van jouw gemeente",
    description: "Bekijk het omgevingsplan en let op specifieke lokale regels.",
    details: [
      "Woon- vs. recreatiebestemming",
      "Regels voor bijgebouwen",
      "Eventuele specifieke \"tiny house\"-regels"
    ],
    link: {
      text: "Meer over regels op tinyhousewoonregels.nl",
      url: "https://tinyhousewoonregels.nl"
    }
  },
  {
    number: 5,
    title: "Laat een vergunningscheck uitvoeren",
    description: "Laat je plan beoordelen door een expert voor zekerheid.",
    details: [
      "Vergunningsvrij of vergunningplichtig?",
      "Ontwerpaanpassingen om binnen vergunningsvrij te vallen (lager dak, kleiner oppervlak, andere plek)",
      "Eventuele vervolgstappen richting gemeente (vooroverleg, principeverzoek)"
    ]
  }
];

const StepPlan = () => {
  return (
    <section id="stappenplan" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stappenplan: in 5 stappen jouw tiny house (mogelijk) vergunningsvrij
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wil je weten of jouw plan vergunningsvrij kan? Gebruik dit stappenplan als leidraad.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    {step.link && (
                      <a
                        href={step.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 text-sm font-medium"
                      >
                        {step.link.text}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepPlan;