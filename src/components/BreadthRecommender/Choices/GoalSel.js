import React, { useState } from 'react'
import './GoalSel.css'

function GoalSel() {
    const [availGoals ,setAvailGoals] = useState([])
    const [selGoals, setSelGoals] = useState([])
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

    const handleSel = (object) =>{
        
        const elementsSet = new Set(selGoals);
        if(elementsSet.has(object.data)){
            elementsSet.delete(object.data);
            object.event.target.classList.remove("gs-ele-sel");
        }else{
            elementsSet.add(object.data);
            object.event.target.classList.add("gs-ele-sel");
        }
        setSelGoals(Array.from(elementsSet));
    }

    const handleClear = () => {
        const elems = document.querySelectorAll(".gs-ele-sel");
        elems.forEach((elem) => elem.classList.remove("gs-ele-sel"))
        setSelGoals([])
    }
 
    return (
        <div className='gs-main'>
            <div className="gs-opts">
                <h1 className="gs-opts-title">SELECT GOALS</h1>
            </div>
            <div className="gs-contents">
            {
                    availGoals.map((data, index) => (
                        <div className='gs-ele' key={index} onClick={(event) => handleSel({data, event})}>
                            {data}
                        </div>
                    ))
                }
            </div>
            <div className="gs-btn">
                <div className="gs-cl-btn-wrap">
                    <button className='gs-cl-btn' onClick={() => handleClear()}>
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