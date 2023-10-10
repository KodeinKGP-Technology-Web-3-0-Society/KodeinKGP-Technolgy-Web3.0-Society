import React from "react";
import dataJ from "./data.json";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
export default function LabQuestion() {
    const [flag, setFlag] = React.useState(0);
    // const data = JSON.parse(dataJ);
    const data = dataJ;
    const param = useParams();
    const topic = param.topic;
    const ind = param.ind;
    const arr = data[topic][0].Elements;
    const q = arr[ind].Question;
    const sol = arr[ind].Answer;
    const fun = () => {
        if (flag === 0) {
            return <></>;
        } else {
            return (
                <>
                    <SyntaxHighlighter
                        language="cpp"
                        style={dracula}
                        customStyle={{
                            padding: "2rem",
                        }}
                    >
                        {sol}
                    </SyntaxHighlighter>
                </>
            );
        }
    };
    const toggleHide = () => {
        const s = document.getElementById("btn");
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
            <div>
                <pre>{q}</pre>
            </div>
            <button onClick={toggleHide} id="btn">
                show solution
            </button>
            <div>{fun()}</div>
            <div>
                <a
                    href="https://www.programiz.com/c-programming/online-compiler/"
                    target="blank"
                >
                    open online editor
                </a>
            </div>
        </>
    );
}
