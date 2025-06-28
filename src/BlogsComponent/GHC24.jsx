import headerimage from "../assets/ghc24.png";
import headerimage2 from "../assets/ghc241.jpeg";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaNetworkWired,
  FaFileAlt,
  FaLightbulb,
} from "react-icons/fa"
import "../BlogsComponent/ghc24.css"

const GHC24 = () => {
  const relatedContent = [
    {
      id: 1,
      title: "Networking Strategies for Tech Professionals",
      author: "Sarah Chen",
      date: "May 15, 2025",
      excerpt: "Master the art of professional networking at tech conferences and build meaningful connections.",
      readTime: "7 min read",
      category: "Career Growth",
    },
    {
      id: 2,
      title: "Breaking Into Tech: A Comprehensive Guide",
      author: "Maria Rodriguez",
      date: "April 22, 2025",
      excerpt: "Essential steps and strategies for transitioning into a successful technology career.",
      readTime: "12 min read",
      category: "Career Transition",
    },
    {
      id: 3,
      title: "Women in Tech: Leadership and Innovation",
      author: "Dr. Priya Patel",
      date: "March 18, 2025",
      excerpt: "Exploring leadership opportunities and innovation pathways for women in technology.",
      readTime: "9 min read",
      category: "Leadership",
    },
  ]

  return (
    <div className="blog-tiger-container">
      <div className="blog-tiger-content">
        <div className="blog-tiger-main">
          <header className="blog-tiger-header">
            <h1 className="blog-tiger-title">
              Mastering GHC24: Your Ultimate Guide to Thriving at the Grace Hopper Celebration
            </h1>
            <div className="blog-tiger-meta">
              <span className="blog-tiger-author">Tech Community</span>
              <span className="blog-tiger-date">June 9, 2025</span>
            </div>
            <div className="blog-tiger-social">
              <FaFacebookF className="blog-tiger-icon" />
              <FaTwitter className="blog-tiger-icon" />
              <FaLinkedinIn className="blog-tiger-icon" />
              <FaGithub className="blog-tiger-icon" />
            </div>
          </header>

          <div className="blog-tiger-hero">
            <img
              src={headerimage || "/placeholder.svg"}
              alt="Grace Hopper Celebration 2024"
              width={800}
              height={400}
              className="blog-tiger-image"
            />
          </div>

          <div className="blog-tiger-text">
            <p>😇Top of mind for #GHC24 attendees: how do I navigate and make best out of it?🤔</p>

            <p>⬇️⬇️⬇️Here are some tips on navigating the Grace Hopper Celebration!!</p>

            <h2 className="blog-tiger-heading">💁🏻‍♀️As you head to the Conference 👉</h2>

            <ul className="blog-tiger-list">
              <li>
                1.⁠ ⁠Create a schedule: Plan ahead by reviewing the conference schedule and create a personalized agenda.
              </li>
              <li>
                2.⁠ ⁠Research speakers and sessions: Familiarize yourself with topics, and presenters and favorite them.
              </li>
              <li>
                3.⁠ ⁠GHC2024 app: A very convenient way to manage schedule, staying updated, maps, and announcements.
              </li>
            </ul>

            <h2 className="blog-tiger-heading">🙋🏻‍♀️During the Conference</h2>

            <ul className="blog-tiger-list">
              <li>1.⁠ ⁠Arrive early: Beat the crowds and secure seats in popular sessions.</li>
              <li>2.⁠ ⁠Attend keynotes.</li>
              <li>3.⁠ ⁠Explore the Expo Hall: Discover companies, network, and collect swag.</li>
              <li>4.⁠ ⁠Session hopping: Don't be afraid to switch sessions if not engaged.</li>
            </ul>

            <h2 className="blog-tiger-heading">📝👩🏻‍🎓Resumes and Interviews</h2>

            <ul className="blog-tiger-list">
              <li>
                1.⁠ ⁠Bring updated resumes to share with potential employers. Have it handy while attending Braindates
                etc.
              </li>
              <li>
                2.⁠ ⁠Prepare elevator pitches: Concisely showcase skills and interests. Have a 1 minute pitch ready - make
                it genuine!
              </li>
              <li>3.⁠ ⁠Take advantage of 1:1 sessions and mock interviews.</li>
              <li>4.⁠ ⁠Research companies: Show genuine interest in potential employers. Be respectful and polite.</li>
            </ul>

            <h2 className="blog-tiger-heading">👩🏻‍💼Networking</h2>

            <ul className="blog-tiger-list">
              <li>1.⁠ ⁠Exchange contact info with peers and professionals.</li>
              <li>2.⁠ ⁠Attend networking events: Mixers, panels, and workshops.</li>
              <li>3.⁠ ⁠Join braindates 🧠</li>
              <li>
                4.⁠ ⁠Connect with attendees on LinkedIn and make sure to leave a meaningful and relevant personalized note
                📝
              </li>
            </ul>

            <h2 className="blog-tiger-heading">👼Self-Care</h2>

            <p>
              It's easy to get overwhelmed. Be kind to yourself, recharge and reflect. Set boundaries by prioritizing
              your own needs and schedule.
            </p>

            <h2 className="blog-tiger-heading">💜💜💜Even more.....</h2>

            <h3 className="blog-tiger-subheading">Tips for Students</h3>

            <ul className="blog-tiger-list">
              <li>1.⁠ ⁠Attend student-oriented sessions: Career development and networking.</li>
              <li>
                2.⁠ ⁠Participate in coding challenges to showcase your skills. Participate in the level-up workshops.
              </li>
              <li>3.⁠ ⁠Connect with mentors for guidance and advice.</li>
              <li>4. Join Communities like Systers community, open source community etc.</li>
            </ul>

            <h3 className="blog-tiger-subheading">💼💥Tips for Professionals</h3>

            <ul className="blog-tiger-list">
              <li>1.⁠ ⁠Lead or participate in panels: Share expertise and participate in round table discussions.</li>
              <li>
                2.⁠ ⁠Attend industry-specific sessions: Level up labs, career transitions, lessons learned are some great
                sessions.
              </li>
              <li>3.⁠ ⁠Network strategically: Connect with peers and thought leaders.</li>
              <li>4. Give back: Schedule a brain date or a mentor session. Show up in the community receptions.</li>
            </ul>

            <p>Share with your network 🚀🚀🚀</p>

            <p>
              AnitaB.org #GraceHopperCelebration #WomenInTech #DiversityAndInclusion #Career #CareerAdvice #Jobs
              #Technology #Mentor #Community #GivingBack
            </p>
          </div>
        </div>

        <aside className="blog-tiger-sidebar">
          {/* Conference Image */}
          <div className="blog-tiger-section conference-highlight">
            <div className="conference-image">
              <img src={headerimage2 || "/placeholder.svg"} alt="GHC24 Conference" className="sidebar-image" />
            </div>
            <h3 className="conference-title">Grace Hopper Celebration 2024</h3>
            <p className="conference-description">
              The world's largest gathering of women and non-binary technologists, celebrating achievements and
              fostering innovation in computing.
            </p>
          </div>

          {/* Related Insights */}
          <div className="blog-tiger-section">
            <h3 className="blog-tiger-sidebar-title">
              <FaExternalLinkAlt className="title-icon" />
              Related Career Insights
            </h3>

            <div className="related-blogs">
              {relatedContent.map((content) => (
                <article key={content.id} className="related-blog-card">
                  <div className="blog-card-header">
                    <span className="blog-category">{content.category}</span>
                    <div className="blog-meta">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{content.readTime}</span>
                    </div>
                  </div>
                  <h4 className="blog-card-title">{content.title}</h4>
                  <p className="blog-card-excerpt">{content.excerpt}</p>
                  <div className="blog-card-footer">
                    <div className="blog-author-info">
                      <span className="blog-author">{content.author}</span>
                      <span className="blog-date">{content.date}</span>
                    </div>
                    <FaArrowRight className="read-more-icon" />
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Conference Resources */}
          <div className="blog-tiger-section newsletter-section">
            <h3 className="blog-tiger-sidebar-title">Conference Resources</h3>
            <p className="newsletter-description">
              Essential tools and resources to maximize your GHC24 experience and career growth.
            </p>
            <div className="resource-links">
              <a href="#" className="resource-link">
                <FaFileAlt className="resource-icon" />
                Resume Templates
              </a>
              <a href="#" className="resource-link">
                <FaNetworkWired className="resource-icon" />
                Networking Guide
              </a>
              <a href="#" className="resource-link">
                <FaLightbulb className="resource-icon" />
                Interview Tips
              </a>
            </div>
          </div>

          {/* Key Topics */}
          <div className="blog-tiger-section">
            <h3 className="blog-tiger-sidebar-title">Conference Focus Areas</h3>
            <div className="topic-tags">
              <span className="topic-tag">Career Development</span>
              <span className="topic-tag">Technical Skills</span>
              <span className="topic-tag">Leadership</span>
              <span className="topic-tag">Diversity & Inclusion</span>
              <span className="topic-tag">Innovation</span>
              <span className="topic-tag">Mentorship</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default GHC24;
