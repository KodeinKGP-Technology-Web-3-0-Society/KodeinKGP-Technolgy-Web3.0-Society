import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function LabTheory() {
  return (
    <div>
        <Link to='/pds/lab'>lab</Link>
        <Link to='/pds/theory'>theory</Link>
    </div>
  )
}
