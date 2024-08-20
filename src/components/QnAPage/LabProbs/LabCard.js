import React from "react";
import { Link } from "react-router-dom";
import "./LabCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export default function LabCard({ qna, topic, ind }) {
  let path = `/pds/lab/${topic}/${ind}`;
  let question_words = qna.Question.split(" ").slice(0, 13).join(" ") + "...";
  let question_chars = qna.Question.slice(0, 100) + "...";
  return (
    <div className="labCards">
      <tr className="cardDiv">
        <td className="index">{ind + 1}</td>{" "}
        <td className="lc-ques">
          {question_words.length > question_chars.length
            ? question_chars
            : question_words}
        </td>
        <td className="lc-link">
          <Link to={path} className="quest" target="_blank">
            <FontAwesomeIcon icon={faNewspaper} />
          </Link>
        </td>
      </tr>
    </div>
  );
}
