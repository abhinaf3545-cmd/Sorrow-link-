import { motion } from 'motion/react';
import { Palette, Code, Search, BarChart, Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Branding & Identity',
      desc: 'We create visual identities that tell your story and leave a lasting impression.',
      features: ['Logo Design', 'Brand Guidelines', 'Typography', 'Color Theory']
    },
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      desc: 'High-performance websites built with the latest technologies for speed and scale.',
      features: ['React/Next.js', 'E-commerce', 'CMS Integration', 'API Development']
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile Apps',
      desc: 'Native and cross-platform mobile experiences that users love to engage with.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: <Search size={40} />,
      title: 'SEO & Marketing',
      desc: 'Strategic digital marketing that puts your brand in front of the right audience.',
      features: ['Keyword Research', 'Content Strategy', 'PPC Campaigns', 'Analytics']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Cyber Security',
      desc: 'Protecting your digital assets with robust security measures and monitoring.',
      features: ['Penetration Testing', 'Data Encryption', 'Security Audits', 'Compliance']
    },
    {
      icon: <BarChart size={40} />,
      title: 'Data Analytics',
      desc: 'Turning raw data into actionable insights to drive your business decisions.',
      features: ['Data Visualization', 'User Behavior', 'Conversion Tracking', 'Reporting']
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Capabilities
          </motion.span>
          <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8 text-dark">
            Solutions For <br /> The <span className="text-brand italic">Digital Age</span>.
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            We offer a comprehensive suite of services designed to help your business thrive in an ever-evolving digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-xl border border-border bg-white hover:shadow-lg transition-all group"
            >
              <div className="text-brand mb-8 group-hover:scale-110 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-3xl uppercase tracking-tight mb-6 text-dark">{s.title}</h3>
              <p className="text-muted mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3 mb-10">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-muted">
                    <div className="w-1.5 h-1.5 bg-brand rounded-full" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="flex items-center gap-2 text-brand font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
                Inquire Now <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-24 bg-surface rounded-3xl px-12 md:px-24 border border-border">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase mb-6 text-dark">Our Process</h2>
            <p className="text-muted">How we bring your vision to life, step by step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-border -z-0" />
            
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals, audience, and challenges.' },
              { step: '02', title: 'Strategy', desc: 'Developing a roadmap for success and innovation.' },
              { step: '03', title: 'Execution', desc: 'Building and refining the solution with precision.' },
              { step: '04', title: 'Launch', desc: 'Deploying and scaling for maximum impact.' }
            ].map((p, i) => (
              <div key={i} className="relative z-10 text-center md:text-left">
                <div className="w-16 h-16 rounded-full bg-white border border-brand flex items-center justify-center text-brand font-display font-bold text-2xl mx-auto md:mx-0 mb-8 shadow-sm">
                  {p.step}
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight mb-4 text-dark">{p.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
