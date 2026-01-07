
import React from 'react';
import { SPONSORS } from '../data';

const Advertise: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="bg-brand-orange py-32 text-brand-charcoal relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="container mx-auto px-4 relative z-10 text-center">
           <h1 className="text-8xl md:text-[10rem] font-heading font-black leading-none mb-8 tracking-tighter italic">BOOST YOUR<br/>BRAND</h1>
           <p className="text-3xl font-heading font-bold max-w-3xl mx-auto uppercase tracking-wide opacity-80">Join Brooklyn's most trusted media network and reach 500,000+ potential customers monthly.</p>
         </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[60px] shadow-2xl p-16 md:p-24 border border-gray-100 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-32">
            <div className="space-y-10">
              <h2 className="text-6xl font-heading font-black underline decoration-brand-yellow decoration-8 underline-offset-8">Why Radio?</h2>
              <p className="text-2xl text-gray-500 font-medium leading-relaxed">Radio remains the #1 reach medium in the United States. In Brooklyn, our listeners are loyal, engaged, and local.</p>
              <div className="space-y-8">
                {[
                  { title: 'Hyper-Local Targeting', desc: 'Reach customers in your specific neighborhood.' },
                  { title: 'Auditory Authority', desc: 'The human voice builds trust like no other medium.' },
                  { title: 'Cost Effective', desc: 'Maximize your ROI with tiered sponsorship levels.' }
                ].map(item => (
                  <div key={item.title} className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-brand-yellow rounded-2xl flex items-center justify-center font-black text-2xl flex-shrink-0 group-hover:rotate-12 transition-transform shadow-lg">✓</div>
                    <div>
                      <h4 className="text-2xl font-heading font-bold mb-2 uppercase">{item.title}</h4>
                      <p className="text-lg text-gray-400 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-charcoal rounded-[40px] p-12 text-white flex flex-col justify-center border-t-8 border-brand-orange">
              <h3 className="text-4xl font-heading font-black mb-6 uppercase italic text-brand-orange">Request Media Kit</h3>
              <p className="text-xl text-gray-400 mb-10 font-medium leading-relaxed">Download our latest demographics report, rate card, and sponsorship opportunities for 2026.</p>
              <form className="space-y-6">
                <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:border-brand-yellow outline-none transition-all" />
                <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 focus:border-brand-yellow outline-none transition-all" />
                <button className="w-full bg-brand-yellow text-brand-charcoal py-5 rounded-xl font-heading font-bold text-2xl hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl">Send Request</button>
              </form>
            </div>
          </div>

          <div className="text-center mb-24">
            <h3 className="text-4xl font-heading font-black mb-16 uppercase tracking-[0.3em] text-gray-300">Our Trusted Partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-40 hover:opacity-100 transition-opacity">
               {SPONSORS.map(s => (
                 <div key={s.id} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer">
                   <img src={s.logo} alt={s.name} className="max-w-full h-auto" />
                 </div>
               ))}
               {/* Placeholders for visual balance */}
               <div className="hidden md:flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"><img src="https://picsum.photos/seed/p1/150/80" className="opacity-50" /></div>
               <div className="hidden md:flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-pointer"><img src="https://picsum.photos/seed/p2/150/80" className="opacity-50" /></div>
            </div>
          </div>

          <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 text-center">
            <h3 className="text-3xl font-heading font-black mb-6 uppercase">Ready to Start?</h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">Direct inquiries for large-scale sponsorships and events can be sent to our sales lead.</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-3 text-2xl font-heading font-bold">
                <span className="text-brand-orange">Byron Coker:</span>
                <a href="mailto:sales@fm95.com" className="hover:underline">sales@fm95.com</a>
              </div>
              <div className="hidden md:block w-px h-8 bg-gray-200"></div>
              <div className="text-xl font-heading font-bold text-gray-500">Call (555) 955-SALES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
