import { useEffect, useRef } from "react";
import "../Design Support Component/OpengenHelp.css";

const MainBrandHeaderSupport = () => {
  const supportBearShirtIcsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (supportBearShirtIcsRef.current) {
        const scrollPosition = window.scrollY;
        supportBearShirtIcsRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="support-bear-shirt-ics" ref={supportBearShirtIcsRef}>
      <div className="support-wolf-shirt-ics">
        <div className="support-fox-shirt-ics">
          <h1 className="support-leopard-shirt-ics">Get in Touch with OpenGen</h1>
        </div>
      </div>
    </div>
  );
};

export default MainBrandHeaderSupport;
