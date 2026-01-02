export default function Hero({VideoSrc}){
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      
      {/* Video background */}
      <video 
        src={VideoSrc}
        muted
        autoPlay
        loop
        playsInline
        className="w-full h-screen object-cover"
      />
      
      {/* Floating content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3 text-white drop-shadow-lg">
            DIOR LUXURY STORE
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Elegance Modern Luxury
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="#shop" 
              className="px-6 py-2 bg-white/80 text-black font-semibold tracking-widest text-sm hover:bg-white transition-all duration-300 rounded"
            >
              Shop Now
            </a>
            
            <button className="px-6 py-2 bg-blue-500/80 text-white text-sm font-medium hover:bg-blue-600 transition-all duration-300 rounded">
              Get Started
            </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}
