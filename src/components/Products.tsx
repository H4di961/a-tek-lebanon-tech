import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Cable, Zap, Wind, Wrench, Tv } from "lucide-react";

// Import all product images
import lightBulbs from "@/assets/products/light-bulbs.png";
import outdoorLedLuminaire from "@/assets/products/outdoor-led-luminaire.png";
import ledFloodLight from "@/assets/products/led-flood-light.png";
import ledBatten from "@/assets/products/led-batten.png";
import recessedSpotlight from "@/assets/products/recessed-spotlight.png";
import lampHolder from "@/assets/products/lamp-holder.png";
import ledDriver from "@/assets/products/led-driver.png";
import pvcCable from "@/assets/products/pvc-cable.png";
import electricalCables from "@/assets/products/electrical-cables.png";
import hdmiCable from "@/assets/products/hdmi-cable.png";
import cableManagement from "@/assets/products/cable-management.png";
import flexibleConduit from "@/assets/products/flexible-conduit.png";
import thermalRelay from "@/assets/products/thermal-relay.png";
import lightSwitch from "@/assets/products/light-switch.png";
import extension from "@/assets/products/extension.png";
import voltageProtection from "@/assets/products/voltage-protection.png";
import transformer from "@/assets/products/transformer.png";
import powerAdapter from "@/assets/products/power-adapter.png";
import boxFan from "@/assets/products/box-fan.png";
import vent from "@/assets/products/vent.png";
import solderingIron from "@/assets/products/soldering-iron.png";
import networkTool from "@/assets/products/network-tool.png";
import ups from "@/assets/products/ups.png";
import satelliteReceiver from "@/assets/products/satellite-receiver.png";
import ringBell from "@/assets/products/ring-bell.png";

type Product = {
  name: string;
  image: string;
};

type ProductCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  products: Product[];
};

const productCategories: ProductCategory[] = [
  {
    id: "lighting",
    title: "Lighting",
    icon: <Lightbulb className="h-5 w-5" />,
    products: [
      { name: "Light Bulbs", image: lightBulbs },
      { name: "Outdoor LED Luminaire", image: outdoorLedLuminaire },
      { name: "LED Flood Lights", image: ledFloodLight },
      { name: "LED Battens", image: ledBatten },
      { name: "Mini Recessed Spotlights", image: recessedSpotlight },
      { name: "Lamp Holder", image: lampHolder },
      { name: "100W Driver Megaman", image: ledDriver },
    ],
  },
  {
    id: "cables",
    title: "Cables & Wiring",
    icon: <Cable className="h-5 w-5" />,
    products: [
      { name: "PVC Cable", image: pvcCable },
      { name: "Electrical Cables", image: electricalCables },
      { name: "HDMI Cables", image: hdmiCable },
      { name: "Cable Management Systems", image: cableManagement },
      { name: "Flexible Conduit Spiraled Sheath", image: flexibleConduit },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Components",
    icon: <Zap className="h-5 w-5" />,
    products: [
      { name: "Thermal Overload Relay", image: thermalRelay },
      { name: "Light Switches", image: lightSwitch },
      { name: "Extension", image: extension },
      { name: "Voltage Protection", image: voltageProtection },
      { name: "Universal Transformer", image: transformer },
      { name: "Power Adapter", image: powerAdapter },
    ],
  },
  {
    id: "ventilation",
    title: "Ventilation",
    icon: <Wind className="h-5 w-5" />,
    products: [
      { name: "Box Fan", image: boxFan },
      { name: "Vents", image: vent },
    ],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    icon: <Wrench className="h-5 w-5" />,
    products: [
      { name: "Soldering Iron", image: solderingIron },
      { name: "Network Tool", image: networkTool },
    ],
  },
  {
    id: "electronics",
    title: "Electronics & Home",
    icon: <Tv className="h-5 w-5" />,
    products: [
      { name: "Multi Function UPS", image: ups },
      { name: "Digital Satellite Receiver", image: satelliteReceiver },
      { name: "Ring Bell", image: ringBell },
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Products</h2>
          <p className="text-muted-foreground">Quality tech solutions for your home and business</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" defaultValue={["lighting"]} className="space-y-4">
            {productCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="bg-card border rounded-lg px-4 shadow-sm"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-primary">{category.icon}</span>
                    <span className="font-semibold text-foreground">{category.title}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      ({category.products.length} products)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                    {category.products.map((product, index) => (
                      <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="p-3">
                          <h3 className="font-medium text-sm text-foreground text-center">
                            {product.name}
                          </h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Products;
