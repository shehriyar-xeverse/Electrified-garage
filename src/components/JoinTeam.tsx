import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Clock, 
  MapPin, 
  FileText, 
  Send, 
  CheckCircle, 
  Zap, 
  Briefcase,
  AlertCircle
} from 'lucide-react';
import { JobOpening } from '../types';

export default function JoinTeam() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: 'Orlando, FL',
    experience: '3-5 years',
    about: '',
    resumeLink: '',
  });

  const [activeTab, setActiveTab] = useState<string>('all');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const jobs: JobOpening[] = [
    {
      id: 'hv-diagnostic-tech',
      title: 'High-Voltage Diagnostic Technician',
      department: 'Technical Diagnostics & Repair',
      type: 'Full-time',
      location: 'Orlando, FL',
      description: 'Responsible for component-level diagnosis of Tesla, Rivian, and Lucid Air battery packs. Requires deep familiarity with CAN logs, safety gear, and soldering.',
      requirements: [
        '3+ years high voltage EV diagnostic experience',
        'Familiarity with battery swapping and safety protocols',
        'Strong electrical engineering and soldering foundation',
        'Valid master mechanic or certified EV tech credential'
      ]
    },
    {
      id: 'ev-fabricator',
      title: 'EV Performance Fabricator / Welder',
      department: 'Custom Fabrication & Retrofit',
      type: 'Full-time',
      location: 'Amesbury, MA',
      description: 'Engage in custom retrofits, welding structural mounts for battery retrofits into classic vehicles, and assembling Unplugged Performance custom cooling manifolds.',
      requirements: [
        'Expert MIG/TIG welding on structural aluminum and steel',
        'Prior experience retrofitting EV powertrains',
        'Mechanical design reading and custom assembly skill',
        'Obsession with extreme visual neatness and alignment'
      ]
    },
    {
      id: 'service-advisor',
      title: 'Senior Service Advisor',
      department: 'Front-End Operations',
      type: 'Full-time',
      location: 'Orlando, FL',
      description: 'Own the premium premium client relationship. Translate digital error logs and diagnostics sheets into straightforward explanations of component repairs.',
      requirements: [
        '2+ years customer advisory experience in clean automotive settings',
        'Excellent verbal skills and basic EV technology concepts',
        'Proactive workflow updating and file synchronization',
        'Familiarity with standard modern billing systems'
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName || !formData.email || !formData.phone || !formData.about) {
      setError('Please properly populate all required fields.');
      return;
    }

    setSubmitting(true);

    // Simulate clean database transmit
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        location: 'Orlando, FL',
        experience: '3-5 years',
        about: '',
        resumeLink: '',
      });
    }, 1500);
  };

  const filteredJobs = activeTab === 'all' ? jobs : jobs.filter(j => j.location.toLowerCase().includes(activeTab));

  return (
    <section id="join-team" className="relative w-full py-24 sm:py-32 bg-[#050605] text-white">
      {/* Visual lighting depth */}
      <div className="absolute top-[20%] right-[5%] w-[450px] h-[450px] bg-accent/4 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#7DB7C3]/5 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Page title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 justify-center"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium">Careers at EG</span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Elite EV Tech Crew</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            We are looking for passionate, high-voltage certified operators who believe in Right to Repair and push the envelope of aftermarket EV tuning.
          </p>
        </div>

        {/* Master layouts Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Job Openings List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
              <span className="font-sans font-black text-sm uppercase tracking-widest text-accent">Job Openings</span>
              
              {/* Filter tabs */}
              <div className="flex gap-2">
                {['all', 'orlando', 'amesbury'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-lg font-mono text-[9px] uppercase tracking-wider border cursor-pointer transition-all duration-150 ${
                      activeTab === tab
                        ? 'bg-accent/10 border-accent/50 text-white shadow-[0_0_12px_var(--accent-color)] shadow-accent/15'
                        : 'border-zinc-800 text-zinc-500 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <p className="text-zinc-500 font-sans text-xs">No active vacancies currently indexed in this facility.</p>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 shadow-md flex flex-col justify-between hover:border-zinc-800 transition-all duration-200"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-accent uppercase tracking-wider py-1 px-2 rounded bg-accent/5 border border-accent/20">
                          {job.department}
                        </span>
                        <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {job.location}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-accent" /> {job.type}</span>
                        </div>
                      </div>

                      <h3 className="font-sans font-bold text-base text-white">{job.title}</h3>
                      <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">{job.description}</p>

                      <div className="pt-2">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block mb-2">Technical Pre-requisites:</span>
                        <ul className="space-y-1.5 font-sans text-xs text-zinc-300">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column: Premium Form with Floats and Focus Glow */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-zinc-950/60 border border-zinc-900 shadow-[0_15px_40px_rgba(0,0,0,0.85)] relative overflow-hidden">
              <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-900">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-accent flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent animate-none" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-white">Application Terminal</h3>
                  <p className="font-mono text-[9px] text-zinc-500">Secure transmit to high-voltage guild</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-14 h-14 bg-zinc-900 border border-accent rounded-full flex items-center justify-center text-accent shadow-[0_0_20px_var(--accent-color)] shadow-accent/30 mb-2 animate-bounce">
                      <CheckCircle className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">Transmission Acknowledged</h4>
                    <p className="font-sans text-xs text-zinc-400 max-w-sm leading-relaxed">
                      Your diagnostic career log has been successfully indexed. Chad and our operations directors will review and coordinate within 48 operational hours.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-5 py-2 rounded-xl bg-zinc-950 border border-zinc-900 text-zinc-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      Transcribe Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    id="join-team-form"
                  >
                    {error && (
                      <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-red-400 text-xs font-sans flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Full Name Input Column */}
                    <div className="space-y-1.5 relative">
                      <label htmlFor="fullName" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Full Legal Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Chad Hrencecin"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200 shadow-inner"
                        required
                      />
                    </div>

                    {/* Grid Inputs: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Contact Email *</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your-name@gmail.com"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Direct Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                          required
                        />
                      </div>
                    </div>

                    {/* Grid Inputs: Target Location & Experience level */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label htmlFor="location" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Target Facility Center</label>
                        <select
                          name="location"
                          id="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-zinc-300 transition-all duration-200"
                        >
                          <option value="Orlando, FL">Orlando, FL Service Facility</option>
                          <option value="Amesbury, MA">Amesbury, MA Service Facility</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="experience" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">HV Mechanical Background</label>
                        <select
                          name="experience"
                          id="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-zinc-300 transition-all duration-200"
                        >
                          <option value="1-3 years">Junior Mechanic (1-3 yrs)</option>
                          <option value="3-5 years">Mid-Level Tech (3-5 yrs)</option>
                          <option value="5+ years">Master Specialist (5+ yrs)</option>
                        </select>
                      </div>
                    </div>

                    {/* Resume link online */}
                    <div className="space-y-1.5">
                      <label htmlFor="resumeLink" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Portfolio / Resume Cloud link</label>
                      <input
                        type="url"
                        name="resumeLink"
                        id="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        placeholder="Google Drive, LinkedIn, or personal website"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                      />
                    </div>

                    {/* Cover biography text */}
                    <div className="space-y-1.5">
                      <label htmlFor="about" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Briefly transcribe your EV background *</label>
                      <textarea
                        name="about"
                        id="about"
                        rows={4}
                        value={formData.about}
                        onChange={handleInputChange}
                        placeholder="State any specific high-voltage certifications, specialized car brand focus (e.g., Tesla Model S motors, or custom battery retrofitting)..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200 resize-none"
                        required
                      />
                    </div>

                    {/* Submit layout button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-accent hover:opacity-90 text-zinc-950 font-sans font-extrabold text-xs tracking-widest uppercase cursor-pointer disabled:opacity-50 transition-all duration-300 shadow-[0_4px_20px_var(--accent-color)] shadow-accent/30 hover:shadow-[0_4px_30px_var(--accent-color)] hover:shadow-accent/60 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Zap className="w-4 h-4 text-zinc-950 animate-spin" />
                          TRANSMITTING SECURE LOGS...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-zinc-950" />
                          TRANSMIT SECURITY DOSSIER
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
