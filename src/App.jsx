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
 import PartnersGoogle from "./Opengen Main Component/Partners";
 import AdvancedService from "./Opengen Main Component/AdvancedService";
 import FreeMidCode from "./Opengen Main Component/FreeLandingCode";
 

 import AboutSection from "./AboutPage Component/AboutSection";
 import AboutNewFeed from "./AboutPage Component/AboutFeed";
 import MainBrandHeaderAbout from "./AboutPage Component/MainHeader";
 
  


 import ServicesHero from "./ServicesPage Component/ServicesHero";
  
 import ServiceDev from "./ServicesPage Component/Servicedev";

 import ServiceDev3 from "./ServicesPage Component/Servicedev3";

 import ServiceDev2 from "./ServicesPage Component/Sample";

  
 import CommunityEvents from "./Community Component/CommunityEvents";


 import MainBrandHeaderSupport from "./Support Component/SupportMain";
 import ContactPageSection from "./Support Component/ContactSection";


 import PartnersPage from "./PartnerShip Component/Partners";
 import MainBrandHeaderPartner from "./PartnerShip Component/MainHeaderPartner";


 import CollaborativeAppsPage from "./BrandAmplification Component/Collaborative";
 import WhatWeOffer from "./BrandAmplification Component/WhatWeOffer";
 import MainBrandHeader from "./BrandAmplification Component/MainHeader";
 import ContentBrand from "./BrandAmplification Component/ContentBrand";


  

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={
                    <>
                     
                    <OpenNavbar/>
                    <HeaderSection/>
                    <PartnersGoogle/>
                    <DeveloperEngagementRate/>
                    <Services/>
                    <FreeMidCode/>
                    <AdvancedService/>
                    
                     <ContactRedirectBox/>
                    <Newsletter/>
                    <FooterSection/>
                    </>
                } />

              <Route path="/about/Opengen" element={
                    <>
                      <OpenNavbar/>
                     <MainBrandHeaderAbout/>
                       <AboutSection/>
                       
                       <AboutNewFeed/>
                        
                    <FooterSection/>
                    </>
                } />

            <Route path="/services/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <ServicesHero/>
                     <ServiceDev/>
                     <ServiceDev3/>
                     <ServiceDev2/>
                      <CollaborativeAppsPage/>
                      
                     
                    <FooterSection/>  
                    </>
                } />

                <Route path="/partnerships/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <MainBrandHeaderPartner/>
                      <PartnersPage/>

                    <FooterSection/>   
                    </>
                } />

                <Route path="/brandamplification/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <MainBrandHeader/>
                     <ContentBrand/>
                     
                      
                     <WhatWeOffer/>
                    <FooterSection/>   
                    </>
                } />

              <Route path="/community/Opengen" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     
                
                      
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
                     <MainBrandHeaderSupport/>
                     
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


 
