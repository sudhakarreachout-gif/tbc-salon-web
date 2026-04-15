export default function Booking() {
  return (
    <section id="booking" className="section-padding bg-tbc-cream relative overflow-hidden">
      {/* Decorative Stripe Background */}
      <div className="absolute inset-0 stripe-bg opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10 px-4">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-tbc-neon-pink/10 border border-tbc-neon-pink/30 rounded-full px-5 py-2 mb-6 font-black tracking-[0.2em] text-[10px] text-tbc-neon-pink uppercase shadow-[0_0_20px_rgba(255,61,173,0.15)] animate-pulse">
            <span className="w-2 h-2 rounded-full bg-tbc-neon-pink"></span>
            Open Until 10PM Everyday
          </div>
          <h2 className="section-title text-tbc-ink flex items-baseline justify-center gap-3">
            <span>RESERVE</span>
            <span className="neon-sign font-display lowercase tracking-normal text-4xl md:text-6xl transform -translate-y-1">Your</span> 
            <span>SLOT.</span>
          </h2>
          <p className="mt-6 text-tbc-muted text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Experience the vibrant vibe at <span className="font-display text-tbc-neon-pink text-2xl lowercase tracking-normal ml-1">The Barber Club</span>. Reserve instantly through Noona or drop by.
          </p>
        </div>

        {/* The "Vibrant" Booking Container */}
        <div className="relative p-1.5 rounded-3xl bg-gradient-to-br from-tbc-neon-pink via-[#FF3DAD88] to-tbc-neon-blue shadow-[0_30px_100px_rgba(255,61,173,0.25)]">
          <div className="bg-tbc-warm-dark rounded-[calc(1.5rem-6px)] p-4 sm:p-10 overflow-hidden relative min-h-[600px] flex flex-col items-center justify-center border border-white/5">
            
            {/* Plant Accents inside the dark container for that real TBC vibe */}
            <span className="absolute top-6 left-6 text-4xl opacity-40 animate-float hidden md:block">🌿</span>
            <span className="absolute bottom-6 right-6 text-3xl opacity-30 animate-[float_5s_infinite] hidden md:block">🪴</span>

            {/* 
              IMPORTANT FOR USER:
              Replace the 'YOUR_NOONA_EMBED_URL' with the actual Noona booking page widget URL. 
            */}
            {/* <iframe 
              src="YOUR_NOONA_EMBED_URL" 
              className="w-full h-[600px] border-0 rounded-2xl"
              title="TBC Salon Booking"
              loading="lazy"
            ></iframe> */}

            {/* Interactive Placeholder */}
            <div className="text-center p-10 border-2 border-dashed border-white/10 rounded-2xl w-full max-w-lg bg-tbc-bark shadow-inner relative z-10">
              <div className="w-20 h-20 rounded-full bg-tbc-neon-pink/10 flex items-center justify-center mx-auto mb-8 border border-tbc-neon-pink/40 shadow-[0_0_30px_rgba(255,61,173,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF3DAD" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-tbc-white font-black text-2xl mb-4 tracking-tight uppercase">Booking Portal</h3>
              <p className="text-tbc-muted text-sm font-medium mb-10 leading-relaxed">
                Our AI-driven booking system is almost ready. For the smoothest experience, use the quick links below.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-pink w-full py-4 rounded-full text-xs font-black tracking-[0.2em] flex justify-center items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  WHATSAPP US
                </a>
                <a href="tel:+91XXXXXXXXXX" className="btn-outline-light w-full py-4 rounded-full text-xs font-black tracking-[0.2em] flex justify-center items-center gap-3 border-white/20">
                  CALL SALON
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Floating Plants */}
        <span className="absolute -bottom-10 left-1/4 text-5xl opacity-30 animate-float">🪴</span>
        <span className="absolute -bottom-8 right-1/4 text-4xl opacity-20 animate-[float_7s_infinite]">🌿</span>
      </div>
    </section>
  );
}
