import React from "react";
import { Link } from "react-router-dom";
import "./LabCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function LabCard({ qna, topic, ind }) {
  let path = `/pds/lab/${topic}/${ind}`;
  return (
    <div className="labCards">
      <tr className="cardDiv">
        <td className="index">{ind + 1}</td>{" "}
        <td className="lc-ques">
            {qna.Question}
        </td>
        <td className="lc-link">
          <Link to={path} className="quest">
            <FontAwesomeIcon icon={faNewspaper} />
          </Link>
        </td>
      </tr>
    </div>
  );
}
