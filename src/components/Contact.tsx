import { Mail, Phone, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Get in Touch</h2>
          <p className="text-muted-foreground mb-10">
            Have questions or need assistance? Reach out to us through any of these channels.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://wa.me/96103655768"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
                <p className="text-sm text-muted-foreground">79 362 800</p>
              </div>
            </a>
            
            <a
              href="mailto:sales@atekleb.com"
              className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">Email</p>
                <p className="text-sm text-muted-foreground">sales@atekleb.com</p>
              </div>
            </a>
            
            <a
              href="https://instagram.com/atek.lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border hover:border-primary hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-pink-500/10 rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5 text-pink-600" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">Instagram</p>
                <p className="text-sm text-muted-foreground">@atek.lebanon</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 bg-card p-5 rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Location</p>
                <p className="text-sm text-muted-foreground">Ghazir, Lebanon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
