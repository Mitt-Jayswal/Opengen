import React from "react";
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OpenNavbar from "./Opengen Main Component/OpenNavbar";
import FooterSection from "./Opengen Main Component/FooterSection";
import Newsletter from "./Opengen Main Component/Newletter";
 import ContactRedirectBox from "./Opengen Main Component/ContactredirectBox";
import Services from "./Opengen Main Component/ServicesSection";
 import DeveloperEngagementRate from "./Opengen Main Component/DeveloperEngagementRate";
//  import EventsToast from "./Opengen Main Component/ToastEvent";
  
 import PartnersGoogle from "./Opengen Main Component/Partners";
 import AdvancedService from "./Opengen Main Component/AdvancedService";
 import FreeMidCode from "./Opengen Main Component/FreeLandingCode";
 

 import AboutSection from "./AboutPage Component/AboutSection";
 import AboutNewFeed from "./AboutPage Component/AboutFeed";
 import MainBrandHeaderAbout from "./AboutPage Component/MainHeader";
 
  
  
 import ServiceDev from "./ServicesPage Component/Servicedev";

 import ServiceDev3 from "./ServicesPage Component/Servicedev3";

 import ServiceDev2 from "./ServicesPage Component/Sample";

 import MainHeaderServices from "./ServicesPage Component/MainHeaderService";
 import Projects from "./ServicesPage Component/Projects";
 import ProjectDeltaLake from "./ProjectsComponent/DeltaLakeProject";
 import ProjectApacheSpark from "./ProjectsComponent/ProjectApacheSpark";
 import PrivacyInnovation from "./ProjectsComponent/PrivacyInnovation";
 import LFAI from "./ProjectsComponent/lfai";

  
 import CommunityEvents from "./Community Component/CommunityEvents";


 import MainBrandHeaderSupport from "./Support Component/SupportMain";
 import ContactPageSection from "./Support Component/ContactSection";


//  import PartnersPage from "./PartnerShip Component/Partners";



 import CollaborativeAppsPage from "./BrandAmplification Component/Collaborative";
 import WhatWeOffer from "./BrandAmplification Component/WhatWeOffer";
 import MainBrandHeader from "./BrandAmplification Component/MainHeader";
 import ContentBrand from "./BrandAmplification Component/ContentBrand";


 import Headernew from "./Opengen Main Component/NewHeader";

 import TrendsBlog from "./Learn Component/TrendBlog";
import ArticleSection from "./Learn Component/BlogArticle";
import BlogArticle1 from "./Learn Component/BlogArticle1";
import ArticleSection2 from "./Learn Component/ArticleSection2";
import ArticleSection3 from "./Learn Component/ArticleSection3";
import ArticleSection4 from "./Learn Component/ArticleSection4";
import Podcast from "./Learn Component/Podcast";
import BlogArticle4 from "./Learn Component/Blogrticle4";


import UnitedNation from "./BlogsComponent/UnitedNation";
import DataCouncil from "./BlogsComponent/DataCouncil";
import OpenSourcePicks from "./BlogsComponent/OpenSourcePicks";
import GHC24 from "./BlogsComponent/GHC24";
import BritishColumbia from "./BlogsComponent/BritishColumbia";
import AideveloperDay from "./BlogsComponent/Aideveloperday";
import PredictionTechnology from "./BlogsComponent/PredictionsTechnology";
import OpenAIBlog from "./BlogsComponent/OpenAIblog";
import GHCOpenSourceDay from "./BlogsComponent/GHCOpenSourceDay";


  

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={
                    <>
                    {/* <EventsToast/> */}
                     
                     
                    <Headernew/>
                    
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
                     <MainHeaderServices/>
                      <CollaborativeAppsPage/>
                      
                     <ServiceDev/>
                      <Projects/>
                     <ServiceDev3/>
                     <ServiceDev2/>
                       
                      
                     
                    <FooterSection/>  
                    </>
                } />


                <Route path="/Projects/Opengen" element={
                    <>
                     <OpenNavbar/>
                      <ProjectDeltaLake/>
                      
                     
                    <FooterSection/>  
                    </>
                } />

                <Route path="/ApacheSparkAIDataSummit/Opengen" element={
                    <>
                     <OpenNavbar/>
                      <ProjectApacheSpark/>
                      
                     
                    <FooterSection/>  
                    </>
                } />

                 <Route path="/privacyInnovation/Opengen" element={
                    <>
                     <OpenNavbar/>
                      <PrivacyInnovation/>
                      
                     
                    <FooterSection/>  
                    </>
                } />

                <Route path="/lfaiopensource/Opengen" element={
                    <>
                     <OpenNavbar/>
                      <LFAI/>
                      
                     
                    <FooterSection/>  
                    </>
                } />

                {/* <Route path="/partnerships/Opengen" element={
                    <>
                     <OpenNavbar/>
                     
                      <PartnersPage/>

                    <FooterSection/>   
                    </>
                } /> */}

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
                     <br/>
                     <br/>
                     <br/>
                     <TrendsBlog/>
                     <BlogArticle1/>
                     <ArticleSection/>
                     <ArticleSection2/>
                      <ArticleSection4/>
                      <BlogArticle4/>
                     <ArticleSection3/>
                     
                     <Podcast/>
                    <FooterSection/>
                    </>
                } />

                

                 <Route path="/unitednations-Open+Source&Week=2025/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <UnitedNation/>
                    <FooterSection/>
                    </>
                } />
                <Route path="/datacouncil/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <DataCouncil/>
                    <FooterSection/>
                    </>
                } />
                <Route path="/opensourcepicks/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <OpenSourcePicks/>
                    <FooterSection/>
                    </>
                } />

                <Route path="/pulse/gracehopper+opensourceday+2024+we-jaiswal/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <GHC24/>
                    <FooterSection/>
                    </>
                } />

                 <Route path="/pulse/british-columbias-commitment-open-source-software-driving-jaiswal/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <BritishColumbia/>
                    <FooterSection/>
                    </>
                } />

                <Route path="/pulse/Aideveloper+day=2024+sans-Francisco/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <AideveloperDay/>
                    <FooterSection/>
                    </>
                } />

                 <Route path="/pulse/7-predictions-future-technology-innovation-vini-jaiswal/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <PredictionTechnology/>
                    <FooterSection/>
                    </>
                } />

                <Route path="/pulse/openai+developer=day&singapore-vini-jaiswal/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <OpenAIBlog/>
                    <FooterSection/>
                    </>
                } />


                <Route path="/pulse/ghcopen+source=day-vini-jaiswal/vinijaiswal/blogs" element={
                    <>
                     <OpenNavbar/>
                     <br/>
                     <br/>
                     <GHCOpenSourceDay/>
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


 
