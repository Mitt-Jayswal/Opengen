"use client"
import React from "react";
import "../Design About Component/ShowcaseCards.css";

// Replace these with your actual image URLs
import img1 from "../assets/sample.avif";
import img2 from "../assets/sample.avif";
import img3 from "../assets/sample.avif";

const ShowcaseCards = () => (
  <section className="showcase-bg">
    <div className="showcase-cards-row">
      {/* Card 1 */}
      <div className="showcase-card">
        <div className="showcase-card-img-wrap">
          <img src={img1} alt="Developer Communities" className="showcase-card-img" />
        </div>
        <div className="showcase-card-content">
          <h3 className="showcase-card-title">Developer Communities</h3>
          <p className="showcase-card-desc">
            Connect, collaborate, and grow with vibrant developer communities. Share knowledge, build projects, and shape the future of tech together.
          </p>
        </div>
        <div className="showcase-card-underline"></div>
      </div>
      {/* Card 2 */}
      <div className="showcase-card">
        <div className="showcase-card-img-wrap">
          <img src={img2} alt="Agency Excellence" className="showcase-card-img" />
        </div>
        <div className="showcase-card-content">
          <h3 className="showcase-card-title">Agency Excellence</h3>
          <p className="showcase-card-desc">
            OpenGen.Tech empowers brands and developers with advocacy, mentorship, and creative solutions for impactful digital transformation.
          </p>
        </div>
        <div className="showcase-card-underline"></div>
      </div>
      {/* Card 3 */}
      <div className="showcase-card">
        <div className="showcase-card-img-wrap">
          <img src={img3} alt="Hackathons & Innovation" className="showcase-card-img" />
        </div>
        <div className="showcase-card-content">
          <h3 className="showcase-card-title">Hackathons & Innovation</h3>
          <p className="showcase-card-desc">
            Join our global hackathons to solve real-world challenges, learn new skills, and collaborate with top talent from around the world.
          </p>
        </div>
        <div className="showcase-card-underline"></div>
      </div>
    </div>
  </section>
);

export default ShowcaseCards;
