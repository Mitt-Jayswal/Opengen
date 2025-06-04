import { useEffect, useRef } from "react"
import "../Design BrandAmplification Component/CollaborativeAppsPage.css"
import image from '../assets/E.jpeg'
import { Link } from "react-router-dom"
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
const Collaborativepage = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".animate-on-scroll")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="advocacy-container">
      <div className="advocacy-content">
        <h1 className="advocacy-title animate-on-scroll">What is Developer Advocacy?</h1>
        <p className="advocacy-description animate-on-scroll">
          Developer advocacy builds trust, drives engagement, and turns developers into brand champions. By connecting with the tech community, we amplify your brand’s impact and foster organic growth
        </p>

        <div className="advocacy-cards">
          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon trust-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <VscWorkspaceTrusted style={{color:'#e6c068'}}/>
              </svg>
            </div>
            <h2 className="advocacy-card-title">Building Trust & Credibility</h2>
            <p className="advocacy-card-description">
              Establish authentic connections with developers by providing valuable resources, transparent
              communication, and consistent support that builds lasting trust in your brand and products.
            </p>
          </div>

          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon connect-icon">
               <RiUserCommunityFill style={{color:'#e6c068',width:'40px',height:'40px'}}/>
            </div>
            <h2 className="advocacy-card-title">Community Engagement</h2>
            <p className="advocacy-card-description">
              Bring developer workflows, contextualized insights, and actionable feedback into every interaction - in
              real-time and over time, creating a thriving ecosystem around your technology.
            </p>
          </div>

          <div className="advocacy-card animate-on-scroll">
            <div className="advocacy-icon insight-icon">
              <MdLeaderboard style={{color:'#e6c068',height:'40px',width:'50px'}}/>
            </div>
            <h2 className="advocacy-card-title">Thought Leadership</h2>
            <p className="advocacy-card-description">
              Unlock business insights and open new frontiers of innovation by positioning your brand as an industry
              titan through strategic content, speaking engagements, and community leadership.
            </p>
          </div>
        </div>

        <h1 className="advocacy-subtitle animate-on-scroll">
          Transform your strategy into developer advocacy excellence
        </h1>

        <div className="advocacy-banner animate-on-scroll">
          <div className="advocacy-banner-image">
            <img
              src={image}
              alt="Developer Advocacy Visualization"
            />
          </div>
          <div className="advocacy-banner-content">
            <h2 className="advocacy-banner-title">Get started building your developer advocacy program</h2>
            <p className="advocacy-banner-description">
              Strategic advocacy makes your developer relations more personal and impactful. Our experts make your
              advocacy program more capable.
            </p>
            <Link to="/about/Opengen">
            <button className="advocacy-button">Know More about OpenGen
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collaborativepage;
