
import React, { useState } from 'react';
import { SHOWS, STATIONS } from '../data';
import { Link } from 'react-router-dom';
import { ICONS } from '../constants';

const Shows: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredShows = filter === 'all' 
    ? SHOWS 
    : SHOWS.filter(s => s.stationIds.includes(filter) || s.tags.some(t => t.toLowerCase() === filter.toLowerCase()));

  const categories = ['All', 'FM95', 'WAMY', 'WWZQ', 'Talk', 'Sports', 'Country'];

  return (
    <div className="py-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-20">
          <h1 className="text-7xl font-heading font-black mb-6">Programming</h1>
          <p className="text-2xl text-gray-500 font-medium">Discover the voices that make Brooklyn move. From early morning talk to late night classics, we have something for everyone.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-16 scrollbar-hide overflow-x-auto pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat.toLowerCase())}
              className={`px-8 py-3 rounded-full font-heading font-bold text-lg uppercase tracking-widest transition-all whitespace-nowrap ${
                filter === cat.toLowerCase() ? 'bg-brand-orange text-white' : 'bg-white text-gray-400 hover:text-brand-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredShows.map(show => (
            <Link 
              key={show.id} 
              to={`/show/${show.id}`}
              className="group bg-white rounded-[40px] overflow-hidden shadow-xl border border-transparent hover:border-brand-yellow hover:-translate-y-2 transition-all duration-500"
            >
              <div className="h-64 relative overflow-hidden">
                <img src={show.image} alt={show.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 flex gap-2">
                  {show.tags.map(t => (
                    <span key={t} className="bg-brand-charcoal/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-10 space-y-4">
                <div className="text-brand-orange font-bold uppercase tracking-tighter text-sm">{show.schedule}</div>
                <h3 className="text-4xl font-heading font-bold leading-tight group-hover:text-brand-orange transition-colors">{show.title}</h3>
                <p className="text-gray-500 text-lg line-clamp-2">{show.description}</p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-bold mr-3">{show.host[0]}</div>
                    <span className="font-bold text-brand-charcoal">Host: {show.host}</span>
                  </div>
                  <ICONS.ChevronRight className="w-6 h-6 text-brand-orange" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;
