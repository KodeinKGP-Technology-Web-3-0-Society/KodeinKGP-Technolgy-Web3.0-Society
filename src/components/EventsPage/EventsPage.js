import React from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer'
// import img1 from './Images/img1.jpg';
// import img2 from './Images/img2.jpg';
// import img3 from './Images/img3.jpg';
// import img4 from './Images/web-image.png';
// import img5 from './Images/AI-image.jpg';
// import img6 from './Images/Blockchain-image.png';
// import Images from './images.json';
import LumosIcon from './Images/lumoslabs_logo.jpg'
import LumosEvent from './Images/Lumos_event.jpg'
import DensityIcon from './Images/density.jpg'
import Hackanintern from './Images/density_hackathon.jpg'
import BCH from './Images/blokchain hackathon.jpg'
import NuveProlog from './Images/nuvepro logo.jpg'
import Concordia from './Images/concordia.jpg'
import Concordialogo from './Images/concordium_logo.jpg'
import GravitonLogo from './Images/graviton logo.jpg'
import { Link } from 'react-router-dom';
import Moveicon from './Images/move icon.jpg'
import MoveEvent from './Images/move event.jpg'
import RecentEvent from './Images/Swadeshi_event.png'
import './Events.css';
import { RegistrationForm } from './RegistrationPage';

