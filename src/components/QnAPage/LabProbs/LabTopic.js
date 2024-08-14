import React from 'react';
import dataJ from './data.json';
import LabCard from './LabCard';
import './LabTopic.css';

export default function LabTopic({ topic }) {
    const data = dataJ;
    let arr = [];
    
    if (topic === 'labTest') {
        const topicArray = ["initialBasics", "loops", "ArrayAndStrings", "functionsAndRecursions", "structuresAndPointers", "sortingAnd2dArrays", "linkedList"];
        topicArray.forEach(element => {
            arr = arr.concat(data[element][2].Elements);
        });
    } else {
        arr = data[topic][0].Elements;
    }

    return (
        <div className="LabTopicList">
            <div className='LabTopic'>
                {arr.map((ele, ind) => (
                    <LabCard key={ind} qna={arr[ind]} topic={topic} ind={ind} />
                ))}
            </div>
        </div>
    );
}


