import { Button } from "@/components/ui/button";

const MenuPreview = () => {
  const items = [
    {
      name: "Prime Brisket",
      price: "$18 / ½ lb",
      desc: "16-hour oak smoked, salt & pepper crust.",
      image: "/images/menu-brisket.jpg"
    },
    {
      name: "Dino Beef Rib",
      price: "$35 / lb",
      desc: "Massive bone-in short rib, rich and peppery.",
      image: "/images/menu-ribs.jpg"
    },
    {
      name: "Jalapeño Cheddar Link",
      price: "$8 / link",
      desc: "House-made sausage, sharp cheddar, fresh peppers.",
      image: "/images/process-smoke.jpg" // Reusing or need new one
    },
    {
      name: "Burnt Ends",
      price: "$16 / ½ lb",
      desc: "The point cut, double smoked, glazed in espresso BBQ.",
      image: "/images/process-fire.jpg"
    }
  ];

  return (
    <section className="bg-muted/30 py-24">
      <div className="container px-4">
        <div className="flex flex-col items-end justify-between gap-6 mb-12 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              DAILY PROVISIONS
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Served market style on butcher paper until sold out. 
              We recommend arriving early.
            </p>
          </div>
          <Button variant="link" className="text-primary hover:text-primary/80 underline-offset-4 text-lg h-auto p-0">
            View Full Menu &rarr;
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative mb-4 aspect-square overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white font-mono text-lg font-bold">
                  {item.price}
                </div>
              </div>
              <h3 className="mb-2 font-serif text-2xl font-bold">{item.name}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuPreview;
