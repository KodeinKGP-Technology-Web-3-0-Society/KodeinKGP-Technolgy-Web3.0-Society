import React from "react";
import "./Footer.css";
import Logo from './kik-final-logo.png';
export default function Footer() {
    
    return (
        <div id="footer" style={{color:"white"}}>
            <div className="footerItems" id="footerItem1">

          <div className='footerHeader'>
            <img src={Logo} alt="KiK Logo" id="KiKLogo" />
            <h2 className='KiKName' >KodeinKGP</h2>
          </div>
          <div className='KiKDescription'>
            <p className='address'>
              Indian Institute of Technology Kharagpur,
              <br />
              West Bengal - 721302
            </p>
          </div>
          <div className='iconsContainer'>
            <a
              target="_blank"
              href="https://www.facebook.com/KodeinKgp-102679938719093"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://twitter.com/KgpKodein"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-twitter"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/kodeinkgp/"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>
            <div className="footerItems" id="footerItem2">
              <h1>Resources :</h1>
                <div className="footerItemElement" id="footerItemElement1">
                    <p>Blockchain:</p>
                    <ul>
                      <li>Link 1</li>
                      <li>Link 2</li>
                      <li>Link 3</li>
                    </ul>
                </div>
                <div className="footerItemElement" id="footerItemElement2">
                <p>Blockchain:</p>
                    <ul>
                      <li>Link 1</li>
                      <li>Link 2</li>
                      <li>Link 3</li>
                    </ul>
                </div>
                <div className="footerItemElement" id="footerItemElement3">
                <p>Blockchain:</p>
                    <ul>
                      <li>Link 1</li>
                      <li>Link 2</li>
                      <li>Link 3</li>
                    </ul>
                </div>
                
            </div>
            <div className="footerItems" id="footerItem3">
                <div className="footerItemElement" id="footerItemElement1">
                    Lorem, ipsum.
                </div>
                <div className="footerItemElement" id="footerItemElement2">
                    Lorem, ipsum dolor.
                </div>
                <div className="footerItemElement" id="footerItemElement3">
                    Lorem, ipsum dolor.
                </div>
                <div className="footerItemElement" id="footerItemElement4">
                    Lorem, ipsum dolor.
                </div>
            </div>
            {/* <div className="footerItems" id="footerItem4">
                <div className="footerItemElement" id="footerItemElement1">
                    Lorem, ipsum.
                </div>
                <div className="footerItemElement" id="footerItemElement2">
                    Lorem, ipsum dolor.
                </div>
                <div className="footerItemElement" id="footerItemElement3">
                    Lorem, ipsum dolor.
                </div>
                <div className="footerItemElement" id="footerItemElement4">
                    Lorem, ipsum dolor.
                </div>
            </div> */}
        </div>
    );
}
