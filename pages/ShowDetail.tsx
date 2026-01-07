
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SHOWS, STATIONS } from '../data';
import { ICONS } from '../constants';
import { usePlayer } from '../components/Layout';

const ShowDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { setStation } = usePlayer();
  const show = SHOWS.find(s => s.id === id);

  if (!show) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div>
          <h1 className="text-9xl font-heading font-black text-brand-orange mb-8 tracking-tighter">404</h1>
          <h2 className="text-4xl font-heading font-bold mb-8">Show Not Found</h2>
          <Link to="/shows" className="bg-brand-charcoal text-white px-10 py-5 rounded-full font-heading font-bold text-xl uppercase tracking-widest">Back to Directory</Link>
        </div>
      </div>
    );
  }

  const station = STATIONS.find(s => show.stationIds.includes(s.id))!;

  return (
    <div>
      <section className="relative h-[50vh] flex items-end pb-20 overflow-hidden bg-brand-charcoal text-white">
        <div className="absolute inset-0">
          <img src={show.image} className="w-full h-full object-cover opacity-30" alt={show.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-8">
              {show.tags.map(t => <span key={t} className="bg-brand-orange text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest">{t}</span>)}
            </div>
            <h1 className="text-7xl md:text-9xl font-heading font-black leading-none mb-6 uppercase">{show.title}</h1>
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center text-brand-charcoal text-2xl font-black mr-4 shadow-xl">{show.host[0]}</div>
                <div>
                  <p className="text-brand-orange text-xs font-black uppercase tracking-widest">Your Host</p>
                  <p className="text-2xl font-heading font-bold">{show.host}</p>
                </div>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-brand-orange text-xs font-black uppercase tracking-widest">On Air</p>
                <p className="text-2xl font-heading font-bold">{show.schedule}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-12">
          <div className="prose prose-2xl max-w-none text-gray-600 leading-relaxed font-medium">
            <h2 className="text-5xl font-heading font-black text-brand-charcoal mb-8 underline decoration-brand-yellow decoration-8">About The Show</h2>
            <p>{show.description}</p>
            <p>Every week, {show.host} brings the best curated content to the Brooklyn area. This show is designed to keep you connected, entertained, and informed.</p>
            <div className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 mt-12">
              <h3 className="text-3xl font-heading font-black mb-6">Segments & Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <span className="text-brand-orange font-black text-2xl">•</span>
                  <span><strong>The Morning Roundup:</strong> A quick look at local news.</span>
                </li>
                <li className="flex items-start space-x-4">
                  <span className="text-brand-orange font-black text-2xl">•</span>
                  <span><strong>Listener Requests:</strong> Dial in at (555) FM95-LIVE.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="bg-brand-yellow p-10 rounded-[40px] text-brand-charcoal">
            <h3 className="text-3xl font-heading font-black mb-6">Broadcasting On</h3>
            <div className="bg-white p-8 rounded-3xl shadow-xl flex items-center space-x-6 mb-8 group cursor-pointer hover:scale-105 transition-transform" onClick={() => setStation(station)}>
              <div className="w-16 h-16 bg-gray-50 rounded-2xl p-2">
                <img src={station.logo} alt={station.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-heading text-3xl font-black">{station.name}</div>
                <div className="text-brand-orange font-bold">{station.frequencies.join(' & ')}</div>
              </div>
            </div>
            <button 
              onClick={() => setStation(station)}
              className="w-full bg-brand-charcoal text-white py-5 rounded-2xl font-heading font-bold text-xl flex items-center justify-center space-x-3 hover:bg-brand-orange transition-colors"
            >
              <ICONS.Play className="w-6 h-6" />
              <span>Listen Live Now</span>
            </button>
          </div>

          <div className="bg-brand-charcoal text-white p-10 rounded-[40px] border-4 border-brand-orange">
            <h3 className="text-3xl font-heading font-black mb-6">Media Inquiries</h3>
            <p className="text-gray-400 mb-8 font-medium">Interested in sponsoring {show.title}? Our audience reach is unmatched in Brooklyn.</p>
            <Link to="/advertise" className="block text-center bg-white text-brand-charcoal py-4 rounded-xl font-heading font-bold text-lg hover:bg-brand-yellow transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowDetail;
