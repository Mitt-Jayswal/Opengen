import React, { useEffect, useRef, useState } from "react";
import "../Design Service Component/ServicesHero.css";

const ServicesHero = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer for scroll-in animation
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`services-hero-bg${visible ? " services-hero-visible" : ""}`}
    >
      <div className="services-hero-row">
        <div className="services-hero-left">
          <h1 className="services-hero-title">
            <span>Build With Devs, Win With Devs </span>
            <br />
            <span>Strategic Advocacy That Ignites Trust,</span>
            <br />
            <span>Loyalty, and Developer-Led Growth</span>
          </h1>
        </div>
        <div className="services-hero-right">
          <p className="services-hero-desc">
            Developer trust is earned  At OpenGen.Tech, we specialize in building that trust through strategic
            advocacy that blends credibility, community, and code. Because when developers believe, everything else follows.
          </p>
        </div>
      </div>
      <div className="services-hero-bottom">
        
      </div>
    </section>
  );
};

export default ServicesHero;
