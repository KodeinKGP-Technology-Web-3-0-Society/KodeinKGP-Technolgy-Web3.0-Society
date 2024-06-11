import React from 'react';
import './home.css';

const App = () =>{
    return (
    <div className="Roll_number_page">
      <div className="welcome-card">
        <div className='formForAskingRollNumber'>
        <span className='welcomeToPage'>WELCOME</span>
        <p className='askingForRollNumber'>Please enter your roll number</p>
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
