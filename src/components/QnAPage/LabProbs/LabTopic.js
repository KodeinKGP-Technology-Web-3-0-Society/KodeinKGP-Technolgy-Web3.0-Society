import React from "react";
import dataJ from "./data.json";
import LabCard from "./LabCard";
import "./LabTopic.css";

export default function LabTopic({ topic }) {
  const data = dataJ;
  let arr = [];

  if (topic === "labTest") {
    const topicArray = [
      "InitialBasics",
      "Loops",
      "ArrayAndStrings",
      "FunctionsAndRecursions",
      "StructuresAndPointers",
      "SortingAnd2dArrays",
      "LinkedList",
    ];
    topicArray.forEach((element) => {
      arr = arr.concat(data[element][2].Elements);
    });
  } else {
    arr = data[topic][0].Elements;
  }

  return (
    <div className="LabTopicList">
      <table className="ques-table">
        {arr.map((ele, ind) => (
          <LabCard key={ind} qna={arr[ind]} topic={topic} ind={ind} />
        ))}
      </table>
    </div>
  );
}
