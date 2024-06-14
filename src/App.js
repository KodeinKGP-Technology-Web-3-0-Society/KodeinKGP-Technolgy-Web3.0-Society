// import logo from './logo.svg';
import React from 'react';

import Labtheory from "./components/QnAPage/LabTheory";
import Lab from "./components/QnAPage/LabProbs/Lab";
import Theory from "./components/QnAPage/TheoryProbs/Theory";
import LabTopic from "./components/QnAPage/LabProbs/LabTopic";
import LabQuestion from "./components/QnAPage/LabProbs/LabQuestion";
import TheoryQuestion from './components/QnAPage/TheoryProbs/TheoryQuestion';

import TheoryTopic from './components/QnAPage/TheoryProbs/TheoryTopic';
import TeamsPage from "./components/TeamsPage/TeamsPage";
import EventsPage from './components/EventsPage/EventsPage';
import Home from "./components/LandingPage/Home";
import ApplyPage from './components/EventsPage/ApplyPage';
import BreadthRecommender from './components/BreadthRecommender/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Timetable from './components/BreadthRecommender/Timetable';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pds' element={<Labtheory />} />
          <Route path='/pds/lab' element={<Lab />} />
          <Route path='/pds/theory' element={<Theory />} />
          <Route path='/pds/lab/:topic' element={<LabTopic />} />
          <Route path='/pds/theory/:topic' element={<TheoryTopic />} />
          <Route path='/pds/lab/:topic/:ind' element={<LabQuestion />} />
          <Route path='/pds/theory/:topic/:ind' element={<TheoryQuestion />} />
          <Route path='/teams' element={<TeamsPage />}></Route>
          <Route path='/events' element={<EventsPage />}></Route>
          <Route path='/events/apply' element={<ApplyPage />} ></Route>
          <Route path='/breadth-recommend' element={<BreadthRecommender />} ></Route>
          <Route path='/breadth-recommend/timetable' element={<Timetable />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
