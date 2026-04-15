"use client";
import { useState } from "react";

const serviceCategories = [
  {
    id: "hair",
    name: "Hair Styling",
    items: [
      { name: "Classic Haircut", desc: "Precision cut, wash, and style", price: "₹300+" },
      { name: "Premium Restyle", desc: "Complete makeover and consultation", price: "₹500+" },
      { name: "Keratin Treatment", desc: "Frizz-free, smooth, glossy finish", price: "₹3,500+" },
      { name: "Hair Spa", desc: "Deep conditioning and scalp massage", price: "₹800+" },
    ]
  },
  {
    id: "grooming",
    name: "Grooming",
    items: [
      { name: "Beard Trim & Sculpt", desc: "Line up, hot towel, oil treatment", price: "₹200+" },
      { name: "Classic Wet Shave", desc: "Straight razor, hot towel, aftershave", price: "₹250+" },
      { name: "D-Tan Treatment", desc: "Sunburn removal and skin brightening", price: "₹600+" },
      { name: "Express Facial", desc: "Quick cleanse, scrub, and moisturize", price: "₹500+" },
    ]
  },
  {
    id: "color",
    name: "Color Bar",
    items: [
      { name: "Global Color", desc: "Full head uniform color", price: "₹1,500+" },
      { name: "Highlights / Balayage", desc: "Custom dimensional coloring", price: "₹2,500+" },
      { name: "Root Touch-up", desc: "Gray blending or root matching", price: "₹800+" },
      { name: "Fashion Color", desc: "Vivid, non-traditional semi-permanent", price: "₹3,000+" },
    ]
  },
  {
    id: "bridal",
    name: "Bridal",
    items: [
      { name: "Bridal Package Premium", desc: "Complete D-Day hair and makeup", price: "₹15,000+" },
      { name: "Pre-Bridal Package", desc: "Multiple sessions covering skin & hair", price: "₹8,000+" },
      { name: "Party Makeup", desc: "Guest/bridesmaid styling", price: "₹3,500+" },
    ]
  }
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  return (
    <section id="services" className="section-padding bg-tbc-cream relative">
      <div className="absolute inset-0 stripe-bg opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <p className="section-subtitle">Price Menu</p>
          <h2 className="section-title mt-2 text-tbc-ink flex items-center justify-center gap-3">
            <span className="hidden sm:block">🌿</span> 
            <span className="neon-sign font-display lowercase tracking-normal text-5xl md:text-6xl mr-2">Premium</span> 
            SERVICES
          </h2>
          <p className="mt-4 text-tbc-muted max-w-2xl mx-auto text-lg font-medium">
            Transparent pricing for exceptional quality. Vibrant results from the best in Madhapur.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          
          {/* Custom Tabs */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-3 overflow-x-auto pb-6 lg:pb-0 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-8 py-5 rounded-lg transition-all whitespace-nowrap lg:whitespace-normal font-black tracking-[0.1em] uppercase text-xs border-l-4 shadow-sm ${
                  activeTab === cat.id 
                    ? "bg-tbc-warm-dark border-tbc-neon-pink text-white shadow-xl translate-x-1" 
                    : "bg-white border-tbc-beige text-tbc-muted hover:text-tbc-ink hover:border-tbc-wood"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Service List */}
          <div className="w-full lg:w-3/4">
            {serviceCategories.map((cat) => (
              <div 
                key={cat.id} 
                className={`${activeTab === cat.id ? "block animate-[fade-in-up_0.5s_ease]" : "hidden"}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="warm-card bg-tbc-linen p-8 flex flex-col justify-between group wood-border relative overflow-hidden">
                      {/* Subtile background leaf */}
                      <span className="absolute -top-4 -right-4 text-6xl opacity-[0.03] select-none pointer-events-none group-hover:scale-125 transition-transform duration-700">🌿</span>
                      
                      <div>
                        <div className="flex justify-between items-start gap-4 border-b border-tbc-beige pb-5 mb-5 relative z-10">
                          <h4 className="text-xl font-black text-tbc-ink tracking-tight">{item.name}</h4>
                          <span className="text-xl font-black text-tbc-amber whitespace-nowrap drop-shadow-sm">{item.price}</span>
                        </div>
                        <p className="text-tbc-muted text-sm font-medium leading-relaxed relative z-10">{item.desc}</p>
                      </div>
                      <div className="mt-10 relative z-10">
                        <a href="#booking" className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-tbc-ink hover:text-tbc-neon-pink transition-all group/btn">
                          BOOK THIS SERVICE 
                          <span className="ml-2 w-0 group-hover/btn:w-6 h-[2px] bg-tbc-neon-pink transition-all"></span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-4 rounded-lg bg-tbc-beige/40 border border-tbc-beige/60 text-[10px] text-center md:text-left text-tbc-muted font-bold uppercase tracking-[0.1em] flex items-center justify-center md:justify-start gap-2">
                  <span className="text-amber-600">★</span> Starting rates only. Final price depends on hair length and density.
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
