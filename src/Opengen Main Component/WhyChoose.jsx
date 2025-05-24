import React, { useState, useEffect } from 'react';
import '../Design Opengen Component/WhyChoose.css';

import image1 from '../assets/imageforwhychoose1.jpg';
import image2 from '../assets/sample.avif';
import image3 from '../assets/imageforwhychoose1.jpg';

const WhyChooseOpengen = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeImage, setActiveImage] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const stepImages = [image1, image2, image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(false);
      setTimeout(() => {
        setCurrentStep((prevStep) => (prevStep % 3) + 1);
        setActiveImage(true);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const section = document.querySelector('.guide-container');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`guide-container ${isVisible ? 'visible' : ''}`} data-step={currentStep}>
      <h1 className="guide-title">
        Impress Your Clients with World-Class Developer Advocacy
      </h1>
      <p className="guide-intro">
        Our platform and expertise are designed to help you stand out in the developer advocacy space. 
        We connect you with thriving developer communities, empower your brand, and deliver results that 
        make your clients take notice. Partner with us to create a digital presence that drives engagement, 
        innovation, and lasting impact.
      </p>
      <div className="guide-content">
        <div className="guide-image-container">
          <img
            src={stepImages[currentStep - 1]}
            alt={`Step ${currentStep} demonstration`}
            className={`guide-image ${activeImage ? 'active' : ''}`}
          />
        </div>
        <div className="guide-steps-container">
          <div className="step-indicator active"></div>
          <div className="guide-steps">
            <div className={`step ${currentStep === 1 ? 'active' : ''}`}>
              <h3 className="step-title">Empower Your Brand in Developer Communities</h3>
              <p className="step-description">
                Build credibility and trust with developers worldwide. Our solutions help you engage, educate, and inspire developer communities, positioning your brand as a leader in tech.
              </p>
            </div>
            <div className={`step ${currentStep === 2 ? 'active' : ''}`}>
              <h3 className="step-title">Drive Engagement and Innovation</h3>
              <p className="step-description">
                Foster meaningful connections and spark innovation within developer ecosystems. We help you create content, events, and experiences that drive real engagement and growth.
              </p>
            </div>
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
              <h3 className="step-title">Deliver Results That Impress</h3>
              <p className="step-description">
                From developer advocacy campaigns to community-building initiatives, we deliver measurable results that impress your clients and set you apart in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-container">
        <button className="cta-button">Get into Action</button>
      </div>
    </div>
  );
};

export default WhyChooseOpengen;
