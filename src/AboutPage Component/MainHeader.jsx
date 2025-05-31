import { useEffect, useRef } from "react";
import "../Design About Component/MainAboutDesign.css";

const MainBrandHeaderAbout = () => {
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
    <div className="terran-about-ab" ref={headerRef}>
      <div className="terran-overlay-ab">
        <div className="terran-content-ab">
          <h1 className="terran-heading-ab">About OpenGen</h1>
        </div>
      </div>
    </div>
  );
};

export default MainBrandHeaderAbout;
