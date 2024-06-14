import React, { useEffect, useState } from 'react'
import './TimeSel.css'

function TimeSel() {
    const [availTimes ,setAvailTimes] = useState([])
    const [selTimes ,setSelTimes] = useState([])
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

    const handleSel = (obj) => {
        setSelTimes((times) => {
            if(times.length === 0) return [obj.data]
            const timesSet = new Set(times)
            timesSet.add(obj.data)
            return Array.from(timesSet)
        })
        obj.e.target.classList.add("gs-ele-active")
        console.log(selTimes)
    }
    
    return (
        <div className='ts-main'>
            <div className="ts-opts">
                <h1 className="ts-opts-title">SELECT TIMESLOT</h1>
            </div>
            <div className="ts-contents">
                {
                    availTimes.map((data, index) => (
                        <div className='ts-ele' key={index} onClick={(e) => handleSel({e, data})}>
                            {data}
                        </div>
                    ))
                }
            </div>
            <div className="ts-btn">
                <div className="ts-cl-btn-wrap">
                    <button className='ts-cl-btn'>
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