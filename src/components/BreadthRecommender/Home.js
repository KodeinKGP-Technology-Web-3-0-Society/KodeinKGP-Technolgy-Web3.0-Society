import React from 'react';
import './home.css';

const App = () =>{
  
    return (
    <div className="Roll_number_page">
      <div className="welcome-card">
        <div className='formForAskingRollNumber'>
        <span className='welcomeToPage'>WELCOME</span>
        <br/>
        <span className='askingForRollNumber'>Please enter your roll number</span>
        <form>
          <input
            type="text"
            placeholder="XXXXXXXXX"
            id='impufy'
          />
          <br/>
          <button type="submit" class="submissionbuttonRollNumber" onClick={()=>{
              let val =document.getElementById("impufy").value;
              let pattern=/^[0-9]{2}[A-Z]{2}[0-9]{5}$/;;
              let result=pattern.test(val)
              if(result){
                window.alert("Success");
              }
              else{
                window.alert("error");
              }
            }}>SUBMIT</button>
        </form>
          </div>
      </div>
    </div>
  );
}

export default App;

