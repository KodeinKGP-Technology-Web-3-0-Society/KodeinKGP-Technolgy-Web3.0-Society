import React, { useState } from 'react'
import './GoalSel.css'

function GoalSel() {
    const [availTimes ,setAvailTimes] = useState([])
    return (
        <div className='gs-main'>
            <div className="gs-opts">
                <h1 className="gs-opts-title">SELECT GOALS</h1>
            </div>
            <div className="gs-contents"></div>
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