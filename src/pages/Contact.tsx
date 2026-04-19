import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight, MessageCircleMore } from 'lucide-react';

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');

    const subject = encodeURIComponent(`[${formValues.subject}] ${formValues.name}`.trim());
    const body = encodeURIComponent(
      [
        `Name: ${formValues.name}`,
        `Email: ${formValues.email}`,
        '',
        formValues.message,
      ].join('\n'),
    );

    window.location.href = `mailto:hello@sorrowlink.com?subject=${subject}&body=${body}`;
    setFormState('sent');
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Get In Touch
          </motion.span>
          <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8 text-dark">
            Let's Start A <br /> <span className="text-brand italic">Conversation</span>.
          </h1>
          <p className="text-xl text-muted max-w-2xl leading-relaxed">
            Have a project in mind? Or just want to say hello? We'd love to hear from you. Our team is ready to help you navigate your digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-10 rounded-[2rem] bg-white border border-border shadow-sm"
          >
            {formState === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white mb-8">
                  <Send size={32} />
                </div>
                <h3 className="text-3xl uppercase mb-4 text-dark">Draft Ready!</h3>
                <p className="text-muted mb-8">Your email client should now have a prefilled draft for this inquiry.</p>
                <button type="button" onClick={() => setFormState('idle')} className="btn-secondary">Create Another Draft</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="full-name" className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Full Name</label>
                    <input
                      id="full-name"
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors text-dark"
                      value={formValues.name}
                      onChange={(e) => setFormValues((current) => ({ ...current, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email-address" className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Email Address</label>
                    <input
                      id="email-address"
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors text-dark"
                      value={formValues.email}
                      onChange={(e) => setFormValues((current) => ({ ...current, email: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Subject</label>
                  <select
                    id="subject"
                    className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors appearance-none text-dark"
                    value={formValues.subject}
                    onChange={(e) => setFormValues((current) => ({ ...current, subject: e.target.value }))}
                  >
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors resize-none text-dark"
                    value={formValues.message}
                    onChange={(e) => setFormValues((current) => ({ ...current, message: e.target.value }))}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full btn-primary justify-center py-5 text-lg"
                >
                  {formState === 'sending' ? 'Opening Email...' : 'Send Message'} <Send size={20} />
                </button>
                <p className="text-sm text-muted">
                  Submitting this form opens your email client with the message prefilled, so inquiries no longer disappear into a demo state.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Map */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-xl bg-surface border border-border hover:border-brand/30 transition-colors">
                <Mail className="text-brand mb-6" size={32} />
                <h4 className="text-sm uppercase tracking-widest text-muted mb-2">Email Us</h4>
                <p className="text-xl font-bold text-dark">hello@sorrowlink.com</p>
              </div>
              <div className="p-8 rounded-xl bg-surface border border-border hover:border-brand/30 transition-colors">
                <Phone className="text-brand mb-6" size={32} />
                <h4 className="text-sm uppercase tracking-widest text-muted mb-2">Call Us</h4>
                <a href="tel:+919207966059" className="text-xl font-bold text-dark hover:text-brand transition-colors">+91 9207966059</a>
              </div>
              <div className="p-8 rounded-xl bg-surface border border-border hover:border-brand/30 transition-colors sm:col-span-2">
                <MessageCircleMore className="text-brand mb-6" size={32} />
                <h4 className="text-sm uppercase tracking-widest text-muted mb-2">WhatsApp</h4>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/919207966059"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 rounded-full bg-brand px-5 py-3 text-sm font-bold uppercase tracking-widest text-white"
                  >
                    Chat On WhatsApp
                  </a>
                  <span className="text-lg font-bold text-dark">+91 9207966059</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-surface border border-border">
              <MapPin className="text-brand mb-6" size={32} />
              <h4 className="text-sm uppercase tracking-widest text-muted mb-2">Visit Us</h4>
              <p className="text-xl font-bold mb-4 text-dark">Floor No.: Ground Floor</p>
              <p className="text-base leading-relaxed text-muted mb-8">
                No. 16, Shop No. 2, 7th Cross Road, 6th Main, Narayana Gowda Layout, BTM Layout 1st Stage,
                Tavarekere, Bengaluru, Bengaluru Urban, Karnataka 560029
              </p>
              
              {/* Google Maps Iframe */}
              <div className="w-full h-64 rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition-all duration-500 border border-border">
                <iframe 
                  src="https://www.google.com/maps?q=No.+16,+Shop+No.+2,+7th+Cross+Road,+6th+Main,+Narayana+Gowda+Layout,+BTM+Layout+1st+Stage,+Tavarekere,+Bengaluru,+Karnataka+560029&output=embed" 
                  width="100%" 
                  height="100%" 
                  title="Sorrow Link office location"
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="flex items-center gap-6 p-8 rounded-xl bg-brand text-white shadow-lg">
              <MessageSquare size={40} />
              <div>
                <h4 className="font-bold text-xl uppercase tracking-tight">Live Chat</h4>
                <p className="opacity-90">Our team is online and ready to help.</p>
              </div>
              <a
                href="https://wa.me/919207966059"
                className="ml-auto w-12 h-12 rounded-full bg-white text-brand flex items-center justify-center shadow-md"
                aria-label="Chat on WhatsApp"
                target="_blank"
                rel="noreferrer"
              >
                <ArrowRight size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
