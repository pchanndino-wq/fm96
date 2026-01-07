
import React, { useState } from 'react';
import { NEWS } from '../data';
import { Link } from 'react-router-dom';

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Sports', 'Music', 'Local', 'Weather'];

  const filteredNews = activeCategory === 'All' 
    ? NEWS 
    : NEWS.filter(n => n.category === activeCategory);

  return (
    <div className="py-20 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-7xl font-heading font-black mb-4">Newsroom</h1>
        <p className="text-2xl text-gray-500 mb-16 max-w-2xl font-medium">Independent, local journalism serving the Brooklyn community. Stay updated on what matters in your neighborhood.</p>

        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-10 py-3 rounded-full font-heading font-bold text-xl uppercase tracking-widest transition-all ${
                activeCategory === c ? 'bg-brand-orange text-white shadow-xl' : 'bg-gray-100 text-gray-400 hover:text-brand-charcoal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredNews.map((post, idx) => (
            <Link 
              key={post.id} 
              to={`/news/${post.id}`} 
              className={`group flex flex-col gap-8 ${idx === 0 ? 'lg:col-span-2 lg:flex-row bg-brand-charcoal text-white rounded-[60px] p-12' : 'bg-white rounded-[40px] p-10 border border-gray-100 shadow-xl'}`}
            >
              <div className={`${idx === 0 ? 'lg:w-1/2 aspect-video' : 'aspect-[16/9]'} rounded-[30px] overflow-hidden`}>
                <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
              </div>
              <div className={`${idx === 0 ? 'lg:w-1/2 flex flex-col justify-center' : ''}`}>
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-brand-orange text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  <span className="text-sm font-bold opacity-60 uppercase">{post.date}</span>
                </div>
                <h2 className={`${idx === 0 ? 'text-5xl lg:text-7xl' : 'text-4xl'} font-heading font-black leading-tight mb-6 group-hover:text-brand-orange transition-colors`}>{post.title}</h2>
                <p className={`${idx === 0 ? 'text-xl' : 'text-lg'} text-gray-400 line-clamp-3 leading-relaxed`}>{post.excerpt}</p>
                <div className="pt-8 mt-auto flex items-center font-heading font-bold text-xl group-hover:translate-x-4 transition-transform">
                  Read Full Article
                  <span className="ml-2 text-brand-orange">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
