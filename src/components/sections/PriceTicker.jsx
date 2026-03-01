import { metals } from '../../data/prices';

function TickerItem({ symbol, name, price, change, pct, up }) {
  return (
    <div className="flex items-center gap-4 px-8 shrink-0 border-r border-dark-border last:border-r-0">
      <div>
        <span className="font-sans font-semibold text-gold text-[11px] tracking-widest">{symbol}</span>
        <span className="font-sans text-ash-dim/40 text-[10px] ml-1.5">{name}</span>
      </div>
      <span className="font-sans font-medium text-ash text-sm">${price}</span>
      <span className={`font-sans text-[11px] font-medium ${up ? 'text-emerald-400' : 'text-red-400'}`}>
        {up ? '▲' : '▼'} {pct}
      </span>
    </div>
  );
}

export default function PriceTicker() {
  const doubled = [...metals, ...metals];
  return (
    <div id="prices" className="bg-dark-card border-y border-dark-border overflow-hidden py-4">
      <div className="flex" style={{ width: 'max-content', animation: 'ticker 30s linear infinite' }}>
        {doubled.map((m, i) => <TickerItem key={i} {...m} />)}
      </div>
    </div>
  );
}