const EventsPage = () =>{
    return (
      <>
      <Navbar />
        <div>
          <RegistrationForm/>
      {/* <div className = "heading"><span>Events</span></div>
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
    </div> */}
    
    {/* <div className="stc">
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
      </div> */}
         
      {/* <div class="field-card card2 transition-2">
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
    </div> */}

    {/* <div>
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
    </div> */}

    <section className='hackathon_con'>
    {/* <h2 className='heading'>
        Upcoming Hackathon
      </h2> */}



      <div className='hackathon' style={{display: 'flex', flexDirection: 'column'}}>
        <img src={RecentEvent} style={{margin: "0 auto", maxHeight: "580px", width: "75%"}} alt='hack'/>
        <div className='hackaton_content'>
          {/* <h2 className='hackthon_heading'>
            Upcoming Hackathon
          </h2> */}
        </div>
      </div>  
      
      <div className='apply_btns'>
      <button className='applybtn'>
          <Link to= '/events/apply'><span>Problem Statements</span></Link>
      </button>
      <button className='applybtn register'>
        <a target='_blank' href='https://forms.gle/kYJciNQFKKst15yV9'>Register</a>
      </button>
      </div>

    </section>

    

    <section>
      <h2 className='heading'>
        Previous Hackathons
      </h2>

      <div className="events">

        {/* EVENT 1 */}
          <div className='event event1'>
            <img src={Hackanintern} alt="lumos"></img>
            <div className = "event_content">
              <h3 className="event_heading">Hack-an-Intern</h3>
              <p className="event_description">
              Last year, KodeinKGP hosted 'Hack an Intern,' a groundbreaking event that attracted a staggering 300+ participants. This tech extravaganza provided a dynamic platform for aspiring talents to showcase their skills in blockchain, AI, and various cutting-edge technologies. With prizes totaling 2 lakhs INR, 'Hack an Intern' not only nurtured innovation but also celebrated the spirit of technology enthusiasts. The event's resounding success reflects our commitment to fostering talent and innovation within the tech community. As we look back on this exceptional event, it serves as a testament to our dedication to creating opportunities for learning, collaboration, and the continuous evolution of the tech landscape.
              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className='sponsor_name'>
                  <img src={DensityIcon} />
                  <h4>Density</h4>
                </div>
              </div>
            </div>
          </div>


          {/* Event 2 */}
          <div className='event event2'>
            <img src={BCH} alt="bch"></img>
            <div className = "event_content">
              <h3 className="event_heading">Blockchain Hackathon</h3>
              <p className="event_description">
              
In the preceding year, KodeinKGP's 'Blockchain Hackathon' emerged as an unparalleled success, drawing a remarkable 400 participants organized into 50 teams. This event became a beacon of innovation and collaboration in the tech realm, embodying the spirit of creative problem-solving. Boasting an impressive prize pool exceeding 40k INR, the hackathon not only incentivized inventive solutions but also cultivated a strong sense of community among participants. 'Blockchain Hackathon' served as a testament to our unwavering commitment to advancing blockchain technology and nurturing a vibrant ecosystem of tech enthusiasts. As we reflect on this achievement, it reinforces our dedication to fostering an environment that encourages learning, collaboration, and the continuous evolution of the tech landscape.
              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className='sponsor_name'>
                  <img src={NuveProlog} />
                  <h4>Nuvepro</h4>
                </div>
              </div>
            </div>
          </div>


          {/* Event 3 */}
          <div className='event event3'>
            <img src={Concordia} alt="bch"></img>
            <div className = "event_content">
              <h3 className="event_heading">Concordia</h3>
              <p className="event_description">
              
              KodeinKGP's 'Concordia' event was a spectacular showcase of innovation, featuring 60 enthusiastic teams engaged in fierce competition. With an impressive prize pool surpassing $100k, 'Concordia' exemplified our steadfast dedication to nurturing innovation and promoting healthy competition within the tech community. This event stands as a testament to our unwavering commitment to empowering tech enthusiasts and driving progress in the industry. As we reflect on the success of 'Concordia,' it reinforces our belief that fostering a collaborative and competitive environment is crucial for advancing technology and inspiring the next generation of innovators.

              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className="twoSponContainer">
                <div className='sponsor_name twoSpon'>
                  <img src={Concordialogo} />
                  <h4>Concordium</h4>
                </div>
                <div className='sponsor_name twoSpon'>
                  <img src={GravitonLogo} />
                  <h4>Graviton</h4>
                </div>
                </div>
              </div>
            </div>
          </div>


      </div>
    </section>

    <section>
      <h2 className='heading'>
        Previous Workshops
      </h2>

      <div className="events">

        {/* EVENT 1 */}
          <div className='event event1'>
            <img src={LumosEvent} alt="lumos"></img>
            <div className = "event_content">
              <h3 className="event_heading">Web3.0 Summer Training Program</h3>
              <p className="event_description">
              
In a recent collaboration, KodeinKGP joined forces with 'Lumos' to organize an immersive 'Web 3.0 Summer Training Program.' Conducted in the past months, this program aimed to empower participants in mastering full-stack development, providing them with cutting-edge skills and insights into the ever-evolving Web 3.0 landscape. The initiative underlines our dedication to fostering practical knowledge and remaining at the forefront of technology education. By delivering valuable tools and resources, we strive to equip aspiring developers with what they need to thrive in the digital age. This collaborative effort represents our ongoing commitment to staying ahead in the dynamic and rapidly evolving field of technology.
              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className='sponsor_name'>
                  <img src={LumosIcon} />
                  <h4>Lumos</h4>
                </div>
              </div>
            </div>
          </div>


          {/* Event 2 */}
          <div className='event event2'>
            <img src={MoveEvent} alt="bch"></img>
            <div className = "event_content">
              <h3 className="event_heading">Web3 & Aptos Session</h3>
              <p className="event_description">
              
              Only two months ago, KodeinKGP orchestrated an
enlightening 'Web3 and Aptos Session,' proudly sponsored
by 'Move Developers.' With an impressive turnout of 300
eager participants, this event epitomized our dedication to
staying at the forefront of technological innovation. The
session provided an immersive dive into the realms of
Web3 and Aptos, empowering attendees with valuable
insights and practical knowledge. This gathering
underscored our mission to bridge the gap between
emerging technologies and aspiring tech enthusiasts,
fostering a dynamic and ever-evolving tech ecosystem.
              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className='sponsor_name'>
                  <img src={Moveicon} />
                  <h4>Move Developers</h4>
                </div>
              </div>
            </div>
          </div>


          {/* Event 3
          <div className='event event3'>
            <img src={Concordia} alt="bch"></img>
            <div className = "event_content">
              <h3 className="event_heading">Concordia</h3>
              <p className="event_description">
              
              KodeinKGP's 'Concordia' event was a spectacular showcase of innovation, featuring 60 enthusiastic teams engaged in fierce competition. With an impressive prize pool surpassing $100k, 'Concordia' exemplified our steadfast dedication to nurturing innovation and promoting healthy competition within the tech community. This event stands as a testament to our unwavering commitment to empowering tech enthusiasts and driving progress in the industry. As we reflect on the success of 'Concordia,' it reinforces our belief that fostering a collaborative and competitive environment is crucial for advancing technology and inspiring the next generation of innovators.

              </p>
              <div className='sponsors'>
                <div className='sponsor_heading'>
                  <h5>
                    Sponsored by : 
                  </h5>
                </div>
                <div className='sponsor_name'>
                  <img src={Concordialogo} />
                  <h4>Concordium</h4>
                </div>
                <div className='sponsor_name'>
                  <img src={GravitonLogo} />
                  <h4>Graviton</h4>
                </div>
              </div>
            </div>
          </div> */}


      </div>
    </section>
    </div>
    <Footer />
    </>
    )
}

export default EventsPage;