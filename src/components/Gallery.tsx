import Image from "next/image";

const categories = [
  { id: "mens", name: "Men's Styling" },
  { id: "womens", name: "Women's Styling" },
  { id: "bridal", name: "Bridal & Event" },
  { id: "color", name: "Creative Color" }
];

const galleryItems = [
  { src: "/gallery-mens-fade.png", alt: "Men's fade haircut transformation at TBC Salon Madhapur", category: "mens", aspect: "aspect-[3/4]" },
  { src: "/gallery-womens-style.png", alt: "Women's hair styling and coloring at TBC Salon", category: "womens", aspect: "aspect-square" },
  { src: "/gallery-bridal.png", alt: "Bridal makeup and hair at TBC Salon Hyderabad", category: "bridal", aspect: "aspect-[4/5]" },
  { src: "/gallery-color.png", alt: "Creative hair coloring at TBC", category: "color", aspect: "aspect-square" },
  { src: "/hero.png", alt: "Salon interior showcase", category: "lifestyle", aspect: "aspect-square" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-tbc-warm-dark relative overflow-hidden">
      {/* Decorative Neon Pink Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tbc-neon-pink rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      
      {/* Floating Plant Accent */}
      <div className="absolute top-10 left-10 text-4xl opacity-20 animate-float hidden lg:block">🌿</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center md:text-left mb-12">
          <p className="section-subtitle">The Portfolio</p>
          <h2 className="section-title mt-2 text-tbc-white">
            OUR <span className="neon-blue font-display lowercase tracking-normal text-5xl md:text-6xl">Master</span>PIECES.
          </h2>
          <p className="mt-4 text-tbc-muted max-w-2xl text-lg">
            A vibrant showcase of precision, nature, and neon-lit artistry.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-12 text-tbc-white">
          <button className="px-6 py-2 rounded-full border border-tbc-neon-pink bg-tbc-neon-pink/10 text-white text-sm font-semibold tracking-wide shadow-[0_0_15px_rgba(255,61,173,0.2)]">
            All Work
          </button>
          {categories.map((cat) => (
            <button key={cat.id} className="px-6 py-2 rounded-full border border-white/10 hover:border-tbc-neon-pink/50 text-tbc-muted hover:text-white transition-all text-sm font-semibold tracking-wide">
              {cat.name}
            </button>
          ))}
        </div>

        {/* Improved Equal Alignment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {galleryItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-xl bg-tbc-bark border border-white/5 transition-all duration-500 hover:border-tbc-neon-pink/30 shadow-2xl">
              <div className={`relative w-full ${item.aspect}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Neon Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-tbc-warm-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="inline-block px-3 py-1 bg-tbc-neon-pink/80 backdrop-blur-md rounded border border-tbc-neon-pink/30 text-[10px] text-white font-black tracking-[0.2em] uppercase w-fit mb-3 shadow-lg">
                    {item.category}
                  </span>
                  <p className="text-white font-black text-lg tracking-tight leading-tight">
                    {item.alt.split(" showcase")[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://instagram.com/tbcsalonmadhapur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group text-tbc-muted hover:text-tbc-neon-pink font-black tracking-[0.2em] text-[10px] transition-all py-4 border-b border-transparent hover:border-tbc-neon-pink/50 uppercase">
            FOLLOW THE VIBE ON INSTAGRAM
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
      
      {/* Bottom Wood Divider */}
      <div className="absolute bottom-0 left-0 right-0 wood-divider opacity-30"></div>
    </section>
  );
}
