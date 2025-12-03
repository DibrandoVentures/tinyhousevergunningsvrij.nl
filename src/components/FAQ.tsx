import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is een tiny house in mijn achtertuin automatisch vergunningsvrij?",
    answer: "Nee. Dat hangt af van de ligging, de grootte, de hoogte, het gebruik én hoeveel bijgebouwen je al hebt. In veel gevallen is er wel ruimte voor een compact tiny house als bijgebouw, maar dat moet per situatie bekeken worden."
  },
  {
    question: "Mag ik permanent in een vergunningsvrij tiny house wonen?",
    answer: "In de meeste gevallen niet. Vergunningsvrij bouwen gaat uit van een bijgebouw dat ondergeschikt is aan de hoofdwoning. Permanente bewoning als zelfstandige woning kan in strijd zijn met het omgevingsplan en kan tot handhaving leiden."
  },
  {
    question: "Is een tiny house op wielen vergunningsvrij?",
    answer: "Niet automatisch. Als het langdurig op één plek staat en als woning of logies functioneert, ziet de gemeente het vaak als bouwwerk. Dan gelden gewoon de bouw- en gebruiksregels."
  },
  {
    question: "Hoe weet ik of ik binnen de maximale m² voor bijgebouwen blijf?",
    answer: "Je moet de oppervlakte van alle bijgebouwen optellen en dit vergelijken met de maximale toegestane bebouwing op jouw erf. Deze info vind je in het omgevingsplan of kun je via een vergunningscheck laten uitzoeken."
  },
  {
    question: "Kan de gemeente achteraf nog optreden als ik vergunningsvrij dacht te bouwen?",
    answer: "Ja. Als achteraf blijkt dat jouw tiny house toch niet binnen de vergunningsvrije regels viel, kan de gemeente handhaven. Soms kun je alsnog een vergunning aanvragen, maar dat is niet gegarandeerd."
  },
  {
    question: "Verandert er iets in 2026 voor tiny houses?",
    answer: "Er komen geen simpele landelijke \"tiny house 2026-regels\" die alles in één klap anders maken. Wel passen gemeenten hun omgevingsplannen en beleid stap voor stap aan. Dat kan kansen bieden, maar blijft per gemeente verschillend. Blijf dus altijd de actuele regels checken."
  },
  {
    question: "Waar kan ik meer lezen over tiny house woonregels en vergunningen?",
    answer: "Op tinyhousewoonregels.nl vind je een overzicht van de belangrijkste regels, begrippen en stappen. Voor de vergunningsroute zelf kun je ook kijken op tinyhousevergunning.nl en tinyhouse2026.nl."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ Tiny house vergunningsvrij
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Antwoorden op de meest gestelde vragen over vergunningsvrij bouwen van tiny houses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;