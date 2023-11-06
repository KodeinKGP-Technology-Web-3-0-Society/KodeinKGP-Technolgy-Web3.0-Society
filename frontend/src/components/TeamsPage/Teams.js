import React, { useState } from 'react';
import SelectedTeam from "./SelectedTeam";
import './SelectedTeam.css';

const Teams = () =>{
    const [activeButton, setActiveButton] = useState('1');

    const ButtonClicked = (e)=>{
        setActiveButton(e.target.id)
        // console.log(e.target.id);
    }

    
    return(
        <div className='teams'>
        <div className='classif-buttons'>
            <button className={`team-button ${activeButton === '1' ? 'active' : ''}`} id='1' onClick={ButtonClicked}>Tech Team</button>
            <button className={`team-button ${activeButton === '2' ? 'active' : ''}`} id='2' onClick={ButtonClicked}>AI&Metaverse Team</button>
            <button className={`team-button ${activeButton === '3' ? 'active' : ''}`} id='3' onClick={ButtonClicked}>Blockchain Team</button>
            <button className={`team-button ${activeButton === '4' ? 'active' : ''}`} id='4' onClick={ButtonClicked}>Design&Media Team</button>
            <button className={`team-button ${activeButton === '5' ? 'active' : ''}`} id='5' onClick={ButtonClicked}>Events Team</button>
        </div>
        <div>
            <SelectedTeam id={activeButton} />
        </div>
        </div>
    );
}

export default Teams;