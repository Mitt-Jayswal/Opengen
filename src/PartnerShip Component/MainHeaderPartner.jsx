import { useEffect, useRef } from "react";
import "../Design BrandAmplification Component/MainBrandHeader.css";

const MainBrandHeaderPartner = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY;
        headerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="partner-page-container-ner" ref={headerRef}>
      <div className="partner-page-overlay-ner">
        <div className="partner-page-content-ner">
          <h1 className="partner-page-heading-ner">Our Trusted Partners</h1>
        </div>
      </div>
    </div>
  );
};

export default MainBrandHeaderPartner;
