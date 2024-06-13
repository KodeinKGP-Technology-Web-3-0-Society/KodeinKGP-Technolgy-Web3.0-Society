import React, { useEffect } from 'react';
import './home.css';
import Navbar from '../LandingPage/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import myImage from './bgpng.png'; 

const Home = () =>{
  // useEffect(() => {
  //   background();
  //   window.addEventListener('resize', background);
  //   return () => window.removeEventListener('resize', background);
  // }, []);

  const notify = (event) => {
    event.preventDefault();
    let val = document.getElementById("impufy").value;
    let pattern = /^[0-9]{2}[A-Z]{2}[0-9]{5}$/;
    let result = pattern.test(val);
    if (result) {
      toast.success('Success', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      toast.error('Error', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
            // const background = () => {
            //   if (window.matchMedia('(max-width: 767px) and (max-height: 1000px)').matches) {
            //     document.querySelector('.bgimg').src = './bg2png.png';
            //   } else {
            //     document.querySelector('.bgimg').src = './bgpng.png';
            //   }
            // };
    return (
    <div className="Roll_number_page">
      <img src={myImage} className='bgimg' />
      {/* <Navbar/> */}
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
          <button type="submit" class="submissionbuttonRollNumber" onClick={notify}
            >SUBMIT</button>
            <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
              />
        </form> 
          </div>
      </div>
     </div>
  );
}

export default Home;
