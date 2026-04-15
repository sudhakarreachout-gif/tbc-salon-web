import Image from "next/image";

const stylists = [
  {
    name: "Ravi",
    role: "Senior Stylist",
    specialty: "Master Colorist",
    image: "/stylist-ravi.png",
    fallbackColor: "from-tbc-amber/20 to-tbc-wood/30"
  },
  {
    name: "Shruthi",
    role: "Bridal Specialist",
    specialty: "Makeup & Hair Artist",
    image: "/stylist-priya.png",
    fallbackColor: "from-tbc-neon-pink/20 to-tbc-bark/30"
  },
  {
    name: "Kiran",
    role: "Men's Expert",
    specialty: "Fade Specialist",
    image: null,
    fallbackColor: "from-tbc-neon-blue/20 to-tbc-warm-dark/40"
  },
  {
    name: "Sneha ",
    role: "Aesthetician",
    specialty: "Skin & Hair Care",
    image: null,
    fallbackColor: "from-tbc-plant/20 to-tbc-bark/30"
  }
];

export default function Stylists() {
  return (
    <section id="stylists" className="section-padding bg-tbc-warm-dark relative overflow-hidden">
      {/* Decorative Neon Blue Blur */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tbc-neon-blue rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="section-subtitle">Meet The Artists</p>
            <h2 className="section-title mt-2 text-tbc-white">
              THE <span className="neon-sign font-display lowercase tracking-normal text-5xl md:text-6xl">Talent</span> BEHIND <br className="hidden md:block"/> THE CHAIR.
            </h2>
          </div>
          <a href="#booking" className="btn-outline-light px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase shrink-0 hidden md:block">
            BOOK WITH YOUR STYLIST
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stylists.map((stylist, idx) => (
            <div key={idx} className="group relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-tbc-bark mb-6 border border-white/5 shadow-2xl transition-all duration-500 hover:border-tbc-neon-blue/30 group-hover:-translate-y-2">
                {stylist.image ? (
                  <Image
                    src={stylist.image}
                    alt={`${stylist.name} - ${stylist.role}`}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110 brightness-90 group-hover:brightness-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${stylist.fallbackColor}`}>
                    <span className="text-7xl font-black text-white/10 select-none">{stylist.name.charAt(0)}</span>
                  </div>
                )}
                
                {/* Floating Leaf on top corner of image */}
                <span className="absolute top-4 left-4 text-xl opacity-0 group-hover:opacity-100 transition-opacity delay-200">🌿</span>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-tbc-warm-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Instagram Button */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="#" className="w-12 h-12 bg-tbc-neon-pink/90 backdrop-blur-md flex items-center justify-center rounded-full text-white hover:scale-110 transition-transform shadow-lg border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-black text-tbc-white uppercase tracking-tighter">{stylist.name}</h3>
                <p className="text-tbc-neon-pink font-black text-[10px] tracking-[0.3em] uppercase mt-2">{stylist.role}</p>
                <div className="w-10 h-[2px] bg-tbc-wood/30 mx-auto my-4 group-hover:w-16 group-hover:bg-tbc-neon-blue transition-all duration-500"></div>
                <p className="text-tbc-muted text-sm font-bold tracking-wide">{stylist.specialty}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 md:hidden flex justify-center">
           <a href="#booking" className="btn-outline-light px-10 py-4 rounded-full text-sm font-black tracking-widest uppercase">
            BOOK WITH YOUR STYLIST
          </a>
        </div>
      </div>
    </section>
  );
}
