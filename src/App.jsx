import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenNavbar from "./Opengen Main Component/OpenNavbar";
import FooterSection from "./Opengen Main Component/FooterSection";
import Newsletter from "./Opengen Main Component/Newletter";
import ContactSection from "./Opengen Main Component/ContactSection";
import Services from "./Opengen Main Component/ServicesSection";
 import DeveloperEngagementRate from "./Opengen Main Component/DeveloperEngagementRate";

 import AboutSection from "./AboutPage Component/AboutSection";
 import FrequentlyQuestions from "./AboutPage Component/FrequentlyQuestions";
 import CustomersSection from "./AboutPage Component/TrustedPartners";
 import AboutHero from "./AboutPage Component/AboutHeroSection";


 import ServicesHero from "./ServicesPage Component/ServicesHero";

 import CommunityHero from "./Community Component/CommunityHero";

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={
                    <>
                     
                    <OpenNavbar/>
                    <DeveloperEngagementRate/>
                    <Services/>
                    <ContactSection/>
                    <Newsletter/>
                    <FooterSection/>
                    </>
                } />

              <Route path="/about/Opengen" element={
                    <>
                      <OpenNavbar/>
                    <AboutHero/>
                       <AboutSection/>
                       <FrequentlyQuestions/>
                       <CustomersSection/>
                    <FooterSection/>
                    </>
                } />

            <Route path="/services/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <ServicesHero/>
                    <FooterSection/>  
                    </>
                } />

              <Route path="/community/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <CommunityHero/>
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
                    <FooterSection/>   
                    </>
                } />
                </Routes>
                </Router>
    
 
       
    </>
  )
}

export default App;


 
