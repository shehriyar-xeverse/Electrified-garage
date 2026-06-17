import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onLearnMore: () => void;
  onBookAppointment: () => void;
}

export default function Hero({ onLearnMore, onBookAppointment }: HeroProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineWords = "THE FUTURE OF ELECTRIC VEHICLE REVOLUTION".split(" ");

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
      {/* Background Video - Fully clear, no dark overlays or brightness filters to ensure visual prominence */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none scale-102 hover:scale-[1.05] transition-transform duration-[20000ms]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100 filter saturate-100 brightness-100"
          referrerPolicy="no-referrer"
        >
          <source src="https://res.cloudinary.com/dju25z9v3/video/upload/v1780422397/1780420718103video_zahr74.mp4" type="video/mp4" />
        </video>
        {/* Transparent grid mask overlay for alignment without dimming the video */}
        <div className="absolute inset-0 bg-dot-grid pointer-events-none select-none opacity-25" />
      </div>

      {/* Hero Glassmorphic HUD Content Area to ensure 100% legibility over a fully bright background video */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center select-text">
        <div className="px-6 py-10 sm:px-10 sm:py-12 rounded-3xl bg-black/45 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
          {/* Subtle inner grid glow accent */}
          <div className="absolute inset-y-0 inset-x-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

          {/* Upper Micro-Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-850 shadow-[0_4px_12px_rgba(0,0,0,0.6)] mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="font-mono text-[9px] text-accent uppercase tracking-[0.22em] font-semibold">Boutique EV Diagnostic & Engineering Hub</span>
          </motion.div>

          {/* Cinematic Stagger Headline */}
          <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.08] uppercase mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                style={{ display: 'inline-block', marginRight: '0.22em' }}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1.0,
                  delay: 0.15 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {word === "ELECTRIC" || word === "VEHICLE" ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent drop-shadow-[0_1px_8px_var(--accent-color-glow)] font-black">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          {/* Subtext and description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
            className="max-w-2xl mx-auto font-sans text-xs sm:text-sm md:text-base text-zinc-300 tracking-wide font-normal leading-relaxed mb-8 sm:mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          >
            Specialized diagnostics, battery building, retrofits, and micro-soldering calibration for{' '}
            <span className="text-white font-medium">Tesla</span>,{' '}
            <span className="text-white font-medium">Rivian</span>, and{' '}
            <span className="text-white font-medium">Lucid Space</span>. Est. 2019 by pioneer EV educators.
          </motion.p>

          {/* Access action buttons with dynamic active glowing systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.1, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 relative z-10"
          >
            {/* Core Action */}
            <button
              onClick={onBookAppointment}
              id="hero-cta-book"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-zinc-950 font-sans font-bold text-xs tracking-widest uppercase cursor-pointer hover-glow-pulse shadow-[0_4px_25px_var(--accent-color-glow)] hover:shadow-[0_4px_35px_var(--accent-color-glow)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group border border-white/10"
            >
              Request Appointment
              <ArrowRight className="w-4 h-4 text-zinc-950 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Option */}
            <button
              onClick={onLearnMore}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-sans font-semibold text-xs tracking-widest uppercase cursor-pointer hover:bg-zinc-900 hover:text-white hover:border-zinc-750 transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Soft Bouncing Scroll Down Chevron Indicator */}
      <motion.div
        animate={{
          opacity: scrolled ? 0 : 0.8,
          y: scrolled ? 20 : [0, 8, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          },
          opacity: { duration: 0.3 }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={onLearnMore}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-zinc-500">SCROLL DOWN</span>
        <ChevronDown className="w-5 h-5 text-accent animate-pulse" />
      </motion.div>

      <style>{`
        .hover-glow-pulse {
          animation: pulse 2.5s infinite;
        }
        .hover-glow-pulse:hover {
          animation: none;
        }
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 var(--accent-color-glow);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
