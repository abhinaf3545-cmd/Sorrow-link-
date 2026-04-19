import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('sent'), 2000);
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
                <h3 className="text-3xl uppercase mb-4 text-dark">Message Sent!</h3>
                <p className="text-muted mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setFormState('idle')} className="btn-secondary">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors text-dark" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Email Address</label>
                    <input required type="email" placeholder="john@example.com" className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors text-dark" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Subject</label>
                  <select className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors appearance-none text-dark">
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Career Opportunity</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-muted font-bold ml-4">Message</label>
                  <textarea required rows={5} placeholder="Tell us about your project..." className="w-full bg-surface border border-border rounded-md px-6 py-4 focus:outline-none focus:border-brand transition-colors resize-none text-dark"></textarea>
                </div>
                <button 
                  disabled={formState === 'sending'}
                  className="w-full btn-primary justify-center py-5 text-lg"
                >
                  {formState === 'sending' ? 'Sending...' : 'Send Message'} <Send size={20} />
                </button>
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
                <p className="text-xl font-bold text-dark">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-surface border border-border">
              <MapPin className="text-brand mb-6" size={32} />
              <h4 className="text-sm uppercase tracking-widest text-muted mb-2">Visit Us</h4>
              <p className="text-xl font-bold mb-8 text-dark">123 Innovation Drive, Digital Valley, CA 94043</p>
              
              {/* Google Maps Iframe */}
              <div className="w-full h-64 rounded-xl overflow-hidden opacity-80 hover:opacity-100 transition-all duration-500 border border-border">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290622367!2d-122.08374688469212!3d37.42199987982521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1647334751433!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
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
              <button className="ml-auto w-12 h-12 rounded-full bg-white text-brand flex items-center justify-center shadow-md">
                <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
