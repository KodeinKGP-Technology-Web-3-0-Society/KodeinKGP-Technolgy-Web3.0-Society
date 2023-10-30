import React from 'react'
import { Link } from 'react-router-dom';
import './LabCard.css'
export default function LabCard({qna,topic,ind}) {
  let path= `/pds/lab/${topic}/${ind}`;
  return (
    
      
    <Link to={path} className='cards'><div className='cardDiv'><p className='text'><span className='index'>{ind+1}.</span> {qna.Question}</p></div></Link>
  )
}
