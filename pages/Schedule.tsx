
import React, { useState } from 'react';
import { SHOWS, STATIONS } from '../data';
import { Link } from 'react-router-dom';

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [activeStation, setActiveStation] = useState(STATIONS[0].id);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const scheduleSlots = [
    { time: '06:00 AM', showId: 'morning-rush' },
    { time: '10:00 AM', title: 'Music Blocks' },
    { time: '12:00 PM', showId: 'classic-country-noon' },
    { time: '02:00 PM', title: 'Mid-Day Requests' },
    { time: '04:00 PM', showId: 'brooklyn-sports-hub' },
    { time: '06:00 PM', title: 'The Drive Home' },
    { time: '08:00 PM', title: 'Evening Hits' },
    { time: '10:00 PM', title: 'Overnight Classics' }
  ];

  return (
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-heading font-black mb-6">Program Schedule</h1>
        
        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Controls */}
          <div className="lg:w-1/4 space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
              <h3 className="text-2xl font-heading font-black mb-6 text-brand-orange uppercase tracking-widest underline decoration-2 underline-offset-8">Select Day</h3>
              <div className="space-y-2">
                {days.map(day => (
                  <button
                    key={day}
                    onClick={() => setActiveDay(day)}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-heading font-bold text-xl transition-all ${
                      activeDay === day ? 'bg-brand-charcoal text-white' : 'hover:bg-gray-100 text-gray-400'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-brand-yellow p-8 rounded-[40px] shadow-xl">
              <h3 className="text-2xl font-heading font-black mb-6 uppercase tracking-widest underline decoration-2 underline-offset-8">Select Station</h3>
              <div className="space-y-2">
                {STATIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setActiveStation(s.id)}
                    className={`w-full text-left px-6 py-4 rounded-2xl font-heading font-bold text-xl transition-all ${
                      activeStation === s.id ? 'bg-brand-charcoal text-white' : 'hover:bg-white/50 text-brand-charcoal/60'
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-gray-100">
              <div className="bg-brand-orange p-10 text-white flex justify-between items-center">
                <div>
                  <h2 className="text-5xl font-heading font-black uppercase tracking-wider">{activeDay}</h2>
                  <p className="font-bold opacity-80 uppercase tracking-widest text-sm">All times in EST</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-heading font-black">{STATIONS.find(s => s.id === activeStation)?.name}</div>
                  <div className="text-xs font-bold opacity-80 uppercase tracking-widest">{STATIONS.find(s => s.id === activeStation)?.frequencies.join(' & ')}</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {scheduleSlots.map((slot, idx) => {
                  const show = slot.showId ? SHOWS.find(s => s.id === slot.showId) : null;
                  const isOnNow = idx === 0; // Simulated current time

                  return (
                    <div key={idx} className={`p-10 flex flex-col md:flex-row md:items-center gap-8 group transition-colors ${isOnNow ? 'bg-brand-yellow/10' : 'hover:bg-gray-50'}`}>
                      <div className="md:w-48">
                        <div className={`text-3xl font-heading font-black ${isOnNow ? 'text-brand-orange' : 'text-gray-300 group-hover:text-brand-charcoal'}`}>
                          {slot.time}
                        </div>
                        {isOnNow && (
                          <span className="inline-flex items-center px-3 py-1 bg-brand-orange text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mt-2 animate-pulse">
                             Live On Air
                          </span>
                        )}
                      </div>
                      
                      <div className="flex-grow">
                        {show ? (
                          <Link to={`/show/${show.id}`} className="block group/item">
                            <h3 className="text-4xl font-heading font-bold mb-2 group-hover/item:text-brand-orange transition-colors">{show.title}</h3>
                            <div className="flex items-center text-gray-500 font-bold uppercase tracking-widest text-sm">
                              <span className="text-brand-orange mr-2">Host:</span> {show.host}
                            </div>
                          </Link>
                        ) : (
                          <div>
                            <h3 className="text-4xl font-heading font-bold mb-2 text-gray-400 italic">{slot.title}</h3>
                            <div className="text-gray-300 font-bold uppercase tracking-widest text-sm">Automated Music Block</div>
                          </div>
                        )}
                      </div>

                      {show && (
                        <Link to={`/show/${show.id}`} className="bg-brand-charcoal text-white px-6 py-3 rounded-full font-heading font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors hidden md:block">
                          Details
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 text-center text-gray-400 font-medium">
              * Schedule is subject to change for special events and breaking news coverage.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
