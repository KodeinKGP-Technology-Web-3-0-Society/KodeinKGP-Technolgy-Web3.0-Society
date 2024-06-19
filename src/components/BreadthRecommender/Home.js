import React, { useState, useEffect } from 'react';
import './home.css';
import Navbar from '../LandingPage/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from './bgpng.png';
import image2 from './bg2png.png'; 

const Home = () => {
  const [myImage, setMyImage] = useState(window.innerWidth < 767 ? image2 : image1);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setMyImage(windowWidth < 767 ? image2 : image1);
  }, [windowWidth]);

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

  return (
    <div className="Roll_number_page">
      <img src={myImage} className='bgimg' alt="Background" />
      {/* <Navbar/> */}
      <div className="welcome-card">
        <div className='formForAskingRollNumber'>
          <span className='welcomeToPage'>WELCOME</span>
          <br />
          <span className='askingForRollNumber'>Please enter your roll number</span>
          <form>
            <input
              type="text"
              placeholder="XXXXXXXXX"
              id='impufy'
            />
            <br />
            <button type="submit" className="submissionbuttonRollNumber" onClick={notify}>
              SUBMIT
            </button>
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
