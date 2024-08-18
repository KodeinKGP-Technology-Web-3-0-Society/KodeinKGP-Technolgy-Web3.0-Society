import React from "react";
import { Link } from "react-router-dom";

import "./Theory.css";

export default function Theory() {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(1, 1, 27)",
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <div>
          <h1 id="LabHeader">THEORY TOPICS</h1>
        </div>
        <div id="Lab">
          <a
            href="https://drive.google.com/file/d/1mcCy5NUCcITwl-UzIew_MTzGMILz3ux2/view?usp=sharing"
            target="_blank"
            className="classOfLinks"
          >
            <div id="initialBasics" className="LabItem">
              Initial Basics
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1Me41FYbSzZlJkm5KrJYbci5TRnMrxPGw/view?usp=sharing"
            target="_blank"
            className="classOfLinks"
          >
            <div id="loops" className="LabItem">
              Loops
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/16MjuU4kc4NhuYv75RwGxw26x8GIXWsZy/view?usp=sharing"
            target="_blank"
            className="classOfLinks"
          >
            <div id="oneDArrays" className="LabItem">
              1D Arrays and Strings
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/1ASeMcDy76F4dbjsibkxp40hM-dSTPJa2/view?usp=sharing"
            target="_blank"
            className="classOfLinks"
          >
            <div id="functions" className="LabItem">
              Functions and Recursions
            </div>
          </a>

          <a
            href="https://drive.google.com/file/d/15C3mjMMzMH-LIc3kULCD288yzgx4ht26/view?usp=sharing"
            target="_blank"
            className="classOfLinks"
          >
            <div id="pointers" className="LabItem">
              Structures and Pointers
            </div>
          </a>
          <Link to="/pds/theory/theoryTest" className="classOfLinks">
            <div id="theoryTest" className="LabItem">
              Theory Tests [Combined]
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}



