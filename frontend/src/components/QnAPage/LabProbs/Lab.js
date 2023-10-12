import React from 'react'
import { Link } from 'react-router-dom'

export default function Lab() {
  return (
    <div>
      <Link to='/pds/lab/initialBasics'>Initial Basics</Link>
      <Link to='/pds/lab/ArrayAndStrings'>1D Arrays and Strings</Link>
      <Link to='/pds/lab/functionsAndRecursions'>Functions and Recursions</Link>
      <Link to='/pds/lab/structuresAndPointers'>Structures and Pointers</Link>
      <Link to='/pds/lab/sortingAnd2dArrays'>Sorting and 2D Arrays</Link>
      <Link to='/pds/lab/linkedList'>Linked Lists and Files</Link>
    </div>
  )
}
