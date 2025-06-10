import React from "react";
import "../Design Opengen Component/FreeMidCode.css"; 
import codeimage from '../assets/opengenimage.jpg'
import { Link } from "react-router-dom";

const FreeMidCode = () => {

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <section className="bodyfree">
      <div className="free-mid-wrapper">
        <h1 className="free-mid-title">Loved by Companies of all Tiers</h1>
        <p className="free-mid-subtitle">
          See real stories from businesses like yours
        </p>
        <div className="free-mid-card">
          <div className="free-mid-card-left">
            {/* <span className="free-mid-badge">OpenGen story</span> */}
            <h2 className="free-mid-brand">OpenGen</h2>
            <p className="free-mid-quote">
              OpenGen has been a game-changer in our pursuit of operational excellence. By streamlining our processes and providing powerful tools, it has enhanced our team's productivity and the quality of our development outcomes. OpenGen empowers developers to work smarter,
              fostering innovation and helping us achieve new heights in growth and success."
            </p>
            <Link to="/about/Opengen" onClick={handleNavClick}>
              <button className="free-mid-btn">Know About OpenGen Founder</button>
            </Link>
          </div>
          <div className="free-mid-card-right">
            <img
              src={codeimage} 
              alt="OpenGen story"
              className="free-mid-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeMidCode;
