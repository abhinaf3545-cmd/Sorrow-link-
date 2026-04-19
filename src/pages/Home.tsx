import { motion } from 'motion/react';
import { ArrowRight, Code, Palette, Zap, Globe, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    { icon: <Palette size={32} />, title: 'Brand Identity', desc: 'Crafting unique visual languages that resonate with your audience.' },
    { icon: <Code size={32} />, title: 'Web Development', desc: 'Building high-performance, scalable web applications with modern tech.' },
    { icon: <Zap size={32} />, title: 'Digital Strategy', desc: 'Strategic planning to accelerate your digital growth and presence.' },
  ];

  const testimonials = [
    { name: 'Alex Rivera', role: 'CEO, TechFlow', text: 'Sorrow Link transformed our digital presence. Their attention to detail is unmatched.' },
    { name: 'Sarah Chen', role: 'Marketing Director, Bloom', text: 'The most professional agency we have worked with. They delivered beyond our expectations.' },
    { name: 'Marcus Thorne', role: 'Founder, Nexus', text: 'Innovative solutions and a truly collaborative process. Highly recommended.' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand/5 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full border border-brand/30 text-brand text-xs font-bold uppercase tracking-widest mb-6">
                Digital Solutions Agency
              </span>
              <h1 className="text-6xl md:text-8xl font-display font-bold leading-[1.1] mb-8 uppercase tracking-tighter text-dark">
                We Link <span className="text-brand italic">Vision</span> <br /> With Reality.
              </h1>
              <p className="text-xl md:text-2xl text-muted mb-10 max-w-2xl leading-relaxed">
                Sorrow Link Solution is a creative powerhouse dedicated to building the future of digital experiences. We don't just build websites; we build legacies.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                  Start a Project <ArrowRight size={20} />
                </Link>
                <Link to="/services" className="btn-secondary text-lg px-8 py-4">
                  Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="hidden lg:block absolute right-20 top-1/3 w-64 h-80 border border-border rounded-xl glass p-6 rotate-6"
        >
          <div className="w-12 h-12 bg-brand rounded-lg mb-6" />
          <div className="h-4 w-3/4 bg-muted/20 rounded mb-3" />
          <div className="h-4 w-1/2 bg-muted/10 rounded mb-8" />
          <div className="space-y-2">
            <div className="h-2 w-full bg-muted/5 rounded" />
            <div className="h-2 w-full bg-muted/5 rounded" />
            <div className="h-2 w-2/3 bg-muted/5 rounded" />
          </div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl uppercase mb-6 text-dark">Our Expertise</h2>
              <p className="text-xl text-muted">We combine technical excellence with creative brilliance to solve complex digital challenges.</p>
            </div>
            <Link to="/services" className="text-brand font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-xl border border-border bg-white hover:shadow-lg transition-all group"
              >
                <div className="text-brand mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
                <h3 className="text-2xl uppercase mb-4 text-dark">{s.title}</h3>
                <p className="text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-display font-bold text-brand mb-2">150+</div>
              <div className="text-xs uppercase tracking-widest text-muted">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-brand mb-2">50+</div>
              <div className="text-xs uppercase tracking-widest text-muted">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-brand mb-2">12+</div>
              <div className="text-xs uppercase tracking-widest text-muted">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-display font-bold text-brand mb-2">99%</div>
              <div className="text-xs uppercase tracking-widest text-muted">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase mb-6 text-dark">What Clients Say</h2>
            <div className="w-20 h-1 bg-brand mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-xl glass relative">
                <Star className="text-brand absolute top-8 right-8" size={20} fill="currentColor" />
                <p className="text-lg italic text-dark/80 mb-8 leading-relaxed">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-dark">{t.name}</h4>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto rounded-2xl bg-brand p-12 md:p-24 text-white text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8 leading-none">
              Ready to build <br /> something amazing?
            </h2>
            <p className="text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto opacity-90">
              Let's collaborate and create a digital solution that sets you apart from the competition.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand rounded-md font-bold text-xl hover:scale-105 transition-transform shadow-md">
              Get in Touch <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
