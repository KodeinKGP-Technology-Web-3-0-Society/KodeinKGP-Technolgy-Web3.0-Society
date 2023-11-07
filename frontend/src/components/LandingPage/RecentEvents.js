import React from "react";
import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import "./RecentEvents.css";
import event1 from "./event1.jpg";
import event2 from "./event2.jpg";
import event3 from "./event3.jpg";
export default function RecentEvents() {
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
                            src={event1}
                            ref={ref}
                            alt="event1"
                            className={`eImages ${inView ? "show" : ""}`}
                        />
                    </div>
                    <div
                        ref={ref}
                        className={`eventDescription ${
                            inView ? "textAni" : ""
                        }`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate distinctio totam necessitatibus autem
                        saepe nemo repudiandae ex id maxime porro!
                    </div>
                </div>
                <div className="recentEvent" id="event2">
                    <div
                          ref={ref1}
                        className={`eventDescription ${
                          inView1 ? "textAni" : ""
                      }`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate distinctio totam necessitatibus autem
                        saepe nemo repudiandae ex id maxime porro!
                    </div>
                    <div className="eventImage">
                        <img
                            src={event2}
                            ref={ref1}
                            alt="event2"
                            className={`eImages ${inView1 ? "show" : ""}`}
                        />
                    </div>
                </div>
                <div className="recentEvent" id="event3">
                    <div className="eventImage">
                        <img
                            src={event3}
                            ref={ref2}
                            alt="event3"
                            className={`eImages ${inView2 ? "show" : ""}`}
                        />
                    </div>
                    <div
                        ref={ref2}
                        className={`eventDescription ${inView2 ? "textAni" : ""}`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptate distinctio totam necessitatibus autem
                        saepe nemo repudiandae ex id maxime porro!
                    </div>
                </div>
            </div>
        </>
    );
}
