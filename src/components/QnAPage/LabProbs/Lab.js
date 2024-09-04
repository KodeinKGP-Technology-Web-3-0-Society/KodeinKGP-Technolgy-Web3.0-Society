import React, { useEffect, useState } from "react";
import dataJ from "./data.json";
import LabTopic from "./LabTopic";
import "./Lab.css";

export default function Lab() {
  const [openTopics, setOpenTopics] = useState([]);
  const [viewMode, setViewMode] = useState("All Questions"); // "All Questions", "Favourite Questions", Incomplete Questions
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("favourites")) {
      localStorage.setItem("favourites", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("completed")) {
      localStorage.setItem("completed", JSON.stringify([]));
    }
  }, []);

  const toggleTopic = (topic) => {
    setOpenTopics((prevOpenTopics) =>
      prevOpenTopics.includes(topic)
        ? prevOpenTopics.filter((t) => t !== topic)
        : [...prevOpenTopics, topic]
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleViewModeChange = (mode) => {
    setViewMode(mode);
    setIsDropdownOpen(false);
  };

  return (
    <div className="lab-container">
      <h1 id="LabHeader">LAB PROBLEMS</h1>
      <div className="dropdown-filter">
        <div
          className={`custom-dropdown ${isDropdownOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <div className="custom-dropdown-selected">
            {viewMode}
            <span className="custom-dropdown-icon">
              {isDropdownOpen ? "▲" : "▼"}
            </span>
          </div>
          <div className="custom-dropdown-options">
            <div
              className="custom-dropdown-option"
              onClick={() => handleViewModeChange("All Questions")}
            >
              All Questions
            </div>
            <div
              className="custom-dropdown-option"
              onClick={() => handleViewModeChange("Favourite Questions")}
            >
              Favourite Questions
            </div>
            <div
              className="custom-dropdown-option"
              onClick={() => handleViewModeChange("Incomplete Questions")}
            >
              Incomplete Questions
            </div>
          </div>
        </div>
      </div>
      <div id="Lab">
        {Object.keys(dataJ).map((topic, index) => (
          <div key={index} className="dropdown">
            <div className="dropdown-header" onClick={() => toggleTopic(topic)}>
              {topic
                .replace(/([a-z])([A-Z0-9])|([A-Z])([0-9])/g, "$1$3 $2$4")
                .replace(/\bAnd\b/g, "and")}
              <span className="dropdown-icon">
                {openTopics.includes(topic) ? "-" : "+"}
              </span>
            </div>
            {openTopics.includes(topic) && (
              <div className="dropdown-content">
                <LabTopic topic={topic} viewMode={viewMode} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
