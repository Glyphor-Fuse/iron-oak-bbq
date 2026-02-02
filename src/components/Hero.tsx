import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Utensils, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bbq.jpg"
          alt="Master pitmaster slicing brisket"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-block border-y border-white/20 py-1 text-sm font-medium tracking-[0.2em] text-accent uppercase backdrop-blur-sm">
          Est. 2024 • Austin, TX
        </span>
        <h1 className="mb-6 max-w-4xl font-serif text-5xl font-bold leading-tight tracking-tight sm:text-7xl md:text-8xl">
          IRON & OAK
          <span className="block text-primary">SMOKEHOUSE</span>
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-white/80 sm:text-xl font-light">
          Where urban industrial meets primitive fire. Experience the art of low and slow, 
          elevated for the modern palate.
        </p>
        
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 min-w-[200px] h-14 text-lg rounded-none tracking-widest uppercase">
            Book a Table
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black min-w-[200px] h-14 text-lg rounded-none tracking-widest uppercase bg-transparent">
            View Menu
          </Button>
        </div>

        {/* Feature badges */}
        <div className="absolute bottom-12 left-0 right-0 hidden justify-center gap-12 md:flex text-white/60">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-primary" />
            <span className="text-sm tracking-widest uppercase">Post Oak Smoked</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-sm tracking-widest uppercase">16-Hour Process</span>
          </div>
          <div className="flex items-center gap-2">
            <Utensils className="h-5 w-5 text-primary" />
            <span className="text-sm tracking-widest uppercase">Prime Heritage Meats</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
