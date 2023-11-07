import React from 'react';
import WebTeam from "./WebTeam.json";
import DesignTeam from "./DesignTeam.json";
import EventTeam from "./EventTeam.json";
import BlockchainTeam from "./BlockchainTeam.json";
import AITeam from "./AITeam.json";

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
                    <img src={selectedData[1].image_url} alt ="img"/>
                </div>
                <div className='teammembers'>
                    {memberDetails.map(member=>{
                        return(
                            <div className='teammember'>
                                <img src={member.image_url} alt="img"/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SelectedTeam;