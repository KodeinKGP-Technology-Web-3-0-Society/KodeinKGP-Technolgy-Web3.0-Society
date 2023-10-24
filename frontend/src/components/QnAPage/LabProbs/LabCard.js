import React from 'react'
import { Link } from 'react-router-dom';
import './LabCard.css'
export default function LabCard({qna,topic,ind}) {
  let path= `/pds/lab/${topic}/${ind}`;
  return (
    <div className='cardDiv'>
      <Link to={path} className='cards'><p className='text'><span className='index'>{ind+1}.</span> {qna.Question}</p></Link>
    </div>
  )
}
