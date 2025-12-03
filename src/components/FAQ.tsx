import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Kan ik mijn tiny house bij iedere verzekeraar verzekeren?",
  answer: "Niet iedere verzekeraar biedt dekking voor tiny houses. Sommige verzekeraars zien tiny houses als te afwijkend van standaard woningen. Het is belangrijk om vooraf goed te informeren of de verzekeraar ervaring heeft met tiny houses en of ze bereid zijn om jouw specifieke situatie te dekken. Gespecialiseerde adviseurs kunnen helpen bij het vinden van de juiste verzekeraar."
}, {
  question: "Is mijn tiny house een woonhuis of recreatiewoning?",
  answer: "Dit hangt af van het bestemmingsplan en of je permanent in het tiny house woont. Als je ingeschreven staat op het adres en er permanent woont, wordt het vaak als woning gezien. Bij recreatief gebruik op een vakantiepark of zonder woonbestemming, wordt het meestal als recreatiewoning verzekerd. Dit heeft invloed op de voorwaarden en premie van je verzekering."
}, {
  question: "Hoe zit het met een tiny house op wielen en de verzekering?",
  answer: "Een tiny house op wielen wordt vaak verzekerd als stacaravan of chalet in plaats van als woning. Je hebt naast de opstal- en inboedelverzekering mogelijk ook een WA-verzekering nodig voor de trailer. Schade tijdens transport is niet altijd automatisch gedekt, dus let goed op de voorwaarden. Ook de beveiliging (wielklem, GPS) en de standplaats zijn belangrijk voor de verzekering."
}, {
  question: "Zijn zonnepanelen op mijn tiny house automatisch meeverzekerd?",
  answer: "Zonnepanelen vallen meestal onder de opstalverzekering als ze vast op het dak gemonteerd zijn. Echter, niet alle verzekeringen dekken zonnepanelen standaard of volledig. Controleer de polisvoorwaarden en vraag eventueel om een aanvullende dekking voor zonnepanelen en thuisbatterijen, vooral omdat deze een aanzienlijke waarde kunnen vertegenwoordigen."
}, {
  question: "Heb ik naast een opstalverzekering ook een inboedelverzekering nodig?",
  answer: "Ja, dit wordt sterk aangeraden. De opstalverzekering dekt alleen het gebouw zelf (constructie, dak, installaties). Je inboedel (meubels, kleding, elektronica, keukenapparatuur) wordt alleen gedekt met een aparte inboedelverzekering. Omdat de waarde per vierkante meter in een tiny house vaak hoog is, is goede inboedeldekking extra belangrijk."
}, {
  question: "Kan ik ook zonder woonbestemming verzekerd worden?",
  answer: "Dit kan, maar niet bij alle verzekeraars. Zonder woonbestemming wordt je tiny house vaak gezien als recreatiewoning of bijgebouw. De verzekering kan dan andere voorwaarden hebben, zoals beperkingen in gebruik, hogere premies of specifieke eisen aan de locatie. Het is belangrijk om transparant te zijn over je situatie richting de verzekeraar."
}, {
  question: "Ben ik verzekerd als ik mijn tiny house via Airbnb verhuur?",
  answer: "Standaard is verhuur vaak niet meeverzekerd in een reguliere opstal- of inboedelverzekering. Je moet dit altijd melden bij je verzekeraar. Er zijn speciale verhuurmodules of aanvullende dekkingen beschikbaar, maar deze gaan vaak gepaard met hogere premies en extra eisen (zoals brandveiligheid en onderhoud). Schade door huurders kan specifieke dekking vereisen."
}, {
  question: "Wat als mijn tiny house compleet verloren gaat door brand of storm?",
  answer: "Bij een totaalverlies keert de verzekeraar de verzekerde herbouwwaarde uit (of de nieuwwaarde, afhankelijk van je polis). Het is daarom cruciaal om de juiste herbouwwaarde te verzekeren. Bij onderverzekering krijg je mogelijk niet genoeg uitgekeerd om een nieuw tiny house te bouwen. Sommige polissen bieden een 'garantie tegen onderverzekering' aan, wat extra zekerheid biedt."
}];
const FAQ = () => {
  return <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            FAQ Tiny house verzekeren
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Antwoorden op de meest gestelde vragen over tiny house verzekeringen
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
};
export default FAQ;