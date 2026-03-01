const cols = {
  'Products':   ['Gold Bars', 'Gold Coins', 'Silver Bars', 'Platinum', 'Pre-Owned'],
  'Services':   ['Vault Storage', 'Physical Delivery', 'Buyback Programme', 'Portfolio Review', 'Inheritance Planning'],
  'Company':    ['About Aurelian', 'Our Vaults', 'LBMA Membership', 'Press', 'Careers'],
  'Legal':      ['Privacy Policy', 'Terms of Use', 'Risk Warning', 'Complaints', 'Cookie Policy'],
};

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border">
      {/* CTA Band */}
      <div className="border-b border-dark-border px-6 md:px-12 py-10 bg-dark-surface">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-ash text-2xl font-light">Gold is the oldest form of <em className="text-gold">wealth protection</em>.</p>
            <p className="font-sans text-ash-dim/35 text-xs mt-1">Join 12,000+ investors who trust Aurelian with their hard assets.</p>
          </div>
          <div className="flex gap-0 w-full md:w-auto max-w-sm">
            <input placeholder="Your email address" className="flex-1 bg-dark border border-dark-border border-r-0 px-4 py-3 font-sans text-sm text-ash placeholder-ash-dim/20 focus:outline-none focus:border-gold/40 transition-colors" />
            <button className="bg-gold text-dark font-sans font-semibold text-[10px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-gold-light transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <p className="font-serif font-semibold text-gold text-2xl tracking-[0.2em] uppercase">Aurelian</p>
              <p className="font-sans text-ash-dim/30 text-[9px] tracking-[0.4em] uppercase mt-0.5">Gold &amp; Precious Metals · Est. 2009</p>
            </div>
            <p className="font-sans text-ash-dim/35 text-sm leading-relaxed max-w-xs mb-6">
              LBMA accredited dealer. Fully regulated. Independently audited. Operating from London, Zurich and Dubai.
            </p>
            <div className="flex gap-2">
              {['𝕏', 'in', 'YT', 'FB'].map(s => (
                <button key={s} className="w-9 h-9 border border-dark-border hover:border-gold/30 text-ash-dim/40 hover:text-gold font-sans text-xs font-semibold transition-colors">{s}</button>
              ))}
            </div>
          </div>

          {Object.entries(cols).map(([group, items]) => (
            <div key={group}>
              <p className="font-sans font-semibold text-ash text-[10px] tracking-[0.25em] uppercase mb-5">{group}</p>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item}>
                    <a href="#" className="font-sans text-ash-dim/35 hover:text-ash-dim text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk warning */}
        <div className="border border-dark-border p-4 mb-8 bg-dark-surface">
          <p className="font-sans text-ash-dim/25 text-[10px] leading-relaxed">
            <strong className="text-ash-dim/40">Risk Warning:</strong> The value of precious metals can fall as well as rise. Past performance is not indicative of future results. Aurelian Ltd is registered in England &amp; Wales (No. 06789123). This website does not constitute investment advice.
          </p>
        </div>

        <div className="pt-6 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-sans text-ash-dim/25 text-xs">© 2025 Aurelian Ltd. All rights reserved. London · Zurich · Dubai</p>
          <div className="flex items-center gap-4">
            <span className="font-sans text-ash-dim/20 text-[10px] tracking-wider">LBMA MEMBER</span>
            <span className="w-px h-3 bg-dark-border" />
            <span className="font-sans text-ash-dim/20 text-[10px] tracking-wider">ISO 9001</span>
            <span className="w-px h-3 bg-dark-border" />
            <span className="font-sans text-ash-dim/20 text-[10px] tracking-wider">FCA REGULATED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
