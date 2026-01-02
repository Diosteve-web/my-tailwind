import { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    maison: [
      { label: "Our Heritage", href: "#" },
      { label: "Savoir-Faire", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Art & Culture", href: "#" },
    ],
    collections: [
      { label: "Haute Couture", href: "#" },
      { label: "Ready-to-Wear", href: "#" },
      { label: "Accessories", href: "#" },
      { label: "Beauty", href: "#" },
    ],
    services: [
      { label: "Client Care", href: "#" },
      { label: "Boutique Locator", href: "#" },
      { label: "Appointments", href: "#" },
      { label: "Gift Cards", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#F6F6F6] text-[#1A1A1A] border-t border-[#E5E5E5]">
      {/* Newsletter Section - Dior Silk Ivory Background */}
      <div className="container mx-auto px-6 py-24 border-b border-[#E5E5E5]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase text-[#A68966] mb-4 font-semibold">
            Newsletter
          </p>
          <h2 className="font-display text-4xl md:text-5xl mb-8 font-light italic text-[#1A1A1A]">
            Subscribe to the Maison
          </h2>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-6 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="YOUR EMAIL ADDRESS"
              className="flex-1 bg-transparent border-b border-[#1A1A1A]/20 py-3 text-[11px] tracking-widest placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#A68966] transition-colors font-body"
              required
            />
            <button className="group flex items-center justify-center gap-3 text-[10px] tracking-[0.4em] uppercase hover:text-[#A68966] transition-colors font-bold">
              {isSubscribed ? "THANK YOU" : "SUBSCRIBE"} 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="container mx-auto px-6 py-20 grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="font-body text-[10px] tracking-[0.4em] uppercase text-[#A68966] mb-10 font-bold">
              {category}
            </h4>
            <ul className="space-y-5">
              {links.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="font-body text-[12px] tracking-widest text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors relative inline-block group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A68966] group-hover:w-full transition-all duration-500"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar - Socials & Copyright */}
      <div className="bg-[#FFFFFF] border-t border-[#E5E5E5]">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-10">
            <Instagram size={18} className="text-[#1A1A1A]/40 hover:text-[#A68966] transition-colors cursor-pointer" />
            <Facebook size={18} className="text-[#1A1A1A]/40 hover:text-[#A68966] transition-colors cursor-pointer" />
            <Youtube size={18} className="text-[#1A1A1A]/40 hover:text-[#A68966] transition-colors cursor-pointer" />
          </div>
          
          <div className="text-center md:text-right">
             <p className="font-body text-[9px] tracking-[0.3em] text-[#1A1A1A]/40 uppercase mb-1">
               © {new Date().getFullYear()} CHRISTIAN DIOR LUXURY
             </p>
             <p className="font-body text-[8px] tracking-[0.2em] text-[#1A1A1A]/30 uppercase">
               Paris • London • New York • Tokyo
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;