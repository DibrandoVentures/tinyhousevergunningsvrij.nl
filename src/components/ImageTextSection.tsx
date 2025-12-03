import tinyInterieurImage from "@/assets/tiny-interieur.jpg";

const ImageTextSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-1 md:order-1">
            <img 
              src={tinyInterieurImage} 
              alt="Licht en modern interieur van een tiny house" 
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="order-2 md:order-2">
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              <strong>Tip:</strong> oriënteer je eerst goed op het soort tiny house dat bij je past. Op{" "}
              <a href="https://tinyhousescompleet.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                tinyhousescompleet.nl
              </a>{" "}
              vind je meer over types, bouw en prijzen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;