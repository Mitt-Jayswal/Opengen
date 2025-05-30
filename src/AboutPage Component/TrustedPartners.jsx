import React, { useState, useEffect, useRef } from "react";
import "../Design About Component/CustomersSection.css";

// Example customer data (replace with your real logos)
const customers = [
  { name: "AT&T", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/AT%26T_logo_2016.svg" },
  { name: "Walgreens", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Walgreens_Logo.svg" },
  { name: "TD Bank", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/TD_Bank_logo.svg" },
  { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg" },
  { name: "GSK", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/GSK_logo_2022.svg" },
];
const moreCustomers = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
];

const CustomersSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`customers-section ${isVisible ? "visible" : ""}`}
    >
      <div className="customers-content">
        <h2 className="customers-title">Featured In</h2>
        <div className="customers-logos-row">
          {customers.map((customer) => (
            <div className="customer-logo-box" key={customer.name}>
              <img src={customer.logo} alt={customer.name} className="customer-logo-img" />
              <span className="customer-logo-name">{customer.name}</span>
            </div>
          ))}
        </div>
        <div className="customers-controls">
          <div className="customers-dots">
            <span className="dot red"></span>
            <span className="dot black"></span>
          </div>
          {!showAll && (
            <button className="see-all-btn" onClick={() => setShowAll(true)}>
              See all customers <span className="arrow">→</span>
            </button>
          )}
        </div>
        {showAll && (
          <div className="more-customers-wrapper">
            <div className="customers-logos-row more">
              {moreCustomers.map((customer) => (
                <div className="customer-logo-box" key={customer.name}>
                  <img src={customer.logo} alt={customer.name} className="customer-logo-img" />
                  <span className="customer-logo-name">{customer.name}</span>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setShowAll(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomersSection;
