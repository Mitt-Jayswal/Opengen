import { Play, Mic, Users, Code, Headphones, Calendar, ArrowRight, Star, TrendingUp, Globe } from "lucide-react"
import "../DesignLearn Component/Podcast.css"
import podcast1 from '../assets/podcast1.png'
import podcast2 from '../assets/podcast2.png'
import podcast3 from '../assets/podcast3.png'
import podcast4 from '../assets/podcast4.png'
import { Link } from "react-router-dom"

const podcastData = [
  {
    id: 1,
    image: podcast1,
    date: "APRIL 20, 2022",
    title: "Open Source Contributor Spotlights Series Launch",
    description:
      "Learn the core principles of developer advocacy and how to build meaningful relationships with developer communities.",
    icon: <Users className="podcast-icon" />,
    link: "https://www.youtube.com/watch?v=HWxPv3iSDTg",
  },
  {
    id: 2,
    image: podcast2,
    date: "JULY 31, 2022",
    title: "The Pace of Innovation in Delta Lake - Vini Jaiswal, Delta Lake",
    description:
      "Discover strategies for creating and nurturing developer communities that drive engagement and growth.",
    icon: <Globe className="podcast-icon" />,
    link: "https://www.youtube.com/watch?v=rwNTkX76yxo&t=642s",
  },
  {
    id: 3,
    image: podcast4,
    date: "MARCH 23, 2024",
    title: "Whether you're running a business, solving a problem, or building your career, AI can be your co-pilot.",
    description:
      "Master the art of creating technical content that educates, inspires, and engages developer audiences.",
    icon: <Code className="podcast-icon" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7303583063383388160/?originTrackingId=%2BtmRoQo5S86CMojsKKZn0w%3D%3D",
  },
  {
    id: 4,
    image: podcast4,
    date: "AUG 20, 2022",
    title: "How to build a data engineering pipeline with Delta Live Tables.",
    description: "Learn how to plan, execute, and measure the success of developer events and conferences.",
    icon: <Calendar className="podcast-icon" />,
    link: "https://www.youtube.com/watch?v=XwZPnSyuE2M&list=PLfXLPl6i0K8VKkMbfCIOGt2_kojOoFd0l&index=7&t=4s",
  },
  {
    id: 5,
    image: podcast3,
    date: "MARCH 18, 2024",
    title: "TAC Talks: Delta Lake",
    description: "Understand key metrics and analytics to track the impact of your developer advocacy efforts.",
    icon: <TrendingUp className="podcast-icon" />,
    link: "https://www.linkedin.com/events/7260678700080230400/comments/",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=350&text=API+Documentation",
    date: "MARCH 15, 2024",
    title: " Behind the scenes, delivering this high-quality low-latency stream requires a massive technical undertaking.",
    description: "Create comprehensive and user-friendly API documentation that developers love to use.",
    icon: <Star className="podcast-icon" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7295573658700300288/?originTrackingId=Vir86vi3Tsq2aLrE%2BHruAg%3D%3D",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=200&width=350&text=Developer+Experience",
    date: "MARCH 12, 2024",
    title: "Do you know many open source projects struggle with user traction and adoption?",
    description: "Optimize the developer experience to reduce friction and increase adoption of your platform.",
    icon: <Headphones className="podcast-icon" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7178077689562505216/?originTrackingId=8uNjCrbDSVqWskxLm6b2Mg%3D%3D",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=200&width=350&text=Future+Advocacy",
    date: "MARCH 10, 2024",
    title: "Spotted a “robo-barista” at the San Francisco airport— definitely check it out if you are in SF 🤖",
    description: "Explore emerging trends and technologies shaping the future of developer advocacy.",
    icon: <Mic className="podcast-icon" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:6909578470201147392/?originTrackingId=cYj%2FEgJGS3SLMkC9dDQZVw%3D%3D",
  },
  
]

const Podcast = () => {
  return (
    <div className="podcast-container">
      {/* Header Section */}
      <div className="podcast-header">
        <div className="header-content">
          <div className="header-icon">
            <Mic className="main-icon" />
            <div className="icon-glow"></div>
          </div>
          <h1 className="header-title">Developer Advocacy Podcasts</h1>
          <p className="header-subtitle">Insights, strategies, and stories from the world of developer advocacy</p>
          <div className="header-stats">
            <div className="stat-item">
              <Play className="stat-icon" />
              <span>50+ Episodes</span>
            </div>
            <div className="stat-item">
              <Users className="stat-icon" />
              <span>500+ Listeners</span>
            </div>
            <div className="stat-item">
              <Star className="stat-icon" />
              <span>4.8 Rating</span>
            </div>
          </div>
        </div>
        <div className="header-background">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
        </div>
      </div>

      {/* Podcast Grid */}
      <div className="podcast-content">
        <div className="podcast-grid">
          {podcastData.map((podcast) => (
            <div key={podcast.id} className="podcast-card">
              <div className="card-image">
                <a href={podcast.link} target="_blank" rel="noopener noreferrer">
                  <img src={podcast.image || "/placeholder.svg"} alt={podcast.title} />
                  <div className="play-overlay">
                    <Play className="play-icon" />
                  </div>
                </a>
                <div className="card-icon">{podcast.icon}</div>
              </div>
              <div className="card-content">
                <div className="card-date">{podcast.date}</div>
                <h3 className="card-title">{podcast.title}</h3>
                <p className="card-description">{podcast.description}</p>
                 
              </div>
            </div>
          ))}
        </div>

        {/* Developer Advocacy Info Section */}
        <div className="advocacy-info-section">
          <div className="info-content">
            <div className="info-header">
              <Headphones className="info-icon" />
              <h2 className="info-title">Why Developer Advocacy Podcasts Matter</h2>
            </div>
            <p className="info-description">
              Developer advocacy is more than just marketing—it's about building genuine relationships, creating
              valuable content, and fostering communities that drive innovation. Our podcast series brings you insights
              from industry leaders, practical strategies, and real-world case studies.
            </p>
            <div className="info-features">
              <div className="feature-item">
                <Code className="feature-icon" />
                <span>Technical Deep Dives</span>
              </div>
              <div className="feature-item">
                <Users className="feature-icon" />
                <span>Community Building</span>
              </div>
              <div className="feature-item">
                <TrendingUp className="feature-icon" />
                <span>Growth Strategies</span>
              </div>
              <div className="feature-item">
                <Globe className="feature-icon" />
                <span>Global Perspectives</span>
              </div>
            </div>
            <div className="info-buttons">
            <Link to="https://www.youtube.com/watch?v=HWxPv3iSDTg&ab_channel=ViniJaiswal" style={{textDecoration:'none'}}>
              <button className="subscribe-btn">
                <Star className="btn-icon" />
                Subscribe Now
              </button>
              </Link>
              <Link to="/community/Opengen" style={{textDecoration:'none'}}>
              <button className="explore-btn">
                <Headphones className="btn-icon" />
                Join Our Community
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Podcast;
