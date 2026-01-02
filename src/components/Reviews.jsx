import React from "react";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#F9F9F9] py-32 border-t border-border">
      <div className="container mx-auto px-6">
        
        {/* Header with Gold Accents */}
        <div className="text-center mb-20">
          <p className="font-body text-[10px] tracking-[0.6em] uppercase text-[#A68966] mb-4">
            L'Art de Recevoir
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-[#1A1A1A] font-light">
            Guest <span className="italic">Notes</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#A68966] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group flex flex-col items-center text-center">
              {/* Star Rating in Muted Gold */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#A68966] text-[#A68966] opacity-70" />
                ))}
              </div>

              {/* Review Text in Dior Charcoal */}
              <p className="font-display text-lg text-[#333333] leading-relaxed italic mb-8">
                "The attention to detail and the quality of the materials are a testament to the Maison's savoir-faire."
              </p>

              {/* Author in Clean Typography */}
              <div className="space-y-2">
                <p className="font-body text-[11px] tracking-[0.3em] uppercase font-bold text-[#1A1A1A]">
                  Client No. 00{item}
                </p>
                <p className="font-body text-[9px] tracking-widest text-[#999999] uppercase">
                  Verified Purchase • Paris
                </p>
              </div>
              
              {/* Subtle hover line */}
              <div className="mt-8 w-0 group-hover:w-10 h-[1px] bg-[#A68966] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}