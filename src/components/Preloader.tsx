import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert as Zap } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loader
    const intervalTime = 40;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 600); // Allow fadeout animation to complete
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            clipPath: 'power3.inOut',
            y: -100,
            transition: { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
          }}
          className="fixed inset-0 bg-[#000000] z-[9999] flex flex-col items-center justify-center text-white"
        >
          <div className="relative flex flex-col items-center max-w-md w-full px-6">
            {/* Ambient Back Glow */}
            <div className="absolute w-48 h-48 bg-accent/15 rounded-full blur-3xl -top-12 animate-pulse" />

            {/* Glowing Logo Concept */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex items-center gap-3 mb-8"
            >
              <div id="preloader-logo-icon" className="relative p-4 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-[0_0_30px_var(--accent-color)]/10">
                <Zap className="w-12 h-12 text-accent animate-pulse" />
                <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-sm pointer-events-none" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-xs text-accent tracking-[0.25em]">THE</span>
                <span className="font-sans font-bold text-2xl tracking-normal text-white flex items-center gap-1 leading-none">
                  ELECTRIFIED <span className="text-accent">GARAGE</span>
                </span>
                <span className="font-mono text-[9px] text-zinc-500 tracking-[0.1em] mt-1">THE FUTURE OF EV SERVICE</span>
              </div>
            </motion.div>

            {/* Loading Stats */}
            <div className="w-full flex justify-between items-center mb-2 text-[10px] font-mono tracking-wider text-zinc-400">
              <span className="uppercase text-accent animate-pulse">
                {progress < 30 ? 'Diagnosing Core...' : progress < 70 ? 'Linking High Voltage System...' : 'Ready for Ingress'}
              </span>
              <span>{Math.floor(progress)}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-[3px] bg-zinc-900 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-accent via-white/40 to-accent rounded-full"
                style={{ width: `${progress}%` }}
                layoutId="loaderBar"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent animate-shimmer pointer-events-none" />
            </div>

            {/* Footer Micro-copy */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.3 }}
              className="text-[9px] font-mono text-zinc-600 tracking-widest mt-12 text-center"
            >
              EST. 2019 • INDEPENDENT TESLA & EV CLANDESTINE REPAIR
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
