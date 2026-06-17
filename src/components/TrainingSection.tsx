import { motion } from 'motion/react';
import { Award, ShieldAlert as Zap, GraduationCap, Users, Calendar, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export default function TrainingSection() {
  const courses = [
    {
      id: 'course-hv-ess-safety',
      title: 'EV Essential Safety & Isolation Cert (HV-1)',
      duration: '3 Days Intensive (In-person)',
      cost: '$1,499 USD',
      audience: 'Combustion mechanics making the EV transition',
      modules: [
        'National Electrical Code & class-0 insulator tools',
        'Proper high-voltage service disconnect locking',
        'State-of-charge safety verification & active ground checks',
        'Emergency response procedure: thermal run-away containment'
      ]
    },
    {
      id: 'course-battery-rebuilds',
      title: 'Component Battery Diagnosing & Cell balancing (HV-2)',
      duration: '5 Days Interactive Lab (In-person)',
      cost: '$3,250 USD',
      audience: 'Experienced diagnostic specialists',
      modules: [
        'Bench testing individual battery brick arrays',
        'Identifying failing modules with active shunt logs',
        'Thermal paste application and pyrofuse soldering',
        'State-of-health pack deep re-balancing mechanics'
      ]
    },
    {
      id: 'course-can-programming',
      title: 'CAN-bus Protocols & Inverter Repair (HV-3)',
      duration: '4 Days Deep Dive Software (In-person)',
      cost: '$2,750 USD',
      audience: 'Tuning specialists and microcontroller coders',
      modules: [
        'Analyzing CAN network communication frames with logic analyzers',
        'Overwriting MCU memory pools to pair salvage modules',
        'Refurbishing inverter controller phases & liquid seals',
        'Calibrating steer-angle offsets and driver-assist safety layers'
      ]
    }
  ];

  return (
    <section id="training" className="relative w-full py-24 sm:py-32 bg-black text-white">
      {/* Background radial orbs */}
      <div className="absolute top-[20%] right-[-10%] w-[450px] h-[450px] bg-accent/3 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium">Independent Education</span>
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Electrified <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-accent">Academy</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Independent workshops globally are lock-barred by factory limitations. We break those barriers down, educating standard technicians on safe high-voltage operations, component repair, and CAN flashing.
          </p>
        </div>

        {/* Bullet Points with large header cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Interactive Courses list */}
          <div className="lg:col-span-8 space-y-8">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-accent block pb-4 border-b border-zinc-900 mb-6">
              Official Course Offerings & Syllabi
            </span>

            <div className="space-y-8">
              {courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl bg-zinc-950/60 border border-zinc-900 group hover:border-accent/20 hover:bg-[#070807] transition-all duration-300 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div>
                      <span className="font-mono text-[9px] text-accent uppercase tracking-[0.2em] font-bold block mb-1">
                        LEVEL {idx + 1} DIRECTIVE
                      </span>
                      <h3 className="font-sans font-black text-lg sm:text-xl text-white group-hover:text-accent transition-colors leading-tight">
                        {course.title}
                      </h3>
                      <p className="font-sans text-xs text-zinc-500 mt-1 font-medium">{course.audience}</p>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="font-mono text-xs text-zinc-300 block">{course.duration}</span>
                      <span className="font-mono text-sm font-black text-accent block mt-1">{course.cost}</span>
                    </div>
                  </div>

                  {/* Modules grid list */}
                  <div className="border-t border-zinc-900 pt-5 mt-4 space-y-4">
                    <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Core Training Competencies:</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {course.modules.map((mod, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs font-sans text-zinc-300">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{mod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[9px] font-mono text-zinc-600 block uppercase">
                      <Zap className="w-3.5 h-3.5 text-accent animate-pulse" />
                      Limited to 12 operators per class
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-zinc-900 group-hover:bg-accent group-hover:text-zinc-950 text-zinc-300 group-hover:border-accent border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer">
                      Inquire Syllabus <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              ))}
            </div>

          </div>

          {/* Right: Academy details & accreditation */}
          <div className="lg:col-span-4 space-y-8">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-accent block pb-4 border-b border-zinc-900">
              Academy Credibility
            </span>

            {/* Microstats banner */}
            <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-accent flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white">450+ Certified Alumni</h4>
                  <p className="font-sans text-[10px] text-zinc-500">Across 18 sovereign nations</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-accent flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white">Hands-on Lab Training</h4>
                  <p className="font-sans text-[10px] text-zinc-500">Operated with live loaded modules</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-accent flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-white">OSHA compliance certification</h4>
                  <p className="font-sans text-[10px] text-zinc-500">Highest hazard containment procedures</p>
                </div>
              </div>

            </div>

            {/* Enrollment info card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-[#0e0f0e] border border-zinc-900 shadow-md">
              <h3 className="font-sans font-bold text-sm text-white mb-2">Enrollment Procedures & Housing</h3>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mb-4">
                Courses are administered alternately at our Orlando, FL development facility and our Amesbury, MA workshop. Student housing agreements are coordinates with boutique partner hotels adjacent to active stations.
              </p>
              <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed mb-4">
                Full-payment is required upon registration validation to coordinate physical safety gears.
              </p>
              <div className="pt-2 border-t border-zinc-900 mt-4">
                <span className="font-mono text-[9px] text-accent block uppercase tracking-wider">QUESTIONS? CHAT WITH US:</span>
                <span className="font-sans font-bold text-sm text-white block mt-1">academy@electrifiedgarage.com</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
