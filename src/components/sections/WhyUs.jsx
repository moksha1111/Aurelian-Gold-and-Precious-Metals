import { useInView } from '../../hooks/useInView';
import { reasons } from '../../data/whyUs';

export default function WhyUs() {
  const { ref, inView } = useInView();
  return (
    <section id="why" className="section-pad bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16"
             style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:'opacity .6s,transform .6s' }}>
          <span className="label">Why Aurelian</span>
          <h2 className="h2">Built on Trust,<br />Backed by Gold</h2>
          <div className="gold-line mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-dark-border">
          {reasons.map((r, i) => (
            <div key={r.title}
                 className="border-r border-b border-dark-border p-8 hover:bg-dark-surface transition-colors group"
                 style={{ opacity: inView?1:0, transform: inView?'none':'translateY(20px)', transition:`opacity .6s ${i*90}ms,transform .6s ${i*90}ms` }}>
              <div className="text-3xl mb-5">{r.icon}</div>
              <h3 className="font-serif text-ash text-xl font-light mb-3 group-hover:text-gold transition-colors">{r.title}</h3>
              <p className="font-sans text-ash-dim/45 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
