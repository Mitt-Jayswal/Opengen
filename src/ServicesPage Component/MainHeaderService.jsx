import React, { useEffect, useRef } from "react";
import "../Design Service Component/MainHeaderService.css";
import servicemainImg from "../assets/servicemaini.png";

const MainHeaderServices = () => {
  const servLionMalRef = useRef(null);
  const servTigerMalRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (servTigerMalRef.current) {
        const scrollPosition = window.scrollY;
        servTigerMalRef.current.style.objectPosition = `center ${50 + scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="serv-lion-mal" ref={servLionMalRef}>
      <img
        ref={servTigerMalRef}
        src={servicemainImg}
        alt="OpenGen Services"
        className="serv-tiger-mal"
        draggable={false}
      />
      <div className="serv-bear-mal">
        <div className="serv-elephant-mal">
          <h1>Developer Advocacy</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderServices;
