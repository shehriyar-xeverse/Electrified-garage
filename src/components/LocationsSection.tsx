import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, User, Landmark, ShieldCheck } from 'lucide-react';
import { LocationInfo } from '../types';

export default function LocationsSection() {
  const locations: LocationInfo[] = [
    {
      id: 'orlando',
      city: 'Orlando',
      stateCode: 'FL',
      address: '10729 Rocket Blvd, Orlando, FL 32824',
      phone: '+1 (407) 801-5115',
      email: 'orlando@electrifiedgarage.com',
      hours: [
        'Mon - Fri: 08:30 - 17:00 UTC-4',
        'Sat - Sun: Closed for deep research'
      ],
      manager: 'Chad Hrencecin',
      googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.968032734139!2d-81.3912999!3d28.3900224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x88e77b66fe859a2f%3A0xc3f8e58fa2ab2d0b!2s10729%20Rocket%20Blvd%2C%20Orlando%2C%20FL%2032824!5e0!3m2!1sen!2sus!4v1718612500000!5m2!1sen!2sus',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'amesbury',
      city: 'Amesbury',
      stateCode: 'MA',
      address: '15 High St, Amesbury, MA 01913',
      phone: '+1 (978) 253-4022',
      email: 'amesbury@electrifiedgarage.com',
      hours: [
        'Mon - Fri: 08:30 - 17:00 UTC-5',
        'Sat - Sun: Closed for deep research'
      ],
      manager: 'Chris Salvo',
      googleMapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2910.1504953335887!2d-70.9312211!3d42.8590123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x89e2fb7deee55deb%3A0x6e3c0422957sal!2s15%20High%20St%2C%20Amesbury%2C%20MA%2001913!5e0!3m2!1sen!2sus!4v1718612600000!5m2!1sen!2sus',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="locations" className="relative w-full py-24 sm:py-32 bg-[#050605] text-white">
      {/* Background visual overlay */}
      <div className="absolute top-[30%] left-[-5%] w-[400px] h-[400px] bg-accent/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[-5%] w-[450px] h-[450px] bg-[#7DB7C3]/3 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 justify-center"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium text-center">Continental Grid</span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Our Elite Facility <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Centers</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Both of our boutique service spaces are equipped to deliver secure high-voltage component repairs and software overlays under local guidelines.
          </p>
        </div>

        {/* Locations Listings Stack: Two massive layout blocks */}
        <div className="space-y-16 sm:space-y-24">
          {locations.map((loc, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
                id={`location-card-${loc.id}`}
              >
                {/* Details layout block: Col 1 */}
                <div className={`lg:col-span-5 ${isLeft ? 'lg:order-1' : 'lg:order-2'} flex flex-col justify-between py-2`}>
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent/5 border border-accent/30 text-accent text-[9px] font-mono tracking-widest uppercase mb-4">
                        <Landmark className="w-3.5 h-3.5" />
                        PREMIUM REGIONAL HUB
                      </div>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight leading-none">
                        {loc.city}, <span className="text-accent">{loc.stateCode}</span>
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-zinc-500 font-medium tracking-wide mt-2">
                        Official EV Diagnostic & Rebuilding Center
                      </p>
                    </div>

                    {/* Metadata table list */}
                    <div className="space-y-4 pt-4 border-t border-zinc-900/60 font-sans text-xs sm:text-sm text-zinc-300">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5 font-bold">Physical Address:</span>
                          <span className="leading-relaxed font-light">{loc.address}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5 font-bold">Hotline:</span>
                            <a href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-accent transition-colors leading-relaxed font-light font-mono">{loc.phone}</a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <div>
                            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5 font-bold">Transmit:</span>
                            <a href={`mailto:${loc.email}`} className="hover:text-accent transition-colors leading-relaxed font-light word-break-all">{loc.email}</a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5 font-bold">Active Station Hours:</span>
                          <div className="space-y-1 font-light">
                            {loc.hours.map((h, i) => (
                              <span key={i} className="block text-zinc-400 font-mono text-xs">{h}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <User className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-0.5 font-bold">Facility Director:</span>
                          <span className="leading-relaxed font-semibold text-zinc-200">{loc.manager}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Safety accreditation tag */}
                  <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-900 flex items-center gap-3 mt-6 sm:mt-10">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-[11px] font-sans text-zinc-400 leading-snug font-light">
                      This station maintains dynamic non-conductive floor zones and physical grounding lock systems.
                    </span>
                  </div>
                </div>

                {/* Google Map Box iframe: Col 2 */}
                <div className={`lg:col-span-7 ${isLeft ? 'lg:order-2' : 'lg:order-1'} relative rounded-3xl overflow-hidden border border-zinc-900 shadow-2xl bg-zinc-950 flex flex-col`}>
                  
                  {/* Map Header with address indicator */}
                  <div className="p-3 bg-zinc-950 border-b border-zinc-900 flex items-center justify-between text-zinc-500 text-[10px] font-mono uppercase tracking-wider">
                    <span>Active Ingress Grid Coordinates</span>
                    <span className="text-accent">{loc.city}.EG.ONLINE</span>
                  </div>

                  {/* Real embedded dynamic Google Maps iframe */}
                  <div className="flex-1 w-full min-h-[350px] relative">
                    <iframe
                       src={loc.googleMapEmbed}
                      className="w-full h-full border-0 grayscale invert pointer-events-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      title={`Google Maps for The Electrified Garage ${loc.city}`}
                    />
                    {/* Dark gradient bottom fade */}
                    <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none border border-transparent group-hover:border-accent/20 transition-all duration-300 rounded-3xl" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
