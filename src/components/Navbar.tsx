import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 flex items-center justify-between">
        <a href="/" className="font-serif text-2xl font-bold tracking-widest text-white">
          IRON <span className="text-primary">&</span> OAK
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Our Story", "Menu", "Process", "Location"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button size="sm" className="bg-primary text-white rounded-none uppercase tracking-wider px-6">
            Order Pickup
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-black border-b border-white/10 md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-2">
           {["Our Story", "Menu", "Process", "Location"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium uppercase tracking-widest text-white hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button className="w-full bg-primary text-white rounded-none uppercase tracking-wider mt-4">
            Order Pickup
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
