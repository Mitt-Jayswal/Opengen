import { useEffect, useRef } from "react";
import "../Design Support Component/OpengenHelp.css";

const MainBrandHeaderSupport = () => {
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
    <div className="call-open-end-support-container" ref={headerRef}>
      <div className="call-open-end-support-overlay">
        <div className="call-open-end-support-content">
          <h1 className="call-open-end-support-heading">Get in Touch with OpenGen</h1>
        </div>
      </div>
    </div>
  );
};

export default MainBrandHeaderSupport;
