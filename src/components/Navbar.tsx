import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, MapPin, ShieldAlert as Zap, ExternalLink } from 'lucide-react';
import { ACCENT_COLORS } from '../App';

interface NavbarProps {
  currentPage: string;
  onPageChange: (pageId: string) => void;
  locations: { id: string; name: string }[];
  activeAccent: string;
  onAccentChange: (accentId: string) => void;
}

export default function Navbar({ 
  currentPage, 
  onPageChange, 
  locations, 
  activeAccent, 
  onAccentChange 
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Hover & mobile state managers for dropdown lists
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Past 80px shrinks the navbar
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Calculate the scroll progress of the container
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation categories (team, join-team, press, and blog are clean dropdown children of About)
  const mainMenuItems = [
    { id: 'home', name: 'Home' },
    { id: 'services', name: 'Services' },
    { id: 'training', name: 'Training' },
    { id: 'contact', name: 'Contact' },
  ];

  const aboutMenuItems = [
    { id: 'team', name: 'Our Team' },
    { id: 'join-team', name: 'Join Our Team' },
    { id: 'press', name: 'Press & Events' },
    { id: 'blog', name: 'Blog' },
  ];

  const handleNavClick = (id: string) => {
    onPageChange(id);
    setMobileMenuOpen(false);
    setLocationsOpen(false);
    setAboutOpen(false);
  };

  // Check if About or any of its submenu pages are active
  const isAboutActive = ['about', 'team', 'join-team', 'press', 'blog'].includes(currentPage);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-100 transition-all duration-350 ease-in-out ${
          scrolled
            ? 'h-16 bg-black/85 backdrop-blur-md border-b border-zinc-900 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'h-20 bg-transparent border-b border-transparent'
        }`}
      >
        {/* Dynamic dynamic theme-colored top progress bar */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-zinc-950 pointer-events-none">
          <div
            className="h-full bg-accent transition-all duration-75"
            style={{ 
              width: `${scrollProgress}%`,
              boxShadow: '0 0 10px var(--accent-color)'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
          {/* Logo Brand Title */}
          <div
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 cursor-pointer select-none group"
            id="nav-logo-btn"
          >
            <div className="relative p-2 rounded-lg bg-zinc-900 border border-zinc-800 transition-all duration-350 group-hover:border-accent/40 group-hover:shadow-[0_0_15px_var(--accent-color-glow)]">
              <Zap className="w-5 h-5 text-accent" />
              <div className="absolute inset-0 rounded-lg bg-accent/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-350" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-[8px] tracking-[0.3em] text-accent leading-none mb-0.5">THE</span>
              <span className="font-sans font-bold text-sm tracking-wide text-white leading-none">
                ELECTRIFIED <span className="text-accent">GARAGE</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Link Menu */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {/* Home category button */}
            <button
              onClick={() => handleNavClick('home')}
              className={`relative px-3.5 py-1.5 font-sans text-xs tracking-wide cursor-pointer transition-colors duration-200 uppercase font-medium ${
                currentPage === 'home' ? 'text-accent' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute bottom-[-4px] left-3.5 right-3.5 h-[1.5px] bg-accent"
                  style={{ boxShadow: '0 1px 10px var(--accent-color-glow)' }}
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>

            {/* Premium About Dropping Menu Category */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`flex items-center gap-1 px-3.5 py-1.5 cursor-pointer font-sans text-xs uppercase tracking-wide font-medium transition-colors duration-205 ${
                  isAboutActive ? 'text-accent' : 'text-zinc-400 hover:text-white'
                }`}
              >
                About <ChevronDown className={`w-3 h-3 transition-transform duration-250 ${aboutOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute left-0 mt-1 w-52 bg-zinc-950/95 backdrop-blur-lg border border-zinc-900 rounded-xl py-2 shadow-[0_10px_40px_rgba(0,0,0,0.95)] z-20"
                  >
                    <button
                      onClick={() => handleNavClick('about')}
                      className={`w-full text-left px-4 py-2.5 text-xs font-sans tracking-wide hover:bg-zinc-905 transition-colors duration-150 ${
                        currentPage === 'about' ? 'text-accent bg-zinc-900/50' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      Company Overview
                    </button>
                    <div className="mx-3.5 my-1.5 border-b border-zinc-900/80" />
                    {aboutMenuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-left px-4 py-2 text-xs font-sans tracking-wide hover:bg-zinc-900 transition-colors duration-150 ${
                          currentPage === item.id ? 'text-accent bg-zinc-900/50' : 'text-zinc-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Remainder main navigation layout */}
            {mainMenuItems.slice(1).map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-1.5 font-sans text-xs tracking-wide cursor-pointer transition-colors duration-200 uppercase font-medium ${
                    isActive ? 'text-accent' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-[-4px] left-3.5 right-3.5 h-[1.5px] bg-accent"
                      style={{ boxShadow: '0 1px 10px var(--accent-color-glow)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}

            {/* Premium Locations Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-1.5 cursor-pointer font-sans text-xs uppercase tracking-wide font-medium transition-colors duration-200 ${
                  currentPage.startsWith('location-') ? 'text-accent' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Locations <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-250 ${locationsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {locationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute right-0 mt-1 w-52 bg-zinc-950/95 backdrop-blur-lg border border-zinc-900 rounded-xl py-2 shadow-[0_10px_40px_rgba(0,0,0,0.9)] z-20"
                  >
                    <div className="px-3 py-1 text-[10px] font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-1.5 mb-1">
                      Our Service Centers
                    </div>
                    {locations.map((loc) => {
                      const id = `location-${loc.id}`;
                      const isActive = currentPage === id;
                      return (
                        <button
                          key={loc.id}
                          onClick={() => {
                            handleNavClick(id);
                            setLocationsOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-xs font-sans tracking-wide flex items-center gap-2 hover:bg-zinc-900 transition-colors duration-150 ${
                            isActive ? 'text-accent bg-zinc-900/50' : 'text-zinc-300 hover:text-white'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5 text-accent" />
                          {loc.name}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Dynamic Theme Selective Color tuning + External Store Link */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Elegant glassmorphism tuning panel */}
            <div className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-850 px-3 py-1.5 rounded-full select-none">
              <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">Accent</span>
              <div className="flex items-center gap-1.5">
                {ACCENT_COLORS.map((color) => {
                  const isSelected = activeAccent === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => onAccentChange(color.id)}
                      className="relative w-3.5 h-3.5 rounded-full transition-transform duration-200 hover:scale-125 focus:outline-none flex items-center justify-center cursor-pointer"
                      title={`Tuning Scheme: ${color.name}`}
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        style={{
                          backgroundColor: color.hex,
                          boxShadow: isSelected ? `0 0 10px ${color.hex}` : 'none',
                        }}
                      />
                      {isSelected && (
                        <span 
                          className="absolute inset-0 border border-white/60 rounded-full scale-110"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <a
              href="https://shop.electrifiedgarage.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-zinc-800 bg-zinc-900/30 text-white font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-300 hover:border-accent/40 hover:bg-accent/10 flex items-center gap-1.5 shadow-[0_2px_15px_rgba(0,0,0,0.5)] cursor-pointer group"
            >
              Store
              <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-accent transition-colors" />
            </a>
          </div>

          {/* Mobile hamburger open button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
            id="mobile-menu-hamburger"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Blurry Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[200] lg:hidden cursor-pointer"
            />

            {/* Slide-in Menu Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-zinc-950 border-l border-zinc-900 z-[201] p-6 flex flex-col items-stretch lg:hidden overflow-y-auto"
            >
              {/* Drawer Title Header with X button */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-900">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="font-sans font-bold text-sm tracking-wide text-white uppercase">
                    ELECTRIFIED <span className="text-accent">GARAGE</span>
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Staggered Navigation items list */}
              <div className="flex-1 space-y-1.5 pr-1">
                {/* Home category button */}
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold hover:bg-zinc-900/50 transition-all duration-150 flex items-center justify-between ${
                    currentPage === 'home'
                      ? 'text-accent bg-accent/5 border-l-2 border-accent'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  Home
                  {currentPage === 'home' && <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-color)]" />}
                </button>

                {/* Mobile Dropdown About Header */}
                <div className="pt-1">
                  <button
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs uppercase font-sans font-semibold tracking-wider flex items-center justify-between ${
                      isAboutActive ? 'text-accent' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>About Us</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-zinc-950/40 rounded-xl mt-1 ml-4 space-y-1"
                      >
                        <button
                          onClick={() => handleNavClick('about')}
                          className={`w-full text-left px-4 py-2.5 text-xs font-sans tracking-wide flex items-center gap-2 rounded-lg transition-colors duration-150 ${
                            currentPage === 'about' ? 'text-accent bg-accent/5' : 'text-zinc-400 hover:text-white'
                          }`}
                        >
                          Company Overview
                        </button>
                        {aboutMenuItems.map((item) => {
                          const isActive = currentPage === item.id;
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleNavClick(item.id)}
                              className={`w-full text-left px-4 py-2.5 text-xs font-sans tracking-wide flex items-center gap-2 rounded-lg transition-colors duration-150 ${
                                isActive ? 'text-accent bg-accent/5' : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              {item.name}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services, Training, Contact flat buttons */}
                {mainMenuItems.slice(1).map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold hover:bg-zinc-900/50 transition-all duration-150 flex items-center justify-between ${
                        isActive
                          ? 'text-accent bg-accent/5 border-l-2 border-accent'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-color)]" />}
                    </button>
                  );
                })}

                {/* Mobile Dropdown Locations Header */}
                <div className="pt-2 border-t border-zinc-900">
                  <button
                    onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
                    className="w-full text-left px-4 py-3 rounded-xl text-xs uppercase font-sans font-semibold tracking-wider text-zinc-400 hover:text-white flex items-center justify-between"
                  >
                    <span>Locations</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${mobileLocationsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {mobileLocationsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-zinc-950/40 rounded-xl mt-1 ml-4 space-y-1"
                      >
                        {locations.map((loc) => {
                          const id = `location-${loc.id}`;
                          const isActive = currentPage === id;
                          return (
                            <button
                              key={loc.id}
                              onClick={() => handleNavClick(id)}
                              className={`w-full text-left px-4 py-2 text-xs font-sans tracking-wide flex items-center gap-2 rounded-lg transition-colors duration-150 ${
                                isActive ? 'text-accent bg-accent/5' : 'text-zinc-400 hover:text-white'
                              }`}
                            >
                              <MapPin className="w-3.5 h-3.5 text-accent" />
                              {loc.name}
                            </button>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile System theme tuning options */}
                <div className="pt-4 border-t border-zinc-900 mt-2 px-4">
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Tuning Scheme</div>
                  <div className="grid grid-cols-4 gap-2">
                    {ACCENT_COLORS.map((color) => {
                      const isSelected = activeAccent === color.id;
                      return (
                        <button
                          key={color.id}
                          onClick={() => onAccentChange(color.id)}
                          className={`py-2 rounded-xl flex flex-col items-center gap-1.5 border transition-all ${
                            isSelected 
                              ? 'bg-zinc-900 border-accent/40 text-white' 
                              : 'bg-zinc-950 border-zinc-900 text-zinc-500 hover:text-white'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full"
                            style={{
                              backgroundColor: color.hex,
                              boxShadow: isSelected ? `0 0 8px ${color.hex}` : 'none',
                            }}
                          />
                          <span className="text-[8px] font-sans font-medium">{color.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Store external redirection button inside drawer footer */}
              <div className="pt-6 border-t border-zinc-900 mt-auto">
                <a
                  href="https://shop.electrifiedgarage.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-white font-sans text-xs tracking-wider uppercase font-bold text-center flex items-center justify-center gap-2 shadow-2xl hover:border-accent/40 group cursor-pointer"
                >
                  Visit Official Store
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent transition-colors cursor-pointer" />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
