import { motion } from 'motion/react';
import { Users, Target, Eye, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Target className="text-brand" />, title: 'Mission', desc: 'To empower businesses through innovative digital solutions that drive real-world impact.' },
    { icon: <Eye className="text-brand" />, title: 'Vision', desc: 'To be the global benchmark for creative excellence and technical innovation in the digital space.' },
    { icon: <Award className="text-brand" />, title: 'Excellence', desc: 'We never settle for "good enough." Every pixel and every line of code must be perfect.' },
  ];

  const team = [
    { name: 'Julian Sorrow', role: 'Founder & Creative Director', image: 'https://picsum.photos/seed/julian/400/500' },
    { name: 'Elena Vance', role: 'Head of Development', image: 'https://picsum.photos/seed/elena/400/500' },
    { name: 'David Link', role: 'Strategy Lead', image: 'https://picsum.photos/seed/david/400/500' },
    { name: 'Sofia Chen', role: 'UI/UX Designer', image: 'https://picsum.photos/seed/sofia/400/500' },
  ];

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
            Our Story
          </motion.span>
          <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-12 text-dark">
            The Agency <br /> Of <span className="text-brand italic">Tomorrow</span>.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <p className="text-xl md:text-2xl text-muted leading-relaxed">
              Founded in 2020, Sorrow Link Solution emerged from a simple observation: the digital world was becoming cluttered and generic. We set out to bring back intentionality, craft, and bold vision to the web.
            </p>
            <div className="aspect-video rounded-2xl overflow-hidden relative border border-border">
              <img 
                src="https://picsum.photos/seed/studio/800/450" 
                alt="Our Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <section className="py-24 border-y border-border mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="text-2xl uppercase tracking-tight text-dark">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Us */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl uppercase mb-10 text-dark">Why Choose Us?</h2>
              <div className="space-y-8">
                {[
                  'Data-driven strategies that actually convert.',
                  'Cutting-edge technology stack for future-proof builds.',
                  'Transparent communication and collaborative process.',
                  'Dedicated support even after project completion.'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="text-brand shrink-0 mt-1" size={24} />
                    <p className="text-xl text-dark/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://picsum.photos/seed/work1/300/400" className="rounded-xl w-full border border-border" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/work2/300/200" className="rounded-xl w-full border border-border" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-4 pt-12">
                <img src="https://picsum.photos/seed/work3/300/200" className="rounded-xl w-full border border-border" referrerPolicy="no-referrer" />
                <img src="https://picsum.photos/seed/work4/300/400" className="rounded-xl w-full border border-border" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl uppercase mb-6 text-dark">The Minds Behind</h2>
            <p className="text-muted max-w-2xl mx-auto">A diverse group of designers, developers, and strategists united by a passion for digital excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 relative border border-border">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-dark">{member.name}</h4>
                <p className="text-brand text-sm font-medium uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
