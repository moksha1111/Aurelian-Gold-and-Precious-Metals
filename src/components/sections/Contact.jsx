import { useState } from 'react';
import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const set = f => e => setForm({ ...form, [f]: e.target.value });

  const inp = 'w-full bg-dark-surface border border-dark-border px-4 py-3 font-sans text-sm text-ash placeholder-ash-dim/20 focus:outline-none focus:border-gold/50 transition-colors';

  return (
    <section id="contact" className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

          {/* Left */}
          <div className="lg:col-span-2"
               style={{ opacity: inView?1:0, transform: inView?'none':'translateX(-24px)', transition:'opacity .8s,transform .8s' }}>
            <span className="label">Get in Touch</span>
            <h2 className="h2 mb-4">Start Your Gold<br />Journey Today</h2>
            <div className="gold-line" />
            <p className="font-sans text-ash-dim/50 text-sm leading-relaxed mb-8">
              Whether you're a first-time buyer or a seasoned institutional investor, our team is ready to guide you. No pressure, no jargon — just expert advice.
            </p>

            <div className="space-y-4 mb-8">
              {[
                ['📍', 'Head Office',    '14 Bishopsgate, London, EC2N 4AJ'],
                ['📞', 'Trading Desk',   '+44 20 7000 0000'],
                ['✉️', 'Email',          'invest@aurelian.com'],
                ['⏰', 'Trading Hours',  'Mon–Fri 08:00–18:00 GMT'],
              ].map(([icon, label, val]) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 border border-dark-border flex items-center justify-center text-base shrink-0">{icon}</div>
                  <div>
                    <p className="font-sans font-semibold text-ash text-[10px] tracking-[0.2em] uppercase">{label}</p>
                    <p className="font-sans text-ash-dim/50 text-sm mt-0.5">{val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office image */}
            <div className="relative overflow-hidden" style={{ height: '190px' }}>
              <img src={img('30201205', 600, 75)} alt="Office" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-dark/50" />
              <div className="absolute bottom-4 left-4">
                <p className="font-serif text-ash font-light text-sm">London · Zurich · Dubai</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-dark-card border border-dark-border p-8 md:p-10"
               style={{ opacity: inView?1:0, transform: inView?'none':'translateX(24px)', transition:'opacity .8s .1s,transform .8s .1s' }}>
            <h3 className="font-serif text-ash text-2xl font-light mb-2">Request a Consultation</h3>
            <p className="font-sans text-ash-dim/35 text-sm mb-8">A senior advisor will respond within 2 business hours.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-sans text-[9px] text-ash-dim/30 tracking-[0.25em] uppercase block mb-2">Full Name</label>
                <input value={form.name} onChange={set('name')} placeholder="Your name" className={inp} />
              </div>
              <div>
                <label className="font-sans text-[9px] text-ash-dim/30 tracking-[0.25em] uppercase block mb-2">Email</label>
                <input type="email" value={form.email} onChange={set('email')} placeholder="you@example.com" className={inp} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-sans text-[9px] text-ash-dim/30 tracking-[0.25em] uppercase block mb-2">Phone (optional)</label>
                <input value={form.phone} onChange={set('phone')} placeholder="+1 000 000 0000" className={inp} />
              </div>
              <div>
                <label className="font-sans text-[9px] text-ash-dim/30 tracking-[0.25em] uppercase block mb-2">Area of Interest</label>
                <select value={form.interest} onChange={set('interest')} className={inp + ' cursor-pointer'}>
                  <option value="">Select...</option>
                  {['Buying Gold', 'Buying Silver', 'Platinum / Palladium', 'Vault Storage', 'Selling Metals', 'Portfolio Review'].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label className="font-sans text-[9px] text-ash-dim/30 tracking-[0.25em] uppercase block mb-2">Message</label>
              <textarea value={form.message} onChange={set('message')} rows={4} placeholder="Tell us about your investment goals..." className={inp + ' resize-none'} />
            </div>

            <button className="btn-gold w-full justify-center py-4 text-[12px]">Send Enquiry</button>
            <p className="font-sans text-[10px] text-ash-dim/20 text-center mt-4">Your data is handled in accordance with our Privacy Policy and GDPR obligations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
