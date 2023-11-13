import React from "react";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./Work.css";
import web from "./web1.png";
import ai from "./ai3.png";
import blockchain from "./blockchain2.png";

export default function Teams() {
    const [ref, inView] = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const [ref1, inView1] = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <>
            <h2 id="recentHeader">Our Expertise</h2>
            <div id="recentEvents">
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
                        className={`eventDescription ${
                            inView ? "textAni" : ""
                        }`}>
                        <h1 className="workHeader">Web</h1>
Transform your digital dreams into reality with our versatile Web solutions, blending creativity and functionality. Whether you need a stunning website, a powerful app, or a captivating blog, we have the skills and tools to make it happen. Our Web solutions are tailored to your specific needs and goals, ensuring that you get the best results possible. We combine cutting-edge technology, innovative design, and user-friendly features to create Web solutions that stand out from the crowd. No matter what your digital aspirations are, we can help you achieve them with our dynamic Web solutions.
                    </div>
                </div>
                <div className="recentEvent" id="event2">
                    <div
                        ref={ref1}
                        className={`eventDescription ${
                            inView1 ? "textAni" : ""
                        }`}>
                        <h1 className="workHeader">AI and Metaverse</h1>
                        Imagine a world where AI creates immersive Metaverse experiences, transcending the limits of reality. In this world, you can explore, create, and connect with others in virtual spaces that are powered by AI. You can customize your avatar, interact with realistic objects and environments, and participate in exciting events and activities. You can also learn, work, and play in the Metaverse, using AI to enhance your skills, productivity, and fun. Whether you want to travel to distant planets, visit historical landmarks, or join a fantasy adventure, the Metaverse and AI can make it happen. This is not a dream, but a possibility that is within your reach. Join us in the Metaverse, where AI is your guide to infinite possibilities.
                    </div>
                    <div className="eventImage">
                        <img
                            src={ai}
                            ref={ref1}
                            alt="event2"
                            className={`eImages ${
                                inView1 ? "show" : "Blockchain"
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
                        className={`eventDescription ${
                            inView2 ? "textAni" : ""
                        }`}>
                        <h1 className="workHeader">Blockchain</h1>
                        Blockchain technology is revolutionizing the way we exchange value and information. With our cutting-edge Blockchain solutions, you can create secure and transparent transactions that are verified by a network of peers. Whether you want to streamline your business processes, enhance your customer experience, or protect your data, we can help you achieve your goals with our Blockchain expertise. Trust us to deliver innovative and reliable Blockchain solutions that will transform your transactions and your industry.

                    </div>
                </div>
            </div>
        </>
    );
}
