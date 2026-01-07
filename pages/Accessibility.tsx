
import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-heading font-black mb-12">Accessibility</h1>
      <div className="prose prose-xl text-gray-600 space-y-8 font-medium">
        <p>FM95 Media Group is committed to ensuring that our digital platforms are accessible to all users, regardless of ability.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Our Standards</h2>
        <p>We strive to adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. This includes ensuring our audio player remains navigable via keyboard and that all primary imagery includes descriptive alt-text.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Feedback</h2>
        <p>We are continuously improving our digital experience. If you encounter any barriers while using our website or player, please contact us at accessibility@fm95.com.</p>
      </div>
    </div>
  );
};

export default Accessibility;
