
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-heading font-black mb-12">Terms of Use</h1>
      <div className="prose prose-xl text-gray-600 space-y-8 font-medium">
        <p>Last updated: October 2025</p>
        <p>By accessing the services provided by FM95 Media Group, you agree to comply with the following terms.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Broadcasting Rights</h2>
        <p>All audio streams and visual content are the property of FM95 Media Group or its licensors. Unauthorized redistribution or commercial use of our signals is strictly prohibited.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Contests</h2>
        <p>On-air contests are subject to specific rules which will be broadcast during the promotion period. Winners must be residents of the Brooklyn area unless specified otherwise.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Liability</h2>
        <p>FM95 Media Group is not responsible for damages resulting from the use of our digital platforms or reliance on information broadcast on our signals.</p>
      </div>
    </div>
  );
};

export default Terms;
