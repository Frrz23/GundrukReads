import React from 'react';

const Conditions = () => {
  return (
    <div className="font-poppins max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 text-center border-b-2 pb-4">Terms and Conditions</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">1. Introduction</h2>
          <p className="text-lg">Welcome to GundrukReads! These Terms and Conditions outline the rules and regulations for the use of our website.</p>
        </section>
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">2. Intellectual Property Rights</h2>
          <p className="text-lg">All content on this website, including but not limited to text, images, logos, and graphics, is the property of GundrukReads and is protected by applicable copyright and trademark laws.</p>
        </section>
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">3. User Responsibilities</h2>
          <p className="text-lg">By accessing our website, you agree to use it only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the site.</p>
        </section>
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">4. Limitations of Liability</h2>
          <p className="text-lg">GundrukReads will not be held liable for any damages that arise from the use of our website, including but not limited to direct, indirect, or consequential damages.</p>
        </section>
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">5. Governing Law</h2>
          <p className="text-lg">These terms and conditions are governed by the laws of [Your Country/State], and you agree to submit to the exclusive jurisdiction of the courts in this location.</p>
        </section>
        
        <section className="py-4 border-b">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">6. Changes to These Terms</h2>
          <p className="text-lg">We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the website constitutes your acceptance of any changes.</p>
        </section>
        
        <section className="py-4">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">7. Contact Us</h2>
          <p className="text-lg">If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@gundrukreads.com" className="text-indigo-500 underline">support@gundrukreads.com</a>.</p>
        </section>
        
      </div>
    
    </div>
  );
};

export default Conditions;
