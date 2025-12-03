import tinyWheelsCoupleImage from "@/assets/tiny-wheels-couple.jpg";

const WheelsImageSection = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <img 
            src={tinyWheelsCoupleImage} 
            alt="Koppel dat een tiny house op wielen betreedt in een natuurlijke omgeving" 
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WheelsImageSection;
