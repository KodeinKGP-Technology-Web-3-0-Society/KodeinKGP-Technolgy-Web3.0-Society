import React, { useState } from "react";
import dataJ from "./data.json";
import LabTopic from "./LabTopic";
import "./Lab.css";

export default function Lab() {
  const [openTopics, setOpenTopics] = useState([]);

  const toggleTopic = (topic) => {
    setOpenTopics((prevOpenTopics) =>
      prevOpenTopics.includes(topic)
        ? prevOpenTopics.filter((t) => t !== topic)
        : [...prevOpenTopics, topic]
    );
  };

  return (
    <div className="lab-container">
      <h1 id="LabHeader">LAB PROBLEMS</h1>
      <div id="Lab">
        {Object.keys(dataJ).map((topic, index) => (
          <div key={index} className="dropdown">
            <div
              className="dropdown-header"
              onClick={() => toggleTopic(topic)}
            >
              {topic.replace(/([a-z])([A-Z])/g, "$1 $2")}{" "}
              <span className="dropdown-icon">
                {openTopics.includes(topic) ? "-" : "+"}
              </span>
            </div>
            {openTopics.includes(topic) && (
              <div className="dropdown-content">
                <LabTopic topic={topic} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
