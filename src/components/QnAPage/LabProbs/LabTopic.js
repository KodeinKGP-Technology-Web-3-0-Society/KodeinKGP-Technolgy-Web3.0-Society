import React from "react";
import dataJ from "./data.json";
import LabCard from "./LabCard";
import "./LabTopic.css";

export default function LabTopic({ topic, viewMode }) {
  const getQuestionsData = () => {
    if (viewMode === "Favourite Questions") {
      const savedFavourites =
        JSON.parse(localStorage.getItem("favourites")) || [];
      const favQuestions = {};
      const topicArray = [
        "InitialBasics",
        "Loops",
        "ArrayAndStrings",
        "FunctionsAndRecursions",
        "StructuresAndPointers",
        "SortingAnd2dArrays",
        "LinkedList",
      ];
      topicArray.forEach((t) => {
        favQuestions[t] = [{ type: "lab", Elements: [] }];
      });
      savedFavourites.forEach((key) => {
        const [t, index] = key.split("-");
        const question = dataJ[t][0].Elements[index];
        favQuestions[t][0].Elements.push(question);
      });
      return favQuestions[topic][0].Elements;
    } else if (viewMode === "Incomplete Questions") {
      const completedQues = JSON.parse(localStorage.getItem("completed"));
      const incompleteQues = {};
      const topicArray = [
        "InitialBasics",
        "Loops",
        "ArrayAndStrings",
        "FunctionsAndRecursions",
        "StructuresAndPointers",
        "SortingAnd2dArrays",
        "LinkedList",
      ];
      topicArray.forEach((t) => {
        incompleteQues[t] = [{ type: "lab", Elements: [] }];
      });
      Object.keys(dataJ).forEach((topic) => {
        const questions = dataJ[topic][0].Elements; // Assuming elements are stored in this format
        questions.forEach((question, index) => {
          const key = `${topic}-${index}`;
          if (!completedQues.includes(key)) {
            incompleteQues[topic][0].Elements.push(question);
          }
        });
      });
      return incompleteQues[topic][0].Elements;
    } else {
      if (topic === "labTest") {
        const topicArray = [
          "initialBasics",
          "loops",
          "ArrayAndStrings",
          "functionsAndRecursions",
          "structuresAndPointers",
          "sortingAnd2dArrays",
          "linkedList",
        ];
        return topicArray.flatMap((element) => dataJ[element][2].Elements);
      } else {
        return dataJ[topic][0].Elements;
      }
    }
  };

  const questionsData = getQuestionsData();

  return (
    <div className="LabTopicList">
      <table className="ques-table">
        <tbody>
          {questionsData.map((qa, ind) => (
            <LabCard
              key={dataJ[topic][0]["Elements"].indexOf(qa)}
              qna={qa}
              topic={topic}
              ind={dataJ[topic][0]["Elements"].indexOf(qa)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
