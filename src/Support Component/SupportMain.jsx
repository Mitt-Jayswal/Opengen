import React, { useEffect, useRef, useState } from "react";
import "../Design Support Component/OpengenHelp.css";
import helpImg from "../assets/sample.avif"; 
import { Link } from "react-router-dom";

const OpengenHelp = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`opengen-help-bg${visible ? " opengen-help-visible" : ""}`}
    >
      {/* Header */}
      <div className="opengen-help-header">
        <h1>Opengen.tech Developer Advocacy Help &amp; Learning</h1>
        <div className="opengen-help-searchbar">
          <input
            type="text"
            placeholder="How can we help you?"
            className="opengen-help-searchinput"
          />
          <button className="opengen-help-searchbtn">
            <span className="opengen-help-searcharrow">&#8594;</span>
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="opengen-help-nav">
        <div className="opengen-help-navitem">
          <span className="opengen-help-navicon">
            {/* Contact Icon (SVG) */}
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
              <path d="M21 10.5V6.75A2.25 2.25 0 0 0 18.75 4.5H5.25A2.25 2.25 0 0 0 3 6.75v10.5A2.25 2.25 0 0 0 5.25 19.5h13.5A2.25 2.25 0 0 0 21 17.25V13.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="m7.5 8.25 4.5 3 4.5-3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="opengen-help-navlabel">Contact Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="opengen-help-main">
        <div className="opengen-help-main-left">
          <h2>New to Opengen.tech?</h2>
          <p className="opengen-help-intro">
            Start here to discover the essential features and community resources that make Opengen.tech the home for developer advocacy, collaboration, and innovation.
          </p>
          <ul className="opengen-help-links">
            <li><Link to="/">Developer Advocacy</Link></li>
            <li><Link to="/">Brand Amplification</Link></li>
            <li><Link to="/">Partnerships</Link></li>
            <li><Link to="/">Community Events</Link></li>
            <li><Link to="/">Hackathons</Link></li>
            <li><Link to="/">Support</Link></li>
          </ul>
        </div>
        <div className="opengen-help-main-right">
          <img
            src={helpImg}
            alt="Help illustration"
            className="opengen-help-img" style={{width:'700px',height:'350px'}}
          />
        </div>
      </div>
    </section>
  );
};

export default OpengenHelp;
