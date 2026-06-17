import { motion } from 'motion/react';
import { Radio, Tv, Youtube, Calendar, ArrowUpRight, Award, Zap, MapPin } from 'lucide-react';
import { PressRelease } from '../types';

export default function PressEvents() {
  const mediaHighlights: PressRelease[] = [
    {
      id: 'cnbc-feature',
      source: 'CNBC Road to Clean Energy',
      title: 'How this Clandestine EV Garage is Resurrecting Terminated Teslas',
      date: 'April 2023',
      excerpt: 'CNBC visits Orlando to record how independent high-voltage engineers are rescuing water-damaged electric vehicles that traditional companies catalog as total losses.',
      linkText: 'CNBC Clean Tech Video Feature',
      url: 'https://www.youtube.com/@RichRebuilds'
    },
    {
      id: 'bloomberg-right-repair',
      source: 'Bloomberg Businessweek',
      title: 'The Outlaw Mechanics Forcing High-Voltage Right to Repair',
      date: 'October 2022',
      excerpt: 'An exhaustive investigative story detailing how Rich Benoit, Chad Hrencecin, and Chris Salvo established a secure parts network and custom controller overwrite commands.',
      linkText: 'Read Bloomberg Story',
      url: 'https://www.youtube.com/@RichRebuilds'
    },
    {
      id: 'rich-rebuilds-cyber',
      source: 'YouTube: Rich Rebuilds',
      title: 'I Built the World\'s First Electric Retrofit Sportscar out of Junk Parts',
      date: 'May 2024',
      excerpt: 'Rich Rebuilds walks through structural welding and inverter solder procedures to squeeze 450 horsepower out of batteries salvaged from a scrap yard.',
      linkText: 'Watch Episode on YouTube (1.4M views)',
      url: 'https://www.youtube.com/@RichRebuilds'
    }
  ];

  const futureEvents = [
    {
      id: 'orlando-ev-meet',
      title: 'Electrified Garage Orlando EV Takeover Meet',
      location: 'Orlando FL Facility Center',
      date: 'September 12, 2026',
      time: '18:00 - 22:00 UTC-4',
      details: 'Join us for a massive custom EV tuning exhibition. Unveiling three classic sports car EV conversions including a custom battery cell V8 Corvette configuration.'
    },
    {
      id: 'boston-right-repair',
      title: 'Boston Right to Repair Coalition Assembly',
      location: 'Amesbury MA Facility Center',
      date: 'November 05, 2026',
      time: '10:00 - 15:00 UTC-5',
      details: 'An assembly of trade associations, consumers, and lawmakers advocating for open-access telemetry and diagnostic API keys for independent mechanics.'
    }
  ];

  return (
    <section id="press" className="relative w-full py-24 sm:py-32 bg-black text-white">
      {/* Background visual graphics */}
      <div className="absolute top-[40%] left-[2%] w-[400px] h-[400px] bg-[#4CAF93]/4 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-[#4CAF93]" />
            <span className="font-mono text-xs uppercase text-[#4CAF93] tracking-[0.2em] font-medium">Media Chronicle</span>
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Press Highlights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-[#4CAF93]">Events</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Our diagnostic breakthroughs, right-to-repair advocacy fights, and iconic custom design builds have been documented by networks and magazines around the world.
          </p>
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Press Releases List */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-[#4CAF93] block pb-4 border-b border-zinc-900">
              Featured Media Publications
            </span>

            <div className="space-y-6">
              {mediaHighlights.map((press, idx) => (
                <motion.div
                  key={press.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 group hover:border-zinc-800 transition-all duration-200 shadow-md flex gap-4 sm:gap-6"
                >
                  {/* Media icon box */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-805 text-[#4CAF93] flex items-center justify-center shrink-0">
                    {press.id.includes('youtube') ? (
                      <Youtube className="w-5 h-5 text-red-500" />
                    ) : press.id.includes('cnbc') ? (
                      <Tv className="w-5 h-5" />
                    ) : (
                      <Radio className="w-5 h-5" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase">
                      <span>{press.source}</span>
                      <span>•</span>
                      <span>{press.date}</span>
                    </div>
                    <h3 className="font-sans font-bold text-sm sm:text-base text-white group-hover:text-[#4CAF93] transition-colors leading-snug">
                      {press.title}
                    </h3>
                    <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                      {press.excerpt}
                    </p>
                    <div className="pt-2">
                      <a
                        href={press.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#4CAF93] hover:text-white transition-colors cursor-pointer group"
                      >
                        {press.linkText}
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Future Events and Meets Calendar */}
          <div className="lg:col-span-5 space-y-8">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-[#4CAF93] block pb-4 border-b border-zinc-900">
              Community Calendar
            </span>

            <div className="space-y-6">
              {futureEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-[#0e0f0e] border border-zinc-900 relative overflow-hidden group hover:border-[#4CAF93]/20 transition-all duration-200 shadow-lg"
                >
                  <span className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#4CAF93]/5 to-transparent rounded-full blur-xl pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[#4CAF93]">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div className="text-right font-mono text-[9px] text-[#4CAF93] uppercase tracking-wider">
                        <span className="block font-bold">{event.date}</span>
                        <span className="block text-zinc-500">{event.time}</span>
                      </div>
                    </div>

                    <h3 className="font-sans font-bold text-sm text-white group-hover:text-[#4CAF93] transition-colors">
                      {event.title}
                    </h3>

                    <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light">
                      {event.details}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-zinc-500 font-mono text-[9px] uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#4CAF93]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Awards/Credits Badge */}
              <div className="p-6 rounded-2xl border border-dashed border-zinc-800 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4CAF93]/5 border border-[#4CAF93]/20 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#4CAF93]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white">First Tier Diagnostics Award</h4>
                  <p className="font-sans text-[11px] text-zinc-500 leading-snug">Recognized by the Independent EV Services Guild as primary provider of right-to-repair cell rebuilds.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
