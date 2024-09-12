import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is GundrukReads?",
      answer: "GundrukReads is an e-commerce platform that specializes in selling a wide variety of manga. It’s your go-to destination for all things manga!"
    },
    {
      question: "How can I purchase manga on GundrukReads?",
      answer: "To purchase manga, simply create an account, browse through our collection, add your favorite titles to your cart, and proceed to checkout."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept multiple payment methods including credit/debit cards, PayPal, and mobile wallets. More options will be added in the future!"
    },
    {
      question: "Can I return or exchange a purchase?",
      answer: "Yes! We offer a 7-day return policy for all manga that are in original condition. Please visit our return and refund policy page for more details."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email that allows you to track your shipment in real-time."
    }
  ];

  return (
    <div className="font-poppins max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
              <span
                className={`transform duration-300 ${
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                } text-gray-600 text-2xl`}
              >
                ↓
              </span>
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
