export default function Features({ future }) {
  return (
    <>
      <section
        id="features"
        className="min-h-screen scroll-mt-28 bg-black text-white py-20"
      >
        {/* Animated Title */}
        <div className="overflow-hidden mb-16">
          <h2 className="text-center text-3xl md:text-5xl tracking-wider font-semibold animate-fade-in-up">
            Collection
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mt-4 animate-expand"></div>
        </div>

        {/* Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-7xl mx-auto">
          {future.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-700 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              
              {/* overlay with gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"></div>
              
              {/* text with slide-up animation */}
              <div className="absolute bottom-10 left-8 z-10 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl md:text-3xl tracking-widest font-semibold mb-2 text-white drop-shadow-lg">
                  {item.title}
                </h3>
                <p className="text-gray-300 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.desc}
                </p>
                
                {/* Animated underline */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-white mt-3 transition-all duration-500 delay-200"></div>
              </div>

              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-expand {
          animation: expand 1s ease-out 0.5s forwards;
          width: 0;
        }
      `}</style>
    </>
  )
}