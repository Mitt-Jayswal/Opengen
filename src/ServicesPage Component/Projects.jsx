import "../Design Service Component/ProjectShowcase.css";
import { GiTargetPrize } from "react-icons/gi";
import project1 from '../assets/Blog 1.png';
import project2 from '../assets/project2.png';
import project4 from '../assets/events.jpeg';
import profilelogo from '../assets/profile logo.jpeg'

const projects = [
  {
    id: 1,
    title: "Project: Delta Lake",
    subtitle: "Advanced Data Architecture",
    description: "Revolutionary data lake architecture enabling scalable analytics and machine learning workflows.",
    detailedInfo:
      "Built with Apache Spark integration, supporting batch and streaming data processing with advanced optimization techniques for enterprise-scale data operations.",
    backgroundImage: project1,
    profileImage: profilelogo,
    author: "Data Engineering Team",
    role: "Lead Architects",
    icon: "🏗️",
    
  },
  {
    id: 2,
    title: "Project: Privacy Innovation",
    subtitle: "Next-Gen Privacy Tech",
    description:
      "Cutting-edge privacy-preserving technologies that protect user data while enabling powerful analytics.",
    detailedInfo:
      "Implementing differential privacy, homomorphic encryption, and secure multi-party computation for enterprise solutions with zero-knowledge proofs.",
    backgroundImage: project2,
    profileImage: profilelogo,
    author: "Privacy Research Lab",
    role: "Security Specialists",
    icon: "🔐",
    category: "Security",
  },
  {
    id: 3,
    title: "Project: LF AI",
    subtitle: "Open Source AI Initiative",
    description: "Open-source artificial intelligence initiatives driving innovation in machine learning communities.",
    detailedInfo:
      "Contributing to Linux Foundation AI projects with focus on MLOps, model governance, and ethical AI development across multiple industries.",
    backgroundImage: "/placeholder.svg?height=300&width=1200",
    profileImage: profilelogo,
    author: "AI Innovation Hub",
    role: "ML Engineers",
    icon: "🤖",
    category: "Artificial Intelligence",
  },
  {
    id: 4,
    title: "Project: Apache Spark",
    subtitle: "Unified Analytics Engine",
    description: "Unified analytics engine for large-scale data processing with built-in modules for streaming and ML.",
    detailedInfo:
      "Contributing to core Spark development with performance optimizations and new features for distributed computing at petabyte scale.",
    backgroundImage: project4,
    profileImage: profilelogo,
    author: "Spark Contributors",
    role: "Core Developers",
    icon: "⚡",
    category: "Data AI Summit",
  },
]

const Projects = () => {
  return (
    <div className="proappleject-showcase">
      <div className="promangoject-header">
        <h1 className="probananaject-title">
        <GiTargetPrize style={{color:'#ffffff'}}/>Defining the Next Era of Technology</h1>
        <p className="proorangeject-subtitle">Discover our flagship initiatives at the intersection of innovation, impact, and global leadership.</p>
      </div>

      <div className="prograpeject-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="proberryject-container">
            <div className="propeachject-card">
              <div className="proplumject-background">
                <img
                  src={project.backgroundImage || "/placeholder.svg"}
                  alt={project.title}
                  className="prolemanject-image"
                />
                <div className="promelanject-overlay"></div>
              </div>

              <div className="prococonutject-content">
                <div className="propineappleject-header">
                  
                  <div className="proavocadoject-category">{project.category}</div>
                </div>

                <div className="prolimeject-profile">
                  <div className="prolemongrassject-avatar">
                    <img src={project.profileImage || "/placeholder.svg"} alt="Profile" />
                  </div>
                </div>

                <div className="propassionfruitject-main">
                  <h2 className="prodragonfruitject-title">{project.title}</h2>
                  <h3 className="proguavaject-subtitle">{project.subtitle}</h3>
                  <p className="propapayaject-description">{project.description}</p>

                  <div className="prolycheeject-author">
                    <p className="prorambuntanject-name">{project.author}</p>
                    <p className="prostarfruitject-role">{project.role}</p>
                  </div>
                </div>
              </div>

               
            </div>

            <div className="prohuckleberryject-external">
              <button className="procloudberryject-action">
                <span className="prothimbleberryject-icon">👁️</span>
                <span>View the project</span>
                <span className="prosalmonberryject-arrow">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
