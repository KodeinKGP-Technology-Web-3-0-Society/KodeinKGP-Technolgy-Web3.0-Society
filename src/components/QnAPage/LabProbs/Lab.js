import React, { useState } from "react";
import dataJ from "./data.json";
import LabSubtopic from "./LabSubtopic";
import "./Lab.css";

export default function Lab() {
  const [openTopics, setOpenTopics] = useState([]);

  const toggleTopic = (topicName) => {
    setOpenTopics((prevOpenTopics) =>
      prevOpenTopics.includes(topicName)
        ? prevOpenTopics.filter((t) => t !== topicName)
        : [...prevOpenTopics, topicName]
    );
  };

  const renderTopicHeader = (type) => {
    if (type === "initialBasics") {
      return "Initial Basics";
    } else if (type === "loops") {
      return "Loops";
    }
    return "";
  };

  const combinedTopics = [
    { type: "initialBasics", data: dataJ.initialBasics },
    { type: "loops", data: dataJ.loops }
  ];

  return (
    <div className="lab-container">
      <h1 id="LabHeader">LAB PROBLEMS</h1>
      <div id="Lab">
        {combinedTopics.map(({ type, data }, index) => (
          <div key={index} className="dropdown">
            <div
              className="dropdown-header"
              onClick={() => toggleTopic(type)}
            >
              {renderTopicHeader(type)}
              <span className="dropdown-icon">
                {openTopics.includes(type) ? "-" : "+"}
              </span>
            </div>
            {openTopics.includes(type) && (
              <div className="dropdown-content">
                {data
                  .filter(item => item.type === "lab")
                  .map((topic, index) => (
                    <LabSubtopic
                      key={index}
                      subtopicsArray={topic.subtopics} // Pass subtopics to LabSubtopic
                      topic={renderTopicHeader(type)} // Display "Initial Basics" or "Loops"
                    />
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

