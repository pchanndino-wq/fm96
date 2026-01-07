
import React from 'react';
import { Link } from 'react-router-dom';
import { STATIONS, NEWS, SHOWS, GAMES } from '../data';
import { usePlayer } from '../components/Layout';
import { ICONS } from '../constants';

const Home: React.FC = () => {
  const { setStation } = usePlayer();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-brand-charcoal">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/brooklyn/1920/1080" 
            className="w-full h-full object-cover opacity-40"
            alt="Brooklyn Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/50"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-brand-orange text-white font-heading font-bold text-lg mb-6 tracking-widest transform -skew-x-12">
              The Sound of Brooklyn
            </span>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-white leading-none mb-8">
              LOCAL NEWS.<br/>
              <span className="text-brand-yellow italic">REAL SPORTS.</span><br/>
              LEGENDARY MUSIC.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/listen"
                className="bg-brand-yellow hover:bg-white text-brand-charcoal px-10 py-5 rounded-full font-heading font-bold text-2xl transition-all transform hover:scale-105 flex items-center"
              >
                <ICONS.Play className="w-6 h-6 mr-3" />
                Listen Live Now
              </Link>
              <Link 
                to="/advertise"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-brand-charcoal text-white px-10 py-5 rounded-full font-heading font-bold text-2xl transition-all"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Station Cards */}
      <section className="container mx-auto px-4 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATIONS.map((station) => (
            <div 
              key={station.id} 
              className="group bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 transition-all hover:-translate-y-4 hover:shadow-brand-orange/20 overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center p-2 group-hover:bg-brand-orange/10 transition-colors">
                  <img src={station.logo} alt={station.name} className="max-w-full h-auto rounded-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-bold leading-none">{station.name}</h3>
                  <p className="text-brand-orange font-bold uppercase tracking-tighter text-sm">{station.frequencies.join(' & ')}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8 font-medium leading-snug h-12 overflow-hidden">{station.tagline}</p>
              <button 
                onClick={() => setStation(station)}
                className="w-full bg-brand-charcoal text-white py-4 rounded-xl font-heading font-bold text-lg hover:bg-brand-orange transition-colors flex items-center justify-center space-x-2"
              >
                <ICONS.Play className="w-5 h-5" />
                <span>Launch Player</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Weather & Sports Quick Bar */}
      <section className="bg-brand-yellow py-10">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center space-x-6">
            <div className="bg-brand-charcoal text-white p-4 rounded-2xl flex items-center space-x-4">
              <div className="text-4xl">☀️</div>
              <div>
                <div className="text-xs uppercase font-bold tracking-widest opacity-60">Brooklyn, NY</div>
                <div className="text-2xl font-heading font-bold leading-none">74°F / Sunny</div>
              </div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-brand-charcoal/20"></div>
            <div className="text-brand-charcoal">
              <div className="text-xs uppercase font-bold tracking-widest opacity-60">Coming Up Next</div>
              <div className="text-xl font-heading font-bold leading-none">Panthers vs. Knights @ 7PM</div>
            </div>
          </div>
          <Link to="/sports" className="group flex items-center font-heading font-bold text-2xl text-brand-charcoal uppercase tracking-wider">
            View Scoreboard
            <ICONS.ChevronRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Content Grid */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Latest News */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-5xl font-heading font-black underline decoration-brand-orange underline-offset-8">Local Headlines</h2>
            <Link to="/news" className="text-brand-orange font-bold hover:underline">View All News</Link>
          </div>
          <div className="space-y-8">
            {NEWS.slice(0, 3).map(post => (
              <Link key={post.id} to={`/news`} className="group flex flex-col md:flex-row gap-8 bg-white p-6 rounded-3xl border border-transparent hover:border-gray-200 hover:shadow-xl transition-all">
                <div className="md:w-1/3 aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="md:w-2/3 flex flex-col justify-center">
                  <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-3">{post.category} • {post.date}</span>
                  <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-brand-orange transition-colors">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar / On Now */}
        <div className="space-y-12">
          <div className="bg-brand-charcoal text-white p-8 rounded-[40px] relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <ICONS.Radio className="w-64 h-64 -translate-y-12 translate-x-12" />
            </div>
            <span className="text-brand-yellow font-bold uppercase tracking-[0.3em] text-xs mb-8 block">On Air Now</span>
            <div className="relative z-10 mb-8">
              <h3 className="text-4xl font-heading font-bold leading-tight mb-2">The Brooklyn Morning Rush</h3>
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm">Hosted by Dave Michaels</p>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <div className="flex space-x-1">
                {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-6 bg-brand-yellow animate-pulse" style={{animationDelay: `${i*100}ms`}}></div>)}
              </div>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>
            <Link to="/listen" className="block w-full text-center bg-brand-orange py-4 rounded-2xl font-heading font-bold text-xl hover:bg-brand-yellow hover:text-brand-charcoal transition-colors">
              Join Conversation
            </Link>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-heading font-black">Upcoming Sports</h2>
            {GAMES.map(game => (
              <div key={game.id} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between group hover:border-brand-yellow transition-colors">
                <div>
                  <div className="text-2xl font-heading font-bold">{game.homeTeam}</div>
                  <div className="text-2xl font-heading font-bold text-gray-400">vs. {game.awayTeam}</div>
                </div>
                <div className="text-right">
                  <div className="text-brand-orange font-bold uppercase text-xs">{game.date}</div>
                  <div className="text-xl font-heading font-bold">{game.time}</div>
                </div>
              </div>
            ))}
            <Link to="/sports" className="block text-center border-2 border-brand-charcoal py-4 rounded-2xl font-heading font-bold text-lg hover:bg-brand-charcoal hover:text-white transition-all">
              Full Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Advertise CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-brand-orange to-brand-yellow p-16 rounded-[60px] text-center text-brand-charcoal relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-5xl md:text-7xl font-heading font-black mb-6">PUT YOUR BRAND IN FRONT OF BROOKLYN</h2>
             <p className="text-xl font-medium mb-10 opacity-80">Join our growing list of local partners and reach thousands of listeners daily through FM95's multi-platform media network.</p>
             <Link to="/advertise" className="inline-block bg-brand-charcoal text-white px-12 py-6 rounded-full font-heading font-bold text-3xl hover:bg-white hover:text-brand-charcoal transition-all shadow-2xl">
               Request Media Kit
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
