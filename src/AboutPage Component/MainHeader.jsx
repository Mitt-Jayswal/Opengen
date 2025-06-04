import { useEffect, useRef } from "react";
import "../Design About Component/MainAboutDesign.css";

const MainBrandHeaderAbout = () => {
  const aboutLionShirtIcsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutLionShirtIcsRef.current) {
        const scrollPosition = window.scrollY;
        aboutLionShirtIcsRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-lion-shirt-ics" ref={aboutLionShirtIcsRef}>
      <div className="about-tiger-shirt-ics">
        <div className="about-elephant-shirt-ics">
          <h1 className="about-giraffe-shirt-ics">About OpenGen</h1>
        </div>
      </div>
    </div>
  );
};

export default MainBrandHeaderAbout;
