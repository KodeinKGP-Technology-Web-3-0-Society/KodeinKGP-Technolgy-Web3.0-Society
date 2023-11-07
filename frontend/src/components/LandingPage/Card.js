import React from "react"
import { PRODUCTS } from "./eventassets"

const Card = () => {
    return (
        <div className="cards">
            {PRODUCTS.map(product => (
                <div className={`card ${product.id}`} key={product.id}>
                    <img src="./event1.jpg" alt={product.eventName} />
                    <h1>{product.eventName}</h1>
                    <span>{product.eventDescription}</span>
                </div>
            ))}
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