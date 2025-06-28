import headerimage from "../assets/blog7.png";
import britishimage from "../assets/britishimage.jpeg"
import britishimage1 from "../assets/britishimage1.jpeg"
import britushimage2 from "../assets/britushimage2.jpeg"
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

const BritishColumbia = () => {
  const relatedBlogs = [
    {
      id: 1,
      title: "Evidence of Open Source Success:",
      
       
      excerpt:
        "1500 repo in the open  |  200 teams | 400 people delivering code in the open  |  ",
        
      
      category: "Analysis",
    },
    {
      id: 2,
      title: "Evidence of Open Source Success:",
      
       
      excerpt:
        " Aries cloud agent, an example of the project their team delivered.  |  Major contributors to hyperledger ",
       
      category: "Enterprise Tech",
    },
    {
      id: 3,
      title: "Evidence of Open Source Success:",
      
       
      excerpt: "13 maintainers and variety of projects | Co-developed standards in DIF",
      
      category: "Research",
    },
  ]

  return (
    <div className="blog-lion-container">
      <div className="blog-lion-content">
        <div className="blog-lion-main">
          <header className="blog-lion-header">
            <h1 className="blog-lion-title">British Columbia's Commitment to Open Source Software: Driving Innovation and Efficiency</h1>
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
             The government of British Columbia (BC) has made a remarkable commitment to embracing open source software, which resulted in significant benefits for various industries and organizations.
             At the hashtag#ossummit last week, John Jordan, Executive Director of BC Digital Trust Service, highlighted BC's journey towards implementing an "open by default" approach. By leveraging open source technology, BC has not only saved time but also brought substantial
              value to its partners in industries such as mining, law, and the city of Vancouver. 
              This article explores BC's efforts in building open source technology, their areas of focus, and the evidence of success they have achieved thus far.
            </p>
           <h4>Building Open Source Tech:</h4>
            <p>
             BC began its open source journey in 2016, recognizing that large firms often face challenges in delivering value due to lengthy time frames and infrequent maintenance and improvements. To overcome these obstacles, BC aimed to manage risks effectively, enhance processes, align government programs with industry
              standards, and deliver value at a faster pace. They implemented changes across four key categories:
            </p>

            <h2 className="blog-lion-heading">✨ British Columbia's Commitment to Open Source Software:   </h2>

            <p>
             Teams: BC modernized its hiring process by aligning job titles with industry norms and refining job descriptions to match expected work requirements. This helped attract top talent and create agile teams capable of meeting industry demands.
Policies: BC adopted the Apache 2.0 license and emphasized interoperability, allowing for seamless integration and collaboration within the open source community.
Procurement: The province established the BC Marketplace to streamline the procurement process for open source software, enabling efficient access to innovative solutions.
Tools: BC became an early adopter of OpenShift and implemented a private cloud hosting thousands of applications.
 Continuous updates ensure that the software remains up to date and delivers optimal performance.
            </p>

            <div className="blog-lion-content-image">
              <img
                src={britishimage || "/placeholder.svg"}
                alt="UN Open Source Week Sessions"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <h4>Evidence of Success</h4>
            <p>BC's commitment to open source has yielded impressive results, as evidenced by the following achievements:</p>

            <p>
             Over 1,500 open repositories showcasing their open source projects.
Collaboration with 200 teams comprising a diverse pool of contributors.
More than 1,400 individuals actively delivering code in the open.
Development of notable projects such as the Aries cloud agent.
Major contributions to the Hyperledger blockchain project.
Participation in the co-development of standards within the Decentralized Identity Foundation (DIF).
Contribution to the Trust over IP (ToIP) Foundation, focusing on establishing a comprehensive framework for trust and communication between entities.
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


            <h4>Delivering Value through Open Source</h4>

            <p>
              Their partner's success stories below demonstrates the value that BC government's open source efforts are delivering.
            </p>
            <h4>Mining: BC's open source Initiatives</h4>

           <p>Mining: BC's open source initiatives have facilitated the sharing and tracking of sustainability data, helping achieve climate and sustainability goals. By utilizing digital credentials, the government, natural resource industries, and international organizations can 
           exchange verified sustainability data in real-time, enabling the international trade of sustainably produced materials.</p>

            
            <div className="blog-lion-content-image">
              <img
                src={britushimage2 || "/placeholder.svg"}
                alt="OSPO Panel Discussion"
                width={600}
                height={300}
                className="blog-lion-image"
              />
            </div>

            <h2 className="blog-lion-heading">Law</h2>

            <p>
              Law: Open source solutions have streamlined legal processes, particularly in accessing court materials remotely. Using the pilot of BC's digital member card system allows lawyers to securely and conveniently identify
               themselves online, facilitating cost-efficient interactions with the court and saving valuable time and effort.
            </p>

            <h4>OrgBook BC</h4>

            <p>
             City of Vancouver: Through the implementation of the OrgBook BC service (https://www.orgbook.gov.bc.ca/search) which is an open search API, City of Vancouver has reduced the number of manual steps involved in applying for new business licenses. Online application forms, integrated with OrgBook BC, allow applicants to enter accurate information, saving time for both applicants and BC's teams by automating manual processes. Current Statistics for OrgBook BC
              includes 1486742 active legal entities, 4190585 verifiable credentials held and 8663 credential added last week. 
            </p>

            <h2 className="blog-lion-heading">Looking Ahead</h2>

            <p>
             In conclusion, British Columbia's commitment to open source software has proven to be a catalyst for innovation and efficiency across various industries. By embracing open source principles and 
             technologies, BC has demonstrated the power of collaboration, paving the way for other governmental bodies to follow suit.
            </p>

            
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
             By leveraging open source technology, BC has not only saved time but also brought substantial value to its partners in industries such as mining, law, and the city of Vancouver. 
            </p>
             
            
          </div>

          {/* Topics */}
          <div className="blog-lion-section">
            <h3 className="blog-lion-sidebar-title">Trending Topics</h3>
            <div className="topic-tags">
              <span className="topic-tag"> Partnered with ToIP Foundation to develop overall framework and trust spanning layer. Protocols that allow entities to communicate with each other.</span>
               
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default BritishColumbia;
