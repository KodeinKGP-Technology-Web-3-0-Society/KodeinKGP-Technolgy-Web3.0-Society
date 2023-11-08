import React from "react"
import event1 from "./event1.jpg"
import event2 from "./event2.jpg"
import event3 from "./event3.jpg"

import './Card.css'

// import { PRODUCTS } from "./eventassets"

const Card = () => {
    return (
        // <div>
        <div className="cards">
            <div className="card 1">
                <img src={event1} alt="" />
                <div className="about-card">
                    <h1>EVENT 1</h1>
                    <span>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</span>
                </div>
            </div>
            <div className="card 2">
                <img src={event2} alt="" />
                <div className="about-card">
                    <h1>EVENT 2</h1>
                    <span>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</span>
                </div>
            </div>
            <div className="card 3">
                <img src={event3} alt="" />
                <div className="about-card">
                    <h1>EVENT 3</h1>
                    <span>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.​</span>
                </div>
            </div>


        

        </div>
        // </div>
    );
}

 
export default Card

