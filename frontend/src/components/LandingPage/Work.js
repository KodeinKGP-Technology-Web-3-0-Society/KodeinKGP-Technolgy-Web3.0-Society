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
            <h2 id="recentHeader">What we do?</h2>
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
                        <h2 className="workHeader">Web</h2>
                        Weave your digital aspirations into reality through our
                        dynamic Web solutions, fusing creativity with
                        functionality. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Doloremque animi assumenda tenetur
                        earum, voluptatibus autem temporibus quo ipsum minus vel
                        in, error voluptatum, suscipit labore ea ex. Harum nihil
                        debitis voluptatem magnam, mollitia nobis similique sit.
                        Doloremque laborum architecto voluptate?
                    </div>
                </div>
                <div className="recentEvent" id="event2">
                    <div
                        ref={ref1}
                        className={`eventDescription ${
                            inView1 ? "textAni" : ""
                        }`}>
                        <h2 className="workHeader">AI and Metaverse</h2>
                        Enter a realm where AI drives immersive Metaverse
                        encounters, pushing boundaries of what's possible. Lorem
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatem iusto reiciendis ex vel minus quos
                        accusantium, praesentium itaque molestiae excepturi
                        neque saepe ullam qui dicta aperiam, nesciunt sapiente
                        ut quod? Optio esse perspiciatis, hic quisquam
                        necessitatibus itaque repellat illo amet?
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
                        <h2 className="workHeader">Blockchain</h2>
                        Transform transactions with our secure Blockchain
                        solutions, rewriting the rules of trust and
                        transparency. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptatem iusto reiciendis ex vel
                        minus quos accusantium, praesentium itaque molestiae
                        excepturi neque saepe ullam qui dicta aperiam, nesciunt
                        sapiente ut quod? Optio esse perspiciatis, hic quisquam
                        necessitatibus itaque repellat illo amet?
                    </div>
                </div>
            </div>
        </>
    );
}
