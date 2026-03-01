import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';
import { tabs, products } from '../../data/products';

function ProductCard({ name, purity, weight, price, badge, photoId, delay, inView }) {
  return (
    <div className="group bg-dark-card border border-dark-border hover:border-gold/30 transition-all duration-300"
         style={{ opacity: inView?1:0, transform: inView?'none':'translateY(28px)', transition:`opacity .6s ${delay}ms,transform .6s ${delay}ms,border-color .3s` }}>
      <div className="relative overflow-hidden" style={{ height: '220px' }}>
        <img src={img(photoId, 500, 75)} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card/80 to-transparent" />
        {badge && (
          <span className="absolute top-3 left-3 bg-gold text-dark font-sans font-semibold text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
            {badge}
          </span>
        )}
        {/* Purity badge */}
        <div className="absolute bottom-3 right-3 bg-dark/80 backdrop-blur px-2.5 py-1 border border-dark-border">
          <p className="font-sans text-gold text-[9px] tracking-widest">{purity} ‰</p>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-ash text-lg font-light mb-1 leading-tight">{name}</h3>
        <p className="font-sans text-ash-dim/35 text-xs mb-4">{weight} · Purity {purity}</p>
        <div className="flex items-center justify-between">
          <p className="font-serif text-gold text-xl">{price}</p>
          <button className="font-sans text-[10px] tracking-[0.2em] uppercase text-gold border border-gold/30 px-4 py-2 hover:bg-gold hover:text-dark transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Products() {
  const [active, setActive] = useState('All');
  const { ref, inView } = useInView();

  const filtered = active === 'All' ? products : products.filter(p => p.tab === active);

  return (
    <section id="products" className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
             style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:'opacity .6s,transform .6s' }}>
          <div>
            <span className="label">Our Inventory</span>
            <h2 className="h2">Precious Metal Products</h2>
          </div>
          <p className="font-sans text-ash-dim/40 text-sm max-w-xs">All products are LBMA accredited and ship within 5 business days.</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map(t => (
            <button key={t} onClick={() => setActive(t)}
                    className={`font-sans text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 transition-colors border ${
                      active === t
                        ? 'bg-gold text-dark border-gold font-semibold'
                        : 'border-dark-border text-ash-dim/50 hover:border-gold/30 hover:text-ash-dim'
                    }`}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} {...p} delay={i * 80} inView={inView} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-outline">View Full Catalogue →</a>
        </div>
      </div>
    </section>
  );
}
