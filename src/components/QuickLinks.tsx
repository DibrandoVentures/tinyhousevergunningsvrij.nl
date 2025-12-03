import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Scale, Home, Truck, ListChecks, ChevronRight } from "lucide-react";

const quickLinks = [
  {
    icon: FileCheck,
    title: "Wanneer vergunningsvrij?",
    subtitle: "Voorwaarden voor ligging, hoogte en oppervlakte.",
    targetId: "voorwaarden",
  },
  {
    icon: Scale,
    title: "Bijgebouw vs. hoofdwoning",
    subtitle: "Juridische status bepaalt of vergunning nodig is.",
    targetId: "vergelijking",
  },
  {
    icon: Truck,
    title: "Tiny house op wielen",
    subtitle: "Wielen zijn geen vrijbrief voor vergunningsvrij.",
    targetId: "wielen",
  },
  {
    icon: Home,
    title: "Voorbeelden",
    subtitle: "Wel en niet vergunningsvrij uitgelegd.",
    targetId: "voorbeelden",
  },
  {
    icon: ListChecks,
    title: "Stappenplan",
    subtitle: "In 5 stappen jouw situatie checken.",
    targetId: "stappenplan",
  },
];

const QuickLinks = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Waarmee kunnen we je helpen?
          </h2>
          <p className="text-muted-foreground text-lg">
            Kies een onderwerp en ga direct naar het deel van de gids dat voor jou belangrijk is.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group rounded-2xl border-2"
              onClick={() => scrollToSection(link.targetId)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2 leading-tight">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 flex-grow">
                  {link.subtitle}
                </p>
                <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
