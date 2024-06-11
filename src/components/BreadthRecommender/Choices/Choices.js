import React, { useEffect, useState } from 'react'
import './Choices.css'
import arrow from "../../../assets/arrow.png"

function Choices() {
    const [data, setData] = useState([]);
    useEffect(() => {
        var localData = []
        for(var i = 0; i < 10; i++){
            localData.push({name:"Genetic Algorithms in Engineering process modeling", cg: 8.3})
        }
        setData(localData)
    }, [])
    console.log(data)


    return (
        <div className='ch-bg'>
            <div className="btn-cover">
                <div className="btn-sel-goal-cover">
                    <button className='btn-sel-goal btn'>
                        SELECT GOALS
                        <img src={arrow} className='btn-img'/>
                    </button>
                </div>
                <div className="btn-sel-times-cover">
                    <button className='btn-sel-times btn'>
                        SELECT TIMESLOT
                        <img src={arrow} className='btn-img'/>
                    </button>
                </div>
            </div>
            <div className="box-cover">
                <div className="box-left">
                    <div className="box-left-text">COURSES</div>
                    <div className="box-left-courses">
                        {
                            data.map((item, index) => (
                                <div className="courses-item" key={index} id={index}>
                                    <div className="courses-name" id={index}>{item.name}</div>
                                    <div className="courses-cg" id={index}>{item.cg + " CGPA"}</div>
                                    <input type='radio' id={index} value={index} name="course-sel" className='course-sel'/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="box-right">
                    <div className="box-right-text">STATS</div>
                    <div className="box-right-graphs">
                        The chart is present here
                    </div>
                </div>
            </div>
            <div className="save-btn-cover">
                <button className='save-btn'>
                    <span className='save-btn-span'>
                        SAVE CHANGES
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Choices