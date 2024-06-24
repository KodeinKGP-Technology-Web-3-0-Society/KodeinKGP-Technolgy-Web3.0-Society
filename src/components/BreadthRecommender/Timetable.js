import TimetableHeader from "./images/folder_menu.png"
import DropdownImage from "./images/dropdown_up.png"
import "./Timetable.css"
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import TableContents from "./TableContents";

const Timetable = () => {

    const [dropDown, setDropDown] = useState(false);
    const [dep, setDep] = useState("");
    const [elec, setElec] = useState("");

    const { data: dataDep, isLoading: loadDep, isError: errDep } = useFetch("http://localhost:8000/departments");
    const { data: dataElec, isLoading: loadElec, isError: errElec } = useFetch("http://localhost:9000/Electives");


    useEffect(() => {
        setElec("");
    }, [dep])

    return (
        <div>
            <div className="timetable-tab">
                <div className="timetable-header">

                    <div className="timetable-header-content">
                        <h1>TIME TABLE</h1>

                        <button className={`timetable-button-${dropDown}`}
                            onClick={() => setDropDown(!dropDown)}>
                            <img src={DropdownImage} alt="" />
                        </button>
                    </div>

                    <img src={TimetableHeader} alt="" />
                </div>


                <div className="timetable-contents">
                    {dropDown &&

                        (<div className="timetable-contents-true">

                            <select
                                value={dep}
                                onChange={(e) => setDep(e.target.value)}
                            >
                                <option value="">Select Department</option>
                                <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Chemical Engineering">Chemical Engineering</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                            </select>

                            <select
                                value={elec}
                                onChange={(e) => setElec(e.target.value)}
                            >
                                <option value="">Select Elective</option>
                                <option value="Elective 1">Elective 1</option>
                                <option value="Elective 2">Elective 2</option>
                                <option value="Elective 3">Elective 3</option>
                                <option value="Elective 4">Elective 4</option>
                                <option value="Elective 5">Elective 5</option>
                            </select>

                            {loadDep && <div className="loadOrData">Data is Loading</div>}
                            {errDep && <div className="loadOrData">Error...</div>}
                            {loadElec && <div className="loadOrData">Data is Loading</div>}
                            {errElec && <div className="loadOrData">Error...</div>}

                            {!loadDep && !loadElec && !errDep && !errElec && dep &&

                                <TableContents
                                    depData={dataDep.filter(course => course.name === dep)}
                                    elective={dataElec.filter(elecOpted => elecOpted.name === elec)}
                                />}

                        </div>)
                    }

                </div>
            </div>

        </div>
    );
}

export default Timetable;