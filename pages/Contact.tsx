
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-heading font-black mb-4">Contact Us</h1>
        <p className="text-2xl text-gray-500 mb-20 max-w-2xl font-medium">Have a song request? A news tip? Or just want to say hi? We're listening.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: 'Studio Line', value: '(555) 955-LIVE', sub: 'Call or Text' },
                { label: 'Business Office', value: '(555) 955-4000', sub: 'Mon-Fri 9AM-5PM' },
                { label: 'News Tips', value: 'news@fm95.com', sub: 'Confidential & Direct' },
                { label: 'Sales/Ads', value: 'sales@fm95.com', sub: 'Media Kits Available' }
              ].map(item => (
                <div key={item.label} className="bg-white p-10 rounded-[40px] shadow-xl border border-gray-100 hover:border-brand-yellow transition-all group">
                   <div className="text-brand-orange font-black uppercase tracking-widest text-xs mb-4">{item.label}</div>
                   <div className="text-3xl font-heading font-black mb-2 group-hover:text-brand-orange transition-colors">{item.value}</div>
                   <div className="text-gray-400 font-medium uppercase text-[10px] tracking-widest">{item.sub}</div>
                </div>
              ))}
            </div>

            <div className="bg-brand-charcoal rounded-[50px] p-12 text-white relative overflow-hidden border-b-8 border-brand-orange">
              <div className="absolute top-0 right-0 p-10 opacity-10 font-heading text-[200px] pointer-events-none">NY</div>
              <h3 className="text-4xl font-heading font-black mb-6 uppercase italic text-brand-yellow">Our Headquarters</h3>
              <p className="text-2xl font-medium text-gray-300 leading-relaxed mb-10 max-w-sm">
                123 Broadway Blvd, Suite 400<br/>
                Brooklyn, New York 11201
              </p>
              <div className="aspect-video w-full rounded-[30px] overflow-hidden bg-gray-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-white/10">
                 <img src="https://picsum.photos/seed/map/800/600" className="w-full h-full object-cover" alt="Map Location" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[60px] shadow-2xl p-16 md:p-20 border border-gray-100">
            <h2 className="text-5xl font-heading font-black mb-10 uppercase italic underline decoration-brand-orange decoration-8 underline-offset-8">Send a Message</h2>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all font-bold" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject / Station</label>
                <select className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all font-bold appearance-none">
                  <option>General Inquiry</option>
                  <option>FM95 Song Request</option>
                  <option>WAMY Music Request</option>
                  <option>News Submission</option>
                  <option>Advertising Inquiry</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows={6} className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-5 focus:border-brand-orange outline-none transition-all font-bold resize-none"></textarea>
              </div>
              <button className="w-full bg-brand-charcoal text-white py-6 rounded-2xl font-heading font-bold text-3xl hover:bg-brand-orange transition-all transform hover:-translate-y-1 shadow-2xl shadow-brand-orange/20">Submit Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
