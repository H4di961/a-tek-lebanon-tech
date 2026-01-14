import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Cable, Zap, Wind, Wrench, Tv, ImageIcon } from "lucide-react";

type Product = {
  name: string;
  image?: string;
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
      { name: "Light Bulbs" },
      { name: "Outdoor LED Luminaire" },
      { name: "LED Flood Lights" },
      { name: "LED Battens" },
      { name: "Mini Recessed Spotlights" },
      { name: "Lamp Holder" },
      { name: "100W Driver Megaman" },
    ],
  },
  {
    id: "cables",
    title: "Cables & Wiring",
    icon: <Cable className="h-5 w-5" />,
    products: [
      { name: "PVC Cable" },
      { name: "Electrical Cables" },
      { name: "HDMI Cables" },
      { name: "Cable Management Systems" },
      { name: "Flexible Conduit Spiraled Sheath" },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Components",
    icon: <Zap className="h-5 w-5" />,
    products: [
      { name: "Thermal Overload Relay" },
      { name: "Light Switches" },
      { name: "Extension" },
      { name: "Voltage Protection" },
      { name: "Universal Transformer" },
      { name: "Power Adapter" },
    ],
  },
  {
    id: "ventilation",
    title: "Ventilation",
    icon: <Wind className="h-5 w-5" />,
    products: [
      { name: "Box Fan" },
      { name: "Vents" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Equipment",
    icon: <Wrench className="h-5 w-5" />,
    products: [
      { name: "Soldering Iron" },
      { name: "Network Tool" },
    ],
  },
  {
    id: "electronics",
    title: "Electronics & Home",
    icon: <Tv className="h-5 w-5" />,
    products: [
      { name: "Multi Function UPS" },
      { name: "Digital Satellite Receiver" },
      { name: "Ring Bell" },
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
                        <div className="aspect-square bg-muted flex items-center justify-center">
                          {product.image ? (
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
                          )}
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
