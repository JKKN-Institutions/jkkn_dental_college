'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What courses are offered at J.K.K. Nattraja Dental College?",
      answer: "J.K.K. Nattraja Dental College offers BDS (Bachelor of Dental Surgery) - a 5-year undergraduate program, and MDS (Master of Dental Surgery) postgraduate programs in 9 specializations including Oral Surgery, Orthodontics, Periodontics, Prosthodontics, Endodontics, Pedodontics, Oral Medicine, Oral Pathology, and Public Health Dentistry."
    },
    {
      question: "Is J.K.K. Nattraja Dental College DCI approved?",
      answer: "Yes, J.K.K. Nattraja Dental College is fully approved by the Dental Council of India (DCI) and National Medical Commission (NMC). The college is affiliated with The Tamil Nadu Dr. M.G.R. Medical University and NAAC accredited."
    },
    {
      question: "What is the admission process for BDS?",
      answer: "BDS admission is based on NEET-UG scores through state or All India Quota counseling. Candidates need 10+2 with Physics, Chemistry, and Biology with minimum 50% marks (40% for reserved categories). After counseling allocation, complete document verification and fee payment."
    },
    {
      question: "What facilities does JKKN Dental College offer?",
      answer: "Our campus features a 200+ chair dental hospital treating 500+ patients daily, digital simulation labs, CBCT and OPG imaging, CAD/CAM laboratory, library with e-resources, research labs, separate hostels, cafeteria, sports facilities, and 24/7 Wi-Fi."
    },
    {
      question: "What is the placement record?",
      answer: "J.K.K. Nattraja Dental College provides 100% placement assistance. Alumni work at Apollo Dental, Clove Dental, Sabka Dentist, government hospitals, and private practices. Many pursue higher studies abroad or establish their own clinics."
    },
    {
      question: "What makes JKKN different from other dental colleges?",
      answer: "JKKN stands out with its 100-year educational legacy, learner-centric philosophy, exceptional clinical exposure (500+ daily patients), distinguished Learning Facilitators, state-of-the-art infrastructure, research culture, and comprehensive placement support."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-[#FF6B35] text-sm md:text-base font-bold uppercase tracking-wider mb-4">FAQS</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A4D5C] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Find answers to common questions about admissions, programs, and campus life.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h4 className="text-lg font-bold text-[#0A4D5C] pr-4">
                  {faq.question}
                </h4>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="w-6 h-6 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-[#00B8D4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
