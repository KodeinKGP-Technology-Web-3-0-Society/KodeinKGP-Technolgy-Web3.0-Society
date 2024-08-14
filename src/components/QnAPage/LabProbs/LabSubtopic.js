import React, { useState } from "react";
import LabCard from "./LabCard";
import "./LabSubtopic.css";

export default function LabSubtopic({ subtopicsArray, topic }) {
    const [openSubtopics, setOpenSubtopics] = useState([]);

    const toggleSubtopic = (subtopicName) => {
        setOpenSubtopics((prevOpenSubtopics) =>
            prevOpenSubtopics.includes(subtopicName)
                ? prevOpenSubtopics.filter((s) => s !== subtopicName)
                : [...prevOpenSubtopics, subtopicName]
        );
    };

    return (
        <div className="LabSubtopic">
            {subtopicsArray.map((subtopic, subIndex) => (
                <div key={subIndex}>
                    <div
                        className="Labtopic"
                        onClick={() => toggleSubtopic(subtopic.subtopicName)}
                    >
                        <span>{subtopic.subtopicName}</span>
                        <span className="dropdown-icon">
                            {openSubtopics.includes(subtopic.subtopicName) ? "-" : "+"}
                        </span>
                    </div>
                    {openSubtopics.includes(subtopic.subtopicName) && (
                        <div className="dropdown-content">
                            {subtopic.Elements.map((element, index) => (
                                <LabCard
                                    key={index}
                                    qna={element}
                                    subtopicName={subtopic.subtopicName}
                                    topic={topic}
                                    ind={index}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
