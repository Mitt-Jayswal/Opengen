"use client"
import React, { useEffect, useRef } from 'react';
import '../Design About Component/AboutNewFeed.css';
import { Link } from 'react-router-dom';

const  AboutNewFeed = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          sectionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Endorsed By data
  const testimonials = [
    {
      quote: "OpenGen advocacy work has transformed our developer community and accelerated our innovation cycle.",
      role: "Leading AI Startup",
    },
    {
      quote: "Their approach to community building is unmatched. OpenGen.Tech truly understands the needs of developers.",
      role: "Open Source Collective",
    },
    {
      quote: "Working with OpenGen has elevated our brand and expanded our reach in the tech ecosystem.",
      role: "Cloud Innovators",
    }
  ];

  // In The News data
  const news = [
    {
      icon: "🌐", // Replace with TechCrunch icon if available
      title: "OpenGen Launches New Developer Advocacy Program",
      
      link: "/services/Opengen"
    },
    {
      icon: "💡", // Replace with VentureBeat icon if available
      title: "How OpenGen is Shaping the Future of Developer Communities",
      
      link: "/services/Opengen"
    },
    {
      icon: "🖥️", // Replace with The Verge icon if available
      title: "Building Bridges: OpenGen.Tech’s Impact on Open Source",
      
      link: "/services/Opengen"
    },
    {
      icon: "📱", // Replace with Wired icon if available
      title: "Developer Advocacy: The Secret Sauce Behind OpenGen.Tech’s Success",
      
      link: "/services/Opengen"
    },
    {
      icon: "🔗", // Replace with ZDNet icon if available
      title: "OpenGen.Tech Partners with Leading Tech Firms to Expand Community Reach",
      
      link: "/services/Opengen"
    },
    {
      icon: "👨‍💻", // Replace with Dev.to icon if available
      title: "Why OpenGen is a Beacon for Developer-First Organizations",
    //   outlet: "Dev.to",
      link: "/services/Opengen"
    }
  ];

  return (
    <div ref={sectionRef} className="endorsed-news-sections">
      {/* Endorsed By Section */}
      <section className="endorsed-section">
        <h2 className="section-title">Endorsed By</h2>
        <p className="section-subtitle">
          At OpenGen we’re proud to be trusted by industry leaders, open-source contributors, and developer-first organizations around the world. Our advocacy has earned praise from those who matter most — the builders, engineers, and innovators shaping tomorrow.
        </p>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="quote-icon">🗣️</div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-meta">
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In The News Section */}
      <section className="news-section">
        <h2 className="section-title">In The News</h2>
        <p className="section-subtitle">
          We’re making headlines across the tech world — not just for what we build, but for how we help others build with purpose and community.
        </p>
        <div className="news-grid">
          {news.map((item, idx) => (
            <a key={idx} href={item.link} className="news-card">
              <div className="news-icon">{item.icon}</div>
              <h3 className="news-title">"{item.title}"</h3>
              <div className="news-outlet">{item.outlet}</div>
              <div className="news-read-more">
              <Link to="/services/Opengen" style={{textDecoration:'none'}}>
              Read More →
              </Link></div>
            </a>
          ))}
        </div>
        <div className="news-contact">
          Want to feature us in your publication? <Link to="#" className="news-contact-link">Contact our media team</Link>
        </div>
      </section>
    </div>
  );
};

export default AboutNewFeed;
