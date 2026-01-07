
import React from 'react';
import { usePlayer } from '../components/Layout';
import { STATIONS, ARTISTS } from '../data';
import { ICONS } from '../constants';
import { Link } from 'react-router-dom';

const Listen: React.FC = () => {
  const { currentStation, isPlaying, setStation, togglePlay } = usePlayer();
  const wamy = STATIONS.find(s => s.id === 'wamy')!;

  return (
    <div className="min-h-screen">
      {/* Premium WAMY Hero */}
      <section className="relative h-[60vh] flex items-center bg-brand-charcoal text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img src="https://picsum.photos/seed/country/1920/1080" className="w-full h-full object-cover" alt="Classic Country" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-8">
              <span className="w-12 h-1 bg-brand-yellow"></span>
              <span className="font-heading font-bold text-2xl tracking-[0.4em] uppercase text-brand-yellow">Now Featured</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-heading font-black mb-6 leading-none uppercase">
              WAMY Classic <br/>
              <span className="text-brand-orange">Country</span>
            </h1>
            <p className="text-2xl font-medium text-gray-300 max-w-2xl mb-10 tracking-wide">
              Streaming the legends 24/7 on <span className="text-white font-bold">96.5 FM & 1580 AM</span>. Johnny, Dolly, Willie, and the hits that built country music.
            </p>
            <button 
              onClick={() => setStation(wamy)}
              className="group bg-brand-yellow text-brand-charcoal px-12 py-6 rounded-full font-heading font-bold text-3xl hover:bg-white transition-all transform hover:scale-105 flex items-center"
            >
              <ICONS.Play className="w-8 h-8 mr-4 group-hover:scale-125 transition-transform" />
              Listen to WAMY Live
            </button>
          </div>
        </div>
      </section>

      {/* Station Selector Grid */}
      <section className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STATIONS.map(s => (
            <div 
              key={s.id}
              onClick={() => setStation(s)}
              className={`cursor-pointer group relative overflow-hidden rounded-[40px] p-10 h-[400px] flex flex-col justify-end transition-all duration-500 border-4 ${
                currentStation.id === s.id ? 'border-brand-orange shadow-2xl scale-105' : 'border-transparent hover:border-gray-200 bg-white'
              }`}
            >
              <div className="absolute inset-0 z-0">
                <img src={s.logo} className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt={s.name} />
              </div>
              <div className="relative z-10">
                <div className="font-heading text-6xl font-black mb-2 flex items-center justify-between">
                  {s.name}
                  {currentStation.id === s.id && isPlaying && (
                    <div className="flex space-x-1 items-end">
                      <div className="w-1.5 h-10 bg-brand-orange animate-pulse"></div>
                      <div className="w-1.5 h-6 bg-brand-orange animate-pulse delay-75"></div>
                      <div className="w-1.5 h-12 bg-brand-orange animate-pulse delay-150"></div>
                    </div>
                  )}
                </div>
                <div className="text-brand-orange font-bold uppercase tracking-widest text-lg mb-4">{s.frequencies.join(' & ')}</div>
                <p className="text-gray-500 font-medium text-xl leading-tight mb-8">{s.tagline}</p>
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
                  currentStation.id === s.id && isPlaying ? 'bg-brand-charcoal text-white' : 'bg-brand-orange text-white group-hover:bg-brand-yellow'
                }`}>
                  {currentStation.id === s.id && isPlaying ? <ICONS.Pause className="w-8 h-8" /> : <ICONS.Play className="w-8 h-8 pl-1" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Artists Spotlight */}
      <section className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-orange font-bold uppercase tracking-[0.5em] text-xs mb-6 block">Legacy Hall of Fame</span>
              <h2 className="text-6xl md:text-8xl font-heading font-black leading-none uppercase italic">The Icons of <br/><span className="text-brand-orange">Classic</span> Country</h2>
            </div>
            <p className="text-gray-500 text-lg font-medium italic border-l-4 border-brand-yellow pl-6">
              Artist spotlights are curated by our team to celebrate the roots of the genre.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {ARTISTS.map(artist => (
              <div key={artist.id} className="group relative">
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-8 border-white shadow-xl transition-all group-hover:border-brand-yellow group-hover:scale-105 duration-500">
                  <img src={artist.image} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-center mb-2 group-hover:text-brand-orange transition-colors">{artist.name}</h3>
                <p className="text-center text-gray-500 text-sm font-medium line-clamp-2 px-4">{artist.blurb}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/shows" className="bg-brand-charcoal text-white p-12 rounded-[40px] group hover:bg-brand-orange transition-all">
              <h4 className="text-4xl font-heading font-bold mb-4">Discover Shows</h4>
              <p className="text-gray-400 group-hover:text-white transition-colors mb-8">Meet our hosts and find your favorite specialized music blocks.</p>
              <ICONS.ChevronRight className="w-12 h-12" />
            </Link>
            <Link to="/schedule" className="bg-brand-yellow text-brand-charcoal p-12 rounded-[40px] group hover:bg-white transition-all">
              <h4 className="text-4xl font-heading font-bold mb-4">Weekly Grid</h4>
              <p className="text-brand-charcoal/60 group-hover:text-brand-charcoal transition-colors mb-8">Never miss a show. Check our full weekly programming schedule.</p>
              <ICONS.ChevronRight className="w-12 h-12" />
            </Link>
            <Link to="/news" className="bg-white text-brand-charcoal p-12 rounded-[40px] group hover:bg-brand-charcoal hover:text-white transition-all border border-gray-100 shadow-xl">
              <h4 className="text-4xl font-heading font-bold mb-4">Music News</h4>
              <p className="text-gray-500 group-hover:text-gray-400 transition-colors mb-8">The latest on tours, album reissues, and local concerts in Brooklyn.</p>
              <ICONS.ChevronRight className="w-12 h-12 text-brand-orange" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listen;
