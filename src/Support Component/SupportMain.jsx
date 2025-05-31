import { useEffect, useRef } from "react"
import "../Design Support Component/OpengenHelp.css"

const MainBrandHeaderSupport = () => {
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.scrollY
        headerRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="page1-container" ref={headerRef}>
      <div className="page1-overlay">
        <div className="page1-content">
          <h1>Get in Touch with OpenGen</h1>
        </div>
      </div>
    </div>
  )
}

export default MainBrandHeaderSupport;
