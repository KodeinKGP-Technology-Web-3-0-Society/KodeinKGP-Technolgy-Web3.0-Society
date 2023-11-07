import React from 'react';
import Navbar from '../LandingPage/Navbar';
import img1 from './Images/img1.jpg';
import img2 from './Images/img2.jpg';
import img3 from './Images/img3.jpg';
import img4 from './Images/web-image.png';
import img5 from './Images/AI-image.jpg';
import img6 from './Images/Blockchain-image.png';
import Images from './images.json';
import './EventsPage.css';

const EventsPage = () =>{
    return (
      <>
      <Navbar />
        <div>
      <div className = "heading"><span>Events</span></div>
      <div className="container">
      <div className="card">
        <img src={img1} alt="Hackathon" />
        <h2>Hackathons </h2>
      </div>
      <div className="card">
      <img src={img2} alt="Github" />
        <h2>GitHub Workshops</h2>
      </div>
      <div className="card">
      <img src={img3} alt="Workshop" />
      <h2>WorkShops</h2>
      </div>
    </div>
    
    <div className="stc">
      <h1>We are engaged in the following fields of expertise:</h1>
    </div>
    <div class="field-cards">
      <div class="field-card card1 transition-1">
        <img src={img4} alt="Web"></img>
        <div className = "card_content">
          <p className="field-heading">Web</p>
          <p className="field-description">
          Weave your digital aspirations into reality through our dynamic
          Web solutions, fusing creativity with functionality.</p>
        </div>
      </div>
         
      <div class="field-card card2 transition-2">
        <img src={img5} alt="AI &amp; Metaverse"></img>
        <div className = "card_content">
          <p className="field-heading">AI &amp; Metaverse</p>
          <p className="field-description"> Enter a realm where AI drives immersive
          Metaverse encounters, pushing boundaries of what's possible.</p>
        </div>
      </div>

      <div class="field-card card3 transition-3">
        <img src={img6} alt="Blockchain"></img>
        <div className = "card_content">
          <p className="field-heading">Blockchain</p>
          <p className="field-description">Transform transactions with our secure 
          Blockchain solutions, rewriting the rules of trust and transparency.</p>
        </div>
      </div>
    </div>

    <div>
      <div className="gallerytag">
      <div className="heading"><span>Gallery</span></div>
        <h3 className="quote">CONGRATULATIONS TO THE WINNING TEAMS AND INTERN ACHIEVERS !!!</h3>
      </div>
      <div className = "container2">  
      {Images.map(image => {
        return (
          <div className="galleryimg" key={image.id}>
            <img src={image.img} alt="img" />
          </div>
        );
      })}
      </div>
    </div>
    </div>

    </>
    )
}

export default EventsPage;