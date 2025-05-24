import React, { useRef, useEffect, useState } from "react";
import "../Design Opengen Component/Developerengagementrate.css";
import sample from '../assets/sample.avif'

// Replace with your actual image URL
const bgImg =
  sample;

const DeveloperEngagementRate = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`customer-story-section${visible ? " visible" : ""}`}
    >
      <div className="customer-story-left">
        <div className="stat">
          <div className="stat-number">100%</div>
          <div className="stat-desc">Developer Engagement Rate<br />For our developer advocacy programs, ensuring a high-impact community connection.</div>
        </div>
        <div className="stat">
          <div className="stat-number">200+</div>
          <div className="stat-desc">Developer Communities Engaged Across the Globe<br />Our programs span over 200+ developer communities, promoting collaboration, knowledge-sharing.</div>
        </div>
        <div className="stat">
          <div className="stat-number">Innovative Solutions for Developer Communities</div>
          <div className="stat-desc">Customized Advocacy Campaigns for Every Business</div>
        </div>
         
      </div>
      <div
        className="customer-story-right"
        style={{
          backgroundImage: `url(${bgImg})`
        }}
      >
        <div className="customer-story-overlay">
          <div className="customer-story-content">
            <h2>
              OpenGen Powers Developer Advocacy Services<br />
  for Leading Organizations in AI, Data Science, Data Engineering, and Open Source.
            </h2>
            <button className="story-btn">Know More About OpenGen</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperEngagementRate;
