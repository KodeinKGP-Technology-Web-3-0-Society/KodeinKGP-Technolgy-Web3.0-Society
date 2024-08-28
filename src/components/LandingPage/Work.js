import React from "react";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import "./Work.css";
// import './Team-Cards.css';

// import Web from "./web1.png";
// import AI from "./ai3.png";
// import BlockChain from "./blockchain2.png";
import Robot from "./Robo.json";
import Lottie from "lottie-react";
import WEBDEV from "./WEB.json";
import Blockchain from "./Blockchain.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import programmer from "./programmer-image.png";

gsap.registerPlugin(ScrollTrigger);

export default function Teams() {
  // const [ref, inView] = useInView({
  //     threshold: 0,
  //     triggerOnce: true,
  // });
  // const [ref1, inView1] = useInView({
  //     threshold: 0,
  //     triggerOnce: true,
  // });
  // const [ref2, inView2] = useInView({
  //     threshold: 0,
  //     triggerOnce: true,
  // });

  // function fieldCardAnimate() {
  //     let cards = document.getElementsByClassName('field-card');
  //     for (let i = 0; i < cards.length; i++) {
  //         cards[i].classList.add(`transition-${i + 1}`);
  //     }
  // }

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (window.innerWidth > 768) {
        let xOffset = index === 0 ? "-30vw" : index === 1 ? "0vw" : "30vw";
        let angle = index === 0 ? -10 : index === 1 ? 0 : 10;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "20% bottom",
              end: "center center",
              scrub: true,
            },
          })
          .fromTo(
            card,
            {
              x: 0,
              rotation: angle,
              scale: 1,
            },
            {
              x: xOffset,
              rotation: 0,
              scale: 1.1,
            }
          );
      } else {
        var t3 = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: true,
            scroller: "body",
            immediateRender: true,
          },
        });

        t3.fromTo(
          card,
          {
            x: -300,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            ease: "linear",
          }
        );
      }
    });

    var t4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".pds-page-poster-wrapper",
        start: "center bottom",
        end: "center center",
        scrub: 1,
        scroller: "body",
      }
    })

    t4.fromTo(".pds-page-poster-wrapper",
      {
        x: -300,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2
      },
    )

  }, []);

  // useEffect(() => {

  //     let xOffset;

  //     // if (window.innerWidth < 768) {
  //     //     // For smaller screens, use a smaller offset
  //     //     xOffset = index === 0 ? '-100vw' : index === 1 ? '0vw' : '100vw';
  //     // } else {
  //     //     // For larger screens, use a larger offset
  //     //     xOffset = index === 0 ? '-30vw' : index === 1 ? '0vw' : '30vw';
  //     // }

  //     var t1 = gsap.timeline();

  //     t1.fromTo(".field-cards .card1",
  //         {
  //             x: 0,
  //             rotation:0,
  //             scale: 1
  //         },
  //         {
  //             x: '30vw',
  //             rotation: 0,
  //             scale: 1.1,
  //             duration: 1,
  //             // stagger:0.2,
  //             ease: 'power2.out',
  //             scrollTrigger: {
  //                 trigger: ".field-cards .card1",
  //                 start: "top 80%",
  //                 end: "top 0",
  //                 scrub: 2,
  //             }

  //         })

  //     var t2 = gsap.timeline();

  //     t2.fromTo(".field-cards .card3",
  //         {
  //             x: 0,
  //             rotation:0,
  //             scale: 1
  //         },
  //         {
  //             x: '-30vw',
  //             rotation: 0,
  //             scale: 1.1,
  //             duration: 1,
  //             // stagger:0.2,
  //             // ease: 'power2.out',
  //             scrollTrigger: {
  //                 trigger: ".field-cards .card3",
  //                 start: "top 80%",
  //                 end: "top 0",
  //                 scrub: 2,
  //                 // markers: true
  //             }

  //         })

  //         var t3 = gsap.timeline();

  //     t3.fromTo(".field-cards .card2",
  //         {
  //             x: 0,
  //             rotation:0,
  //             scale: 1
  //         },
  //         {
  //             x: 0,
  //             rotation: 0,
  //             scale: 1.1,
  //             duration: 1,
  //             // stagger:0.2,
  //             ease: 'power2.out',
  //             scrollTrigger: {
  //                 trigger: ".field-cards .card2",
  //                 start: "top 80%",
  //                 end: "top 0",
  //                 scrub: 2,
  //                 markers:true
  //             }

  //         })

  // }, [])

  // useEffect(() => {
  //     // Create an Intersection Observer instance
  //     const sectionObserver = new IntersectionObserver((entries, observer) => {
  //         entries.forEach(entry => {
  //             if (entry.isIntersecting) {
  //                 fieldCardAnimate(); // Trigger animation when the section is in viewport
  //                 observer.unobserve(entry.target);
  //             }
  //         });
  //     }, {
  //         root: null, // Use the viewport as the root
  //         threshold: 0.8, // Trigger when 80% of the section is visible
  //     });

  //     // Observe the target section
  //     const targetSection = document.querySelector('.field-cards');
  //     if (targetSection) {
  //         sectionObserver.observe(targetSection);
  //     }
  // }, []);

  return (
    <div className="work-wrapper">
      <h2 id="recentHeader">Our Expertise</h2>
      {/* <div id="recentEvents">
                <div className="recentEvent" id="event1">
                    <div className="eventImage">
                        <img
                            src={web}
                            ref={ref}
                            alt="event1"
                            className={`eImages ${inView ? "show" : "WEB"}`}
                        />
                    </div>
                    <div
                        ref={ref}
                        className={`eventDescription ${inView ? "textAni" : ""
                            }`}>
                        <h1 className="workHeader">Web</h1>
                        Transform your digital dreams into reality with our versatile Web solutions, blending creativity and functionality. Whether you need a stunning website, a powerful app, or a captivating blog, we have the skills and tools to make it happen. Our Web solutions are tailored to your specific needs and goals, ensuring that you get the best results possible. We combine cutting-edge technology, innovative design, and user-friendly features to create Web solutions that stand out from the crowd. No matter what your digital aspirations are, we can help you achieve them with our dynamic Web solutions.
                    </div>
                </div>
                <div className="recentEvent" id="event2">
                    <div
                        ref={ref1}
                        className={`eventDescription ${inView1 ? "textAni" : ""
                            }`}>
                        <h1 className="workHeader">AI and Metaverse</h1>
                        Imagine a world where AI creates immersive Metaverse experiences, transcending the limits of reality. In this world, you can explore, create, and connect with others in virtual spaces that are powered by AI. You can customize your avatar, interact with realistic objects and environments, and participate in exciting events and activities. You can also learn, work, and play in the Metaverse, using AI to enhance your skills, productivity, and fun. Whether you want to travel to distant planets, visit historical landmarks, or join a fantasy adventure, the Metaverse and AI can make it happen. This is not a dream, but a possibility that is within your reach. Join us in the Metaverse, where AI is your guide to infinite possibilities.
                    </div>
                    <div className="eventImage">
                        <img
                            src={ai}
                            ref={ref1}
                            alt="event2"
                            className={`eImages ${inView1 ? "show" : "Blockchain"
                                }`}
                            id="imgAi"
                        />
                    </div>
                </div>
                <div className="recentEvent" id="event3">
                    <div className="eventImage">
                        <img
                            src={blockchain}
                            ref={ref2}
                            alt="event3"
                            className={`eImages ${inView2 ? "show" : ""}`}
                        />
                    </div>
                    <div
                        ref={ref2}
                        className={`eventDescription ${inView2 ? "textAni" : ""
                            }`}>
                        <h1 className="workHeader">Blockchain</h1>
                        Blockchain technology is revolutionizing the way we exchange value and information. With our cutting-edge Blockchain solutions, you can create secure and transparent transactions that are verified by a network of peers. Whether you want to streamline your business processes, enhance your customer experience, or protect your data, we can help you achieve your goals with our Blockchain expertise. Trust us to deliver innovative and reliable Blockchain solutions that will transform your transactions and your industry.

                    </div>
                </div>
            </div> */}

      <div className="field-cards">
        <div
          className="field-card card1"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          {/* <img src={Web} alt="Web" /> */}
          <Lottie animationData={WEBDEV} />

          <p className="field-heading">Web</p>
          <p className="field-description">
            Weave your digital aspirations into reality through our dynamic Web
            solutions, fusing creativity with functionality.
          </p>
        </div>
        <div
          className="field-card card2"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          {/* <img src={AI} alt="AI & Metaverse" /> */}
          <Lottie animationData={Robot} height={10} />
          <p className="field-heading">AI & Metaverse</p>
          <p className="field-description">
            {" "}
            Enter a realm where AI drives immersive Metaverse encounters,
            pushing boundaries of what's possible.
          </p>
        </div>
        <div
          className="field-card card3"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          {/* <img src={BlockChain} alt="Blockchain" /> */}
          <Lottie animationData={Blockchain} />
          <p className="field-heading">Blockchain</p>
          <p className="field-description">
            Transform transactions with our secure Blockchain solutions,
            rewriting the rules of trust and transparency.
          </p>
        </div>
      </div>

      <div className="pds-page-poster-wrapper">
        <Link to="/pds" style={{ textDecoration: "none" }}>
          <div className="pds-page-poster">
            <div className="pds-page-poster-left">
              <h1>Still Getting Stuck in PDS?</h1>
              <h2>Our curated PDS Problems set works right for you...</h2>
            </div>
            <div className="pds-page-poster-right">
              <img src={programmer} alt="img" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
