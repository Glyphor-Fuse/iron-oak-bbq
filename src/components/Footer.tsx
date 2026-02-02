import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
      <div className="container px-4">
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold tracking-widest text-primary">
              IRON & OAK
            </h2>
            <p className="text-white/60 max-w-sm leading-relaxed">
              Authentic Central Texas style barbecue in the heart of the city. 
              Honoring tradition, one log at a time.
            </p>
            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/5 rounded-none">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/5 rounded-none">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-primary hover:bg-white/5 rounded-none">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Info Column */}
          <div className="grid sm:grid-cols-2 gap-8 lg:col-span-1">
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-primary text-sm">Visit Us</h3>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <address className="not-italic">
                  804 Industrial Blvd<br />
                  District 4, Austin TX<br />
                  78701
                </address>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-widest text-primary text-sm">Hours</h3>
              <div className="flex items-start gap-3 text-white/80">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                <ul className="space-y-1">
                  <li><span className="w-12 inline-block font-bold">Wed-Fri:</span> 11am - Sold Out</li>
                  <li><span className="w-12 inline-block font-bold">Sat-Sun:</span> 10am - Sold Out</li>
                  <li className="text-white/40">Closed Mon & Tue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h3 className="font-bold uppercase tracking-widest text-primary text-sm">Join the Smoke Ring</h3>
            <p className="text-white/60">Get notified about special brisket drops and private events.</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-none h-12 focus-visible:ring-primary" 
              />
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-none h-12 px-6">
                Join
              </Button>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-wider">
          <p>&copy; 2024 Iron & Oak BBQ. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Catering</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
