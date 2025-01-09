import React from 'react'
import { faqs } from '../constants';
import { useState } from 'react';
import Section from './Section';
import Heading from './Heading';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faqs"   className="bg-n-8">
      <Heading
      title={`Our Frequently Asked Questions`}
      tag={`It's okay to have questions, we have answers`}
      />
      <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item">
          <div 
            className="accordion-header text-n-9"
            onClick={() => toggleAccordion(index)}
          >
            <h3>{faq.question}</h3>
            <span>{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="accordion-body">
              <p className='text-n-4'>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </Section>
  );
};

export default FAQs