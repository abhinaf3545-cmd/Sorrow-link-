import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand rounded-sm rotate-45" />
              <span className="text-2xl font-display font-bold tracking-tighter uppercase text-dark">Sorrow Link</span>
            </Link>
            <p className="text-muted max-w-md text-lg leading-relaxed">
              We build digital experiences that matter. From strategy to execution, we are your partners in digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-muted hover:text-dark transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted hover:text-dark transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted hover:text-dark transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-muted hover:text-dark transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-dark transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted">Newsletter</h4>
              <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="bg-white border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:border-brand w-full" />
                <button className="w-10 h-10 bg-brand text-white rounded-md flex items-center justify-center shrink-0">
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border text-muted text-xs uppercase tracking-widest gap-4">
          <p>© 2024 Sorrow Link Solution. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-dark">Privacy Policy</a>
            <a href="#" className="hover:text-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
