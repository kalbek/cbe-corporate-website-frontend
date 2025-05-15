'use client';

import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => (
  <div className="border-b border-gray-200 py-4">
    <button
      className="w-full flex justify-between items-center text-left focus:outline-none"
      onClick={onClick}
    >
      <h3 className="text-lg font-bold text-[#86198f] py-2">{question}</h3>
      <svg
        className={`w-5 h-5 text-[#86198f] transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
    {isOpen && (
      <div className="mt-2 text-gray-600 pl-1">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'My PIN is blocked',
      answer: 'If the customer tries the wrong PIN more than three times, the PIN will be blocked. In this case, the customer should wait 24 hours before trying it again. After 24 hours, the PIN will be active; otherwise, follow the above steps to get the new PIN.'
    },
    {
      question: 'I lost my PIN',
      answer: 'If you have lost your PIN, please contact our customer service immediately to block your card and request a new PIN. You will need to verify your identity before we can assist you with generating a new PIN.'
    },
    {
      question: 'I lost my card',
      answer: 'If you have lost your card, please contact our customer service immediately to report the loss and block the card. You can visit any of our branches to request a replacement card.'
    },
    {
      question: 'My card is rejected by ATM terminals',
      answer: 'If your card is being rejected by ATM terminals, please check if the card is damaged or expired. If the issue persists, please contact our customer service for assistance. There might be a temporary hold on your card or an issue with the ATM network.'
    },
    {
      question: 'My balance is deducted without giving me cash on another bank ATM',
      answer: 'If your account was debited but you did not receive cash from another bank\'s ATM, please contact our customer service immediately with the transaction details. We will investigate the issue and initiate a dispute if necessary.'
    },
    {
      question: 'My card is captured in ATM (off-branches)',
      answer: 'If your card has been captured by an ATM outside our branches, please contact our customer service immediately. You will need to verify your identity and may need to visit the nearest branch to retrieve your card or request a replacement.'
    },
    {
      question: 'My balance is deducted without giving me cash on CBE ATM',
      answer: 'If your account was debited but you did not receive cash from a CBE ATM, please wait for a few minutes as the transaction might be temporarily pending. If the issue persists, please contact our customer service with the ATM location and transaction details for investigation.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/images/hero.png"
          alt="FAQ Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="max-w-2xl px-8 py-6">
              <h1 className="text-4xl font-bold mb-4 text-white">FAQ</h1>
              <p className="max-w-2xl text-base mb-4 text-white">
                Find quick answers to common questions about our services, accounts, cards, digital banking, and more at CBE.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Left-side decorative element */}
        <div className="absolute left-0 -ml-20 hidden lg:block">
          <svg width="120" height="400" viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C33.3 33.3 66.7 66.7 100 100C66.7 133.3 33.3 166.7 0 200C33.3 233.3 66.7 266.7 100 300C66.7 333.3 33.3 366.7 0 400" stroke="#86198f" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 6" />
          </svg>
        </div>

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold text-[#86198f] text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => toggleAccordion(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
