import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, 
  BatteryCharging, 
  Activity, 
  Layers, 
  Wrench, 
  Settings, 
  Truck, 
  CheckCircle,
  HelpCircle,
  Zap
} from 'lucide-react';
import { RepairService } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const services: RepairService[] = [
    {
      id: 'hvb-repair',
      title: 'High-Voltage Battery Cell Repair',
      description: 'We diagnose individual battery brick modules, swapping failing sub-assemblies for a fraction of the cost of a complete replacement pack.',
      iconName: 'BatteryCharging',
      details: [
        'Isolated cell fault diagnostics',
        'Module-level brick replacement',
        'State-of-health pack deep balancing',
        'Contactors & pyrofuse replacement',
        'Full high-voltage isolation troubleshooting'
      ],
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'hardware-diag',
      title: 'Proprietary Tesla & EV Cloud Scan',
      description: 'Using specialized local software connections, we query, code, and flash controller units completely bypassing manufacturer lockouts.',
      iconName: 'Terminal',
      details: [
        'Full controller area network (CAN) analysis',
        'MCU & thermal management flashing',
        'BMS fault code extraction & clearing',
        'Autopilot & driver-assist steering alignment',
        'Pre-purchase exhaustive system audits'
      ],
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'drive-unit',
      title: 'Drive Unit & Inverter Salvage',
      description: 'Invertor power stage soldering, dynamic stator winding testing, and liquid cooling seal assembly directly addressing motor whines & leaks.',
      iconName: 'Activity',
      details: [
        'Stator stator motor alignment & testing',
        'Cooling fluid seals & manifold repairs',
        'Inverter IGBT phase board troubleshooting',
        'Drive speed-sensor replacement',
        'Performance power delivery unlocking'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'suspension',
      title: 'Upgrade Suspension & Control Arm Tuning',
      description: 'Resolving squeaks and harsh clunks. We are certified dealers for Unplugged Performance, Mountain Pass, and Ohlins.',
      iconName: 'Wrench',
      details: [
        'Bespoke performance coilover installation',
        'Heavy-duty billet front upper-control arms',
        'Custom silent polyurethane bushing retrofit',
        'Track-ready alignment geometry configuration',
        'Active air suspension diagnostic override'
      ],
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'wraps-styling',
      title: 'Aesthetic Styling & Matte PPF Protective Wrap',
      description: 'Full-body premium protection films, satin wraps, chrome delete, and structural aero bodykit installations to make your EV unique.',
      iconName: 'Layers',
      details: [
        'Self-healing premium paint protection film (PPF)',
        'Dramatic satin & color shifting vinyl wraps',
        'Aerodynamic carbon fiber lip/spoiler setup',
        'Light smoke tint & chrome-delete styling',
        'Ceramic nanopolymer shell coating'
      ],
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 'fleet',
      title: 'Fleet & General EV Preventative Service',
      description: 'High-voltage fluid purges, smart cabin system calibration, brake testing, and commercial fleet EV maintenance checklists.',
      iconName: 'Truck',
      details: [
        'Pentosin active cooling fluid purge',
        'Smart cabin filtration & heat pump service',
        'Regenerative brake pad moisture audit',
        'High voltage copper cables inspection',
        'Commercial multi-unit EV fleet logs'
      ],
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800'
    }
  ];

  const faqs = [
    {
      q: 'Will servicing my electric vehicle at The Electrified Garage void my official factory warranty?',
      a: 'Absolutely not. Under the federal Magnuson-Moss Warranty Act, automotive manufacturers are legally prohibited from voiding your vehicle warranty simply because you chose an independent service facility. We are fully insured, high-voltage certified specialists using industry-standard diagnostic workflows.'
    },
    {
      q: 'Do you only service Tesla vehicles, or do you take other EV brands?',
      a: 'While we are world-famous for our custom Tesla Model S, 3, X, and Y engineering, we routinely carry out precision diagnoses and suspension work on Rivian R1T & R1S, Lucid Air, Ford F-150 Lightning, and Chevrolet Bolt models. If it relies on a high-voltage powertrain, we can fix it.'
    },
    {
      q: 'What is "component-level" battery repair, and why is it cheaper?',
      a: 'Main dealerships do not repair. If a single sensor fails inside a factory battery pack, they will require you to purchase a complete remanufactured battery pack, charging you $16,000+. At The Electrified Garage, we open the pack on our safety bench, identify the individual failing module, contactor, or chip, swap just that piece, and test and balance the pack, saving you up to 70% in costs.'
    },
    {
      q: 'How do I book a specialized diagnostic appointment?',
      a: 'We operate strictly by appointment to ensure deep engineering audits on every vehicle. You can jump directly to our scheduler form below, choose your facility (Orlando, FL or Amesbury, MA), explain the issues you\'re noticing, and our team will coordinate your visual dropoff schedule.'
    }
  ];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BatteryCharging': return <BatteryCharging className="w-5 h-5" />;
      case 'Terminal': return <Terminal className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 bg-[#050605] text-white">
      {/* Background visual styling */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-[20%] right-[3%] w-[500px] h-[500px] bg-accent/4 rounded-full blur-[165px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Services Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            className="inline-flex items-center gap-2 mb-4 justify-center"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium text-center">Engineered Execution</span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Our Elite Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            From single sensor debugging to full high-voltage cell restorations, we possess the tooling, proprietary software layers, and master technicians required to service modern prestige electric drivetrains.
          </p>
        </div>

        {/* Services Bento-like Grid: increased h-56 md:h-64 widescreen images for massive visual hierarchy improvements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                rotateX: 1,
                rotateY: -1,
                boxShadow: "0 18px 50px var(--accent-color-glow)",
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="group relative rounded-2xl bg-zinc-950/60 border border-zinc-900 overflow-hidden flex flex-col justify-between transition-all duration-350 hover:border-accent/35 cursor-pointer"
              onClick={() => onSelectService(service.title)}
            >
              {/* Card Header Background image (Expanded to h-56 md:h-64 for perfect widescreen visual balance) */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-35 grayscale group-hover:opacity-75 group-hover:scale-108 group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                {/* Radial and Linear Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-zinc-90 w-11 h-11 flex items-center justify-center bg-zinc-900/90 border border-zinc-800 text-accent shadow-md group-hover:text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 floating-icon-box">
                  {renderIcon(service.iconName)}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="font-sans font-bold text-base sm:text-lg text-white mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Service checklist */}
                <div className="border-t border-zinc-900 pt-5 mt-auto">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block mb-3">Service Deliverables:</span>
                  <ul className="space-y-2 text-xs font-sans text-zinc-300">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span className="line-clamp-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="px-6 pb-6 pt-2 shrink-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectService(service.title);
                  }}
                  className="w-full py-2.5 rounded-xl bg-zinc-905 border border-zinc-850 group-hover:bg-accent group-hover:text-zinc-950 text-zinc-300 group-hover:border-accent text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer"
                >
                  Book Service <Zap className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Soft Accent Halo glow effect border */}
              <div className="absolute inset-0 border border-accent/0 group-hover:border-accent/20 rounded-2xl pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Right to Repair Statement block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-zinc-950 via-zinc-900/40 to-zinc-950 border border-zinc-900 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Subtle Ambient light behind */}
          <div className="absolute left-[30%] top-[-20%] w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-sans font-bold text-lg text-white flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
              Comprehensive High-Voltage (ESS) Compliance Certified
            </h4>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light max-w-3xl leading-relaxed">
              Our shops are fully equipped with specialized non-conductive safety tables, active isolation resistance meters, class-0 lineman insulating rescue hooks, and specialized battery gas detection sensors to enforce a gold level of mechanical safety.
            </p>
          </div>
          <button 
            onClick={() => onSelectService('General Battery Diagnostic Scan')}
            className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-white text-zinc-200 hover:text-zinc-950 border border-zinc-800 font-sans text-xs tracking-wider uppercase font-bold shrink-0 transition-all duration-200 cursor-pointer shadow-md"
          >
            Learn Safety Policy
          </button>
        </motion.div>

        {/* Technical FAQ Accordion Section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">Frequently Asked Questions</span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white mt-2">Technical Clarifications</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFAQ === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-zinc-950/40 border border-zinc-900 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFAQ(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left font-sans font-bold text-sm sm:text-base text-zinc-200 hover:text-accent flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <HelpCircle className={`w-4 h-4 text-accent shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed border-t border-zinc-900/60 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        .floating-icon-box {
          animation: floatEffect 4s ease-in-out infinite;
        }
        @keyframes floatEffect {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
      `}</style>
    </section>
  );
}
