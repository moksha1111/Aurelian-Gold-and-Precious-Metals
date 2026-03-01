import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView();
  const t = testimonials[active];

  return (
    <section className="section-pad bg-dark-card overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16"
             style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:'opacity .6s,transform .6s' }}>
          <span className="label">Client Stories</span>
          <h2 className="h2">Trusted by Investors<br />Around the World</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div key={item.id}
                 onClick={() => setActive(i)}
                 className={`p-8 border cursor-pointer transition-all duration-300 ${i === active ? 'bg-dark-surface border-gold/40' : 'bg-dark border-dark-border hover:border-gold/20'}`}
                 style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:`opacity .6s ${i*120}ms,transform .6s ${i*120}ms,background .3s,border-color .3s` }}>
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(item.rating)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>
              <p className="font-serif italic text-ash/70 text-lg leading-relaxed mb-8">"{item.quote}"</p>
              <div className="flex items-center gap-4 border-t border-dark-border pt-5">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center shrink-0">
                  <span className="font-serif text-gold font-semibold">{item.initial}</span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-ash text-sm">{item.name}</p>
                  <p className="font-sans text-ash-dim/35 text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
                    className={`transition-all duration-300 ${i === active ? 'w-8 h-1 bg-gold' : 'w-2 h-1 bg-dark-border'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
