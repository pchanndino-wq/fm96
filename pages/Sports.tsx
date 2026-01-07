
import React, { useState } from 'react';
import { GAMES } from '../data';
import { ICONS } from '../constants';

const Sports: React.FC = () => {
  const [category, setCategory] = useState<'All' | 'Local' | 'College'>('All');

  const filteredGames = category === 'All' ? GAMES : GAMES.filter(g => g.category === category);

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <section className="bg-brand-charcoal text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange skew-x-[-20deg] translate-x-32 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-16 h-px bg-brand-yellow"></div>
            <span className="font-heading font-bold text-2xl tracking-widest text-brand-yellow uppercase">The Sports Capital of Brooklyn</span>
          </div>
          <h1 className="text-8xl md:text-9xl font-heading font-black mb-8 italic">Game <span className="text-brand-orange underline decoration-8">On.</span></h1>
          <p className="text-2xl text-gray-400 max-w-2xl font-medium">FM95 is the exclusive home for local high school rivalries and regional college showdowns. If Brooklyn is playing, we're broadcasting.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-[60px] shadow-2xl p-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
             <div className="flex bg-gray-100 p-2 rounded-2xl">
               {['All', 'Local', 'College'].map(cat => (
                 <button
                   key={cat}
                   onClick={() => setCategory(cat as any)}
                   className={`px-10 py-3 rounded-xl font-heading font-bold text-xl uppercase tracking-widest transition-all ${
                     category === cat ? 'bg-brand-charcoal text-white shadow-xl' : 'text-gray-400 hover:text-brand-charcoal'
                   }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
             <div className="flex items-center space-x-3 text-brand-orange font-black uppercase tracking-widest">
               <div className="w-3 h-3 bg-brand-orange rounded-full animate-ping"></div>
               <span>Live Coverage Updates</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGames.map(game => (
              <div key={game.id} className="bg-gray-50 rounded-[40px] p-10 border border-gray-100 hover:border-brand-orange transition-all group">
                <div className="flex justify-between items-center mb-10">
                  <span className="bg-brand-charcoal text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{game.category} Athletics</span>
                  <span className={`font-black uppercase tracking-widest text-sm ${game.status === 'Live' ? 'text-brand-orange' : 'text-gray-400'}`}>
                    {game.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-12">
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center font-heading text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">{game.homeTeam[0]}</div>
                    <div className="text-3xl font-heading font-black">{game.homeTeam}</div>
                  </div>
                  <div className="px-6 text-center">
                    {game.status === 'Live' ? (
                      <div className="text-6xl font-heading font-black tracking-tighter text-brand-charcoal">{game.score}</div>
                    ) : (
                      <div className="text-4xl font-heading font-black text-gray-300 uppercase italic">VS</div>
                    )}
                  </div>
                  <div className="text-center flex-1">
                    <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center font-heading text-3xl font-black shadow-lg group-hover:scale-110 transition-transform">{game.awayTeam[0]}</div>
                    <div className="text-3xl font-heading font-black">{game.awayTeam}</div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="font-heading font-bold text-brand-orange text-xl">{game.date}</div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="font-heading font-bold text-gray-400 text-xl">{game.time}</div>
                  </div>
                  <button className="bg-brand-charcoal text-white px-8 py-3 rounded-xl font-heading font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors">
                    Game Center
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-brand-yellow/20 p-12 rounded-[40px] border-4 border-dashed border-brand-yellow">
            <h3 className="text-4xl font-heading font-black mb-6 uppercase italic">Submit High School Scores</h3>
            <p className="text-xl font-medium text-gray-600 mb-8 max-w-2xl">Are you a coach or athletic director in the Brooklyn area? Send us your scores and highlights for mention during our Brooklyn Sports Hub daily broadcast.</p>
            <a href="mailto:sports@fm95.com" className="inline-block bg-brand-charcoal text-white px-12 py-5 rounded-full font-heading font-bold text-2xl hover:bg-brand-orange transition-all">Submit Scores</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sports;
