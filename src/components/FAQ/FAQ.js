import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState('tenants');
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = {
    tenants: [
      {
        question: "What documents do I need to apply?",
        answer: "You'll need to provide proof of income, identification, and previous rental history."
      },
      {
        question: "How long is the typical lease term?",
        answer: "Most lease terms are 12 months, but we offer flexible options ranging from 6 to 24 months."
      }
    ],
    landlords: [
      {
        question: "Can landlord / tenant details be withheld in the application process?",
        answer: "Yes, certain personal details can be withheld for privacy reasons during initial stages."
      },
      {
        question: "What services do you provide for landlords?",
        answer: "We offer tenant screening, rent collection, maintenance coordination, and property marketing."
      }
    ],
    agents: [
      {
        question: "Can agents list on the platform?",
        answer: "Yes, licensed real estate agents can create an account and list properties."
      },
      {
        question: "What is the cost of this service to agents?",
        answer: "We offer flexible pricing plans starting from $29/month with no hidden fees."
      }
    ]
  };

  return (
    <div className='faq-wrapper'>
        <div className="faq-container">
        <h1 className="faq-title">Frequently asked questions</h1>

        {/* Tab Navigation */}
        <div className="faq-tabs">
            <button
            onClick={() => setActiveTab('tenants')}
            className={`tab-button ${activeTab === 'tenants' ? 'active' : ''}`}
            >
            <svg className="tab-icon" viewBox="0 0 24 24">
                <path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            For tenants
            </button>
            <button
            onClick={() => setActiveTab('landlords')}
            className={`tab-button ${activeTab === 'landlords' ? 'active' : ''}`}
            >
            <svg className="tab-icon" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            For landlords
            </button>
            <button
            onClick={() => setActiveTab('agents')}
            className={`tab-button ${activeTab === 'agents' ? 'active' : ''}`}
            >
            <svg className="tab-icon" viewBox="0 0 24 24">
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            For agents
            </button>
        </div>

        {/* FAQ Questions */}
        <div className="faq-questions">
            {faqData[activeTab].map((faq, index) => (
            <div key={index} className="faq-item">
                <button
                className="faq-question"
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                >
                <span>{faq.question}</span>
                <svg
                    className={`question-icon ${openQuestion === index ? 'rotate' : ''}`}
                    viewBox="0 0 24 24"
                >
                    <path d="M19 9l-7 7-7-7" />
                </svg>
                </button>
                {openQuestion === index && (
                <div className="faq-answer">
                    {faq.answer}
                </div>
                )}
            </div>
            ))}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
            <p className="contact-text">
            Can't find an answer to your question? Contact us!
            </p>
            <button className="contact-button">
            <svg className="contact-icon" viewBox="0 0 24 24">
                <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            Contact Sales
            </button>
        </div>
        </div>
    </div>
  );
};

export default FAQ;