import headerimage from "../assets/ghcnew1.jpeg";
import unitednationsimage2 from "../assets/openai1.jpeg"
import unitednationsimage3 from "../assets/openai5.jpeg"
import unitednationsimage4 from "../assets/openai4.jpeg"
 
import { Link } from "react-router-dom";
import {
   
  FaLinkedinIn,
   
  FaUsers,
  FaExternalLinkAlt,
  FaArrowRight,
  FaUser,
  FaBookmark,
  FaClock,
} from "react-icons/fa"
import "./UnitedNation.css"

const GHCOpenSourceDay = () => {
  const relatedBlogs = [
    {
      id: 1,
      title: "🌐 Diversity in Open Source",
      
       
      excerpt:
        "More inclusive contribution spaces are empowering women and underrepresented groups to lead and innovate in major tech ecosystems.",
      
      category: "AI Innovation",
    },
    {
      id: 2,
      title: "VLearning by Contributing",
      
       
      excerpt:
        "Open source isn’t just about code—it’s about collaboration, mentorship, and real-world problem-solving experience.",
       
      category: "Enterprise Tech",
    },
    {
      id: 3,
      title: " Open Source + AI = Future of Innovation",
      
       
      excerpt: "With AI tools like Keras, NumPy, and NLP libraries featured, open source is driving the next wave of machine learning innovation.",
      
      category: "Research",
    },
  ]

  return (
    <div className="blog-lion-container">
      <div className="blog-lion-content">
        <div className="blog-lion-main">
          <header className="blog-lion-header">
            <h1 className="blog-lion-title">Kicking Off Grace Hopper Open Source Day – All Smiles and Excitement!</h1>
            <div className="blog-lion-meta">
              <span className="blog-lion-author">Vini Jaiswal</span>
             
            </div>
            <div className="blog-lion-social">
              <Link to="https://www.linkedin.com/in/vinijaiswal/">
              <FaLinkedinIn className="blog-lion-icon" />
              </Link>
              
            </div>
          </header>

          <div className="blog-lion-hero">
            <img
              src={headerimage || "/placeholder.svg"}
              alt="UN Open Source Week 2025"
              width={800}
              height={400}
              className="blog-lion-image"
            />
          </div>

          <div className="blog-lion-text">

 

            <p>
            So thrilled to be part of this incredible day filled with innovation, collaboration, and impact! 👩‍💻🌍
16 Open Source Projects and 5 Hands-on Workshops – let’s go! 
Thank you to AnitaB.org and all the maintainers for making this possible.
            </p>

            <h2 className="blog-lion-heading">✨ Featured Projects – Contribute, Collaborate, Create</h2>
             <h3  style={{color:'#e6c068'}}>⚡ Accessibility Theme Builder</h3>


             <li>Empowering accessible web design through open themes.</li>
             

 

 <h3  style={{color:'#e6c068'}}>⚡ AI Fairness 360</h3>

 <li>Build trustworthy AI with bias detection and fairness metrics.</li>

 

<h3  style={{color:'#e6c068'}}>⚡ BlocklyCephChromium</h3>

<li>Enhancing the Chromium project with visual programming.</li>

 

<h3  style={{color:'#e6c068'}}>⚡ Dapr</h3>

<li>Microservice building made simple with distributed application runtime.</li>

<h3  style={{color:'#e6c068'}}>⚡ Dapr</h3>

<h3  style={{color:'#e6c068'}}>⚡ Eclipse Collections</h3>
<li>Fast and rich data structures for Java – contribute to better performance.</li>
<h3  style={{color:'#e6c068'}}>⚡ KServe</h3>
<li>Serving machine learning models at scale with ease.</li>
<h3  style={{color:'#e6c068'}}>⚡ Matplotlib</h3>
<p>The backbone of Python plotting – help visualize the future!</p>
<h3  style={{color:'#e6c068'}}>⚡ Node.jsr</h3>
<li>Powering the modern web – get involved with core development.</li>
<h3  style={{color:'#e6c068'}}>⚡ NumPyr</h3>
<li>Fundamentals of scientific computing in Python – open to contributions!</li>
 
 <h3 style={{color:'#e6c068'}}>⚡ OpenSSF Alpha-Omega</h3>
<li>Boosting open source software supply chain security.</li>

<h3 style={{color:'#e6c068'}}>⚡ Python Extensions for VS Code</h3>
<li>Help improve Python developer experience in VS Code.</li>

<h3 style={{color:'#e6c068'}}>⚡ Techtonica</h3>
<li>Supporting women and non-binary adults in tech through open source.</li>

<h3 style={{color:'#e6c068'}}>⚡ Wildfly Electron</h3>
<li>Join the Java EE community with contributions to the Wildfly platform.</li>

<h3 style={{color:'#e6c068'}}>🛠️ Interactive Workshops – Learn by Doing</h3>

<h3 style={{color:'#e6c068'}}>⚡ Linux Kernel Hacking</h3>
<li>Explore the core of open-source operating systems.</li>

<h3 style={{color:'#e6c068'}}>⚡ NLP using Python</h3>
<li>Dive into real-world natural language processing.</li>

<h3 style={{color:'#e6c068'}}>⚡ Project Management with GitHub</h3>
<li>Master the tools that keep open source organized and thriving.</li>

<h3 style={{color:'#e6c068'}}>⚡ Smart Linux Distribution Contributions</h3>
<li>Learn efficient and effective ways to support Linux.</li>

<h3 style={{color:'#e6c068'}}>⚡ Generative Models with Keras</h3>
<li>Hands-on with AI that creates content and learns patterns.</li>

<h3 style={{color:'#e6c068'}}>⚡ Named Entity Recognition with Smithsonian Data</h3>
<li>Use machine learning to explore digitized museum collections.</li>
 
 

            <h3>Tags</h3>
            <h4 ><Link to="https://www.linkedin.com/feed/update/urn%3Ali%3Ashare%3A7111036516470063104/">
#GraceHopper2023 hashtag#OpenSource hashtag#WomenInSTEM AnitaB.org</Link></h4>
           
          </div>
        </div>

        <aside className="blog-lion-sidebar">
          {/* Author Profile */}
           

          {/* Related Blogs */}
          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">
              <FaExternalLinkAlt className="title-icon" />
              Related Insights
            </h3>
            <div className="related-blogs">
              {relatedBlogs.map((blog) => (
                <article key={blog.id} className="related-blog-card">
                  <div className="blog-card-header">
                    <span className="blog-category">{blog.category}</span>
                    <div className="blog-meta">
                      <FaClock className="meta-icon" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <h4 className="blog-card-title">{blog.title}</h4>
                  <p className="blog-card-excerpt">{blog.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-author-info">
                      <span className="blog-author">{blog.author}</span>
                      <span className="blog-date">{blog.date}</span>
                    </div>
                    <FaArrowRight className="read-more-icon" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="blog-lion-section newsletter-section">
            <h3 className="blog-lion-sidebar-title">Stay Updated</h3>
            <p className="newsletter-description">
              Get exclusive insights on open source, AI policy, and technology innovation delivered weekly.
            </p>
            {/* <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-button">
                Subscribe
                <FaArrowRight className="button-icon" />
              </button>
            </div> */}
            
          </div>

          {/* Topics */}
          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">Trending Topics</h3>
            <div className="topic-tags">
              <span className="topic-tag">AI for Social Impact</span>
              <span className="topic-tag">Open Source Governance and Ethics</span>
              <span className="topic-tag">Women Leading Open AI Projects</span>
              <span className="topic-tag">Community-Led Software Security</span>
              <span className="topic-tag">Low-Code Contributions in OSS</span>
              
 
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default GHCOpenSourceDay;
