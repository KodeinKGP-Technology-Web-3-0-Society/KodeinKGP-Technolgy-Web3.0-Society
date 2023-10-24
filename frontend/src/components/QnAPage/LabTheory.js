import React,{useState, useEffect} from 'react';
import './LabTheory.css'
import { Link } from 'react-router-dom';
export default function LabTheory() {
  return (
    <div id='LabTheory'>
        {/* <Link to='/pds/lab'>lab</Link>
        <Link to='/pds/theory'>theory</Link> */}
        <div id='labContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Lab Problems
          </h2>
          <div id="labText" className='LabTheoryTexts'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique numquam maxime adipisci aperiam, cumque quisquam quas. Rerum, mollitia fuga? Sit, et excepturi. Odit, incidunt ipsam.
          </div>
            <button id='labBtn' className='LabTheoryBtns'><Link to='/pds/lab'>See Problems</Link></button>
        </div>
        <div id='theoryContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Theory Problems
          </h2>
          <div id="theoryText" className='LabTheoryTexts'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique numquam maxime adipisci aperiam, cumque quisquam quas. Rerum, mollitia fuga? Sit, et excepturi. Odit, incidunt ipsam.
          </div>
            <button id='theoryBtn' className='LabTheoryBtns'><Link to='/pds/lab'>See Problems</Link></button>
        </div>
    </div>
  )
}
