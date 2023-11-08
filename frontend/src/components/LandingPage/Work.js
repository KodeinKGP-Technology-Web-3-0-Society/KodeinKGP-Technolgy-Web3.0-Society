import React from "react";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./Work.css";
import web from "./web-dev.png"
import ai from './ai-metaverse.png'
import blockchain from './blockchain.png'

export default function Teams() {
    const [ref, inView] = useInView({
        threshold: 0.1,
    });
    const [ref1, inView1] = useInView({
        threshold: 0.1,
    });
    const [ref2, inView2] = useInView({
        threshold: 0.1,
    });

    return (
        <>
            <h2 id="recentHeader">Recent Events</h2>
            <div id="recentEvents">
                <div className="recentEvent" id="event1">
                    <div className="eventImage">
                        <img
                            src={web}
                            ref={ref}
                            alt="event1"
                            className={`eImages ${inView ? "show" : "WEB"}`}
                        />
                        <span className="heading-teams">WEB</span>
                    </div>
                    <div
                        ref={ref}
                        className={`eventDescription ${
                            inView ? "textAni" : ""
                        }`}>
                        Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.
                    </div>
                </div>
                <div className="recentEvent" id="event2">
                    <div
                        ref={ref1}
                        className={`eventDescription ${
                            inView1 ? "textAni" : ""
                        }`}>
                        <span className="heading-teams">AI and Metaverse</span>
                        <p>Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.</p>
                    </div>
                    <div className="eventImage">
                        <img
                            src={ai}
                            ref={ref1}
                            alt="event2"
                            className={`eImages ${inView1 ? "show" : "Blockchain"}`}
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
                        <span className="heading-teams">Blockchain</span>
                    </div>
                    <div
                        ref={ref2}
                        className={`eventDescription ${inView2 ? "textAni" : ""}`}>
                        Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.
                    </div>
                </div>
            </div>
        </>
    );
}
