import React, { useState, useEffect } from "react";
import { useStore } from "../stores.js"; // Adjusted path to point to src/stores.js

export default function Tag({ shopData }) {
  const [starIndex, setStarIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const addToCart = useStore((state) => state.addToCart);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(shopData.length / itemsPerSlide);

  const handleAddToCart = (item) => {
    // FIX: Normalize the data so it matches what CartPage expects
    const product = {
      id: item.id,
      name: item.name || item.title,
      description: item.description || item.desc,
      price: item.price,
      image: item.img || item.image // Handle both image keys
    };
    
    addToCart(product);
    // The alert you requested
    alert(`${product.name} added to cart! 🛒`);
  };

  const nextStar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection('next');
      setStarIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      nextStar();
    }, 4000); // Slower interval for better UX
    return () => clearInterval(id);
  }, [starIndex]);

  const startIdx = starIndex * itemsPerSlide;
  const currentItems = shopData.slice(startIdx, startIdx + itemsPerSlide);

  return (
    <section className="min-h-screen scroll-mt-28 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>

      {/* Header */}
      <div className="relative z-10 mb-20">
        <div className="text-center">
          <p className="text-xs tracking-[0.5em] text-gray-400 font-light mb-6 uppercase">Discover Excellence</p>
          <h2 className="text-6xl md:text-8xl text-center tracking-[0.4em] font-extralight mb-6 text-white">ATELIER</h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/40"></div>
            <div className="w-1.5 h-1.5 bg-white rotate-45"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          <p className="text-sm tracking-[0.4em] text-gray-400 font-light italic">Couture Collection</p>
        </div>
      </div>

      {/* Grid Slider */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <div
            key={starIndex}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${
              isAnimating 
                ? direction === 'next' ? 'opacity-0 translate-x-20' : 'opacity-0 -translate-x-20'
                : 'opacity-100 translate-x-0'
            }`}
          >
            {currentItems.map((item, index) => (
              <div
                key={startIdx + index}
                className="group overflow-hidden rounded-sm shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-500 transform hover:-translate-y-3 bg-zinc-900 border border-zinc-800"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="w-full py-3 bg-white text-black tracking-widest text-sm uppercase font-light hover:bg-zinc-900 hover:text-white hover:border hover:border-white transition-all duration-300"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-5 py-2 border border-amber-400/30">
                    <span className="text-sm tracking-wider text-amber-400 font-light">₦{item.price.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-6 bg-zinc-900">
                  <h3 className="text-xl md:text-2xl tracking-wider font-light mb-3 text-white uppercase group-hover:text-amber-400 transition-colors duration-300">
                    {item.title || item.name}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm font-light line-clamp-2 mb-4">
                    {item.desc || item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-3 mt-20">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating && index !== starIndex) {
                  setIsAnimating(true);
                  setDirection(index > starIndex ? 'next' : 'prev');
                  setStarIndex(index);
                  setTimeout(() => setIsAnimating(false), 700);
                }
              }}
              className={`transition-all duration-300 ${
                index === starIndex
                  ? 'w-16 h-0.5 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.5)]'
                  : 'w-10 h-0.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}