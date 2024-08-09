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

  const topicMap = {
    initialBasics: "Initial Basics",
    loops: "Loops",
    ArrayAndStrings: "Array And Strings",
    functionsAndRecursions: "Functions And Recursions",
    structuresAndPointers: "Structs And Pointers",
    sortingAnd2dArrays: "Sorting And 2d Arrays",
    linkedList: "Linked List",
  };

  return (
    <div className="lab-container">
      <h1 id="LabHeader">LAB PROBLEMS</h1>
      <div id="Lab">
        {Object.keys(topicMap).map((topic, index) => (
          <div
            key={index}
            className={`dropdown ${openTopics.includes(topic) ? "open" : ""}`}
          >
            <div
              className="dropdown-header"
              onClick={() => toggleTopic(topic)}
            >
              {topicMap[topic]}{" "}
              <span className="dropdown-icon">
                {openTopics.includes(topic) ? "-" : "+"}
              </span>
            </div>
            <div className="dropdown-content">
              <LabTopic topic={topic} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
