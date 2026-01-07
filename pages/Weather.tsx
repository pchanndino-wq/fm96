
import React from 'react';

const Weather: React.FC = () => {
  return (
    <div className="min-h-screen bg-sky-50 py-20">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-[60px] shadow-2xl overflow-hidden border border-gray-100 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-sky-400 p-20 text-white relative">
            <div className="absolute top-0 right-0 p-10 opacity-20 text-[200px] pointer-events-none animate-bounce">☀️</div>
            <div className="relative z-10">
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full font-bold uppercase tracking-widest text-xs mb-8">Real-time Forecast</span>
              <h1 className="text-8xl md:text-9xl font-heading font-black leading-none mb-6">BROOKLYN<br/>WEATHER</h1>
              <div className="flex items-center space-x-12">
                <div>
                  <div className="text-9xl font-heading font-black leading-none">74°</div>
                  <div className="text-3xl font-heading font-bold uppercase tracking-widest opacity-80">Sunny Skies</div>
                </div>
                <div className="w-px h-32 bg-white/20"></div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-xl opacity-60 font-bold uppercase w-24">Humidity</span>
                    <span className="text-3xl font-heading font-bold">42%</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl opacity-60 font-bold uppercase w-24">Wind</span>
                    <span className="text-3xl font-heading font-bold">8 MPH NW</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-xl opacity-60 font-bold uppercase w-24">UV Index</span>
                    <span className="text-3xl font-heading font-bold">Low (2)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-20">
            <h2 className="text-5xl font-heading font-black mb-12 uppercase tracking-tight">5-Day Forecast</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { day: 'Mon', temp: '76°', icon: '☀️' },
                { day: 'Tue', temp: '74°', icon: '☀️' },
                { day: 'Wed', temp: '70°', icon: '⛅' },
                { day: 'Thu', temp: '68°', icon: '🌧️' },
                { day: 'Fri', temp: '72°', icon: '⛅' }
              ].map(d => (
                <div key={d.day} className="bg-gray-50 p-10 rounded-[40px] text-center border border-gray-100 hover:border-blue-400 transition-all group">
                  <div className="text-2xl font-heading font-bold text-gray-400 mb-6 uppercase tracking-widest group-hover:text-blue-500 transition-colors">{d.day}</div>
                  <div className="text-6xl mb-6">{d.icon}</div>
                  <div className="text-5xl font-heading font-black">{d.temp}</div>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-brand-charcoal p-12 rounded-[40px] text-white flex flex-col md:flex-row items-center gap-10">
              <div className="bg-brand-orange w-24 h-24 rounded-3xl flex items-center justify-center text-5xl flex-shrink-0">⚠️</div>
              <div className="flex-grow">
                <h3 className="text-3xl font-heading font-black mb-2 uppercase text-brand-orange italic">Weather Policy</h3>
                <p className="text-lg text-gray-400 font-medium leading-relaxed">During severe weather conditions, FM95 Media Group implements continuous coverage. Tune into FM95 or WAMY for live updates, school closings, and emergency information from our newsroom.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
