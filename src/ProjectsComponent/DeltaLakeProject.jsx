import "../ProjectsComponent/ProjectDeltaLake.css"
 

const ProjectDeltaLake = () => {
  return (
    <div className="salmongg-project-delta">
      {/* Header Section */}
      <header className="tunagg-header">
        <div className="codgg-header-content">
          <h1 className="macbookgg-header-title">Delta Lake 1.2.1 release announcement</h1>
          <p className="surfacegg-header-subtitle">
            This project will leverage Delta Lake's capabilities to enhance data lake efficiencies
          </p>
          <div className="thinkpadgg-header-date">29 May 2024</div>
           
        </div>
        <div className="sharkgg-wave-pattern"></div>
      </header>

      {/* Main Content */}
      <main className="bassgg-main-content">
        <div className="troutgg-content-wrapper">
          {/* Left Content */}
          <div className="carpgg-left-content">
            <div className="hpgg-social-icons">
              <div className="lenovogg-social-icon acergg-linkedin">in</div>
              <div className="msgg-social-icon sonygg-facebook">f</div>
            </div>

            <div className="pikeff-main-text">
              <h2 className="floundergg-content-title">Excited to share the Delta Lake release 1.2!!!</h2>

              <p className="snappergg-intro-text">Please see the release notes for complete details.</p>

              <div className="grouperg-release-section">
                <h3 className="angelgg-section-title">🔑 What's new in this release?</h3>

                <div className="marlinn-feature-item">
                  <span className="tunagg-check-mark">✅</span>
                  <div className="salmongg-feature-text">
                    <strong>Fix an issue with loading error messages in --packages mode.</strong> Previous release had a
                    bug that resulted in user getting NullPointerException instead of proper error message when using
                    Delta Lake with --packages mode either in pyspark or spark-shell (Fix, Test)
                  </div>
                </div>

                <div className="marlinn-feature-item">
                  <span className="tunagg-check-mark">✅</span>
                  <div className="salmongg-feature-text">
                    <strong>Fix incorrect exception type thrown in some Python APIs.</strong> A bug caused pyspark to
                    throw incorrect type of exceptions instead of expected AnalysisException. This issue is fixed. See
                    issue #1086 for more details.
                  </div>
                </div>

                <div className="marlinn-feature-item">
                  <span className="tunagg-check-mark">✅</span>
                  <div className="salmongg-feature-text">
                    <strong>Fix for S3 multi-cluster mode configuration.</strong> A bug in the S3 multi-cluster mode
                    caused --conf to not work for certain configuration parameters. This issue is fixed by having these
                    configuration parameters begin with spark. See the updated documentation.
                  </div>
                </div>

                <div className="marlinn-feature-item">
                  <span className="tunagg-check-mark">✅</span>
                  <div className="salmongg-feature-text">
                    <strong>Make the GCS LogStore configuration simpler</strong> by automatically deriving the LogStore
                    implementation class config spark.delta.logStore.gs.impl from the scheme in the table path. See the
                    updated documentation.
                  </div>
                </div>

                <div className="marlinn-feature-item">
                  <span className="tunagg-check-mark">✅</span>
                  <div className="salmongg-feature-text">
                    <strong>Make SetAccumulator thread safe.</strong> SetAccumulator used by Merge was not thread safe
                    and might cause executor heartbeat failures in rare cases. This was fixed by using a synchronized
                    set.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="whalegg-right-sidebar">
            <div className="dolphingg-sidebar-container">
              <h3 className="octopusgg-sidebar-title">🔑 Key features in the Delta Lake 1.2:</h3>

              <div className="jellyfishgg-key-features">
                <div className="starfishgg-key-feature">
                  ⭐ Support multi-cluster write in Delta Lake tables stored in{" "}
                  <span className="seahorsegg-highlight">#S3</span>.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for <span className="seahorsegg-highlight">#compacting</span> small files (optimize) into
                  larger files in a Delta Lake table.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for data <span className="seahorsegg-highlight">#skipping</span> using column statistics.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for restoring a Delta table to an earlier version.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for column renaming in a Delta Lake table without the need to rewrite the underlying
                  Parquet data files.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for <span className="seahorsegg-highlight">#arbitrary</span> characters in column names in
                  Delta tables.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for automatic data skipping using generated columns.
                </div>

                <div className="starfishgg-key-feature">
                  ⭐ Support for Google Cloud Storage is now generally available.
                </div>

                <div className="crabgg-documentation-link">
                  📈 See more documentation on these <span className="seahorsegg-highlight">#features</span> in the
                  release notes of Delta Lake 1.2.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Video Section */}
      <section className="raygg-video-section">
        <div className="eelgg-video-container">
          <video controls className="swordgg-video-player" poster="/placeholder.svg?height=400&width=800">
            <source src="/placeholder-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hammergg-video-content">
          <h3 className="mantagg-video-title">🔑 Feature highlight</h3>
          <p className="stinggg-video-description">
            Hear from our contributor, Allison Portis in the very first Open Source Contributor Spotlight video about
            one of the Key features (Support for multi-cluster in S3).
          </p>

          <div className="barracudagg-feedback-section">
            <h4>Got any feedback?</h4>
            <p>
              Please share your idea or create a pull request on github project:{" "}
              <a href="https://github.com/delta-io/delta" target="_blank" rel="noopener noreferrer">
                https://github.com/delta-io/delta
              </a>
              .
            </p>

            <h4>Get started with Delta Lake?</h4>
            <ul className="anchovygg-resource-list">
              <li>
                Documentation:{" "}
                <a href="https://docs.delta.io/1.2.1/index.html" target="_blank" rel="noopener noreferrer">
                  https://docs.delta.io/1.2.1/index.html
                </a>
              </li>
              <li>
                Maven artifacts: delta-core_2.12, delta-core_2.13, delta-contribs_2.12 delta_contribs_2.13,
                delta-storage, delta-storage-s3-dynamodb
              </li>
              <li>
                Python artifacts:{" "}
                <a href="https://pypi.org/project/delta-spark/1.2.1/" target="_blank" rel="noopener noreferrer">
                  https://pypi.org/project/delta-spark/1.2.1/
                </a>
              </li>
            </ul>

            <p className="sardinegg-linkedin-follow">Follow Delta Lake project on Linkedin for more updates :)</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDeltaLake;
