import React ,{useState , useEffect} from 'react';
import WebTeam from "./WebTeam.json";
import DesignTeam from "./DesignTeam.json";
import EventTeam from "./EventTeam.json";
import BlockchainTeam from "./BlockchainTeam.json";
import AITeam from "./AITeam.json";
import './SelectedTeam.css';
import WebImage from '../../assets/Web search-rafiki.svg';
import AIImage from "../../assets/Cool robot-cuate.svg";
import BlockchainImage from "../../assets/Bitcoin P2P-amico.svg";
import DesignImage from "../../assets/Designer girl-bro.svg";
import EventsImage from "../../assets/Events-bro.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram ,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tilt } from 'react-tilt';


const SelectedTeam = (props) =>{
    let number = props.id-1;
    let totalData = [WebTeam,AITeam,BlockchainTeam,EventTeam,DesignTeam];
    let selectedData= totalData[number]; 
    // console.log(selectedData);
    let memberDetails = selectedData[0];
    // console.log(memberDetails);
    const [transition, setTransition] = useState(false);
    let teamImage;

    switch (props.id-1) {
        case 0:
            teamImage = WebImage;
            break;
        case 1:
            teamImage = AIImage;
            break;
        case 2:
            teamImage = BlockchainImage;
            break;
        case 3:
            teamImage = DesignImage;
            break;
        case 4:
            teamImage = EventsImage;
            break;
        default:
            teamImage = null;
    }

    useEffect(() => {
      setTransition(false);
      setTimeout(() => setTransition(true), 100); // Delay to allow CSS transition
  }, [props.id]);

    function TeamContent() {
        // Use state to store the window width
        const [width, setWidth] = useState(window.innerWidth);
      
        // Define a function to handle window resize
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
      
        // Use useEffect to add and remove the event listener
        useEffect(() => {
          window.addEventListener("resize", handleResize);
          return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);
      
        // Render the component based on the window width
        return (
          <>
            {/* {width >= 748 ? (
              <div className="teamcontent">
                <p className="team_content">{selectedData[1].content}</p>
                <img src={teamImage} alt="img" className="team_image" />
              </div>
            ) : (
              <></>
            )} */}
          </>
        );
      }
      
    return(
        <div className={`selected-team-container ${transition ? 'active' : ''}`}>
            {/* <h2 className='team_name'>{selectedData[1].teamName}</h2> */}
            <div className='aboutteam'>
                <TeamContent />
                <div className='teammembers'>
                <div className={`teamcontent ${transition ? 'active' : ''}`}>
                  <table className='tab'>
                    <tr>
                       <th>Name</th>
                       <th>Roll No.</th>
                    </tr>
                    {memberDetails.map(member=>{
                        return(
                          <>
                          <tr>
                           <td>{member.name}</td>
                           <td>{member.Rollno}</td>
                         </tr>
                          </>
                          //Tilt card with image
                            // <Tilt
                            //     className="parallax-effect-glare-scale"
                            //     perspective={500}
                            //     glareEnable={true}
                            //     scale={1}
                            //     gyroscope={true}>
                            //         <div className='member'>
                            //         <div className="photo-image">
                            //             <img src={member.image_url} alt="" />
                            //             <div className = "photo-details"> 
                            //                 <span><a href={member.facebook} target = "_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></span>
                            //                 <span><a href={member.mailid} target = "_blank"><FontAwesomeIcon icon='envelope' /></a></span>
                            //                 <span><a href={member.instagram} target = "_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></span>
                            //                 <span><a href={member.linkedin} target = "_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></span>
                            //                 <span><a href={member.github} target = "_blank"><FontAwesomeIcon icon={['fab' , 'github']}/></a></span>
                            //             </div>
                            //             </div>
                            //             <h5 className='photo-name'><strong>{member.name}</strong></h5>
                            //         </div>
                            // </Tilt>
                        )
                    })}
                    </table>
                </div></div>
            </div>
            {/* <h4 style={{color:'white' ,position:'sticky',padding:"0 20px",bottom:'0',background:'rgba(1, 1, 27)',width:"99%",display:"flex",justifyContent:"space-between"}}><span>Aadish Jain : 9408168120 </span><span>G.M.M. Prabhash : 9818645848</span></h4> */}
        </div>
    )
}

export default SelectedTeam;