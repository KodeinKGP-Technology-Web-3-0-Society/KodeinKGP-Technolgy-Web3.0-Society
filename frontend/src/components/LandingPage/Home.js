import React, { useState } from "react";
import Navbar from "./Navbar";
import './Home.css';
import aiLogo from './ai-logo.png';
import Footer from "./Footer";
import RecentEvents from './RecentEvents';
import Work from "./Work.js";
import Card from "./Card.js";
const Home = () => {
  const [number, setNumber] = useState(null);

  return (
    <div className="landing-page">
      <Navbar />
      <div className="content">
        <div className="right">
          <h1>Welcome to <span>KodeinKGP.</span></h1>
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
        <div className="text">10+ <span>Events Conducted</span></div>
      </div>
      <RecentEvents/>
      <Work />
      <Card />
      <Footer/>
    </div>
  );
}

export default Home;
