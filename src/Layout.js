import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Animation from "./components/LandingPage/Animation";

function Layout() {

  const [animate, setAnimate] = useState(true)
  const [loading, setLoading] = useState(false);


  // setTimeout(() => {
  //   setLoading(false);
  // }, 5000);

  return (
    <>
      {!animate && !loading && (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )}
      {animate && <Animation animate={animate} setAnimate={setAnimate} />}
    </>
  );

}

export default Layout;
