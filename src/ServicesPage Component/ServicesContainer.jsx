import React, { useEffect, useRef, useState } from "react";
import "../Design Service Component/CommunityNews.css";

import card1img from "../assets/imageforwhychoose1.jpg";
import card2img from "../assets/imageforwhychoose1.jpg";
import card3img from "../assets/imageforwhychoose1.jpg";
import card4img from "../assets/imageforwhychoose1.jpg";

const cardData = [
  {
    title: "Developer Advocacy",
    badge: "Advocacy",
    img: card1img,
    desc: "Build trust and engagement by connecting your brand with developers worldwide. Our advocacy programs foster genuine relationships, provide technical education, and amplify your platform’s impact within the developer ecosystem.",
  },
  {
    title: "Brand Amplification",
    badge: "Brand",
    img: card2img,
    desc: "Elevate your brand’s presence and credibility among developers. Through workshops, hackathons, and community-led content, we help you stand out as a leader in the tech community.",
  },
  {
    title: "Partnership",
    badge: "Partnership",
    img: card3img,
    desc: "Forge powerful partnerships with industry leaders and open-source projects. Together, we create opportunities for innovation, knowledge sharing, and community growth.",
  },
  {
    title: "Community Services",
    badge: "Community",
    img: card4img,
    desc: "Support and grow vibrant developer communities through events, mentorship, and resources. We help you build an inclusive, engaged community that drives innovation and loyalty.",
  }
];

const CommunityNews = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`community-news-bg${visible ? " community-news-visible" : ""}`}
      ref={sectionRef}
    >
      <h2 className="community-news-title">
        Empower Your Developer Community with Strategic Advocacy
      </h2>
      <div className="community-news-row">
        {cardData.map((card, idx) => (
          <div key={card.title} className="community-news-card">
            <div
              className="community-news-card-top"
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>
            <div className="community-news-card-bottom">
              <div className="community-news-card-label">
                <strong>{card.title}</strong>
              </div>
              <div className="community-news-card-desc">{card.desc}</div>
              <div className="community-news-card-footer-line"></div>
              <div className="community-news-card-footer">
                <span className={`community-news-card-badge ${idx === 0 ? "agenda" : idx === 1 ? "brand" : idx === 2 ? "post" : "community"}`}>
                  {card.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunityNews;
