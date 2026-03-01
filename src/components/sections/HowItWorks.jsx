import { useInView } from '../../hooks/useInView';

const steps = [
  { n: '01', title: 'Open Your Account',    desc: 'Complete our 5-minute online application. Identity verification is handled instantly via our secure KYC partner.' },
  { n: '02', title: 'Fund & Browse',         desc: 'Add funds by bank transfer or card. Browse live-priced products and build your portfolio in real time.' },
  { n: '03', title: 'Purchase & Allocate',   desc: 'Your metals are allocated to you immediately. We hold them in your name in our insured Class III vaults.' },
  { n: '04', title: 'Take Delivery or Hold', desc: 'Choose insured storage with us, or request physical delivery worldwide. Sell back at live spot any time.' },
];

export default function HowItWorks() {
  const { ref, inView } = useInView();
  return (
    <section className="section-pad bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16"
             style={{ opacity: inView?1:0, transform: inView?'none':'translateY(24px)', transition:'opacity .6s,transform .6s' }}>
          <span className="label">The Process</span>
          <h2 className="h2">Investing in Gold<br />Has Never Been Simpler</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-dark-border">
          {steps.map((s, i) => (
            <div key={s.n}
                 className="border-r border-b border-dark-border p-8 relative group hover:bg-dark-card transition-colors"
                 style={{ opacity: inView?1:0, transform: inView?'none':'translateY(18px)', transition:`opacity .6s ${i*100}ms,transform .6s ${i*100}ms` }}>
              {/* Connector arrow on desktop */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-gold/30 text-lg">›</div>
              )}
              <p className="font-serif text-gold/20 group-hover:text-gold/40 text-7xl font-light leading-none mb-6 transition-colors">{s.n}</p>
              <h3 className="font-serif text-ash text-xl font-light mb-3">{s.title}</h3>
              <p className="font-sans text-ash-dim/45 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="btn-gold">Open an Account Today</a>
        </div>
      </div>
    </section>
  );
}
