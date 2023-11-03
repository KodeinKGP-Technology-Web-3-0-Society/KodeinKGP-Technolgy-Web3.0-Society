import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TeamsPage.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram ,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tilt } from 'react-tilt';

library.add(faFacebook, faInstagram, faEnvelope , faLinkedin ,faGithub);

const Founders = () => {
  return (
    <div className='founders'>
        <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      scale={1}
      gyroscope={true}
      >
        <article className = "founder">
              <div className="photo-image">
                <img src="https://user-images.githubusercontent.com/96824839/171794126-16b6182a-65f3-483b-95f1-04682526a6ca.jpg" alt="" />
                <div className = "photo-details"> 
                  <span><a href="https://www.facebook.com/profile.php?id=100057206746965" target = "_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></span>
                  <span><a href="mailto:surajgupta.3072@gmail.com" target = "_blank"><FontAwesomeIcon icon='envelope' /></a></span>
                  <span><a href="#" target = "_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></span>
                  <span><a href="https://www.linkedin.com/in/suraj-gupta-457496201/" target = "_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></span>
                  <span><a href="https://github.com/surajgupta3072/" target = "_blank"><FontAwesomeIcon icon={['fab' , 'github']}/></a></span>
                </div>
              </div>
              <h5 className='photo-name'><strong>Suraj Gupta</strong></h5>
        </article>
        </Tilt>
        <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      scale={1}
      gyroscope={true}
      >
        <article className = "founder">
              <div className="photo-image">
                <img src="https://user-images.githubusercontent.com/93533913/190714232-3f1ff3ee-92f4-4d8c-93f9-79426951a130.png" alt="" />
                <div className = "photo-details"> 
                <span><a href="https://www.facebook.com/bhushan.nakade.984" target = "_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></span>
                <span><a href="mailto:bhushantny1@gmail.com" target = "_blank"><FontAwesomeIcon icon='envelope' /></a></span>
                <span><a href="https://www.instagram.com/_.bhushan._/" target = "_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></span>
                <span><a href="https://www.linkedin.com/in/bhushan-nakade-141971209/" target = "_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></span>
                <span><a href="https://github.com/imshresth0810" target = "_blank"><FontAwesomeIcon icon={['fab' , 'github']}/></a></span>
              </div>
              </div>
              <h5 className='photo-name'><strong>Bhushan Nakade</strong></h5>
          </article>
        </Tilt>
    </div>
  )
}

export default Founders
