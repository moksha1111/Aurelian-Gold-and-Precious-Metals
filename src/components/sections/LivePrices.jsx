import { useInView } from '../../hooks/useInView';
import { metals } from '../../data/prices';

export default function LivePrices() {
  const { ref, inView } = useInView();
  return (
    <section className="section-pad bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
             style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:'opacity .6s,transform .6s' }}>
          <div>
            <span className="label">Market Data</span>
            <h2 className="h2">Live Spot Prices</h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" style={{ animation: 'pulse-gold 2s infinite' }} />
            <span className="font-sans text-ash-dim/40 text-xs tracking-widest uppercase">Prices update every 60 seconds</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metals.map((m, i) => (
            <div key={m.symbol}
                 className="bg-dark-card border border-dark-border hover:border-gold/25 p-6 transition-colors group"
                 style={{ opacity: inView?1:0, transform: inView?'none':'translateY(20px)', transition:`opacity .5s ${i*80}ms,transform .5s ${i*80}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-sans font-semibold text-gold text-[11px] tracking-[0.3em]">{m.symbol}</p>
                  <p className="font-serif text-ash text-xl mt-0.5">{m.name}</p>
                </div>
                <span className={`font-sans text-xs font-semibold px-2.5 py-1 ${m.up ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'}`}>
                  {m.up ? '▲' : '▼'} {m.pct}
                </span>
              </div>
              <p className="font-serif text-ash text-3xl font-light">${m.price}</p>
              <p className="font-sans text-ash-dim/35 text-xs mt-1">per troy {m.unit} · {m.change} today</p>
              <div className="mt-5 pt-4 border-t border-dark-border flex gap-3">
                <a href="#products" className="font-sans text-gold text-[10px] tracking-[0.2em] uppercase hover:text-gold-light transition-colors">Buy →</a>
                <a href="#contact"  className="font-sans text-ash-dim/35 text-[10px] tracking-[0.2em] uppercase hover:text-ash-dim transition-colors">Sell →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
