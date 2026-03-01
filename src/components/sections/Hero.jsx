import { img } from '../../utils/images';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src={img('1526045612212-70caf35c14df', 1800, 80)} alt="Gold bars" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/85 to-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-dark/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="label" style={{ animation: 'fadeUp .7s ease both' }}>
            Trusted Since 2009 · London · Zurich · Dubai
          </p>
          <h1 className="font-serif font-light text-ash text-5xl md:text-7xl lg:text-8xl leading-[1.0] mb-6"
              style={{ animation: 'fadeUp .8s .1s ease both' }}>
            Wealth That<br />
            <em className="text-gold not-italic">Endures</em>.
          </h1>
          <p className="font-sans text-ash-dim/60 text-sm md:text-base leading-relaxed max-w-lg mb-10"
             style={{ animation: 'fadeUp .8s .2s ease both' }}>
            Aurelian is the world's most trusted source for investment-grade gold, silver, platinum and palladium. Physical metals, fully audited vault storage, and real-time pricing — all in one place.
          </p>
          <div className="flex flex-wrap gap-4" style={{ animation: 'fadeUp .8s .32s ease both' }}>
            <a href="#products" className="btn-gold">Browse Products</a>
            <a href="#prices"   className="btn-outline">Live Prices</a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12" style={{ animation: 'fadeUp .8s .44s ease both' }}>
            {['LBMA Accredited', 'Insured Storage', '14 Years Trading', '48 Countries'].map(b => (
              <div key={b} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-sans text-ash-dim/50 text-xs tracking-wider">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll line */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
           style={{ animation: 'fadeUp .8s .6s ease both' }}>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
