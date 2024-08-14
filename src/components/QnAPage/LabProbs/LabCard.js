import React from "react";
import { Link } from "react-router-dom";
import "./LabCard.css";

export default function LabCard({ qna, subtopicName, topic, ind }) {
    // Generate the correct path with topic, subtopicName, and index
    const path = `/pds/lab/${topic}/${subtopicName}/${ind}`;

    return (
        <Link to={path} className="labCards">
            <div className="cardDiv">
                <p className="text">
                    <span className="index">{ind + 1}.</span> {qna.Question}
                </p>
            </div>
        </Link>
    );
}

