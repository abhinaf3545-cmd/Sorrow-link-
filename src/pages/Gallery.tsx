import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const projects = [
    { id: 1, title: 'Nexus Platform', category: 'Web App', image: 'https://picsum.photos/seed/nexus/800/1000' },
    { id: 2, title: 'Bloom Branding', category: 'Identity', image: 'https://picsum.photos/seed/bloom/800/600' },
    { id: 3, title: 'Cyber Guard', category: 'Security', image: 'https://picsum.photos/seed/cyber/800/800' },
    { id: 4, title: 'Eco Store', category: 'E-commerce', image: 'https://picsum.photos/seed/eco/800/1200' },
    { id: 5, title: 'Vibe Music', category: 'Mobile App', image: 'https://picsum.photos/seed/vibe/800/700' },
    { id: 6, title: 'Stellar Agency', category: 'Website', image: 'https://picsum.photos/seed/stellar/800/900' },
    { id: 7, title: 'Future Tech', category: 'UI/UX', image: 'https://picsum.photos/seed/future/800/1100' },
    { id: 8, title: 'Growth Hub', category: 'Marketing', image: 'https://picsum.photos/seed/growth/800/650' },
  ];

  const categories = ['All', 'Web App', 'Identity', 'Security', 'E-commerce', 'Mobile App'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand font-bold uppercase tracking-[0.3em] text-sm block mb-4"
          >
            Portfolio
          </motion.span>
          <h1 className="text-6xl md:text-8xl uppercase tracking-tighter leading-none mb-12 text-dark">
            Selected <span className="text-brand italic">Works</span>.
          </h1>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-brand text-white border-brand' : 'border-border text-muted hover:border-brand/30'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImg(project.image)}
              >
                <div className="rounded-xl overflow-hidden bg-surface border border-border shadow-sm">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto group-hover:scale-110 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 rounded-xl backdrop-blur-sm">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-brand text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                      <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-dark">{project.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center shadow-lg">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button
              type="button"
              className="absolute top-10 right-10 text-dark hover:text-brand transition-colors"
              aria-label="Close image preview"
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImg}
              alt="Expanded portfolio preview"
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl border border-border"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
