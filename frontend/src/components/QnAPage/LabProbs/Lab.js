import React from 'react'
import { Link } from 'react-router-dom'
import './Lab.css'
export default function Lab() {
  return (
    <>
    <div ><h1 id="LabHeader">TOPICS</h1></div>
    <div id='Lab'>
    <Link to='/pds/lab/initialBasics' className="classOfLinks">
  <div id="initialBasics" className="LabItem">Initial Basics</div>
</Link>

<Link to='/pds/lab/ArrayAndStrings' className="classOfLinks">
  <div id="oneDArrays" className="LabItem">1D Arrays and Strings</div>
</Link>

<Link to='/pds/lab/functionsAndRecursions' className="classOfLinks">
  <div id="functions" className="LabItem">Functions and Recursions</div>
</Link>

<Link to='/pds/lab/structuresAndPointers' className="classOfLinks">
  <div id="pointers" className="LabItem">Structures and Pointers</div>
</Link>

<Link to='/pds/lab/sortingAnd2dArrays' className="classOfLinks">
  <div id="twoDArrays" className="LabItem">Sorting and 2D Arrays</div>
</Link>

<Link to='/pds/lab/linkedList' className="classOfLinks">
  <div id="linkedLists" className="LabItem">Linked Lists and Files</div>
</Link>


    </div>
    </>
  )
}
