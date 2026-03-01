import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';

const stats = [
  { value: '2009',  label: 'Founded' },
  { value: '$4.2B', label: 'Metals Traded' },
  { value: '48',    label: 'Countries Served' },
  { value: '12K+',  label: 'Active Clients' },
];

export default function About() {
  const { ref, inView } = useInView();
  return (
    <section id="about" className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div ref={ref} className="relative"
               style={{ opacity: inView?1:0, transform: inView?'none':'translateX(-28px)', transition:'opacity .8s,transform .8s' }}>
            <div className="relative overflow-hidden" style={{ height: '540px' }}>
              <img src={img('1547996160-81dfa63595aa', 800, 80)} alt="Gold vault" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </div>
            {/* Stats overlay */}
            <div className="absolute -right-4 bottom-8 bg-dark-card border border-dark-border p-6 shadow-card grid grid-cols-2 gap-5">
              {stats.map(s => (
                <div key={s.label}>
                  <p className="font-serif text-gold text-2xl font-light">{s.value}</p>
                  <p className="font-sans text-ash-dim/45 text-[10px] tracking-wider uppercase mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Text */}
          <div style={{ opacity: inView?1:0, transform: inView?'none':'translateX(28px)', transition:'opacity .8s .1s,transform .8s .1s' }}>
            <span className="label">Our Story</span>
            <h2 className="h2 mb-4">A House Built<br />on Integrity</h2>
            <div className="gold-line" />
            <p className="font-sans text-ash-dim/55 text-sm leading-relaxed mb-5">
              Aurelian was founded in London in 2009, at a time when the world was searching for stability. Our founders — a team of commodity traders and vault operators — saw a gap: a precious metals dealer that put the client first, with transparent pricing and verifiable storage.
            </p>
            <p className="font-sans text-ash-dim/55 text-sm leading-relaxed mb-8">
              Fifteen years on, we serve private individuals, family offices and institutional clients across 48 countries. Every gram of metal we sell is traceable, every vault we operate is independently audited, and every price we publish is live from the spot market.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {[
                'LBMA Full Member since 2011',
                'Class III vault certification in London, Zurich & Dubai',
                'ISO 9001 certified operations',
                'Annual independent audit by PricewaterhouseCoopers',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-4 h-4 border border-gold/40 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-1.5 h-1.5 bg-gold" />
                  </div>
                  <p className="font-sans text-ash-dim/60 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-gold">Speak to Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
