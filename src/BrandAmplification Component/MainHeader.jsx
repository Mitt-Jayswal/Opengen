import { useEffect, useRef } from "react"
import "../Design BrandAmplification Component/MainBrandHeader.css"

const MainBrandHeader = () => {
  const brandLionShirtIcsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (brandLionShirtIcsRef.current) {
        const scrollPosition = window.scrollY
        brandLionShirtIcsRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="brand-lion-shirt-ics" ref={brandLionShirtIcsRef}>
      <div className="brand-tiger-shirt-ics">
        <div className="brand-elephant-shirt-ics">
          <h1>Technology Evangelism</h1>
        </div>
      </div>
    </div>
  )
}

export default MainBrandHeader;
