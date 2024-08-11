import React from "react";
import "./Footer.css";
import Logo from "../LandingPage/kik-final-logo.png";
export default function Footer() {
  return (
    <div id="footer">
      <div className="footerItems" id="footerItem1">
        <div className="footerHeader">
          <img src={Logo} alt="KiK Logo" id="KiKLogo" />
          <h2 className="KiKName">KodeinKGP</h2>
        </div>
        <div className="KiKDescription">
          <p className="address">
            Indian Institute of Technology Kharagpur,
            <br />
            West Bengal - 721302
          </p>
        </div>
        <div className='iconsContainer'>
            <a
              target="_blank"
              href="https://www.facebook.com/kodeinkgp?mibextid=ZbWKwL"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-facebook"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/kodeinkgp_iitkgp?igsh=cmhyMXM3YTA5YzZm"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-instagram"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/kodeinkgp/"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-linkedin"></ion-icon>
            </a>
            <a
              target="_blank"
              href="https://medium.com/@kodeinkgp"
              rel="noreferrer"
            >
              <ion-icon size="large" name="logo-medium"></ion-icon>
            </a>
          </div>
      </div>
      <div className="footerItems" id="footerItem2">
        <div className="footerItemElement" id="footerItemElement1">
          Blockchain
        </div>
        <div className="footerItemElement" id="footerItemElement2">
          <a
            className="footerLinks"
            href="https://www.youtube.com/watch?v=gyMwXuJrbJQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            freeCodeCamp
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement3">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@CodeEater21/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Eater
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement4">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@WhiteboardCrypto"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whiteboard Crypto
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement5">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@Finematics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Finematics
          </a>
        </div>
      </div>
      <div className="footerItems" id="footerItem3">
        <div className="footerItemElement" id="footerItemElement1">
          Machine Learning
        </div>
        <div className="footerItemElement" id="footerItemElement2">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@Deeplearningai"
            target="_blank"
            rel="noopener noreferrer"
          >
            DeepLearningAI
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement3">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@SirajRaval/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Siraj Raval
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement4">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@sentdex/playlists"
            target="_blank"
            rel="noopener noreferrer"
          >
            sentdex
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement5">
          <a
            className="footerLinks"
            href="https://www.youtube.com/@coreyms/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Corey Schafer
          </a>
        </div>
      </div>
      <div className="footerItems" id="footerItem4">
        <div className="footerItemElement" id="footerItemElement1">
          Web Development
        </div>
        <div className="footerItemElement" id="footerItemElement2">
          <a
            className="footerLinks"
            href="https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg"
            target="_blank"
            rel="noopener noreferrer"
          >
            CodeWithHarry
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement3">
          <a
            className="footerLinks"
            href="https://www.youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apna College
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement4">
          <a
            className="footerLinks"
            href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G"
            target="_blank"
            rel="noopener noreferrer"
          >
            net ninja
          </a>
        </div>
        <div className="footerItemElement" id="footerItemElement5">
          <a
            className="footerLinks"
            href="https://www.youtube.com/playlist?list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Traversy Media
          </a>
        </div>
      </div>
    </div>
  );
}
