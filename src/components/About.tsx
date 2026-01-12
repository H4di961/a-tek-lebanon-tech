import { MapPin, Wrench, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">About A-tek</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A-tek is a small, family-run tech store based in Ghazir, Lebanon. We specialize in providing 
              quality home security cameras, surveillance systems, and lighting solutions including smart bulbs, 
              home lights, and LED fixtures. Whether you're looking to secure your home or brighten up your 
              living space, we have the right products for you.
            </p>
            <p>
              Beyond sales, we offer professional at-home repair and installation services. If you need help 
              setting up your new camera system or fixing an electrical issue, our experienced team will come 
              directly to your location to get the job done right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-card p-6 rounded-xl border border-border">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Local Store</h3>
              <p className="text-sm text-muted-foreground">Based in Ghazir, Lebanon</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <Wrench className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">At-Home Service</h3>
              <p className="text-sm text-muted-foreground">Repairs & installations</p>
            </div>
            <div className="bg-card p-6 rounded-xl border border-border">
              <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">Quality Products</h3>
              <p className="text-sm text-muted-foreground">Cameras & lighting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
