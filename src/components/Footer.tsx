import Link from "next/link";
import { MoveRight, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="bg-tbc-warm-dark pt-24 pb-10 border-t border-tbc-beige/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-8 group">
              <span className="neon-sign text-4xl">TBC</span>
              <p className="text-[10px] font-black tracking-[0.4em] text-tbc-muted mt-2 uppercase group-hover:text-tbc-white transition-colors">
                The Barber Club
              </p>
            </Link>
            <p className="text-tbc-muted text-sm leading-relaxed mb-8 max-w-sm font-medium">
              Vibrant grooming artistry in the heart of Madhapur. Where neon nature meets precision craft.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/tbcsalonmadhapur" className="w-12 h-12 rounded-full bg-tbc-bark flex items-center justify-center text-tbc-muted hover:text-white hover:bg-tbc-neon-pink transition-all shadow-lg border border-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="tel:+91XXXXXXXXXX" className="w-12 h-12 rounded-full bg-tbc-bark flex items-center justify-center text-tbc-muted hover:text-white hover:bg-tbc-neon-blue transition-all shadow-lg border border-white/5">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="text-tbc-white font-black text-sm mb-8 uppercase tracking-[0.2em]">Explore</h4>
            <ul className="space-y-5">
              {['Services', 'Gallery', 'Stylists', 'About'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-tbc-muted hover:text-tbc-neon-pink text-xs font-bold tracking-[0.15em] flex items-center gap-3 group transition-all uppercase">
                    <span className="w-5 h-[1px] bg-tbc-muted group-hover:w-8 group-hover:bg-tbc-neon-pink transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-tbc-white font-black text-sm mb-8 uppercase tracking-[0.2em]">Visit Us</h4>
            <ul className="space-y-8">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-tbc-bark flex items-center justify-center shrink-0 border border-white/5 text-tbc-neon-pink group-hover:shadow-[0_0_15px_rgba(255,61,173,0.3)] transition-all">
                   <MapPin size={22} />
                </div>
                <span className="text-tbc-muted text-sm font-medium leading-[1.6]">
                  Shop No. X, Road Name,<br />
                  Madhapur, Hyderabad,<br />
                  Telangana 500081
                </span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-tbc-bark flex items-center justify-center shrink-0 border border-white/5 text-tbc-neon-blue group-hover:shadow-[0_0_15px_rgba(45,223,255,0.3)] transition-all">
                   <Phone size={22} />
                </div>
                <span className="text-tbc-muted text-sm font-medium leading-[1.6]">
                  +91 XX XXXX XXXX<br/>
                  Mon-Sun, 10am-10pm
                </span>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h4 className="text-tbc-white font-black text-sm mb-8 uppercase tracking-[0.2em]">Hours</h4>
            <div className="dark-card p-6 wood-border">
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-xs">
                  <span className="text-tbc-muted font-bold tracking-widest uppercase">Mon - Fri</span>
                  <span className="text-tbc-white font-black">10AM - 10PM</span>
                </li>
                <li className="flex justify-between items-center text-xs pt-4 border-t border-white/5">
                  <span className="text-tbc-neon-pink font-bold tracking-widest uppercase">Sat - Sun</span>
                  <span className="neon-pink font-black">10AM - 11PM</span>
                </li>
              </ul>
              <div className="mt-6 flex items-center justify-center gap-3 text-[10px] text-tbc-plant font-black uppercase tracking-[0.2em] bg-tbc-plant/10 py-2 rounded">
                 🌿 Walk-ins Welcome
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] text-tbc-muted uppercase">
          <p>&copy; {new Date().getFullYear()} TBC Salon Madhapur.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-tbc-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-tbc-white transition-colors">Terms</a>
            <a href="https://noona.is" target="_blank" className="hover:text-tbc-neon-blue transition-colors">Powered by Noona</a>
          </div>
        </div>
      </div>
      
      {/* Ghost text watermark */}
      <div className="absolute bottom-[-5%] left-0 right-0 overflow-hidden pointer-events-none select-none opacity-[0.03]">
        <p className="text-[12vw] font-black tracking-tighter text-center whitespace-nowrap text-white">THE BARBER CLUB</p>
      </div>
    </footer>
  );
}
