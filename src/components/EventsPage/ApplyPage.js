import React, { useState } from "react";
import ProblemStatement1 from "./ProblemStatement1";
import ProblemStatement2 from "./ProblemStatement2";
import ProblemStatement3 from "./ProblemStatement3";
import Image from "./Images/Swadeshi_event.png";
import "./ApplyPage.css";

const ApplyPage = () => {
  const [activeButton, setActiveButton] = useState("1");

  const ButtonClicked = (e) => {
    setActiveButton(e.target.id);
    // console.log(e.target.id);
  };

  function ProblemSelect() {
    switch (activeButton) {
      case "1":
        return <ProblemStatement1 />;
        break;
      case "2":
        return <ProblemStatement2 />;
        break;
      case "3":
        return <ProblemStatement3 />;
        break;
      default:
        return null;
    }
  }

  return (
    <div className="applyPage">
      <div className="apply_content">
        <img src={Image} alt="event-image" className="event_image" />
        <h2 className="apply_title">INNOVATE4SWADESHI</h2>
        <p className="apply_details">
          <span>Registration deadline : </span>27th Nov 2023
        </p>
        <p className="apply_details">
          <span>Submission deadline : </span>2nd Dec 2023
        </p>
        {/* <p className=''></p> */}
        <div className="classif-buttons">
          <button
            className={`team-button ${activeButton === "1" ? "active" : ""}`}
            id="1"
            onClick={ButtonClicked}
          >
            Question 1
          </button>
          <button
            className={`team-button ${activeButton === "2" ? "active" : ""}`}
            id="2"
            onClick={ButtonClicked}
          >
            Question 2
          </button>
          <button
            className={`team-button ${activeButton === "3" ? "active" : ""}`}
            id="3"
            onClick={ButtonClicked}
          >
            Question 3
          </button>
        </div>
      </div>
      <ProblemSelect />
    </div>
  );
};

export default ApplyPage;
