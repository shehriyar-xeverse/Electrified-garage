import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  CheckCircle, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Settings, 
  AlertCircle,
  HelpCircle,
  Clock,
  Zap
} from 'lucide-react';

interface ContactSectionProps {
  initialServiceFocus?: string;
}

export default function ContactSection({ initialServiceFocus = '' }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    serviceType: initialServiceFocus || 'Battery Cell diagnostic',
    preferredLocation: 'Orlando, FL',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const servicesList = [
    'General Diagnostic Scan',
    'High-Voltage Battery Cell Repair',
    'Drive Unit & Inverter Salvage',
    'Upgrade Suspension / Custom Tuning',
    'Matte PPF & Color Wraps',
    'Academy Syllabus Inquiry',
    'Other Specialized Service'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.phone || !formData.vehicle || !formData.message) {
      setError('Please populate all required fields to proceed.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        vehicle: '',
        serviceType: 'Battery Cell diagnostic',
        preferredLocation: 'Orlando, FL',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 sm:py-32 bg-[#050605] text-white">
      {/* Background visual detail */}
      <div className="absolute top-[30%] left-[-10%] w-[450px] h-[450px] bg-accent/4 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-[#7DB7C3]/5 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 justify-center"
          >
            <span className="w-6 h-[1px] bg-accent" />
            <span className="font-mono text-xs uppercase text-accent tracking-[0.2em] font-medium text-center">Contact Terminal</span>
            <span className="w-6 h-[1px] bg-accent" />
          </motion.div>
          
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            Secure Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Reservations</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            Ready to schedule a specialized battery test or CAN system flash? Transmit your vehicle metadata secure ledger below, and our dispatchers will respond.
          </p>
        </div>

        {/* Master dual split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Contact Info & Support */}
          <div className="lg:col-span-4 space-y-8">
            <span className="font-sans font-extrabold text-xs uppercase tracking-widest text-accent block pb-4 border-b border-zinc-900">
              Corporate Desk
            </span>

            {/* Inquiries methods list */}
            <div className="space-y-6">
              
              <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 space-y-3">
                <span className="font-mono text-[9px] text-accent uppercase tracking-widest block font-bold">Primary Email Grid</span>
                <div className="flex items-center gap-2.5 text-white font-sans text-sm font-semibold">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:info@electrifiedgarage.com" className="hover:text-accent transition-colors">info@electrifiedgarage.com</a>
                </div>
                <p className="font-sans text-xs text-zinc-500 font-light leading-relaxed">
                  For corporate relations, press kits, or general service inquiries.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 space-y-3">
                <span className="font-mono text-[9px] text-accent uppercase tracking-widest block font-bold">High-Voltage Care Academy</span>
                <div className="flex items-center gap-2.5 text-white font-sans text-sm font-semibold">
                  <Clock className="w-4 h-4 text-accent" />
                  <a href="mailto:academy@electrifiedgarage.com" className="hover:text-accent transition-colors">academy@electrifiedgarage.com</a>
                </div>
                <p className="font-sans text-xs text-zinc-500 font-light leading-relaxed">
                  For student enrollment, syllabus files, and independent garage tooling partnership agreements.
                </p>
              </div>

              {/* Secure certification shield callout */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-950 to-[#0c0d0c] border border-zinc-900 flex items-start gap-4 shadow-lg">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-accent shrink-0">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-zinc-200">GDPA Compliance Secured</h4>
                  <p className="font-sans text-[11px] text-zinc-500 leading-snug font-light mt-1">
                    Your vehicle registration indices and battery parameters are routed through isolated encrypted conduits. We do not transmit metadata to factory servers.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Panel: Clean form with glowing borders and floats */}
          <div className="lg:col-span-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950/60 border border-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.85)] relative overflow-hidden">
              <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-900">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 text-accent flex items-center justify-center">
                  <Settings className="w-5 h-5 pb-0" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-white">Booking Terminal</h3>
                  <p className="font-mono text-[9px] text-zinc-500">Initiate vehicle triage index request</p>
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
                    <h4 className="font-sans font-black text-lg text-white uppercase tracking-tight">Transmission Index Created</h4>
                    <p className="font-sans text-xs text-zinc-400 max-w-sm leading-relaxed">
                      Your diagnostic request has been successfully filed. A representative will contact you shortly to coordinate scheduling.
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      New Booking Index
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    id="contact-form"
                  >
                    {error && (
                      <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 text-red-400 text-xs font-sans flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Standard details block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Alexis Rebuilds"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Callback Email *</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@domain.com"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                            required
                          />
                        </div>
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Mobile Line *</label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-1.5">
                        <label htmlFor="vehicle" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Vehicle Model / Year *</label>
                        <input
                          type="text"
                          name="vehicle"
                          id="vehicle"
                          value={formData.vehicle}
                          onChange={handleInputChange}
                          placeholder="e.g. 2021 Tesla Model Y Performance"
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200"
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="serviceType" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Required Service</label>
                        <select
                          name="serviceType"
                          id="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-zinc-300 transition-all duration-200"
                        >
                          {servicesList.map((service, i) => (
                            <option key={i} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="preferredLocation" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Preferred Facility</label>
                        <select
                          name="preferredLocation"
                          id="preferredLocation"
                          value={formData.preferredLocation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-zinc-300 transition-all duration-200"
                        >
                          <option value="Orlando, FL">Orlando, FL Facility Center</option>
                          <option value="Amesbury, MA">Amesbury, MA Workshop Center</option>
                        </select>
                      </div>
                    </div>

                    {/* Description comments block */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="font-mono text-[9px] text-zinc-400 uppercase tracking-widest block">Briefly transcribe any errors or problems *</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="State any specific warnings shown on screen (e.g., BMS_a079, safety isolate codes, or suspension noise symptoms)..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none text-xs text-white transition-all duration-200 resize-none animate-none"
                        required
                      />
                    </div>

                    {/* Submit layout button */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl bg-accent hover:opacity-90 text-zinc-950 font-sans font-extrabold text-xs tracking-widest uppercase cursor-pointer disabled:opacity-50 transition-all duration-300 shadow-[0_4px_20px_var(--accent-color)] shadow-accent/35 hover:shadow-[0_4px_30px_var(--accent-color)] hover:shadow-accent/65 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Zap className="w-4 h-4 text-zinc-900 animate-spin" />
                          TRANSMITTING SECURE LEDGER...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-zinc-900" />
                          TRANSMIT RESERVATION REQUEST
                        </>
                      )}
                    </button>
                    {/* Security footprint note */}
                    <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-zinc-650 block uppercase text-zinc-550 pt-2 text-center text-zinc-500">
                      <HelpCircle className="w-3.5 h-3.5 text-accent" />
                      Response typically dispatched in 24 operational hours
                    </div>
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
