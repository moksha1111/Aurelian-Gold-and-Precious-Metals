import { useEffect, useState } from 'react';

const links = [
  { label: 'Live Prices', href: '#prices' },
  { label: 'Products',    href: '#products' },
  { label: 'Storage',     href: '#why' },
  { label: 'About',       href: '#about' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/95 backdrop-blur-md border-b border-dark-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-baseline gap-2">
          <span className="font-serif font-semibold text-gold text-xl tracking-[0.3em] uppercase">Aurelian</span>
          <span className="hidden sm:block font-sans text-ash-dim text-[9px] tracking-[0.3em] uppercase">Gold &amp; Precious Metals</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
               className="font-sans text-ash-dim hover:text-ash text-[11px] tracking-[0.18em] uppercase transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#contact" className="btn-gold text-[10px] py-3 px-6">Open Account</a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-px bg-ash transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-ash transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-ash transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-card border-t border-dark-border px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
               className="font-sans text-ash text-sm tracking-[0.18em] uppercase">{l.label}</a>
          ))}
          <a href="#contact" className="btn-gold justify-center mt-2" onClick={() => setOpen(false)}>Open Account</a>
        </div>
      )}
    </nav>
  );
}
