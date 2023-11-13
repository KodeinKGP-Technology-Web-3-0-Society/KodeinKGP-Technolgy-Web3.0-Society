import React from 'react'
import dataJ from './data.json';
import { useParams } from 'react-router-dom';
import LabCard from './LabCard';
import './LabTopic.css'
export default function LabTopic() {
    // const data = JSON.parse(dataJ);
    const data = (dataJ);
    const param = useParams();
    const topic = param.topic;
    let arr=[]; 
    if(topic=='labTest'){
      let topicArray = ["initialBasics","loops","ArrayAndStrings","functionsAndRecursions","structuresAndPointers","sortingAnd2dArrays","linkedList"];
      topicArray.forEach(element => {
        arr=arr.concat(data[element][2].Elements);
      });
    }
    else  arr = data[topic][0].Elements;

  return (
    <div className='LabTopic'>
      {arr.map((ele,ind)=>{
        return( <>
            <LabCard qna={arr[ind]} topic={topic} ind={ind}/>
        </>);
      })}
    </div>
  )
}
