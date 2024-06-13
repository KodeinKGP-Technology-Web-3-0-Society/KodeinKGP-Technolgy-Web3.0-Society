import React, { useEffect, useState } from 'react'
import './TimeSel.css'

function TimeSel() {
    const [availTimes ,setAvailTimes] = useState([])
    
    useEffect(()=>{
        var localTimes = []
        for(var i = 1; i < 12; i+=2){
            localTimes.push(`${i} AM`)
        }
        for(var i = 1; i < 12; i+=2){
            localTimes.push(`${i} PM`)
        }
        setAvailTimes(localTimes)
    }, [])
    
    return (
        <div className='ts-main'>
            <div className="ts-opts">
                <h1 className="ts-opts-title">SELECT TIMESLOT</h1>
            </div>
            <div className="ts-contents">
                {
                    availTimes.map((data, index) => (
                        <div className='ts-ele' key={index}>
                            <div className="ts-ele-time">{data}</div>
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