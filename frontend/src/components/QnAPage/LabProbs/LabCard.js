import React from 'react'
import { Link } from 'react-router-dom';

export default function LabCard({qna,topic,ind}) {
  let path= `/pds/lab/${topic}/${ind}`;
  return (
    <div>
      <Link to={path}>{ind+1}. {qna.Question}</Link>
    </div>
  )
}
