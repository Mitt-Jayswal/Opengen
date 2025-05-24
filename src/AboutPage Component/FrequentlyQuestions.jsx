import React, { useState } from "react";
import "../Design About Component/FrequentlyQuestions.css";

const faqData = [
  {
    question: "What services does Opengen provide to developers??",
    answer: "Opengen specializes in developer advocacy, providing services such as developer education, community building, technical support, and content creation. We help companies engage with developers and enhance their products through developer-focused initiatives.",
  },
  {
    question: "How can I partner with Opengen for developer advocacy?",
    answer: "If you're looking to collaborate with Opengen for developer advocacy, simply reach out via our Partnership page. We offer tailored programs to help organizations foster relationships with the developer community and drive product adoption.",
  },
  {
    question: "Can Opengen help organize developer events and hackathons?",
    answer: "Yes! Opengen excels at organizing developer-focused events, including hackathons, conferences, webinars, and workshops. Our team takes care of event planning, promotion, and management to ensure the event provides maximum value to participants.",
  },
  {
    question: "How do I get involved in an Opengen event as a developer?",
    answer: "ou can easily join our events by registering through our Events page. Opengen events are open to developers of all skill levels, and they often include opportunities to network, learn new skills, and collaborate on projects.",
  },
  {
    question: "Can Opengen help me with product adoption in the developer community?",
    answer: "Absolutely! Our developer advocacy services are designed to help your product gain traction in the developer community. We create strategies to engage developers, provide technical support, and generate excitement around your product’s capabilities.",
  },
];

const FrequentlyQuestions = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (idx) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  const handleExpandAll = () => {
    setOpenIndexes(faqData.map((_, idx) => idx));
  };

  const handleCollapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>Frequently asked questions with OpenGen</h1>
        <div className="faq-controls">
          <button className="faq-btn" onClick={handleExpandAll}>Expand all</button>
          <button
            className="faq-btn"
            onClick={handleCollapseAll}
            disabled={openIndexes.length === 0}
          >
            Collapse all
          </button>
        </div>
      </div>
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <div className="faq-item" key={idx}>
            <div className="faq-question-row">
              <span className="faq-index">{(idx + 1).toString().padStart(2, "0")}/</span>
              <span className="faq-question">{item.question}</span>
              <button
                className={`faq-toggle-btn ${openIndexes.includes(idx) ? "open" : ""}`}
                onClick={() => handleToggle(idx)}
                aria-label={openIndexes.includes(idx) ? "Collapse" : "Expand"}
              >
                <span className="faq-plus">{openIndexes.includes(idx) ? "−" : "+"}</span>
              </button>
            </div>
            {openIndexes.includes(idx) && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
