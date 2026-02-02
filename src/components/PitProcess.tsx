import { Card, CardContent } from "@/components/ui/card";

const PitProcess = () => {
  const steps = [
    {
      id: "01",
      title: "The Wood",
      description: "We source seasoned Post Oak from Central Texas. Aged for 12 months, it burns clean and hot, imparting a subtle, vanilla-laced smoke profile that doesn't overpower the meat.",
      image: "/images/process-wood.jpg",
      align: "left"
    },
    {
      id: "02",
      title: "The Fire",
      description: "Lighting the offset smoker is a ritual. We maintain a steady 225°F using only airflow and log management. No gas, no shortcuts. Just primitive physics and patience.",
      image: "/images/process-fire.jpg",
      align: "right"
    },
    {
      id: "03",
      title: "The Cut",
      description: "Prime Black Angus brisket, trimmed to aerodynamic perfection. A simple rub of coarse black pepper and kosher salt allows the beef and smoke to speak for themselves.",
      image: "/images/process-smoke.jpg",
      align: "left"
    }
  ];

  return (
    <section className="bg-background py-24 text-foreground relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold uppercase tracking-tight md:text-5xl">
            Pit to Plate
          </h2>
          <div className="mx-auto h-1 w-24 bg-primary" />
          <p className="mt-4 text-muted-foreground">The alchemical transformation of simple ingredients.</p>
        </div>

        <div className="relative space-y-24">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2" />

          {steps.map((step) => (
            <div key={step.id} className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 group relative">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                  
                  {/* Step Number Overlay */}
                  <div className="absolute -top-6 -left-6 z-10 hidden md:flex h-24 w-24 items-center justify-center bg-primary text-4xl font-bold text-white shadow-xl">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="md:hidden mb-4 text-primary font-bold text-6xl opacity-20">{step.id}</div>
                <h3 className="mb-4 font-serif text-3xl font-bold text-foreground">{step.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PitProcess;
