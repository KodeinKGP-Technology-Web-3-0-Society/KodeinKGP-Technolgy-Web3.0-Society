import React from "react"
import eventAssests, { PRODUCTS } from "./eventassets"

const Card = (props) => {

    const { id, eventName, img, eventDescription } = PRODUCTS

    return (
        <div className="cards">
            <div className="card 1">
                <img src={ img }/>
                <h1>{eventName}</h1>
                <span>{eventDescription}​</span>
            </div>
            <div className="card 2">
            <img src={event2} alt="event2" />
                <h1>Event 2</h1>
                <span>Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.​</span>
            </div>
            <div className="card 3">
            <img src={event3} alt="event3" />
                <h1>Event 3</h1>
                <span>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.​</span>
            </div>
        </div>
    );
}
 
export default Card
{/* <div className="cards">
            <div className="card 1">
                <img src="" alt="" />
                <h1>WEB</h1>
                <span>Weave your digital aspirations into reality through our dynamic Web solutions, fusing creativity with functionality.​</span>
            </div>
            <div className="card 2">
            <img src="" alt="" />
                <h1>WEB</h1>
                <span>Enter a realm where AI drives immersive Metaverse encounters, pushing boundaries of what's possible.​</span>
            </div>
            <div className="card 3">
            <img src="" alt="" />
                <h1>WEB</h1>
                <span>Transform transactions with our secure Blockchain solutions, rewriting the rules of trust and transparency.​</span>
            </div>
        </div> */}