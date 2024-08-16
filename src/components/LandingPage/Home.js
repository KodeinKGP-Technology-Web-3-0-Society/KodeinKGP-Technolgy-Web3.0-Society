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
import ScrollTrigger from "gsap/ScrollTrigger.js";

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
  useEffect(() => {
    var tl = gsap.timeline();

    tl.fromTo(".navbar .logoo",
      {
        x: -30,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      }
    )

    tl.fromTo(".navbar .MainPartNavBar li",
      {
        y: -30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: 0.15,
        ease: "power2.out"
      }, "-=1.5"
    );

    tl.fromTo(".right .Welcome",
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      }, "-=1.5"
    )

    tl.fromTo(".right span",
      {
        x: 0,
        opacity: 0
      },
      {
        x: 100,
        opacity: 1,
        duration: 1,
        delay: 1,
        ease: "power2.out"
      }, "-=1.5"
    )

    tl.fromTo(".right .vision",
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
        ease: "power2.out"
      }, "-=1.5"
    )

    tl.fromTo(".right .vision-depth",
      {
        x: -100,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        delay: 1,
        ease: "power2.out"
      }, "-=1"
    )

    tl.fromTo(".left",
      {
        // x: -100,        
        opacity: 0
      },
      {
        // x: 0,        
        opacity: 1,
        duration: 1.5,
        delay: 1,
        ease: "power2.out"
      }, "-=1.2"
    )

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bottom-bar .text",
        start: "top 90%",
        end: "top 30%",
        scrub: 1,
        scroller: "body",
      }
    })

    t2.fromTo(".bottom-bar .text",
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out",

      },
    )

    var t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#recentHeader",
        start: "top 80%",
        end: "top 0",
        scrub: 1,
        scroller: "body",
      }
    })

    t3.fromTo("#recentHeader",
      {
        x: -300,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 1,
        stagger: 0.2,
        ease: "power2.out",

      },
    )




  }, [])
  return (
    <div className="landing-page">
      <div className="content">
        <div className="right">
          <h1 className="wel">
            <div className="Welcome">Welcome to</div>
            <span>KodeinKGP</span>
          </h1>
          <p className="vision">
            “The Web as I envisaged it, we have not seen it yet. The future is
            still so much bigger than the past.”
          </p>
          <p className="vision-depth">
            A student-run society that aims to spread awareness and educate
            students about the potential of Web 3.0 and future technologies. We
            host workshops and hackathons to give students hands-on experience
            with Blockchain Development and Artificial Intelligence.
            Additionally, we use our skills in web development and blockchain to
            work on real-world problems faced by the student community at IIT
            Kharagpur and beyond. By joining KodeinKGP, students can gain
            valuable technical skills and contribute to solving important
            problems while learning about one of the most exciting and
            rapidly-evolving technologies of our time.
          </p>
        </div>
        <div className="left">
          {/* <img src={aiLogo} alt="ai-image" /> */}
          <Lottie animationData={main}
            height={300} // Set height here
            width={300}  // Set width here
          />
        </div>
      </div>
      <div className="bottom-bar">
        <div className="text">
          260+ <span>Problems</span>
        </div>
        <div className="text">
          260+ <span>Detailed Solutions</span>
        </div>
        <div className="text">
          1 <span>Platform</span>
        </div>
        <div className="text">
          1 <span>Vision</span>
        </div>
      </div>
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
