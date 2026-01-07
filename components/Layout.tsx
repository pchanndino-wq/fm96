
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ICONS, COLORS } from '../constants';
import { STATIONS } from '../data';
import { Station } from '../types';

interface PlayerContextType {
  currentStation: Station;
  isPlaying: boolean;
  setStation: (s: Station) => void;
  togglePlay: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) throw new Error('usePlayer must be used within PlayerProvider');
  return context;
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentStation, setCurrentStation] = useState<Station>(() => {
    const saved = localStorage.getItem('fm95-station');
    return saved ? JSON.parse(saved) : STATIONS[0];
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('fm95-station', JSON.stringify(currentStation));
  }, [currentStation]);

  const setStation = (s: Station) => {
    setCurrentStation(s);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (currentStation.streamUrl) {
      setIsPlaying(!isPlaying);
    }
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/listen', label: 'Listen' },
    { path: '/stations', label: 'Stations' },
    { path: '/shows', label: 'Shows' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/sports', label: 'Sports' },
    { path: '/news', label: 'News' },
    { path: '/events', label: 'Events' },
    { path: '/advertise', label: 'Advertise' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <PlayerContext.Provider value={{ currentStation, isPlaying, setStation, togglePlay }}>
      <div className="min-h-screen flex flex-col pb-24">
        {/* Header */}
        <header className="bg-brand-charcoal text-white sticky top-0 z-50 shadow-xl border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="bg-brand-orange text-white p-2 rounded-lg group-hover:bg-brand-yellow transition-colors duration-300">
                  <span className="font-heading text-2xl font-bold italic">FM95</span>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-heading leading-tight tracking-wider">Brooklyn Media</h1>
                  <p className="text-[10px] text-gray-400 font-sans font-bold tracking-[0.2em] uppercase">95.5 FM • 96.5 FM • 1580 AM</p>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      location.pathname === link.path 
                        ? 'bg-brand-orange text-white' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <Link 
                  to="/listen"
                  className="hidden md:flex items-center bg-brand-yellow text-brand-charcoal px-6 py-2 rounded-full font-heading font-bold hover:bg-white transition-all transform hover:scale-105"
                >
                  <ICONS.Play className="w-5 h-5 mr-2" />
                  Listen Live
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMobileMenuOpen ? <ICONS.Close className="w-8 h-8" /> : <ICONS.Menu className="w-8 h-8" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-brand-charcoal border-t border-white/10 absolute top-20 left-0 w-full animate-in slide-in-from-top duration-300">
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-lg font-heading tracking-wide ${
                      location.pathname === link.path ? 'bg-brand-orange text-white' : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/listen"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 text-center bg-brand-yellow text-brand-charcoal py-4 rounded-lg font-heading font-bold text-xl"
                >
                  Listen Live
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-brand-charcoal text-white pt-16 pb-8 border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                <div className="font-heading text-3xl font-bold mb-6 text-brand-orange italic">FM95 Brooklyn</div>
                <p className="text-gray-400 mb-6 leading-relaxed">Serving the heart of Brooklyn with local sports, weather, and the greatest classic country hits on the radio dial.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="w-12 h-px bg-brand-yellow"></span>
                    <span className="text-white font-medium uppercase tracking-widest">Connect with us</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold mb-6 border-b border-brand-orange w-max">Stations</h4>
                <ul className="space-y-4">
                  {STATIONS.map(s => (
                    <li key={s.id} className="group">
                      <Link to={`/stations`} className="flex flex-col">
                        <span className="text-white group-hover:text-brand-yellow transition-colors font-bold">{s.name} — {s.frequencies.join(' & ')}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-tighter">{s.tagline}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold mb-6 border-b border-brand-orange w-max">Quick Links</h4>
                <ul className="grid grid-cols-2 gap-4">
                  <li><Link to="/sports" className="text-gray-400 hover:text-white transition-colors">Local Sports</Link></li>
                  <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">Brooklyn News</Link></li>
                  <li><Link to="/weather" className="text-gray-400 hover:text-white transition-colors">Weather</Link></li>
                  <li><Link to="/advertise" className="text-gray-400 hover:text-white transition-colors">Advertise</Link></li>
                  <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</Link></li>
                  <li><Link to="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">Accessibility</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="font-heading text-xl font-bold mb-6 border-b border-brand-orange w-max">Contact Sales</h4>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <p className="text-sm text-gray-400 mb-4">Interested in growing your brand in Brooklyn?</p>
                  <Link to="/advertise" className="block text-center bg-brand-orange hover:bg-brand-yellow text-white hover:text-brand-charcoal py-3 rounded-lg font-bold transition-all transform hover:-translate-y-1">
                    Get Media Kit
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
              <p>© {new Date().getFullYear()} FM95 Media Group, a Domestic Limited Liability Company. Owned by Gregory Vekker.</p>
              <div className="flex space-x-6 uppercase tracking-widest font-bold">
                <span>95.5 FM</span>
                <span>96.5 FM</span>
                <span>1580 AM</span>
                <span>1240 AM</span>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky Player Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-brand-charcoal text-white h-24 z-[100] border-t border-white/20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            {/* Info */}
            <div className="flex items-center space-x-4 w-1/3">
              <div className="hidden sm:block w-14 h-14 bg-gray-700 rounded-lg overflow-hidden border border-white/10">
                <img src={currentStation.logo} alt={currentStation.name} className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <h5 className="font-heading text-brand-yellow text-sm font-bold truncate tracking-wider uppercase">{currentStation.name} Live</h5>
                <p className="text-[10px] text-gray-400 uppercase font-sans tracking-widest truncate">{currentStation.tagline}</p>
                {isPlaying ? (
                  <div className="flex space-x-1 mt-1">
                    <div className="w-1 h-3 bg-brand-orange animate-pulse"></div>
                    <div className="w-1 h-3 bg-brand-orange animate-pulse delay-75"></div>
                    <div className="w-1 h-3 bg-brand-orange animate-pulse delay-150"></div>
                  </div>
                ) : (
                  <span className="text-[9px] text-gray-500 font-bold uppercase mt-1 block tracking-widest">Paused</span>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col items-center space-y-1 w-1/3">
              <div className="flex items-center space-x-6">
                 <button 
                  onClick={togglePlay}
                  className={`w-14 h-14 flex items-center justify-center rounded-full transition-all transform hover:scale-110 ${
                    currentStation.streamUrl 
                      ? 'bg-brand-orange hover:bg-brand-yellow text-white hover:text-brand-charcoal' 
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!currentStation.streamUrl}
                >
                  {isPlaying ? <ICONS.Pause className="w-8 h-8" /> : <ICONS.Play className="w-8 h-8 pl-1" />}
                </button>
              </div>
              {!currentStation.streamUrl && (
                <span className="text-[10px] text-brand-yellow font-bold uppercase tracking-tighter">Stream coming soon</span>
              )}
            </div>

            {/* Switcher & Volume */}
            <div className="flex items-center justify-end space-x-4 w-1/3">
              <div className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10">
                {STATIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setStation(s)}
                    className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase transition-all ${
                      currentStation.id === s.id ? 'bg-brand-yellow text-brand-charcoal' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors">
                <ICONS.Volume className="w-6 h-6" />
                <input type="range" className="w-20 accent-brand-orange hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlayerContext.Provider>
  );
};
