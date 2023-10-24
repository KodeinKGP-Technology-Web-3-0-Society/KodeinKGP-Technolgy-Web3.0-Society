import React from 'react'
import { Link } from 'react-router-dom'
import './Lab.css'
export default function Lab() {
  return (
    <>
    <div ><h1 id="LabHeader">TOPICS</h1></div>
    <div id='Lab'>
      {/* <Link to='/pds/lab/initialBasics'>Initial Basics</Link>
      <Link to='/pds/lab/ArrayAndStrings'>1D Arrays and Strings</Link>
      <Link to='/pds/lab/functionsAndRecursions'>Functions and Recursions</Link>
      <Link to='/pds/lab/structuresAndPointers'>Structures and Pointers</Link>
      <Link to='/pds/lab/sortingAnd2dArrays'>Sorting and 2D Arrays</Link>
      <Link to='/pds/lab/linkedList'>Linked Lists and Files</Link> */}
      <div id="initialBasics" className="LabItem"><Link to='/pds/lab/initialBasics'>Initial Basics</Link></div>
      
      <div id="oneDArrays" className="LabItem"><Link to='/pds/lab/ArrayAndStrings'>1D Arrays and Strings</Link></div>
      <div id="functions" className="LabItem"><Link to='/pds/lab/functionsAndRecursions'>Functions and Recursions</Link></div>
      <div id="pointers" className="LabItem"><Link to='/pds/lab/structuresAndPointers'>Structures and Pointers</Link></div>
      
      <div id="twoDArrays" className="LabItem"><Link to='/pds/lab/sortingAnd2dArrays'>Sorting and 2D Arrays</Link></div>
      
      <div id="linkedLists" className="LabItem"><Link to='/pds/lab/linkedList'>Linked Lists and Files</Link></div>
    </div>
    </>
  )
}
