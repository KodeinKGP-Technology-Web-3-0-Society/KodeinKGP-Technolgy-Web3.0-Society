import React from 'react'
import dataJ from './data.json';
import { useParams } from 'react-router-dom';
import LabCard from './LabCard';
export default function LabTopic() {
    // const data = JSON.parse(dataJ);
    const data = (dataJ);
    const param = useParams();
    const topic = param.topic; 
    const arr = data[topic][0].Elements;
  return (
    <div>
      {arr.map((ele,ind)=>{
        return( <>
            <LabCard qna={arr[ind]} topic={topic} ind={ind}/>
        </>);
      })}
    </div>
  )
}
