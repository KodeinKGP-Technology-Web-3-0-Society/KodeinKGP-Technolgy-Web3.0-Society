
import Navbar from "./Navbar.js";
import './Home.css';
import aiLogo from './ai-logo.png';
import Footer from "./Footer";
import sets from './sets.png';
// import RecentEvents from './RecentEvents';
import Work from "./Work.js";
import Card from "./Card.js";
// import CarouselItem from "react-bootstrap/esm/CarouselItem.js";
// import ControlledCarousel from "./Carousel.js";
// import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  return (
      <div className="loading-container" style={{ display:"flex",alignItems:"center",justifyContent:"center"}}>
          <img src={sets} alt="Loading" className="square-image"/>
      </div>
  );
};

const MainContent = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <div className="content">
        <div className="right">
          <h1 className="wel">Welcome to <br></br><span>KodeinKGP.</span></h1>
          <p className="vision">
            “The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.”
          </p>
          <p className="vision-depth">
            A student-run society that aims to spread awareness and educate students about the potential of Web 3.0 and future technologies. We host workshops and hackathons to give students hands-on experience with Blockchain Development and Artificial Intelligence. Additionally, we use our skills in web development and blockchain to work on real-world problems faced by the student community at IIT Kharagpur and beyond. By joining KodeinKGP, students can gain valuable technical skills and contribute to solving important problems while learning about one of the most exciting and rapidly-evolving technologies of our time.
          </p>  
        </div>
        <div className="left">
          <img src={aiLogo} alt="ai-image" />
        </div>
      </div>
      <div className="bottom-bar">
        <div className="text">260+ <span>Problems</span></div>
        <div className="text">260+ <span>Detailed Solutions</span></div>
        <div className="text">1 <span>Platform</span></div>
        <div className="text">1 <span>Vision</span></div>
      </div>
      {/* <RecentEvents/> */}
      <Work />
      {/* <Card /> */}
      {/* <ControlledCarousel/> */}
      <Footer/>
    </div>
  );
};


const Home = () => {
  const [number, setNumber] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000); // Display the loading screen for 4 seconds

      return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="App">
        {loading ? <LoadingScreen /> : <MainContent />}
    </div>
);

  
}

export default Home;
