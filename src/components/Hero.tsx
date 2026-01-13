import { Camera, Wrench } from "lucide-react";
import atekLogo from "@/assets/atek-logo.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-secondary to-background py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-6">
          <img src={atekLogo} alt="A-tek Logo" className="h-24 md:h-32 w-auto" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Your Local Tech Store in Ghazir
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Home cameras, lighting solutions, and expert at-home repair services
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            <Camera className="w-4 h-4" />
            View Products
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
          >
            <Wrench className="w-4 h-4" />
            Request Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
