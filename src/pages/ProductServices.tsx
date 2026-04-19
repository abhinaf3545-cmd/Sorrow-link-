import { motion } from 'motion/react';
import { ArrowRight, Boxes, Database, LayoutDashboard, LifeBuoy, LockKeyhole, Network, Rocket, Settings2, UsersRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductServices() {
  const offerings = [
    {
      icon: <Boxes size={38} />,
      title: 'B2B SaaS Platforms',
      desc: 'Design and build multi-role products with reliable architecture, usage visibility, and scalable release practices.',
      points: ['Product Discovery', 'Admin Workflows', 'Subscription Logic', 'Release Planning'],
    },
    {
      icon: <LayoutDashboard size={38} />,
      title: 'Executive Dashboards',
      desc: 'Internal and client-facing reporting systems that surface operational, commercial, and delivery intelligence.',
      points: ['Role-Based Views', 'KPI Definitions', 'Reporting UX', 'Cross-System Metrics'],
    },
    {
      icon: <Network size={38} />,
      title: 'Portals & Internal Tools',
      desc: 'Purpose-built portals for employees, partners, vendors, and customers with strong workflow design.',
      points: ['Self-Service Portals', 'Approvals', 'Document Workflows', 'Identity Integration'],
    },
    {
      icon: <Database size={38} />,
      title: 'Systems Integration',
      desc: 'Connect business-critical systems so product experiences and operations stay consistent across departments.',
      points: ['API Strategy', 'Data Flows', 'Migration Support', 'Reliability Planning'],
    },
    {
      icon: <LockKeyhole size={38} />,
      title: 'Secure Delivery',
      desc: 'Engineering practices that support enterprise expectations for access control, auditability, and resilience.',
      points: ['Access Policies', 'Environment Controls', 'QA Checkpoints', 'Launch Readiness'],
    },
    {
      icon: <LifeBuoy size={38} />,
      title: 'Post-Launch Support',
      desc: 'Operational support for product teams that need optimization, maintenance, and iterative delivery after go-live.',
      points: ['Backlog Triage', 'Incident Coordination', 'Performance Tuning', 'Roadmap Support'],
    },
  ];

  const deliveryTracks = [
    { label: 'Discovery Sprint', detail: '2-4 weeks to define product scope, priorities, and delivery risks.' },
    { label: 'Build Program', detail: 'Phased engineering execution with product management and stakeholder reporting.' },
    { label: 'Scale & Support', detail: 'Ongoing optimization, enablement, and managed enhancement delivery.' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <section className="mb-24">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Product Services
          </motion.span>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end">
            <div>
              <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-8 text-dark">
                Software Products <br /> With <span className="text-brand italic">Delivery Discipline</span>.
              </h1>
              <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-3xl">
                We partner with organizations that need product discovery, engineering execution, and operational readiness in one accountable team.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-brand font-bold mb-4">Ideal Mandates</p>
              <div className="space-y-4 text-muted">
                <p>Launch a new platform or customer portal</p>
                <p>Replace fragmented internal tools</p>
                <p>Modernize product architecture and reporting</p>
                <p>Embed governance into engineering delivery</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24 rounded-[2rem] bg-dark px-8 py-12 text-white md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Rocket className="text-white mb-5" size={34} />
              <h2 className="text-2xl uppercase tracking-tight mb-3">Launch Faster</h2>
              <p className="text-white/75">Ship with product plans, technical structure, and stakeholder communication already aligned.</p>
            </div>
            <div>
              <Settings2 className="text-white mb-5" size={34} />
              <h2 className="text-2xl uppercase tracking-tight mb-3">Operate Better</h2>
              <p className="text-white/75">Reduce manual work and improve visibility through systems designed around actual business flows.</p>
            </div>
            <div>
              <UsersRound className="text-white mb-5" size={34} />
              <h2 className="text-2xl uppercase tracking-tight mb-3">Align Teams</h2>
              <p className="text-white/75">Bring product, delivery, and executive stakeholders into one rhythm with clear reporting and decision points.</p>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl uppercase tracking-tight text-dark mb-5">What We Build</h2>
              <p className="text-xl text-muted">Corporate-grade digital products shaped around governance, adoption, and long-term maintainability.</p>
            </div>
            <Link to="/contact" className="text-brand font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
              Discuss Your Product Roadmap <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="mb-6 text-brand">{item.icon}</div>
                <h3 className="text-3xl uppercase tracking-tight text-dark mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed mb-8">{item.desc}</p>
                <ul className="space-y-3 text-sm text-muted">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <div className="rounded-3xl border border-border bg-surface p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-brand font-bold mb-4">Delivery Tracks</p>
            <h2 className="text-4xl uppercase tracking-tight text-dark mb-6">From Discovery To Scale</h2>
            <div className="space-y-6">
              {deliveryTracks.map((track) => (
                <div key={track.label} className="border-l-2 border-brand pl-5">
                  <h3 className="text-xl uppercase tracking-tight text-dark mb-2">{track.label}</h3>
                  <p className="text-muted leading-relaxed">{track.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-white p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-brand font-bold mb-4">Why Clients Choose Us</p>
            <h2 className="text-4xl uppercase tracking-tight text-dark mb-6">Product Thinking With Executive Accountability</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm uppercase tracking-widest text-brand font-bold mb-3">Product Clarity</p>
                <p className="text-muted">We define scope, user flows, and decision criteria before delivery accelerates.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm uppercase tracking-widest text-brand font-bold mb-3">Engineering Rigor</p>
                <p className="text-muted">Systems are designed for maintainability, operational visibility, and business continuity.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm uppercase tracking-widest text-brand font-bold mb-3">Stakeholder Confidence</p>
                <p className="text-muted">Sponsors get progress visibility, risk transparency, and clear next-step decisions.</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm uppercase tracking-widest text-brand font-bold mb-3">Long-Term Support</p>
                <p className="text-muted">We stay engaged through launch stabilization, enhancements, and roadmap evolution.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
