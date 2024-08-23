import react, { useEffect, useState } from "react";
import { DB_URL } from "../EventsPage/DB_URL";
// import Navbar from "../LandingPage/Navbar";
import "./regformcss.css";
import React from "react";
import Select from "react-select";
import aiimg from "./ai3.png";

const RegistrationForm = () => {
  const [nme, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [instituteEmail, setInstituteEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [otherInvolvements, setOtherInvolvements] = useState("");

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${DB_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nme,
          rollNumber,
          personalEmail,
          instituteEmail,
          contactNumber,
          otherInvolvements,
        }),
      });

      setName("");
      setRollNumber("");
      setPersonalEmail("");
      setInstituteEmail("");
      setContactNumber("");
      setOtherInvolvements("");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="regpage">
        <div className="imgofai">
          <img src={aiimg} className="aiimgreg" />
        </div>
        <div className="regbox">
          <h5 className=" reg-header">Registration Form </h5>
          <form onSubmit={handleSubmit} className="regformtag">
            <input
              type="text"
              id="name"
              value={nme}
              onChange={(e) => setName(e.target.value)}
              className="input_box "
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              id="roll-number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="input_box"
              placeholder="Roll Number"
              required
            />
            <input
              type="email"
              id="personal-email"
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
              className="input_box"
              placeholder="Personal E-mail"
              required
            />
            <input
              type="email"
              id="institute-email"
              value={instituteEmail}
              onChange={(e) => setInstituteEmail(e.target.value)}
              className="input_box "
              placeholder="Institute E-mail"
              required
            />
            <input
              type="tel"
              id="contact-number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="input_box"
              placeholder="Contact Number"
              required
            />
            <div className="portfolio_selector">
              <input
                type="checkbox"
                id="Trainie Developer"
                className="portfolio_checker"
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Trainie Developer
              </label>
              <input
                type="checkbox"
                id="Associate Design Member"
                className="portfolio_checker"
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Associate Design Member
              </label>
              <input
                type="checkbox"
                id="Associate Event Coordinator"
                className="portfolio_checker"
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Associate Events Coordinator
              </label>
            </div>
            <input
              type="text"
              id="other-involvements"
              value={otherInvolvements}
              onChange={(e) => setOtherInvolvements(e.target.value)}
              className="input_box"
              placeholder="Involvements"
              required
            />
          </form>
          <div className="submit">
            <button type="submit" className="reg-btn">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm;
