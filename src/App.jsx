import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenNavbar from "./Opengen Main Component/OpenNavbar";
import FooterSection from "./Opengen Main Component/FooterSection";
import Newsletter from "./Opengen Main Component/Newletter";
 import ContactRedirectBox from "./Opengen Main Component/ContactredirectBox";
import Services from "./Opengen Main Component/ServicesSection";
 import DeveloperEngagementRate from "./Opengen Main Component/DeveloperEngagementRate";
 import HeaderSection from "./Opengen Main Component/HeaderSection";
 

 import AboutSection from "./AboutPage Component/AboutSection";
//  import FrequentlyQuestions from "./AboutPage Component/FrequentlyQuestions";
 import CustomersSection from "./AboutPage Component/TrustedPartners";
 import AboutHero from "./AboutPage Component/AboutHeroSection";
 import AboutNewFeed from "./AboutPage Component/AboutFeed";
  


 import ServicesHero from "./ServicesPage Component/ServicesHero";
 import CommunityNews from "./ServicesPage Component/ServicesContainer";
 import ServiceDev from "./ServicesPage Component/Servicedev";

 import CommunityHero from "./Community Component/CommunityHero";
 import CommunityEvents from "./Community Component/CommunityEvents";


 import OpengenHelp from "./Support Component/SupportMain";
 import ContactPageSection from "./Support Component/ContactSection";
 import Partners from "./PartnerShip Component/Partners";

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={
                    <>
                     
                    <OpenNavbar/>
                    <HeaderSection/>
                    <DeveloperEngagementRate/>
                    <Services/>
                    
                     <ContactRedirectBox/>
                    <Newsletter/>
                    <FooterSection/>
                    </>
                } />

              <Route path="/about/Opengen" element={
                    <>
                      <OpenNavbar/>
                    <AboutHero/>
                       <AboutSection/>
                       {/* <FrequentlyQuestions/> */}
                       
                       <AboutNewFeed/>
                        
                    <FooterSection/>
                    </>
                } />

            <Route path="/services/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <ServicesHero/>
                     <ServiceDev/>
                     
                    <FooterSection/>  
                    </>
                } />

                <Route path="/partnerships/Opengen" element={
                    <>
                     <OpenNavbar/>
                      <Partners/>
                    <FooterSection/>   
                    </>
                } />

                <Route path="/brandamplification/Opengen" element={
                    <>
                     <OpenNavbar/>
                      
                    <FooterSection/>   
                    </>
                } />

              <Route path="/community/Opengen" element={
                    <>
                     <OpenNavbar/>
                      
                     <CommunityEvents/>
                     
                    <FooterSection/>
                    </>
                } />

                 <Route path="/learn/Opengen" element={
                    <>
                     <OpenNavbar/>
                    <FooterSection/>
                    </>
                } />


                <Route path="/support/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <OpengenHelp/>
                     <ContactPageSection/>
                    <FooterSection/>   
                    </>
                } />

                 
                </Routes>
                </Router>
    
 
       
    </>
  )
}

export default App;


 
