import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, User, Calendar, Clock, ArrowRight, Zap, Filter } from 'lucide-react';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const posts: BlogPost[] = [
    {
      id: 'degradation-tesla-pack',
      title: 'How to Correctly Diagnose Tesla Battery degradation & Swapping Modules',
      excerpt: 'A comprehensive technical workflow explaining how cell isolation registers, active voltage imbalance audits, and contactor tests determine if a module can be safely brick-replaced.',
      content: '', // Simulated modal display content
      category: 'Battery',
      date: 'June 02, 2026',
      author: 'Chad Hrencecin',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'can-bus-decryption',
      title: 'CAN-bus Decryption: Injecting Custom Firmware on Replacements',
      excerpt: 'When you install a salvage infotainment unit (MCU) or dashboard module, factory firewalls block initialization. We walk through reading controller bins and re-pairing keys.',
      content: '',
      category: 'Hacks',
      date: 'May 18, 2026',
      author: 'Rich Benoit',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'motor-whine-liquid-seals',
      title: 'Diagnosing Tesla Drive Unit Whine: Bearing Wear or Seal Failures',
      excerpt: 'That high-pitched hum during high throttle is not just sound — it represents rotor shaft bearings corroded by coolant leaks. Here is how we refurbish rather than scrap the drive unit.',
      content: '',
      category: 'Diagnostics',
      date: 'April 09, 2026',
      author: 'Chad Hrencecin',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'v8-tesla-conversion-engineering',
      title: 'Behind the Design: Packaging a V8 Drivetrain inside a Model S Shell',
      excerpt: 'Retrospective of the world-famous custom fabrication: cutting structural space blocks, routing fuel lines, and wiring digital dash displays to coordinate with stock steering locks.',
      content: '',
      category: 'Retrofitting',
      date: 'March 21, 2026',
      author: 'Rich Benoit',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80&w=600'
    }
  ];

  const categories = ['all', 'Battery', 'Hacks', 'Diagnostics', 'Retrofitting'];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);  return (
    <section id="blog" className="relative w-full py-24 sm:py-32 bg-[#050605] text-white">
      {/* Background soft glow */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-accent/3 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[450px] h-[450px] bg-[#7DB7C3]/4 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="w-8 h-[1px] bg-accent" />
              <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium">Boutique Wisdom</span>
            </motion.div>
            
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none">
              High Voltage <span className="text-accent">Tech Logs</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed mt-4">
              Explore step-by-step diagnostic workflows, custom microcontroller code injections, and co-founder diaries detailing our wildest EV builds.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider border cursor-pointer transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-accent text-zinc-950 border-accent shadow-[0_0_15px_var(--accent-color)] shadow-accent/30 font-bold'
                    : 'bg-zinc-950/40 border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group rounded-3xl bg-zinc-950/60 border border-zinc-900 overflow-hidden flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.85)] relative"
              >
                {/* Background visual top */}
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-35 grayscale group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-70 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Linear gradient fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Premium floating tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-accent text-[9px] font-mono tracking-widest uppercase font-semibold">
                    <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
                    {post.category}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Meta bar */}
                    <div className="flex flex-wrap items-center gap-4 text-zinc-500 font-mono text-[10px] uppercase tracking-wider">
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                    </div>

                    <h3 className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed font-light line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Read Article Indicator */}
                  <div className="border-t border-zinc-900 pt-6 mt-6">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:text-white transition-colors cursor-pointer ml-auto">
                      READ FULL ARTICLE
                      <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Secondary Callout */}
        <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#070807] via-zinc-950 to-[#070807] border border-zinc-900 shadow-md text-center max-w-4xl mx-auto">
          <span className="p-3 bg-accent/5 border border-accent/20 rounded-2xl text-accent inline-flex mb-4">
            <BookOpen className="w-6 h-6" />
          </span>
          <h4 className="font-sans font-bold text-base uppercase tracking-tight text-white mb-2">Want to learn EV component diagnostic protocols?</h4>
          <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed max-w-2xl mx-auto mb-6">
            We operate the Electrified Academy for independent workshops, bringing mechanics from standard combustion domains up to certified safety and system scan proficiency.
          </p>
          <button className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-accent text-zinc-300 hover:text-zinc-950 border border-zinc-800 hover:border-accent font-sans text-xs tracking-wider uppercase font-bold transition-all duration-300 cursor-pointer shadow-md">
            Academy Course Guide
          </button>
        </div>

      </div>
    </section>
  );
}
