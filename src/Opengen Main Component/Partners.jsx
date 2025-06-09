import "../Design Opengen Component/Partner.css"
import united from '../assets/partnerlogouno.jpeg'
import linux from '../assets/linux image.png'
import databricks from '../assets/partnerlogodatabricks.png'
import linkedin from '../assets/partnerlinkedin.webp'
import delta from '../assets/delta-lake-logo.webp'
import silicon from '../assets/siliconlogo.png'
import thenew from '../assets/TheNewStack.jpg'
import busnesssinside from '../assets/businessimsider.webp'
 

const PartnersGoogle = () => {
  const getPartnerLogo = (id) => {
    switch (id) {
      case 1:
        return <img src={united} alt="SIEMENS Healthineers" />
      case 2:
        return <img src={linux} alt="ResMed" />
      case 3:
        return <img src={databricks} alt="Whatfix" />
      case 4:
        return <img src={linkedin} alt="Automation Anywhere" />
      case 5:
        return <img src={delta} alt="Wadhwani AI" />
      case 6:
        return <img src={silicon} alt="ACCELNOMICS" />
      case 7:
        return <img src={thenew} alt="Prodigal" />
      case 8:
        return <img src={busnesssinside} alt="Brainfish" />
       
      default:
        return <img src="/placeholder.svg?height=60&width=140" alt="Partner Logo" />
    }
  }

  const partners = [
    { id: 1, name: "united states" },
    { id: 2, name: "linux" },
    { id: 3, name: "Whatfix" },
    { id: 4, name: "Automation Anywhere" },
    { id: 5, name: "Wadhwani AI" },
    { id: 6, name: "ACCELNOMICS" },
    { id: 7, name: "Prodigal" },
    { id: 8, name: "Brainfish" },
    
  ]

  // Duplicate partners multiple times for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners]

  return (
    <div className="logo-carousel-container">
      <div className="logo-carousel-wrapper">
        <div className="logo-carousel-track">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="logo-item">
              {getPartnerLogo(partner.id)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PartnersGoogle;
