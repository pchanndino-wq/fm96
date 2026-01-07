
import React from 'react';
import { STAFF } from '../data';

const About: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="bg-brand-charcoal text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-orange/5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-8xl md:text-9xl font-heading font-black mb-12 italic leading-none uppercase">Established <span className="text-brand-orange underline decoration-8 underline-offset-8">Brooklyn.</span></h1>
          <p className="text-3xl text-gray-400 max-w-4xl font-medium leading-relaxed tracking-wide">Owned and operated by <span className="text-white font-bold">Gregory Vekker</span>, FM95 Media Group is a Domestic Limited Liability Company dedicated to the preservation of local broadcasting in New York City.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-[60px] shadow-2xl p-16 md:p-24 border border-gray-100">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-center">
             <div className="space-y-10">
                <h2 className="text-6xl font-heading font-black uppercase italic leading-none">A Vision for <br/><span className="text-brand-orange">Local</span> Media</h2>
                <div className="prose prose-2xl text-gray-500 leading-loose font-medium">
                  <p>In an era of corporate consolidation, FM95 stands as a beacon for independent radio. We believe that Brooklyn deserves a voice that understands its streets, its people, and its unique culture.</p>
                  <p>From the legendary tracks of classic country to the excitement of local high school rivalry games, we are here to reflect the spirit of our community every single day.</p>
                </div>
                <div className="flex gap-12 pt-8">
                  <div>
                    <div className="text-6xl font-heading font-black text-brand-yellow">1998</div>
                    <div className="text-xl font-heading font-bold uppercase tracking-widest text-gray-400">Founded</div>
                  </div>
                  <div>
                    <div className="text-6xl font-heading font-black text-brand-yellow">3</div>
                    <div className="text-xl font-heading font-bold uppercase tracking-widest text-gray-400">Signals</div>
                  </div>
                  <div>
                    <div className="text-6xl font-heading font-black text-brand-yellow">24/7</div>
                    <div className="text-xl font-heading font-bold uppercase tracking-widest text-gray-400">Broadcasting</div>
                  </div>
                </div>
             </div>
             <div className="relative">
                <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                  <img src="https://picsum.photos/seed/office/800/1000" className="w-full h-full object-cover" alt="Our Studio" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-brand-orange text-white p-12 rounded-[40px] shadow-2xl transform hover:scale-105 transition-transform">
                   <h4 className="text-4xl font-heading font-black mb-2 uppercase">Independent</h4>
                   <p className="text-xl font-heading font-bold uppercase tracking-widest opacity-80">Local Ownership Matters</p>
                </div>
             </div>
           </div>

           <h2 className="text-6xl font-heading font-black mb-16 uppercase italic text-center underline decoration-brand-yellow decoration-8 underline-offset-8">Meet Our Leadership</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {STAFF.map(member => (
               <div key={member.id} className="group bg-gray-50 p-10 rounded-[50px] border border-transparent hover:border-brand-orange hover:shadow-2xl transition-all duration-500">
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-10 border-8 border-white shadow-xl group-hover:scale-110 transition-transform">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-4xl font-heading font-bold text-center mb-2 group-hover:text-brand-orange transition-colors">{member.name}</h3>
                  <div className="text-brand-orange font-black uppercase tracking-widest text-sm text-center mb-8">{member.role}</div>
                  <p className="text-center text-gray-400 text-lg font-medium leading-relaxed">{member.bio}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
