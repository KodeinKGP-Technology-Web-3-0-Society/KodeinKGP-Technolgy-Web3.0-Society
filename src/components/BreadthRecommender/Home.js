import React from 'react';
import './home.css';
import Navbar from '../LandingPage/Navbar';


const App = () =>{
    return (
    
    <div className="Roll_number_page">
        <Navbar />
      <div className="welcome-card">
        <div className='formForAskingRollNumber'>
        <span className='welcomeToPage'>WELCOME</span>
        <br/>
        <span className='askingForRollNumber'>Please enter your roll number</span>
        <form>
          <input
            type="text"
            placeholder="XXXXXXXXX"
          />
          <br/>
          <button type="submit" class="submissionbuttonRollNumber">SUBMIT</button>
        </form>
          </div>
      </div>
    </div>
  );
}

export default App;
