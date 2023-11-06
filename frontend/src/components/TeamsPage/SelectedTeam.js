import React from 'react';
import WebTeam from "./WebTeam.json";
import DesignTeam from "./DesignTeam.json";
import EventTeam from "./EventTeam.json";
import BlockchainTeam from "./BlockchainTeam.json";
import AITeam from "./AITeam.json";

const SelectedTeam = (props) =>{
    let number = props.id;
    let selectedData; 
    switch (number){
        case '1':
            selectedData = WebTeam; 
            return (<div>
                <h2>Tech Team</h2>
            </div>);
        case '2':
            selectedData = AITeam; 
            return (<div>
                <h2>AI & Metaverse Team</h2>
            </div>);
        case '3':
            selectedData = BlockchainTeam; 
            return (<div>
                <h2>Blockchain Team</h2>
            </div>);
        case '4':
            selectedData = DesignTeam; 
            return (<div>
                <h2>Design & Media Team</h2>
            </div>);
        case '5':
            selectedData = EventTeam; 
            return (<div>
                <h2>Events Team</h2>
            </div>);
    }
}

export default SelectedTeam;