
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-6xl font-heading font-black mb-12">Privacy Policy</h1>
      <div className="prose prose-xl text-gray-600 space-y-8 font-medium">
        <p>Last updated: October 2025</p>
        <p>FM95 Media Group ("we", "us", "our") operates three distinct signals across Brooklyn, NY. This policy describes how we collect and use your data through our websites and digital streaming services.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Data Collection</h2>
        <p>We do not require account registration to use our digital streaming player. However, we may collect technical data such as IP address and browser type to ensure optimal stream delivery and regional compliance.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Advertising</h2>
        <p>Our website may use cookies to serve relevant advertisements to our visitors. These cookies do not store personally identifiable information.</p>
        <h2 className="text-3xl font-heading font-bold text-brand-charcoal">Contact</h2>
        <p>For questions regarding this policy, please contact privacy@fm95.com.</p>
      </div>
    </div>
  );
};

export default Privacy;
