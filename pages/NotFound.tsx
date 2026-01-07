
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-center p-4 bg-gray-50">
      <div className="max-w-xl">
        <h1 className="text-[200px] font-heading font-black text-brand-orange leading-none mb-4 tracking-tighter">404</h1>
        <h2 className="text-5xl font-heading font-black mb-8 uppercase italic">Signal Lost in Static</h2>
        <p className="text-2xl text-gray-400 mb-12 font-medium">The page you're looking for has moved out of range or no longer exists. Let's get you back to the main signal.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="bg-brand-charcoal text-white px-10 py-5 rounded-full font-heading font-bold text-xl uppercase tracking-widest hover:bg-brand-orange transition-all">Home Base</Link>
          <Link to="/listen" className="bg-brand-yellow text-brand-charcoal px-10 py-5 rounded-full font-heading font-bold text-xl uppercase tracking-widest hover:bg-white transition-all">Listen Live</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
