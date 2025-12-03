import tinyModernDeckImage from "@/assets/tiny-modern-deck.jpg";

const DeckImageSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <img 
            src={tinyModernDeckImage} 
            alt="Modern tiny house met houten terras in een groene omgeving" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DeckImageSection;
