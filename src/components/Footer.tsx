import { ExternalLink } from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  const currentYear = new Date().getFullYear();
  
  const externalLinks = [
    { name: "tinyhousewoonregels.nl", url: "https://tinyhousewoonregels.nl" },
    { name: "tinyhouseopwielen.nl", url: "https://tinyhouseopwielen.nl" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className={`bg-navy text-navy-dark py-12 border-t border-border ${className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">tinyhouseverzekeren.nl</h3>
            <p className="text-sm text-navy-dark/80">
              Onafhankelijke informatie over het verzekeren van tiny houses in Nederland.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("over")}
                className="block text-sm text-navy-dark/80 hover:text-primary transition-colors"
              >
                Over deze site
              </button>
              <button
                onClick={() => scrollToSection("over")}
                className="block text-sm text-navy-dark/80 hover:text-primary transition-colors"
              >
                Disclaimer
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Gerelateerde sites</h4>
            <div className="space-y-2">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-navy-dark/80 hover:text-primary transition-colors"
                >
                  {link.name}
                  <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/20 text-center text-sm text-navy-dark/60">
          <p>© {currentYear} tinyhouseverzekeren.nl - Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
