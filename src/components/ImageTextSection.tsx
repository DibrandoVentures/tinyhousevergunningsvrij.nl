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
            <p className="text-muted-foreground text-lg leading-relaxed">
              Een tiny house is vaak compacter en uniek gebouwd. Het vraagt om een verzekering die past bij deze bijzondere woonvorm, met aandacht voor materiaal, locatie en gebruik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
