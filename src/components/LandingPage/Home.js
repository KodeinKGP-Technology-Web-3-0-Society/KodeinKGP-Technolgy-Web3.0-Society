import "./Home.css";
import aiLogo from "./ai-logo.png";
// import sets from "./sets.png";
// import RecentEvents from './RecentEvents';
import Work from "./Work.js";
import Card from "./Card.js";
// import CarouselItem from "react-bootstrap/esm/CarouselItem.js";
// import ControlledCarousel from "./Carousel.js";
// import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from "react";
import main from './main.json'
import Lottie from "lottie-react";
import { gsap } from 'gsap';
import Animation from "./Animation.js";
import Landing from "./Landing.js";
// import ScrollTrigger from "gsap/ScrollTrigger.js";

// Loading screen with selections poster
// const LoadingScreen = () => {
//   return (
//     <div
//       className="loading-container"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img src={sets} alt="Loading" className="square-image" />
//     </div>
//   );
// };




const MainContent = () => {

  const [animate, setAnimate] = useState(true);
  if (animate) return <Animation animate={animate} setAnimate={setAnimate} />

  return (
    <div className="landing-page">

      <Landing />

      {/* <RecentEvents/> */}
      <Work />
      {/* <Card /> */}
      {/* <ControlledCarousel/> */}
    </div>
  );
};

const Home = () => {
  // const [number, setNumber] = useState(null);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // Display the loading screen for 4 seconds

  //   return () => clearTimeout(timer); // Clean up the timer
  // }, []);

  // return (
  //   <div className="App">{loading ? <LoadingScreen /> : <MainContent />}</div>
  // );
  return <div className="App">{<MainContent />}</div>;
};

export default Home;
