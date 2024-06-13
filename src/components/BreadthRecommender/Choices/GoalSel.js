import React, { useState } from 'react'
import './GoalSel.css'

function GoalSel() {
    const [availGoals ,setAvailGoals] = useState([])
    useState(() => {
        setAvailGoals([
            "Civil Engineer",
            "Mechanical Engineer",
            "Electrical Engineer",
            "Chemical Engineer",
            "Software Engineer",
            "Aerospace Engineer",
            "Environmental Engineer",
            "Biomedical Engineer",
            "Industrial Engineer",
            "Petroleum Engineer",
            "Structural Engineer",
            "Computer Engineer",
            "Robotics Engineer",
            "Nuclear Engineer",
            "Automotive Engineer"
        ])
    }, [])
    return (
        <div className='gs-main'>
            <div className="gs-opts">
                <h1 className="gs-opts-title">SELECT GOALS</h1>
            </div>
            <div className="gs-contents">
            {
                    availGoals.map((data, index) => (
                        <div className='gs-ele' key={index}>
                            <div className="gs-ele-time">{data}</div>
                        </div>
                    ))
                }
            </div>
            <div className="gs-btn">
                <div className="gs-cl-btn-wrap">
                    <button className='gs-cl-btn'>
                        Clear All
                    </button>
                </div>
                <div className="gs-ap-btn-wrap">
                    <button className='gs-ap-btn'>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GoalSel