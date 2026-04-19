import { motion } from 'motion/react';
import { ArrowRight, BarChart, BriefcaseBusiness, Building2, Layers3, ShieldCheck, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: <BriefcaseBusiness size={40} />,
      title: 'Transformation Strategy',
      desc: 'We help leadership teams prioritize investments, define roadmaps, and align operating models around growth.',
      features: ['Executive Workshops', 'Transformation Roadmaps', 'Portfolio Prioritization', 'Change Planning']
    },
    {
      icon: <Workflow size={40} />,
      title: 'Process & Automation',
      desc: 'Operational improvement programs that reduce friction across service delivery, reporting, and internal workflows.',
      features: ['Workflow Design', 'Automation Mapping', 'Internal Tooling', 'Ops Enablement']
    },
    {
      icon: <Layers3 size={40} />,
      title: 'Enterprise Platforms',
      desc: 'Scalable delivery for portals, dashboards, and business-critical systems with strong architectural discipline.',
      features: ['Platform Design', 'Systems Integration', 'B2B Portals', 'Data Workflows']
    },
    {
      icon: <Building2 size={40} />,
      title: 'Corporate Experience Design',
      desc: 'Professional digital presence for organizations that need credibility, consistency, and clear stakeholder journeys.',
      features: ['Corporate Websites', 'Investor Messaging', 'Service Architecture', 'Accessibility Standards']
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Risk & Delivery Assurance',
      desc: 'Controls, governance, and quality checkpoints that protect programs during scale, launch, and transition.',
      features: ['Delivery Governance', 'Security Coordination', 'Release Readiness', 'Documentation']
    },
    {
      icon: <BarChart size={40} />,
      title: 'Performance Analytics',
      desc: 'Measurement frameworks that connect digital delivery to executive reporting and operational improvement.',
      features: ['Executive Dashboards', 'KPI Design', 'Service Metrics', 'Decision Support']
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
            Corporate Services
          </motion.span>
          <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8 text-dark">
            Advisory And <br /> Delivery <span className="text-brand italic">For Scale</span>.
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Our service lines are designed for organizations managing transformation, modernization, and multi-stakeholder delivery.
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
            <h2 className="text-4xl md:text-6xl uppercase mb-6 text-dark">Our Delivery Model</h2>
            <p className="text-muted">Structured governance and execution from assessment through adoption.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-border -z-0" />
            
            {[
              { step: '01', title: 'Assess', desc: 'Capture objectives, operating realities, risks, and stakeholder expectations.' },
              { step: '02', title: 'Design', desc: 'Define the service blueprint, roadmap, and measures of success.' },
              { step: '03', title: 'Deliver', desc: 'Execute in accountable phases with visibility across teams and sponsors.' },
              { step: '04', title: 'Embed', desc: 'Support adoption with documentation, enablement, and performance reporting.' }
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

        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl border border-border bg-white p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-brand font-bold mb-4">Best For</p>
              <h2 className="text-4xl uppercase tracking-tight text-dark mb-6">Consulting Engagements</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Ideal for organizations that need strategic alignment, delivery oversight, and a credible partner across multiple workstreams.
              </p>
              <ul className="space-y-4 text-muted">
                <li>Digital transformation programs</li>
                <li>Operating model redesign</li>
                <li>Corporate website and service architecture refreshes</li>
                <li>Stakeholder reporting and governance design</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-dark p-10 text-white">
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 font-bold mb-4">Need Product Delivery?</p>
              <h2 className="text-4xl uppercase tracking-tight mb-6">Explore Product Services</h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                When the mandate includes shipping software, portals, or internal platforms, our product services team takes over with dedicated engineering and product discipline.
              </p>
              <Link to="/products" className="inline-flex items-center gap-3 rounded-md bg-white px-6 py-4 font-bold uppercase tracking-widest text-dark">
                View Product Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
