import { useEffect, useRef } from "react";
import "../Design Service Component/MainHeaderService.css";
import servicemainImg from "../assets/servicemaini.png"; // Import image

const MainHeaderPartner = () => {
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollPosition = window.scrollY;
        imgRef.current.style.objectPosition = `center ${50 + scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="page1-container" ref={headerRef}>
      <img
        ref={imgRef}
        src={servicemainImg}
        alt="OpenGen Services"
        className="page1-bg-img"
        draggable={false}
      />
      <div className="page1-overlay">
        <div className="page1-content">
          <h1>OpenGen Services</h1>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderPartner;
