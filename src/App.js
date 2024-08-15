// import logo from './logo.svg';
import React from "react";

import Labtheory from "./components/QnAPage/LabTheory";
import Lab from "./components/QnAPage/LabProbs/Lab";
import Theory from "./components/QnAPage/TheoryProbs/Theory";
import LabTopic from "./components/QnAPage/LabProbs/LabTopic";
import LabQuestion from "./components/QnAPage/LabProbs/LabQuestion";
import TheoryQuestion from "./components/QnAPage/TheoryProbs/TheoryQuestion";
import Selection from "./Selection";

import TheoryTopic from "./components/QnAPage/TheoryProbs/TheoryTopic";
import TeamsPage from "./components/TeamsPage/TeamsPage";
import EventsPage from "./components/EventsPage/EventsPage";
import Home from "./components/LandingPage/Home";
import ApplyPage from "./components/EventsPage/ApplyPage";
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/pds" element={<Labtheory />} />
            <Route path="/pds/lab" element={<Lab />} />
            <Route path="/pds/theory" element={<Theory />} />
            <Route path="/pds/lab/:topic" element={<LabTopic />} />
            <Route path="/pds/theory/:topic" element={<TheoryTopic />} />
            <Route path="/pds/lab/:topic/:ind" element={<LabQuestion />} />
            <Route
              path="/pds/theory/:topic/:ind"
              element={<TheoryQuestion />}
            />
            <Route path="/teams" element={<TeamsPage />}></Route>
            <Route path="/events" element={<EventsPage />}></Route>
            <Route path="/events/apply" element={<ApplyPage />}></Route>
            <Route path="/selections" element={<Selection />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;