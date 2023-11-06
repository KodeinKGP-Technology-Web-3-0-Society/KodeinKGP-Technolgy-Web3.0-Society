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
            return (<div>hi</div>);
    }
}

export default SelectedTeam;