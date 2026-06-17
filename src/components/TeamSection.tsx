import { motion } from 'motion/react';
import { Youtube, Shield, Briefcase, Zap } from 'lucide-react';
import { TeamMember } from '../types';

export default function TeamSection() {
  const members: TeamMember[] = [
    {
      id: 'rich-benoit',
      name: 'Rich Benoit ("Rich Rebuilds")',
      role: 'Co-Founder & Chief Visionary Officer',
      bio: 'Rich Benoit pioneered independent EV salvaging and custom builds. Widely celebrated for building the world\'s first V8-powered Tesla Model 3 and rebuilding flooded submersed electric luxury vehicles, he is a global champion of Right to Repair, driving the industry toward independent, consumer-focused options.',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600',
      specialty: 'HV Battery Modular Architecture, Extreme EV Retrofitting, Diagnostic Advocacy',
      youtube: 'https://www.youtube.com/@RichRebuilds'
    },
    {
      id: 'chad-hrencecin',
      name: 'Chad Hrencecin',
      role: 'Co-Founder & Lead Master Technician',
      bio: 'Chad is globally valued for diagnosing and fixing EV errors traditional manufacturers lock away. With decades in high-end tuning and electrical fabrication, Chad wrote the proprietary technical guidelines used in our facilities for cell-level balancing and custom controllers.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
      specialty: 'CAN-bus Reverse Engineering, Controller Unit Coding, Thermal System Audits',
      youtube: 'https://www.youtube.com/@RichRebuilds'
    },
    {
      id: 'chris-salvo',
      name: 'Chris Salvo',
      role: 'Co-Founder & Operations Director',
      bio: 'Chris Salvo directs facility execution, safety compliance, and custom hardware installations. Under his leadership, Electrified Garage developed its state-of-the-art diagnostic bays and established reliable supply partnerships with performance leaders.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
      specialty: 'Facility Safety Systems, Performance Hardware Delivery, Quality Controls'
    }
  ];

  return (
    <section id="team" className="relative w-full py-24 sm:py-32 bg-black text-white">
      {/* Background Orbs leveraging dynamic accents */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-5 right-[-5%] w-[350px] h-[350px] bg-accent/4 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Team Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium">Core Leadership</span>
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent">EV Pioneers</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            We are more than automotive specialists. We are technical hackers, high-voltage developers, custom builders, and diagnostic artists who proved that EVs can be serviced, modified, and scaled outside dealership monopolies.
          </p>
        </div>

        {/* Team Members Grid: Row presentation */}
        <div className="space-y-12 sm:space-y-16">
          {members.map((member, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-3xl p-6 sm:p-8 bg-zinc-950/50 border border-zinc-900/80 group hover:border-accent/20 transition-all duration-350 shadow-2xl relative overflow-hidden`}
              >
                {/* Back Gradient subtle decoration */}
                <span className="absolute inset-0 bg-gradient-to-tr from-accent/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

                {/* Left Side: Photo representation with subtle 3D hover and green edge halo */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative overflow-hidden rounded-2xl border border-zinc-900 aspect-13/9 group`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover opacity-45 grayscale group-hover:opacity-85 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent" />
                  
                  {/* Small tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-905 border border-zinc-800 text-accent text-[9px] font-mono tracking-wider uppercase font-medium shadow-md">
                    <Zap className="w-3 h-3 text-accent animate-pulse" />
                    FOUNDER CREW
                  </div>
                </div>

                {/* Right Side: Information Block */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-5 relative z-10`}>
                  <div>
                    <span className="font-mono text-[9px] text-accent uppercase tracking-[0.22em] font-extrabold block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight group-hover:text-accent transition-colors leading-tight">
                      {member.name}
                    </h3>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-zinc-350 font-normal leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Specialty Box */}
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 space-y-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-accent" />
                      Specialist Domain:
                    </span>
                    <p className="font-sans text-xs text-zinc-300 font-medium leading-relaxed">
                      {member.specialty}
                    </p>
                  </div>

                  {/* Links / YouTube tag */}
                  {member.youtube && (
                    <div className="pt-2">
                      <a
                        href={member.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-950/20 border border-red-900/40 text-red-400 hover:text-white hover:bg-red-950/40 transition-all duration-250 text-xs font-bold uppercase tracking-wider cursor-pointer font-sans shadow-md"
                      >
                        <Youtube className="w-4 h-4 text-red-500" />
                        Rich Rebuilds Channel
                      </a>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Culture statement block */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-8 rounded-3xl bg-zinc-950/50 border border-zinc-900 flex flex-col items-center text-center space-y-4 max-w-4xl mx-auto shadow-2xl"
        >
          <div className="w-12 h-12 rounded-2xl bg-zinc-90 w-11 h-11 flex items-center justify-center bg-zinc-900 border border-zinc-800 text-accent">
            <Shield className="w-5 h-5" />
          </div>
          <h3 className="font-sans font-bold text-base uppercase text-white tracking-tight">Our Core Workshop Creed</h3>
          <p className="font-sans text-xs text-zinc-400 max-w-2xl leading-relaxed">
            "We operate under strict compliance with state and federal electrical safety regulations. We share our diagnostic breakthroughs with the global mechanics guild, proving that EVs can be repaired cleanly and sustainably."
          </p>
        </motion.div>

      </div>
    </section>
  );
}
