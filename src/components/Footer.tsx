import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="space-y-4">
          <img src={logo} alt="Rudra Unisex Salon" className="h-20 w-20 rounded-full object-cover" />
          <p className="text-sm text-muted-foreground">
            Premium unisex grooming for the modern you. Where style meets precision.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Mon–Sun: 8AM – 10PM</li>
            {/* <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> Sunday: 10AM – 6PM</li> */}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-gold" /> +91 8172931277</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-gold" /> Sec 104, Hajipur Gali no 3, Noida</li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="https://www.instagram.com/sharmamukesh6758" className="rounded-full border border-border p-2 text-muted-foreground hover:border-gold hover:text-gold"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full border border-border p-2 text-muted-foreground hover:border-gold hover:text-gold"><Facebook className="h-4 w-4" /></a>

          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rudra Unisex Salon. All rights reserved.
      </div>
    </footer>
  );
}
