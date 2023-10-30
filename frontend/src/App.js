// import logo from './logo.svg';
import Labtheory from "./components/QnAPage/LabTheory";
import Lab from "./components/QnAPage/LabProbs/Lab";
import LabTopic from "./components/QnAPage/LabProbs/LabTopic";
import LabQuestion from "./components/QnAPage/LabProbs/LabQuestion";
import TeamsPage from "./components/TeamsPage/TeamsPage"; 
import React from 'react';
import Home from "./components/LandingPage/Home";
import TeamsPage from './components/TeamsPage/TeamsPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pds' element={<Labtheory/>} />
        <Route path='/pds/lab' element={<Lab/>} />
        <Route path='/pds/lab/:topic' element={<LabTopic/>} />
        <Route path='/pds/lab/:topic/:ind' element={<LabQuestion/>} />
        <Route path='/teams' element={<TeamsPage/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
