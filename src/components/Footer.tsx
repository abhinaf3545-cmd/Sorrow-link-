import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const contactLinks = [
    { href: 'mailto:hello@sorrowlink.com', label: 'Email', icon: <Mail size={18} /> },
    { href: 'tel:+15551234567', label: 'Call', icon: <Phone size={18} /> },
    { href: 'https://maps.google.com/?q=123+Innovation+Drive,+Digital+Valley,+CA+94043', label: 'Visit', icon: <MapPin size={18} /> },
  ];

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
              We help leadership teams modernize operations, launch digital products, and build dependable technology foundations for growth.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-muted hover:text-dark transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-muted hover:text-dark transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted hover:text-dark transition-colors">Services</Link></li>
              <li><Link to="/products" className="text-muted hover:text-dark transition-colors">Product Services</Link></li>
              <li><Link to="/gallery" className="text-muted hover:text-dark transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-muted hover:text-dark transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand">Reach Us</h4>
            <div className="flex gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-brand hover:text-white transition-all"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-muted">Start A Project</h4>
              <a
                href="mailto:hello@sorrowlink.com?subject=Project%20Inquiry"
                className="inline-flex w-full items-center justify-center gap-2 bg-white border border-border rounded-md px-4 py-3 text-sm font-semibold text-dark hover:border-brand hover:text-brand transition-colors"
              >
                Email the Team
                <span className="w-10 h-10 bg-brand text-white rounded-md flex items-center justify-center shrink-0">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-border text-muted text-xs uppercase tracking-widest gap-4">
          <p>(c) 2024 Sorrow Link Solution. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="mailto:hello@sorrowlink.com?subject=Privacy%20Policy%20Request" className="hover:text-dark">Privacy Policy</a>
            <a href="mailto:hello@sorrowlink.com?subject=Terms%20of%20Service%20Request" className="hover:text-dark">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
