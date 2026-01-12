import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "Home Security Cameras",
    description: "Indoor and outdoor surveillance systems",
    image: "/placeholder.svg",
  },
  {
    title: "Smart Lighting",
    description: "WiFi-enabled bulbs and fixtures",
    image: "/placeholder.svg",
  },
  {
    title: "LED Light Fixtures",
    description: "Energy-efficient home lighting",
    image: "/placeholder.svg",
  },
  {
    title: "Surveillance Systems",
    description: "Complete security packages",
    image: "/placeholder.svg",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Our Products</h2>
          <p className="text-muted-foreground">Quality tech solutions for your home</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-square bg-muted flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 opacity-50"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
