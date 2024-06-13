import React, { useEffect, useState } from 'react'
import './Choices.css'
import arrow from "../../../assets/arrow.png"
import TimeSel from './TimeSel';
import GoalSel from './GoalSel';

function Choices() {
    const [data, setData] = useState([]);
    const [goalVis, setGoalVis] = useState(false)
    const [timeVis, setTimeVis] = useState(false)
    useEffect(() => {
        var localData = []
        for(var i = 0; i < 10; i++){
            localData.push({name:"Genetic Algorithms in Engineering process modeling", cg: 8.3})
        }
        setData(localData)
    }, [])
    console.log(data)


    return (
        <div className='ch-area'>
            <div className='ch-bg'>
                <h1 className="btn-cover">
                    <div className="btn-sel-goal-cover">
                        <button className='btn-sel-goal btn' onClick={() => setGoalVis(!goalVis)}>
                            SELECT GOALS
                            <img src={arrow} className='btn-img' alt=''/>
                        </button>
                    </div>
                    <div className="btn-sel-times-cover">
                        <button className='btn-sel-times btn' onClick={() => setTimeVis(!timeVis)}>
                            SELECT TIMESLOT
                            <img src={arrow} className='btn-img' alt=''/>
                        </button>
                    </div>
                </h1>
                <div className="box-cover">
                    <h1 className="box-left">
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
                    </h1>
                    <div className="box-right">
                        <h1 className="box-right-text">STATS</h1>
                        <div className="box-right-graphs">
                            The chart is present here
                        </div>
                    </div>
                </div>
                <h1 className="save-btn-cover">
                    <button className='save-btn'>
                        <span className='save-btn-span'>
                            SAVE CHANGES
                        </span>
                    </button>
                </h1>
            </div>
            <div className='close-btn-wrap' onClick={() => {setGoalVis(false); setTimeVis(false)}} hidden={!goalVis}>
                <span className='close-btn'>&#10005;</span>
            </div>
            <div className='close-btn-wrap' onClick={() => {setGoalVis(false); setTimeVis(false)}} hidden={!timeVis}>
                <span className='close-btn'>&#10005;</span>
            </div>
            <div hidden={!goalVis}>
                <GoalSel />
            </div>
            <div hidden={!timeVis}>
                <TimeSel />
            </div>
        </div>
    )
}

export default Choices