import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#F8F1E3]">

      {/* Salon photo — warm‑tinted overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="TBC Salon interior, Madhapur"
          fill
          priority
          unoptimized
          className="object-cover opacity-90 contrast-100 brightness-110"
        />
        {/* Slightly more opaque warm overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F1E3]/40 via-[#F8F1E3]/20 to-[#F8F1E3]/60" />
        {/* Soft diagonal stripe texture — reduced opacity */}
        <div className="absolute inset-0 stripe-bg opacity-10" />
      </div>

      {/* Floating decorative plants */}
      <span className="absolute top-28 left-6 text-6xl opacity-60 animate-[float_7s_ease-in-out_infinite] hidden lg:block select-none pointer-events-none">🌿</span>
      <span className="absolute top-40 right-8 text-5xl opacity-50 animate-[float_5s_ease-in-out_1s_infinite] hidden lg:block select-none pointer-events-none">🪴</span>
      <span className="absolute bottom-24 left-16 text-4xl opacity-40 animate-[float_8s_ease-in-out_2s_infinite] hidden lg:block select-none pointer-events-none">🌱</span>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center gap-6 animate-[fade-in-up_1s_ease_forwards] pt-24">

        {/* Neon-sign badge */}
        <div className="inline-flex items-center gap-2 bg-[#1E160A]/80 rounded-full px-5 py-2 mb-2 border border-[#FF3DAD]/30">
          <span className="w-2 h-2 rounded-full bg-[#FF3DAD] animate-pulse"></span>
          <span className="text-xs font-bold tracking-[0.25em] text-[#FF3DAD] uppercase">
            Open Every Day · Madhapur
          </span>
        </div>

        {/* Neon headline */}
        <h1 className="leading-tight">
          <span className="block text-[#1A1209] font-black text-5xl md:text-7xl tracking-tight uppercase">
            Where Style
          </span>
          <span
            className="block font-display text-5xl md:text-7xl"
            style={{
              color: "#FF3DAD",
              textShadow: "0 0 10px #FF3DAD, 0 0 30px #FF3DAD88",
            }}
          >
            Comes Alive
          </span>
        </h1>

        <p className="max-w-2xl text-lg text-[#2D261E] font-medium leading-relaxed">
          Hyderabad&apos;s most vibrant grooming studio — where neon meets nature, and every visit is a vibe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <a href="#booking" id="hero-book-btn" className="btn-pink px-8 py-4 rounded-full text-base inline-flex items-center gap-2">
            Book Your Appointment
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#gallery" className="btn-outline-dark px-8 py-4 rounded-full text-base">
            See Our Work
          </a>
        </div>

        {/* Stats strip */}
        <div className="flex divide-x divide-[#EDE3CF] mt-10 pt-10 border-t border-[#EDE3CF]">
          {[
            { n: "5k+", label: "Happy Clients" },
            { n: "4.9★", label: "Google Rating" },
            { n: "7", label: "Days a Week" },
          ].map((s) => (
            <div key={s.label} className="px-8 text-center first:pl-0 last:pr-0">
              <p className="text-3xl font-black text-[#1A1209]">{s.n}</p>
              <p className="text-xs uppercase tracking-widest text-[#7A6A58] font-bold mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll arrow */}
      <a href="#gallery" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 text-[#7A6A58] hover:text-[#FF3DAD] transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </a>
    </section>
  );
}
