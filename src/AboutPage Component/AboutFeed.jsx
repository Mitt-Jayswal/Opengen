"use client"

import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import {
  Quote,
  Newspaper,
  Globe,
  Code2,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  Star,
  TrendingUp,
  MessageSquare,
  Award,
} from "lucide-react"
import "../Design About Component/AboutNewFeed.css"

const AboutNewFeed = () => {

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && sectionRef.current) {
          sectionRef.current.classList.add("animate-in")
        }
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Endorsed By data
  const testimonials = [
    {
      quote: "OpenGen advocacy work has transformed our developer community and accelerated our innovation cycle.",
      role: "Leading AI Startup",
      icon: <Star className="testimonial-icon" />,
      rating: 5,
    },
    {
      quote:
        "Their approach to community building is unmatched. OpenGen.Tech truly understands the needs of developers.",
      role: "Open Source Collective",
      icon: <Users className="testimonial-icon" />,
      rating: 5,
    },
    {
      quote: "Working with OpenGen has elevated our brand and expanded our reach in the tech ecosystem.",
      role: "Cloud Innovators",
      icon: <TrendingUp className="testimonial-icon" />,
      rating: 5,
    },
  ]

  // In The News data
  const news = [
    {
      icon: <Globe className="news-icon" />,
      title: "OpenGen Launches New Developer Advocacy Program",
      
      category: "Product Launch",
      link: "/services/Opengen",
      
    },
    {
      icon: <Code2 className="news-icon" />,
      title: "How OpenGen is Shaping the Future of Developer Communities",
       
      category: "Industry Analysis",
      link: "/services/Opengen",
       
    },
    {
      icon: <Users className="news-icon" />,
      title: "Building Bridges: OpenGen.Tech's Impact on Open Source",
      
      category: "Community",
      link: "/services/Opengen",
      
    },
    {
      icon: <Zap className="news-icon" />,
      title: "Developer Advocacy: The Secret Sauce Behind OpenGen.Tech's Success",
       
      category: "Strategy",
      link: "/services/Opengen",
       
    },
    {
      icon: <MessageSquare className="news-icon" />,
      title: "OpenGen.Tech Partners with Leading Tech Firms to Expand Community Reach",
      
      category: "Partnership",
      link: "/services/Opengen",
      
    },
    {
      icon: <Award className="news-icon" />,
      title: "Why OpenGen is a Beacon for Developer-First Organizations",
       
      category: "Recognition",
      link: "/services/Opengen",
      
    },
  ]

  return (
    <div ref={sectionRef} className="about-newsfeed-container">
      {/* Endorsed By Section */}
      <section className="endorsed-section">
        <div className="section-header">
          <div className="section-badge endorsed-badge">
            <Award className="badge-icon" />
            <span className="badge-text">Trusted by Industry Leaders</span>
          </div>
           
          <h2 style={{color:'#ffffff',fontSize:'3rem'}}>Endorsed By</h2>
          <p className="section-subtitle">
            At OpenGen we're proud to be trusted by industry leaders, open-source contributors, and developer-first
            organizations around the world. Our advocacy has earned praise from those who matter most — the builders,
            engineers, and innovators shaping tomorrow.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-overlay"></div>
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="testimonial-icon-wrapper">{testimonial.icon}</div>
                  <div className="rating-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star-filled" />
                    ))}
                  </div>
                </div>

               

                <blockquote className="testimonial-quote">"{testimonial.quote}"</blockquote>

                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.role.charAt(0)}</div>
                  <div className="author-info">
                    <p className="author-role">{testimonial.role}</p>
                    <p className="author-status">Verified Partner</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In The News Section */}
      <section className="news-section">
        <div className="section-header">
          <div className="section-badge news-badge">
            <Newspaper className="badge-icon" />
            <span className="badge-text">Media Coverage</span>
          </div>
           <h2 style={{color:'#ffffff',fontSize:'3rem'}}>In the News</h2>
          <p className="section-subtitle">
            We're making headlines across the tech world — not just for what we build, but for how we help others build
            with purpose and community.
          </p>
        </div>

        <div className="news-grid">
          {news.map((item, idx) => (
            <Link key={idx} to={item.link} className="news-card">
              <div className="news-card-content">
                <div className="news-card-header">
                  <div className="news-icon-wrapper">{item.icon}</div>
                  <span className="news-date">{item.date}</span>
                </div>

                <div className="news-card-body">
                  <span className="news-category">{item.category}</span>
                  <h3 className="news-title-text">{item.title}</h3>
                </div>

                <div className="news-card-footer">
                  <span className="news-outlet">{item.outlet}</span>
                  <div className="read-more">
                    <span className="read-more-text" onClick={handleNavClick}>Read More</span>
                    <ArrowRight className="read-more-icon" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

         
      </section>
    </div>
  )
}

export default AboutNewFeed;
