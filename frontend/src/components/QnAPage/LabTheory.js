import React,{useState, useEffect} from 'react';
import Navbar from '../LandingPage/Navbar';
import './LabTheory.css'
import { Link } from 'react-router-dom';
export default function LabTheory() {
  return (
    <>
    <Navbar />
    <div id='LabTheory'>
        <div id='labContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Lab Problems
          </h2>
          <div id="labText" className='LabTheoryTexts'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, accusantium totam asperiores autem obcaecati nihil minima optio, aliquam sint temporibus necessitatibus quaerat nobis voluptas adipisci eos officia repudiandae sed quod ab? Illo explicabo quis ipsum tempore iste perspiciatis assumenda dolore odit dignissimos illum ipsam natus blanditiis quidem, similique maiores aut consequuntur sunt accusantium eveniet vitae quod mollitia veritatis! Quidem, dolores.
          </div>
          <Link to='/pds/lab'><button id='labBtn' className='LabTheoryBtns'>See Problems</button></Link>
            
        </div>
        <div id='theoryContainer' className='LabTheoryItems'>
        <h2 id="theoryHead" className='LabTheoryHeads'>
          Theory Problems
          </h2>
          <div id="theoryText" className='LabTheoryTexts'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut corporis eius minima assumenda veniam, facilis incidunt dolor id nobis ab quas pariatur explicabo eligendi temporibus, iusto eveniet molestiae sequi eum? Corrupti nostrum ex reprehenderit a earum in totam mollitia praesentium et, necessitatibus officia quia eos sapiente libero minima numquam sit distinctio maxime dolor commodi aliquam! Lorem ipsum dolor sit amet.lorem5 Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, similique?
          </div>
          <Link to='/pds/theory'><button id='theoryBtn' className='LabTheoryBtns'>See Problems</button></Link>
            
        </div>
    </div>
    </>
  )
}
