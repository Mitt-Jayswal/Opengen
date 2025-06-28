import headerimage from "../assets/aideveloperday.jpeg";
import britishimage from "../assets/aideveloperday2.jpeg"
import britishimage1 from "../assets/aideveloperday3.jpeg"
import britushimage2 from "../assets/aideveloperday4.jpeg"
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

const AideveloperDay = () => {
  const relatedBlogs = [
    {
      id: 1,
      title: "Gemini 2.5 Flash & Pro: Faster, Smarter, Developer‑Ready",
      
       
      excerpt:
        "Google introduced Gemini 2.5 Flash with enhanced speed and efficiency, along with Gemini 2.5 Pro offering powerful coding and reasoning abilities.",
        
      
      category: "Analysis",
    },
    {
      id: 2,
      title: "Build Agentic Apps with Gemini API & AI Studio",
      
       
      excerpt:
        "Google encourages developers to build agentic AI experiences using the Gemini API. Through Google AI Studio, you can prototype faster",
       
      category: "Enterprise Tech",
    },
    {
      id: 3,
      title: "Google AI Studio: Multimodal Code Generation & App Deployment",
      
       
      excerpt: "Google emphasized that AI Studio isn’t just for prompts—it enables full-stack AI app development. ",
      
      category: "Research",
    },
  ]

  return (
    <div className="blog-lion-container">
      <div className="blog-lion-content">
        <div className="blog-lion-main">
          <header className="blog-lion-header">
            <h1 className="blog-lion-title">Exploring the AI Frontier: Highlights from AI Developer Day, San Francisco – Jan 2024</h1>
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
            As we wrapped up the first month of 2024, the energy and innovation radiating from San Francisco’s AI Developer Day left a strong impression. The event brought together pioneers, developers, and enthusiasts from across the AI ecosystem to showcase groundbreaking developments in artificial intelligence — from
             cutting-edge research in Retrieval-Augmented Generation (RAG) to hands-on tools that make building AI apps easier than ever.
            </p>


           <h4>💡 The Power of RAG: Smarter, More Context-Aware AI</h4>
            <p>
            Retrieval-Augmented Generation (RAG) 
            stood out as a key focus throughout the sessions. By pulling data dynamically from large knowledge bases or documents, RAG enables AI systems to provide highly accurate and context-rich responses. Instead of relying solely on pre-trained knowledge, RAG taps into external sources, making responses more timely and reliable.

Discussions emphasized how RAG is reshaping expectations around natural language understanding and information retrieval —
 laying the groundwork for more nuanced, adaptive AI systems that feel closer to true human interaction.
            </p>

            <h2 className="blog-lion-heading">✨  Agentic Layers: Elevating RAG Capabilities </h2>

            <p>
            One of the most insightful sessions was led by Jerry Liu, who dove deep into the architecture of RAG and introduced the concept of Agentic Layers. These layers are designed to make RAG systems more intelligent by:

Improving dynamic query planning

Supporting parallel processing

Enhancing response accuracy

Optimizing speed and execution efficiency

Jerry explained how these enhancements can turn traditional RAG pipelines into advanced systems capable of handling complex, multi-step queries with greater speed and intelligence.
            </p>

            <p>
🌟Lucas, from Google Deepmind introduced new features in Gemini, including Gemini nano - a lightweight interface and for on-device tasks, adding a little more user friendly access to the product!<br/>

🌟Jeff Boudier showed some cool resources and tools to build your own AI features and apps with Hugging Face and open source.<br/>

🌟A panel from ACM, Association for Computing Machinery talked about taking Gen AI enterprise models to production.</p>

            <div className="blog-lion-content-image">
              <img
                src={britishimage || "/placeholder.svg"}
                alt="UN Open Source Week Sessions"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <h4>Gemini Nano: Lightweight Intelligence by Google DeepMind</h4>
            <p>Lucas from Google DeepMind gave a sneak peek into the latest evolution of the Gemini model family. One highlight was Gemini Nano — a lightweight model variant optimized for on-device performance. This marks a significant step in bringing powerful AI to users in real-time, without requiring constant internet connectivity or heavy computational resources.By making AI more accessible andefficient for edge devices, Gemini Nano paves the way for AI-driven features in mobile apps, IoT systems, and more.
            </p>
            <div className="blog-lion-content-image">
              <img
                src={britishimage1 || "/placeholder.svg"}
                alt="UN Hackathon Participants"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>


            <h4>From Lab to Enterprise: Panel Insights from ACM</h4>

            <p>
              An insightful panel hosted by the Association for Computing Machinery (ACM) explored how generative AI models are being brought to production within enterprise environments. The discussion touched on:

Scalability challenges

Governance and compliance

Integrating Gen AI with existing enterprise tools

Ethical considerations and bias mitigation

This panel highlighted the real-world complexities of deploying AI responsibly at scale — an important aspect as more businesses look to leverage AI in their operations.
            </p>
            <h4>Community Connections: Collaboration, Conversations & Coffee</h4>

           <p>No tech event is complete without the opportunity to connect with friends, peers, and fellow AI enthusiasts. Whether it was over coffee or in breakout discussions, the chance to share experiences, tackle common challenges, and exchange ideas with others in the AI community was truly inspiring.

These informal conversations are where future collaborations begin — sparking innovation that goes beyond the event itself.</p>

            
            <div className="blog-lion-content-image">
              <img
                src={britushimage2 || "/placeholder.svg"}
                alt="OSPO Panel Discussion"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <h2 className="blog-lion-heading">Final Thoughts</h2>

            <p>
             AI Developer Day 2024 in San Francisco was a melting pot of ideas, technologies, and community spirit. From deep dives into RAG and agentic models to practical tools for building AI apps and enterprise adoption stories, it was a day full of inspiration and forward-looking discussions.
With continued momentum and collaboration, the future of AI is brighter — and smarter — than ever.
            </p>

            <h4>Tags</h4>

            
            <a href="" style={{color:'#ffffff',textDecoration:'none'}}> #ArtificialIntelligence #RAG #OpenSource #Gemini #AICommunity #AgenticAI #GenerativeAI #HuggingFace</a>

            

            
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
             Stay ahead in the rapidly evolving world of AI. From breakthrough models to hands-on tools and real-world use cases, we bring you the latest updates, insights, and trends from the global AI community. Check back often and keep your innovation edge sharp.
            </p>
             
          
          </div>

          {/* Topics */}
          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">Trending Topics</h3>
            <div className="topic-tags">
               <span className="topic-tag">Multimodal AI and Gemini 2.5 Innovations</span>
              <span className="topic-tag">RAG + Agentic Workflows for Smarter AI</span>
              <span className="topic-tag">On-Device AI with Gemini Nano</span>
               
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default AideveloperDay;
