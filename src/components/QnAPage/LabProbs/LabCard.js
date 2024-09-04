import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LabCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dataJ from "./data.json";
import {
  faNewspaper,
  faSquareCheck,
  faSquare,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function LabCard({ qna, topic, ind }) {
  const key = `${topic}-${ind}`;
  const [isFav, setisFav] = useState(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
    return savedFavourites.indexOf(key) !== -1;
  });

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (isFav) {
      if (!savedFavourites.includes(key)) {
        savedFavourites.push(key);
      }
    } else {
      const index = savedFavourites.indexOf(key);
      if (index !== -1) {
        savedFavourites.splice(index, 1);
      }
    }
    localStorage.setItem("favourites", JSON.stringify(savedFavourites));
  }, [isFav, key]);

  const toggleFavourite = () => {
    setisFav((prevFav) => !prevFav); // Toggle the state
  };

  const [isComp, setisComp] = useState(() => {
    const savedComp = JSON.parse(localStorage.getItem("completed"));
    return savedComp.indexOf(key) !== -1;
  });

  useEffect(() => {
    const savedComp = JSON.parse(localStorage.getItem("completed"));
    if (isComp) {
      if (!savedComp.includes(key)) {
        savedComp.push(key);
      }
    } else {
      const index = savedComp.indexOf(key);
      if (index !== -1) {
        savedComp.splice(index, 1);
      }
    }
    localStorage.setItem("completed", JSON.stringify(savedComp));
  }, [isComp, key]);

  const toggleCompleted = () => {
    setisComp((prevComp) => !prevComp); // Toggle the state
  };

  let path = `/pds/lab/${topic}/${ind}`;
  let question_words = qna.Question.split(" ").slice(0, 13).join(" ") + "...";
  let question_chars = qna.Question.slice(0, 100) + "...";
  return (
    <tr className="cardDiv">
      {/* <td className="index">{ind + 1}</td> */}
      <td className="mark-completed">
        <span className="checkbox" onClick={() => toggleCompleted()}>
          {isComp ? (
            <FontAwesomeIcon icon={faSquareCheck} />
          ) : (
            <FontAwesomeIcon icon={faSquare} />
          )}
        </span>
      </td>
      <td className="lc-ques">
        <Link to={path} className="ques-link" target="_blank">
          {question_words.length > question_chars.length
            ? question_chars
            : question_words}
        </Link>
      </td>
      <td className="favourite">
        <span
          className="fav-star"
          style={{
            color: isFav ? "yellow" : "white",
          }}
          onClick={() => toggleFavourite()}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      </td>
      {/* <td className="lc-link">
        <Link to={path} className="quest" target="_blank">
          <FontAwesomeIcon icon={faNewspaper} />
        </Link>
      </td> */}
    </tr>
  );
}
