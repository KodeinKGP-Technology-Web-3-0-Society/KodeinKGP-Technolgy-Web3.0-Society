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
  const [isLoad, setIsLoad] = useState(false);
  const [selTeams, setSelTeams] = useState([]);

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
    setIsLoad(true)
    try {
      const response = await fetch(`${DB_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nme,
          rollNumber,
          personalEmail,
          instituteEmail,
          contactNumber,
          otherInvolvements,
          selTeams
        }),
      }).then((data) => {
        if(data.ok){
          alert("Registration Success");
        }else if(data.status == 400){
          data.text().then((dataText) => {
            alert(dataText);
          })
        }else{
          alert("Error Registering");
        }
      }).catch((error) => {
        console.log(error)
      })

      setName("");
      setRollNumber("");
      setPersonalEmail("");
      setInstituteEmail("");
      setContactNumber("");
      setOtherInvolvements("");
      setSelTeams([]);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    setIsLoad(false)
  };

  const handleSelTeam = (team) => {
    setSelTeams(prevTeams => {
      const isTeamSelected = prevTeams.includes(team);
      if (isTeamSelected) {
        return prevTeams.filter(t => t !== team);
      } else {
        return [...prevTeams, team];
      }
    });
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
                id="Trainiee Developer"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Trainiee Developer")}
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Trainie Developer
              </label>
              <input
                type="checkbox"
                id="Associate Design Member"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Associate Design Member")}
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Associate Design Member
              </label>
              <input
                type="checkbox"
                id="Associate Event Coordinator"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Associate Event Coordinator")}
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
            <button type="submit" className="reg-btn" disabled={isLoad} onClick={(e) => handleSubmit(e)}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegistrationForm;
