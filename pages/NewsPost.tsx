
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { NEWS } from '../data';

const NewsPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = NEWS.find(n => n.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-4">
        <div>
          <h1 className="text-9xl font-heading font-black text-brand-orange mb-8 tracking-tighter">404</h1>
          <h2 className="text-4xl font-heading font-bold mb-8">Article Not Found</h2>
          <Link to="/news" className="bg-brand-charcoal text-white px-10 py-5 rounded-full font-heading font-bold text-xl uppercase tracking-widest">Back to Newsroom</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="pb-32">
      <header className="relative h-[60vh] flex items-center justify-center text-center text-white bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img src={post.image} className="w-full h-full object-cover opacity-40" alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className="bg-brand-orange text-white px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
            <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></span>
            <span className="font-heading font-bold text-xl uppercase tracking-widest text-brand-yellow">{post.date}</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-black leading-tight uppercase italic">{post.title}</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="bg-white rounded-[60px] shadow-2xl p-12 md:p-20 max-w-5xl mx-auto border border-gray-100">
          <div className="prose prose-2xl max-w-none text-gray-700 leading-loose space-y-8 font-medium">
             <p className="text-3xl font-heading font-bold text-brand-charcoal italic leading-relaxed border-l-8 border-brand-orange pl-8 mb-16">{post.excerpt}</p>
             <p>{post.content}</p>
             <p>This is a developing story. FM95 will continue to provide updates as more information becomes available. Our commitment to accuracy and local relevance remains our top priority in the Brooklyn news market.</p>
             <div className="bg-gray-50 p-12 rounded-[40px] mt-20">
               <h4 className="text-2xl font-heading font-black mb-4 uppercase text-brand-orange">Related Coverage</h4>
               <ul className="space-y-4">
                 {NEWS.filter(n => n.id !== post.id).slice(0, 2).map(n => (
                   <li key={n.id}>
                     <Link to={`/news/${n.id}`} className="text-brand-charcoal hover:text-brand-orange transition-colors font-bold text-xl">• {n.title}</Link>
                   </li>
                 ))}
               </ul>
             </div>
          </div>

          <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-brand-charcoal text-white flex items-center justify-center font-black">FM</div>
              <div>
                <div className="font-heading font-bold text-brand-charcoal uppercase tracking-widest text-sm">FM95 Newsroom</div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-tighter">Verified Local Source</div>
              </div>
            </div>
            <div className="flex space-x-4">
              <button className="bg-gray-100 p-4 rounded-xl hover:bg-brand-orange hover:text-white transition-all font-bold uppercase tracking-widest text-xs">Share Story</button>
              <Link to="/news" className="bg-brand-charcoal text-white px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-widest hover:bg-brand-orange transition-colors">More News</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsPost;
