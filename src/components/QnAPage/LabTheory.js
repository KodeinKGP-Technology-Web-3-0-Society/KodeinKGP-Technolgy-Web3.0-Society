import React,{useState, useEffect} from 'react';
import Navbar from '../LandingPage/Navbar';
import Footer from '../LandingPage/Footer';
import '../LandingPage/Navbar.css';
import QuestionImg from './assets/question_mark.svg'
import './LabTheory.css'
import { Link } from 'react-router-dom';
export default function LabTheory() {
  return (
    <>
    <Navbar />
    <div id='LabTheory'>

        <div className='quesimg'>
          <div className='qimg'>
            <img src={QuestionImg} />
          </div>
          
        </div>


        <div id='labContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Lab Problems
          </h2>
          <div id="labText" className='LabTheoryTexts'>
          Welcome to our Lab Questions section, where you can embark on an exciting journey of hands-on learning. Immerse yourself in the world of programming and data structures through a wide array of exercises and challenges. Whether you're new to coding or an aspiring developer, our carefully curated collection of real-world problems and their solutions is your go-to resource. These exercises are designed to help you build a strong foundation, refine your practical skills, and gain the valuable experience necessary for success in your programming adventures.
          </div>
          <Link to='/pds/lab'><button id='labBtn' className='LabTheoryBtns'>See Problems</button></Link>
            
        </div>
        <div id='theoryContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Theory Problems
          </h2>
          <div id="theoryText" className='LabTheoryTexts'>
          Step into the realm of theoretical knowledge with our Theory Questions section. Here, you can explore the fundamental principles that underpin programming and data structures. Dive into a diverse set of questions that cover the theoretical foundations of computer science and software engineering. While these resources are valuable for learners at any level, they are particularly beneficial for those who want to deepen their understanding of the theoretical aspects of these subjects.
          </div>
          <Link to='/pds/theory'><button id='theoryBtn' className='LabTheoryBtns'>See Problems</button></Link>
            
        </div>
    </div>

    <Footer />
    </>
  )
}
