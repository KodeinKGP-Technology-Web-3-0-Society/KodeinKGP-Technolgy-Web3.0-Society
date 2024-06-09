import React from 'react';
import './home.css';

const Home = () =>{
    return (
    <div className="container">
      <div className="welcome-box">
        <div className='form1'>
        <h1>WELCOME</h1>
        <p>Please enter your roll number</p>
        <form>
          <input
            type="text"
            placeholder="XXXXXXXXX"
          />
          <br/>
          <button type="submit">SUBMIT</button>
        </form>
          </div>
      </div>
    </div>
  );
}

export default Home;
