import headerimage from '../assets/Blog22.png';
import datacouncilimage2 from '../assets/datacouncilimage2.jpeg';
import Deltalakefeatures from '../assets/Deltalakefeatures.jpeg';
import deltalakeimagereport from '../assets/deltalakeimagereport.png';
import deltalakeusers from '../assets/deltalakeusers.jpeg'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaDatabase,
  FaShieldAlt,
  FaClock,
  FaSync,
  FaChartBar,
  FaCode,
} from "react-icons/fa"
import "../BlogsComponent/DataCouncil.css"

const DataCouncil = () => {
  return (
    <div className="blog-elephant-container">
      <div className="blog-elephant-content">
        <div className="blog-elephant-main">
          <header className="blog-elephant-header">
            <h1 className="blog-elephant-title">Data Council 2022: Building Lakehouse with Delta Lake</h1>
            <div className="blog-elephant-meta">
              <span className="blog-elephant-author">Vini Jaiswal</span>
              <span className="blog-elephant-author-title">
                Developer Advocate | Top Voice in AI, Data & Open Source | Databricks, TikTok, Citi Alumni
              </span>
              <span className="blog-elephant-date">March 22, 2022</span>
            </div>
            <div className="blog-elephant-social">
              <FaFacebookF className="blog-elephant-icon" />
              <FaTwitter className="blog-elephant-icon" />
              <FaLinkedinIn className="blog-elephant-icon" />
              <FaGithub className="blog-elephant-icon" />
            </div>
          </header>

          <div className="blog-elephant-hero">
            <img
              src={headerimage}
              alt="Delta Lake Architecture"
              width={800}
              height={400}
              className="blog-elephant-image"
            />
          </div>

          <div className="blog-elephant-text">
            <p>
              "I am building machine learning models, but my data is siloed". "I need to ensure that the models I am
              building are based on reliable data, so my company can make quality decisions." "I need to ensure that I
              am serving the right data to the right audience." "I need to ensure governance so I can be prepared for
              the audit and GDPR." "I also need to ensure that I build efficient performant pipelines as the data volume
              grows." ---- says Data Engineers, Data Scientists, Data Architects, ML Practitioners, and so on.
            </p>

            <p>
              Does any of this sound like the architecture considerations when you go through building data
              architectures? This is what I can resonate with, too. So I want to take you through a journey of how we
              can solve these data engineering problems.
            </p>

            <p>
              Come learn at this workshop at{" "}
              <a href="https://www.datacouncil.ai/austin" className="blog-elephant-link">
                Data Council
              </a>{" "}
              on why Delta Lake checks the boxes on solutions to all these problems and why lakehouse architectures have
              become the modern architectures for companies building analytics and AI applications.
            </p>

            <div className="blog-elephant-content-image">
              <img
                src={datacouncilimage2}
                alt="Delta Lakehouse Architecture"
                width={600}
                height={300}
                className="blog-elephant-image"
              />
            </div>

            <p>
              There is no shortage of challenges associated with building data pipelines, and this workshop walks
              through how to tackle them and make data pipelines robust and reliable. This allows downstream users to
              both realize the significant value and rely on their data to make critical data-driven decisions.
            </p>

            <p>
              Given the location of the event and considering that the housing market has been trending in Austin, it's
              perfect to use lending club data for our workshop to see how we qualify for a loan. For the workshop, we
              will use the Databricks Community edition so we can have the data and storage easily accessible for
              hands-on lab.
            </p>

            <h2 className="blog-elephant-heading">Key Features of Delta Lake</h2>

            <p>We will go through the following cool features about Delta Lake:</p>

            <h3 className="blog-elephant-subheading">Unified batch + streaming data processing</h3>
            <p>
              With multiple concurrent readers and writers: To demonstrate this functionality, We will write two
              different data streams into our Delta Lake table at the same time. We will create two continuous streaming
              readers of our Delta Lake table to illustrate streaming progress. And, add a batch query, for good
              measure.
            </p>

            <h3 className="blog-elephant-subheading">ACID transactions</h3>
            <p>
              So how is unified batch and streaming all possible simultaneously? It is because of ACID transactions.
              Delta Lake uses a transaction log that serves as a master record of all changes made to each table. You
              can view the transaction log at any time by running the describe history command.
            </p>

            <div className="blog-elephant-content-image">
              <img
                src={Deltalakefeatures}
                alt="Delta Lake Features"
                width={600}
                height={300}
                className="blog-elephant-image"
              />
            </div>

            <h3 className="blog-elephant-subheading">Medallion architecture</h3>
            <p>
              Working with many customers in the data and AI space, I have found that many customers are able to
              simplify and streamline their data architectures using a tiered architectural approach. In terms of Delta
              Lake terminology, we also call it multi-hop architecture which is composed of Bronze, Silver, and Gold
              tables. How can you architect data lakes to be efficient for AI workloads.
            </p>

            <h3 className="blog-elephant-subheading">Schema Enforcement</h3>
            <p>
              But a Delta Lake does a lot more than just using ACID transactions to combine batch and streaming. It also
              offers features like schema enforcement to protect the quality of data in your delta tables. Without
              schema enforcement, data with mismatching schema can break your entire pipeline causing cascading failures
              downstream.
            </p>

            <h3 className="blog-elephant-subheading">Schema Evolution</h3>
            <p>
              In the event that we do need to change our table schema, we also need schema evolution. By using merge
              schema, we can quickly and easily evolve the schema of our delta tables.
            </p>

            <h3 className="blog-elephant-subheading">Time Travel</h3>
            <p>
              Another major feature, we will look at is Delta's ability to travel back in time, it is also called data
              versioning or Time Travel. Because every change is recorded as an atomic transaction in the delta log
              directory, we can use this information to recreate the exact state of our table at any point in time.
            </p>

            <div className="blog-elephant-content-image">
              <img
                src={deltalakeimagereport}
                alt="Time Travel Feature"
                width={600}
                height={300}
                className="blog-elephant-image"
              />
            </div>

            <h3 className="blog-elephant-subheading">Rollbacks, Reproducibility, and Governance</h3>
            <p>
              We will also explore some use cases like rollbacks, governance, and scaling machine learning experiments.
              Time Travel helps to avoid making irreversible changes to your tables. Using restore, we can completely
              undo the changes and simply roll back to the previous version of our data.
            </p>

            <h3 className="blog-elephant-subheading">Full DML support</h3>
            <p>
              Another feature we will explore is the full support for transactional DML commands like update, merge and
              delete. These are the SQL commands that make manipulating big data tables quick and easy with minimal
              code.
            </p>

            <h3 className="blog-elephant-subheading">GDPR use case</h3>
            <p>
              Before Delta Lake, deleting a user's data from a data lake to comply with the GDPR request was difficult
              to perform without running the risk of data loss and corruption. But with Delta lake, we can delete the
              users' data transactionally in just one line of code.
            </p>

            <h3 className="blog-elephant-subheading">Merge Operation</h3>
            <p>
              Finally, delta lake supports merge operations which are a mix of inserts and updates. Normally, merges are
              a difficult expensive operation that involves several intermediate steps. With delta lake, we can skip all
              that complexity and simply use the merge command.
            </p>

            <div className="blog-elephant-content-image">
              <img
                src={deltalakeusers}
                alt="Performance Features"
                width={600}
                height={300}
                className="blog-elephant-image"
              />
            </div>

            <h3 className="blog-elephant-subheading">Performance</h3>
            <p>Finally, before wrapping up, I will demonstrate some performance features of Delta Lake.</p>

            <h2 className="blog-elephant-heading">Conclusion</h2>

            <p>
              Delta Lake is used by 5000+ organizations in production to power their Lakehouse reliably. This workshop
              is curated so that you can leave feeling good about getting started with Delta Lake, learn about its
              benefits, we will also have a Q&A at the end to provide you the opportunity to ask us questions.
            </p>

            <p>
              Very excited to see you at the Data Community at Data Council on March 23rd at 11 AM CST. Here's the link
              to the event:{" "}
              <a href="https://www.datacouncil.ai/austin" className="blog-elephant-link">
                https://www.datacouncil.ai/austin
              </a>
              .
            </p>

            <p>
              If you are not attending the Data Council conference, I will provide the notebooks and useful links
              afterward. Also if you would like to stay tuned with the innovations in delta lake or want to contribute
              to the project, please reach the community on slack, google group, linkedin, github or you can find us on
              youtube doing an AMA or community event.
            </p>

            <p>Thank you!</p>
          </div>
        </div>

        <aside className="blog-elephant-sidebar">
          <div className="blog-elephant-section">
            <h3 className="blog-elephant-sidebar-title">Key Features</h3>
            <div className="blog-elephant-points">
              <div className="blog-elephant-point">
                <FaDatabase className="blog-elephant-point-icon" />
                <span>ACID Transactions</span>
              </div>
              <div className="blog-elephant-point">
                <FaSync className="blog-elephant-point-icon" />
                <span>Batch + Streaming</span>
              </div>
              <div className="blog-elephant-point">
                <FaShieldAlt className="blog-elephant-point-icon" />
                <span>Schema Enforcement</span>
              </div>
              <div className="blog-elephant-point">
                <FaClock className="blog-elephant-point-icon" />
                <span>Time Travel</span>
              </div>
              <div className="blog-elephant-point">
                <FaChartBar className="blog-elephant-point-icon" />
                <span>Performance</span>
              </div>
              <div className="blog-elephant-point">
                <FaCode className="blog-elephant-point-icon" />
                <span>Full DML Support</span>
              </div>
            </div>
          </div>

          <div className="blog-elephant-section">
            <h3 className="blog-elephant-sidebar-title">Workshop Topics</h3>
            <ul className="blog-elephant-links">
              <li>
                <a href="#" className="blog-elephant-link">
                  Medallion Architecture
                </a>
              </li>
              <li>
                <a href="#" className="blog-elephant-link">
                  Schema Evolution
                </a>
              </li>
              <li>
                <a href="#" className="blog-elephant-link">
                  GDPR Compliance
                </a>
              </li>
              <li>
                <a href="#" className="blog-elephant-link">
                  Merge Operations
                </a>
              </li>
              <li>
                <a href="#" className="blog-elephant-link">
                  Data Governance
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default DataCouncil;
