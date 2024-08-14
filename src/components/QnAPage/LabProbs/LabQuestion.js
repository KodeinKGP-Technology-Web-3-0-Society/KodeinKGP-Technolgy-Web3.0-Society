import React from "react";
import dataJ from "./data.json";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "./LabQuestion.css";

export default function LabQuestion() {
    const [flag, setFlag] = React.useState(0);
    const [copy, setCopy] = React.useState(0);

    console.log(dataJ)

    const data = dataJ;
    const param = useParams();
    const topic = param.topic;
    const ind = parseInt(param.ind, 10); 
    const subtopicname = param.subtopicName;
    let arr = [];
    let arr1=[];

    console.log("Topic:", topic);
    console.log("Index:", ind);
    console.log("subtopicName:", subtopicname);
    
 
        const topicArray = [
            "initialBasics",
            "loops",
            "ArrayAndStrings",
            "functionsAndRecursions",
            "structuresAndPointers",
            "sortingAnd2dArrays",
            "linkedList"
        ];

        // topicArray.forEach(topicName => {
        //     const subtopics = data[topicName];
        //     console.log(`Subtopics for ${topicName}:`, subtopics);
        //     if (Array.isArray(subtopics)) {
        //         subtopics.forEach(subtopic => {
        //             if (Array.isArray(subtopic.Elements)) {
        //                 arr = arr.concat(subtopic.Elements);
        //             }
        //         });
        //     }
        // });
  
        // const subtopics = data[topic];
        // console.log(`Subtopics for ${topic}:`, subtopics);
        // if (Array.isArray(subtopics)) {
        //     subtopics.forEach(subtopic => {
        //         if (Array.isArray(subtopic.Elements)) {
        //             arr1 = arr1.concat(subtopic.Elements);
        //         }
        //     });
        // }
        let a=0;
    let subtopi=data[topic];
    console.log(subtopi);
    let k=subtopi['subtopics'];
    k.foreach((val,i)=>{
        if(val.subtopicName===subtopicname)a=i;
    })   
    arr1=subtopi[a].Elements;


    const q = arr1[ind]?.Question || "Question not found";
    const sol = arr1[ind]?.Answer || "Solution not found";


    const handleCopy = () => {
        navigator.clipboard.writeText(sol);
        setCopy(1);
        setTimeout(() => {
            setCopy(0);
        }, 2000);
    };

    const fun = () => {
        if (flag === 0) {
            return null;
        } else {
            return (
                <>
                    <div className="solution">
                        <div className="copy">
                            {copy ? (
                                <button className="copyBtn">
                                    <span className="clip">
                                        <ion-icon name="checkmark-sharp"></ion-icon>
                                    </span>
                                    copied!
                                </button>
                            ) : (
                                <button className="copyBtn" onClick={handleCopy}>
                                    <span className="clip">
                                        <ion-icon name="clipboard-outline"></ion-icon>
                                    </span>
                                    copy code
                                </button>
                            )}
                        </div>
                        <SyntaxHighlighter
                            language="cpp"
                            style={dracula}
                            customStyle={{
                                padding: "1.9rem",
                                margin: "0rem",
                            }}
                            wrapLongLines={true}
                        >
                            {sol}
                        </SyntaxHighlighter>
                    </div>
                </>
            );
        }
    };

    const toggleHide = () => {
        const s = document.getElementById("toggleBtn");
        if (flag === 0) {
            s.innerHTML = "hide solution";
            setFlag(1);
        } else {
            s.innerHTML = "show solution";
            setFlag(0);
        }
    };

    return (
        <>
            <div className="question">
                <pre className="pretext">{q}</pre>
            </div>
            <button onClick={toggleHide} id="toggleBtn">
                show solution
            </button>
            <div>{fun()}</div>
            <button className="onlineEditor">
                <a
                    href="https://www.programiz.com/c-programming/online-compiler/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="editorLink"
                >
                    open online editor
                </a>
            </button>
        </>
    );
}

