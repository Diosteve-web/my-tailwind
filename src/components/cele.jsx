import React from "react";
import { motion } from "framer-motion";

export default function CelebritySection({ celebs }) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
    visible: { 
      clipPath: "inset(0% 0% 0% 0%)", 
      scale: 1,
      transition: { duration: 1.5, ease: [0.19, 1, 0.22, 1] }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="py-32 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-[12px] tracking-[1em] text-amber-500/80 uppercase mb-6">Ambassadors</h2>
          <h3 className="text-6xl md:text-8xl font-light tracking-tighter italic">The Dior <span className="not-italic font-serif tracking-widest">LEGACY</span></h3>
        </motion.div>

        <div className="space-y-64">
          {celebs.map((celeb, index) => (
            <motion.div 
              key={celeb.id}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-16`}
            >
              {/* Image with Reveal Effect */}
              <div className="relative w-full md:w-[55%] overflow-hidden group">
                <motion.div variants={imageVariants} className="relative aspect-[16/10] md:aspect-[4/5]">
                   <img 
                    src={celeb.img} 
                    alt={celeb.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Overlay shadow for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </motion.div>
                
                {/* Floating Index Number */}
                <span className={`absolute top-0 ${index % 2 === 0 ? '-left-4' : '-right-4'} text-9xl font-serif text-white/5 select-none`}>
                  0{index + 1}
                </span>
              </div>

              {/* Staggered Text Content */}
              <div className="w-full md:w-[35%] space-y-8">
                <motion.div variants={textVariants}>
                  <p className="text-amber-500 text-xs tracking-[0.5em] uppercase mb-4">{celeb.event}</p>
                  <h4 className="text-4xl md:text-6xl font-extralight uppercase leading-tight tracking-widest">
                    {celeb.name.split(' ')[0]} <br />
                    <span className="font-serif italic pl-8">{celeb.name.split(' ')[1]}</span>
                  </h4>
                </motion.div>

                <motion.p variants={textVariants} className="text-zinc-400 text-lg font-light leading-relaxed border-l border-amber-500/30 pl-6 italic">
                  {celeb.story}
                </motion.p>

                <motion.div variants={textVariants} className="pt-6">
                   <a href="#" className="group relative inline-block overflow-hidden border border-white/20 px-12 py-4">
                      <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase group-hover:text-black transition-colors duration-500">View Collection</span>
                      <div className="absolute inset-0 bg-white translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                   </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}