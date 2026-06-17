import { ShieldAlert as Zap, ExternalLink, Copyright, Info } from 'lucide-react';

interface FooterProps {
  onPageChange: (pageId: string) => void;
  locations: { id: string; name: string }[];
}

export default function Footer({ onPageChange, locations }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    onPageChange(id);
  };

  return (
    <footer className="relative bg-[#020302] border-t border-zinc-900/80 text-zinc-400 py-16 sm:py-20 select-text z-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Upper grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-16 border-b border-zinc-900">
          
          {/* Brand Col 1 */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg group-hover:border-accent/40 transition-colors">
                <Zap className="w-5 h-5 text-accent animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[8px] tracking-[0.3em] text-accent leading-none mb-0.5">THE</span>
                <span className="font-sans font-bold text-sm text-white tracking-widest leading-none">
                  ELECTRIFIED <span className="text-accent">GARAGE</span>
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed max-w-sm">
              The world's premier independent EV engineering, servicing, and diagnostic workshop. Established by Right to Repair visionaries in 2019. We mended what others termed unrepairable.
            </p>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-[10px] text-zinc-600 leading-normal">
                Disclaimer: The Electrified Garage is an independent boutique service facility. Brand names, logos, or registrations (e.g. Tesla, Rivian, Lucid) are used for technical repair descriptive clarity and imply no official affiliation.
              </span>
            </div>
          </div>

          {/* Quick links Col 2 */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Facility Services</h4>
            <ul className="space-y-2.5">
              {['home', 'about', 'services', 'team', 'join-team', 'press', 'blog', 'training', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="hover:text-accent transition-colors uppercase font-medium tracking-wide text-[10px] cursor-pointer"
                  >
                    {item.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations links Col 3 */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Our Locations</h4>
            <ul className="space-y-2.5">
              {locations.map((loc) => {
                const id = `location-${loc.id}`;
                return (
                  <li key={loc.id}>
                    <button
                      onClick={() => handleNavClick(id)}
                      className="hover:text-accent text-zinc-400 font-light transition-colors cursor-pointer"
                    >
                      {loc.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Store links Col 4 */}
          <div className="lg:col-span-2 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] text-white uppercase tracking-widest font-bold">Official Store</h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://shop.electrifiedgarage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-light transition-colors inline-flex items-center gap-1 group cursor-pointer"
                >
                  Tesla Accessories
                  <ExternalLink className="w-3 h-3 text-zinc-650 group-hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://shop.electrifiedgarage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-light transition-colors inline-flex items-center gap-1 group cursor-pointer"
                >
                  EG Custom Merch
                  <ExternalLink className="w-3 h-3 text-zinc-655 group-hover:text-accent transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://shop.electrifiedgarage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent font-light transition-colors inline-flex items-center gap-1 group cursor-pointer"
                >
                  Service Accessories
                  <ExternalLink className="w-3 h-3 text-zinc-655 group-hover:text-accent transition-colors" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower credit bar */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[9px] text-zinc-600 uppercase tracking-widest">
          <div className="flex items-center gap-1 shrink-0">
            <Copyright className="w-3.5 h-3.5" />
            <span>{currentYear} The Electrified Garage. All Rights Reserved.</span>
          </div>
          <div>
            <span>Independent Pride • Engineered in the USA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
