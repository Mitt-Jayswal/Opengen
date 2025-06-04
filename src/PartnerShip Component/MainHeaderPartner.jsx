import { useEffect, useRef } from "react";
import "../Design Service Component/MainHeaderService.css";
import servicemainImg from "../assets/servicemaini.png";  

const MainHeaderPartner = () => {
  const partnerLionShirtIcsRef = useRef(null);
  const partnerTigerShirtIcsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (partnerTigerShirtIcsRef.current) {
        const scrollPosition = window.scrollY;
        partnerTigerShirtIcsRef.current.style.objectPosition = `center ${50 + scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="partner-lion-shirt-ics" ref={partnerLionShirtIcsRef}>
      <img
        ref={partnerTigerShirtIcsRef}
        src={servicemainImg}
        alt="OpenGen Services"
        className="partner-tiger-shirt-ics"
        draggable={false}
      />
      <div className="partner-bear-shirt-ics">
        <div className="partner-elephant-shirt-ics">
          <h1 className="partner-giraffe-shirt-ics">OpenGen Services</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderPartner;
