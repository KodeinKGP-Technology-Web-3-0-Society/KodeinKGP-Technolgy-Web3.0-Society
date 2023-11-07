import React from 'react';
import WebTeam from "./WebTeam.json";
import DesignTeam from "./DesignTeam.json";
import EventTeam from "./EventTeam.json";
import BlockchainTeam from "./BlockchainTeam.json";
import AITeam from "./AITeam.json";
import './SelectedTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram ,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tilt } from 'react-tilt';


const SelectedTeam = (props) =>{
    let number = props.id-1;
    let totalData = [WebTeam,AITeam,BlockchainTeam,DesignTeam,EventTeam];
    let selectedData= totalData[number]; 
    // console.log(selectedData);
    let memberDetails = selectedData[0];
    // console.log(memberDetails);
    return(
        <div>
            <h2 className='teamttitle'>{selectedData[1].teamName}</h2>
            <div className='aboutteam'>
                <div className='teamcontent'>
                    <p className='team_content'>{selectedData[1].content}</p>
                    <img src="../../../public/assets/ai-logo.png" alt ="img" className='team_image'/>
                </div>
                <div className='teammembers'>
                    {memberDetails.map(member=>{
                        return(
                            <Tilt
                                className="parallax-effect-glare-scale"
                                perspective={500}
                                glareEnable={true}
                                scale={1}
                                gyroscope={true}>
                                    <div className='member'>
                                    <div className="photo-image">
                                        <img src={member.image_url} alt="" />
                                        <div className = "photo-details"> 
                                            <span><a href={member.facebook} target = "_blank"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></span>
                                            <span><a href={member.mailid} target = "_blank"><FontAwesomeIcon icon='envelope' /></a></span>
                                            <span><a href={member.instagram} target = "_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></span>
                                            <span><a href={member.linkedin} target = "_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></span>
                                            <span><a href={member.github} target = "_blank"><FontAwesomeIcon icon={['fab' , 'github']}/></a></span>
                                        </div>
                                        </div>
                                        <h5 className='photo-name'><strong>{member.name}</strong></h5>
                                    </div>
                            </Tilt>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SelectedTeam;