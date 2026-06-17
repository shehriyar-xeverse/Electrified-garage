import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Wrench, ShieldCheck, Cpu, ArrowUpRight, Award, Zap } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreServices: () => void;
}

export default function AboutSection({ onLearnMoreServices }: AboutSectionProps) {
  // Stats counter hook simulation
  const [stats, setStats] = useState({ evs: 0, accuracy: 0, mechanics: 0, ratings: 0 });

  useEffect(() => {
    // Simulated increment sequence when section becomes active
    const start = 100;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      setStats({
        evs: Math.floor(Math.min(12500, (currentStep / steps) * 12500)),
        accuracy: Math.floor(Math.min(99.9, (currentStep / steps) * 99.9)),
        mechanics: Math.floor(Math.min(45, (currentStep / steps) * 45)),
        ratings: Math.floor(Math.min(100, (currentStep / steps) * 100)),
      });

      if (currentStep >= steps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative w-full py-24 sm:py-32 overflow-hidden bg-black text-white">
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] bg-accent/5 rounded-full blur-[130px] z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-accent"></span>
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium">Boutique Pioneers</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-none uppercase mb-6"
          >
            DISRUPTING THE STATUS QUO OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent">
              ELECTRIC VEHICLE REPAIR
            </span>
          </motion.h2>
        </div>

        {/* Outer Grid Split Pane layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text content: Animate slide from left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-zinc-400 font-sans text-sm sm:text-base leading-relaxed"
          >
            <p className="text-white text-lg font-light leading-relaxed">
              Founded in 2019 by iconic automotive disruptors{' '}
              <span className="text-accent font-semibold">Rich Benoit (Rich Rebuilds)</span> and{' '}
              <span className="text-accent font-semibold">Chad Hrencecin</span>, The Electrified Garage was born from a pivotal idea: 
              universal Right to Repair for electric vehicle owners.
            </p>
            <p>
              When traditional manufacturers made it notoriously difficult, expensive, or outright illegal for independent mechanics and DIY enthusiasts 
              to source vehicle components and diagnose errors, we stood up. Our crew engineered custom software protocols, modular brick repair techniques, 
              and proprietary diagnostic models that allow us to service components others would throw into the scrap pile.
            </p>
            <p>
              Today, we are widely recognized as the premier independent tuning, fabrication, repair, and diagnostic garage for prestige electric cars 
              globally. We don't just clear code sheets — we rebuild the battery arrays, calibrate complex driver assist modules, and retro-engineer standard drivetrains into full-electric hotrods.
            </p>

            {/* Core Values / Features Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-zinc-300 font-sans text-xs uppercase tracking-wide font-medium">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 shadow-md">
                <Wrench className="w-5 h-5 text-accent shrink-0" />
                <span>Component-Level Brick Swapping</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 shadow-md">
                <Cpu className="w-5 h-5 text-accent shrink-0" />
                <span>Custom Software Overwrite</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 shadow-md">
                <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                <span>High Voltage Certification</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-900 shadow-md">
                <Award className="w-5 h-5 text-accent shrink-0" />
                <span>Right To Repair Champion</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={onLearnMoreServices}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent hover:text-white transition-colors group cursor-pointer"
              >
                OUR TECHNICAL CAPABILITIES 
                <ArrowUpRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-accent" />
              </button>
            </div>
          </motion.div>

          {/* Right Graphical Area / Image Box: Animate slide from right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Image Plate with 3D Hover perspective */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.9)] aspect-4/3 group">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800"
                alt="Tesla Model S custom servicing in boutique garage"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-108 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              {/* Premium Glow Overlays on card */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 rounded-2xl transition-all duration-300 pointer-events-none" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-white mb-0.5">Primary High Voltage Diagnostic Lift</h4>
                  <p className="font-mono text-[9px] text-zinc-400">Orlando Facility - Station 02</p>
                </div>
                <div className="w-7 h-7 bg-zinc-950/80 rounded-full border border-zinc-800 flex items-center justify-center">
                  <Zap className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
            </div>

            {/* Rich Rebuilds Iconic Bio callout card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-[#0c0d0c] border border-zinc-900 shadow-md relative overflow-hidden group hover:border-zinc-800 transition-all duration-300">
              <span className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs font-black text-accent">EG</span>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-accent tracking-widest uppercase block mb-1">FOUNDERSHIP LEGACY</span>
                  <h4 className="font-sans font-bold text-sm text-white mb-2">Rich Benoit (Rich Rebuilds)</h4>
                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    "If the manufacturer tells you it's a brick, let us take a crack at it. We believe you own what you bought, and you have every right to mend it."
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Stats Grid Counters: Framer and custom counting states */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-20 mt-16 border-t border-zinc-900 text-center lg:text-left select-none">
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent tracking-tight block">
              {stats.evs.toLocaleString()}+
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest block">EVs Successfully Maintained</span>
            <span className="font-mono text-[9px] text-zinc-600 block">Tesla, Rivian & Lucid Air models</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent tracking-tight block">
              {stats.accuracy}%
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest block">Diagnostic Resolve Precision</span>
            <span className="font-mono text-[9px] text-zinc-600 block">Outperforming main dealership centers</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent tracking-tight block">
              {stats.mechanics}+
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest block">HV-Certified Technicians</span>
            <span className="font-mono text-[9px] text-zinc-600 block">Master guild of EV engineering</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-2xl sm:text-3xl md:text-4xl font-extrabold text-accent tracking-tight block">
              100%
            </span>
            <span className="font-sans font-bold text-[10px] sm:text-xs text-zinc-400 uppercase tracking-widest block">Independent Satisfaction</span>
            <span className="font-mono text-[9px] text-zinc-600 block">A true sanctuary for EV lovers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
