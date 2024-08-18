import React from "react";
import { Link } from "react-router-dom";
import "./LabCard.css";

export default function LabCard({ qna, topic, ind }) {
  let path = `/pds/lab/${topic}/${ind}`;
  return (
    <div className="labCards">
      <tr className="cardDiv">
        <th className="index">{ind + 1}</th>{" "}
        <th>
          <Link to={path} className="quest">
            {qna.Question}
          </Link>
        </th>
      </tr>
    </div>
  );
}
