
import React from 'react';

const Events: React.FC = () => {
  const events = [
    { id: 1, title: 'Summer Jam Festival 2026', date: 'July 15-17', venue: 'Prospect Park', image: 'https://picsum.photos/seed/event1/800/600', desc: 'The biggest classic country festival in Brooklyn.' },
    { id: 2, title: 'High School Sports Awards', date: 'Nov 12', venue: 'Brooklyn Civic Center', image: 'https://picsum.photos/seed/event2/800/600', desc: 'Celebrating local student athletes.' },
    { id: 3, title: 'Holiday Toy Drive Live', date: 'Dec 05', venue: 'FM95 Studios', image: 'https://picsum.photos/seed/event3/800/600', desc: 'Join our live broadcast and donate to local families.' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-heading font-black mb-4">Community Events</h1>
        <p className="text-2xl text-gray-500 mb-20 max-w-2xl font-medium">Join FM95 out in the community. From festivals to charity drives, we love meeting our listeners.</p>

        <div className="space-y-12">
          {events.map((e, idx) => (
            <div key={e.id} className="bg-white rounded-[50px] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row group">
              <div className="lg:w-2/5 aspect-video lg:aspect-auto relative overflow-hidden">
                <img src={e.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={e.title} />
                <div className="absolute top-10 left-10 bg-brand-orange text-white p-6 rounded-3xl shadow-xl transform group-hover:-rotate-12 transition-transform">
                   <div className="text-4xl font-heading font-black leading-none">{e.date.split(' ')[1]}</div>
                   <div className="text-xl font-heading font-bold uppercase tracking-widest">{e.date.split(' ')[0]}</div>
                </div>
              </div>
              <div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
                <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Upcoming Special Event</span>
                <h2 className="text-5xl md:text-7xl font-heading font-black leading-none mb-8 group-hover:text-brand-orange transition-colors uppercase italic">{e.title}</h2>
                <div className="flex items-center space-x-6 mb-10 text-xl font-medium text-gray-500 italic">
                  <span>📍 {e.venue}</span>
                  <span className="w-2 h-2 bg-brand-yellow rounded-full"></span>
                  <span>🎟️ Open to Public</span>
                </div>
                <p className="text-2xl text-gray-400 font-medium leading-relaxed mb-12">{e.desc}</p>
                <div className="flex gap-4">
                  <button className="bg-brand-charcoal text-white px-12 py-5 rounded-full font-heading font-bold text-2xl hover:bg-brand-orange transition-all shadow-xl">Get Tickets</button>
                  <button className="bg-white border-2 border-gray-200 text-brand-charcoal px-12 py-5 rounded-full font-heading font-bold text-2xl hover:border-brand-orange transition-all">Event Info</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
