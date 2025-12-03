import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/tiny-house-hero.jpg";
import tinyCommunityImage from "@/assets/tiny-community.jpg";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="relative bg-hero-teal overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-hero-teal to-hero-teal-dark opacity-90"></div>
      
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Tiny house verzekeren: zo regel je het goed
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Woon je (straks) in een tiny house? Dan wil je dat jouw compacte droomhuis ook goed verzekerd is. 
              Tiny houses zijn vaak van hout, staan soms off-grid en niet altijd op een "standaard" woonlocatie – 
              dat maakt verzekeren nét even anders dan bij een gewone woning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection("verzekeringen")} className="bg-white text-hero-teal hover:bg-white/90 shadow-lg">
                Start met oriënteren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
            </div>

            <div className="space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">In deze gids ontdek je:</h3>
              <div className="flex flex-col gap-2">
                {[
                  "welke verzekeringen je nodig hebt voor je tiny house",
                  "wat het verschil is tussen op eigen grond en een tiny house op wielen",
                  "hoe je schade door brand, storm, inbraak en waterschade goed afdekt",
                  "wat verzekeraars precies willen weten voordat ze jouw tiny house accepteren",
                  "welke valkuilen en polisvoorwaarden belangrijk zijn",
                  "hoe het zit met verhuur, Airbnb en gebruik als recreatiewoning"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <img src={tinyCommunityImage} alt="Overzicht van een tiny house community met meerdere tiny houses op een veld" className="rounded-3xl shadow-2xl w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="h-12 bg-background rounded-t-[3rem] relative z-10"></div>
    </section>;
};
export default Hero;