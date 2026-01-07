
import React from 'react';
import { STATIONS } from '../data';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const Stations: React.FC = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-heading font-black mb-4">Our Stations</h1>
        <p className="text-2xl text-gray-500 mb-20 max-w-2xl">The FM95 Media Group operates three distinct signals across the Brooklyn area, each with its own unique personality and mission.</p>
        
        <div className="space-y-32">
          {STATIONS.map((s, idx) => (
            <div key={s.id} className={`flex flex-col lg:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 aspect-square md:aspect-video rounded-[60px] overflow-hidden shadow-2xl relative group">
                <img src={`https://picsum.photos/seed/${s.id}/1200/800`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={s.name} />
                <div className="absolute inset-0 bg-brand-charcoal/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-24 h-24 bg-brand-yellow rounded-full flex items-center justify-center text-brand-charcoal">
                    <ICONS.Play className="w-10 h-10 ml-2" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-white rounded-3xl p-3 shadow-xl border border-gray-100">
                    <img src={s.logo} alt={s.name} className="w-full h-full object-cover rounded-xl" />
                  </div>
                  <div>
                    <h2 className="text-6xl font-heading font-black leading-none">{s.name}</h2>
                    <div className="text-brand-orange font-bold text-2xl uppercase tracking-widest">{s.frequencies.join(' & ')}</div>
                  </div>
                </div>
                <p className="text-2xl text-gray-600 leading-relaxed font-medium italic">"{s.tagline}"</p>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Our {s.name} signal is a vital part of the Brooklyn community. Whether we are broadcasting local high school sports or spinning the legendary hits that defined a generation, our commitment to high-quality programming remains unmatched.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link to="/listen" className="bg-brand-charcoal text-white px-10 py-5 rounded-full font-heading font-bold text-xl hover:bg-brand-orange transition-all">Listen Live Now</Link>
                  <Link to="/schedule" className="bg-white border-2 border-gray-200 text-brand-charcoal px-10 py-5 rounded-full font-heading font-bold text-xl hover:border-brand-orange transition-all">View Schedule</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stations;
