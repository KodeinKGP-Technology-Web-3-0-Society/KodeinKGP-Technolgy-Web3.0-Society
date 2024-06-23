import React, { useEffect, useState } from 'react'
import './TimeSel.css'

function TimeSel() {
    const [availTimes ,setAvailTimes] = useState([])
    const [selTimes, setSelTime] = useState([])

    useEffect(()=>{
        var localTimes = []
        for(var i = 1; i < 12; i+=2){
            localTimes.push(`${i} AM`)
        }
        for(i = 1; i < 12; i+=2){
            localTimes.push(`${i} PM`)
        }
        setAvailTimes(localTimes)
    }, [])

    const handleSel = (object) =>{
        
        const elementsSet = new Set(selTimes);
        if(elementsSet.has(object.data)){
            elementsSet.delete(object.data);
            object.event.target.classList.remove("ts-ele-sel");
        }else{
            elementsSet.add(object.data);
            object.event.target.classList.add("ts-ele-sel");
        }
        setSelTime(Array.from(elementsSet));
    }

    const handleClear = () => {
        const elems = document.querySelectorAll(".ts-ele-sel");
        elems.forEach((elem) => elem.classList.remove("ts-ele-sel"))
        setSelTime([])
    }
    
    return (
        <div className='ts-main'>
            <div className="ts-opts">
                <h1 className="ts-opts-title">SELECT TIMESLOT</h1>
            </div>
            <div className="ts-contents">
                {
                    availTimes.map((data, index) => (
                        <div className='ts-ele' key={index} onClick={(event) => handleSel({data, event})}>
                            {data}
                        </div>
                    ))
                }
            </div>
            <div className="ts-btn">
                <div className="ts-cl-btn-wrap">
                    <button className='ts-cl-btn' onClick={() => handleClear()}>
                        Clear All
                    </button>
                </div>
                <div className="ts-ap-btn-wrap">
                    <button className='ts-ap-btn'>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TimeSel