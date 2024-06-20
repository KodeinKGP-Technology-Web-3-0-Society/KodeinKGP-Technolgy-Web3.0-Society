import React, { useEffect, useState } from 'react';

const TableContents = ({ depData, elective }) => {

    const [updatedDeps, setUpdatedDeps] = useState(depData);
    const [elecAvail, setElecAvail] = useState(true);
    const [elecDone, setElecDone] = useState(false);


    useEffect(() => {

        setUpdatedDeps(depData.map(newDepTable => {
            const newTimetable = { ...newDepTable.timetable };

            elective.forEach(elec => {
                const { name: elecName, day: elecDay, time: elecTime } = elec;

                if (newTimetable[elecDay][elecTime] === "") {
                    newTimetable[elecDay][elecTime] = elecName;
                    setElecAvail(true);
                    setElecDone(false);
                }
                else if (newTimetable[elecDay][elecTime] === elecName) {
                    setElecAvail(true);
                    setElecDone(true);
                }
                else {
                    setElecAvail(false);
                    setElecDone(false);
                }
            });

            return { ...newDepTable, timetable: newTimetable };
        }));

    }, [elective, depData])



    return (
        <div className="timetable-contents-true">

            {!elecAvail && <p>Elective not Available...</p>}
            {elecDone && <p>Elective Already Chosen...</p>}

            {updatedDeps.map(depTable => (

                <table key={depTable.name}>

                    <thead>
                        <tr>
                            <th>{depTable.name}</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>8 am - 8:55 am</th>
                            <td>{depTable.timetable.A2 || depTable.timetable.A3}</td>
                            <td>{depTable.timetable.B2 || depTable.timetable.B3}</td>
                            <td>{depTable.timetable.C2 || depTable.timetable.C3 || depTable.timetable.C4}</td>
                            <td>{depTable.timetable.D4}</td>
                            <td>{depTable.timetable.G3}</td>
                        </tr>

                        <tr>
                            <th>9 am - 9:55 am</th>
                            <td>{depTable.timetable.A2 || depTable.timetable.A3}</td>
                            <td>{depTable.timetable.B2 || depTable.timetable.B3}</td>
                            <td>{depTable.timetable.C2 || depTable.timetable.C3 || depTable.timetable.C4}</td>
                            <td>{depTable.timetable.F3 || depTable.timetable.F4}</td>
                            <td>{depTable.timetable.E2 || depTable.timetable.E3 || depTable.timetable.E4}</td>
                        </tr>

                        <tr>
                            <th>10 am - 10:55 am</th>
                            <td>{depTable.timetable.C3 || depTable.timetable.C4 || depTable.timetable.Q}</td>
                            <td>{depTable.timetable.D2 || depTable.timetable.D3 || depTable.timetable.D4 || depTable.timetable.K}</td>
                            <td>{depTable.timetable.F3 || depTable.timetable.F4 || depTable.timetable.R}</td>
                            <td>{depTable.timetable.C4 || depTable.timetable.M}</td>
                            <td>{depTable.timetable.E2 || depTable.timetable.E4 || depTable.timetable.O}</td>
                        </tr>

                        <tr>
                            <th>11 am - 11:55 am</th>
                            <td>{depTable.timetable.B3 || depTable.timetable.Q}</td>
                            <td>{depTable.timetable.D2 || depTable.timetable.D3 || depTable.timetable.D4 || depTable.timetable.K}</td>
                            <td>{depTable.timetable.G3 || depTable.timetable.R}</td>
                            <td>{depTable.timetable.E3 || depTable.timetable.E4 || depTable.timetable.M}</td>
                            <td>{depTable.timetable.F2 || depTable.timetable.F3 || depTable.timetable.F4 || depTable.timetable.O}</td>
                        </tr>

                        <tr>
                            <th>12 pm - 12:55 pm</th>
                            <td>{depTable.timetable.D3 || depTable.timetable.D4 || depTable.timetable.Q}</td>
                            <td>{depTable.timetable.A3 || depTable.timetable.K}</td>
                            <td>{depTable.timetable.E3 || depTable.timetable.E4 || depTable.timetable.R}</td>
                            <td>{depTable.timetable.G3 || depTable.timetable.M}</td>
                            <td>{depTable.timetable.F2 || depTable.timetable.F4 || depTable.timetable.O}</td>
                        </tr>

                        <tr>
                            <th>1 pm - 1:55 pm</th>
                            <th colSpan={5}>LUNCH BREAK</th>
                        </tr>

                        <tr>
                            <th>2 pm - 2:55 pm</th>
                            <td>{depTable.timetable.H3 || depTable.timetable.J}</td>
                            <td>{depTable.timetable.U4 || depTable.timetable.L}</td>
                            <td>{depTable.timetable.X4 || depTable.timetable.X}</td>
                            <td>{depTable.timetable.I2 || depTable.timetable.N}</td>
                            <td>{depTable.timetable.V4 || depTable.timetable.P}</td>
                        </tr>

                        <tr>
                            <th>3 pm - 3:55 pm</th>
                            <td>{depTable.timetable.U3 || depTable.timetable.U4 || depTable.timetable.J}</td>
                            <td>{depTable.timetable.U3 || depTable.timetable.U4 || depTable.timetable.L}</td>
                            <td>{depTable.timetable.X4 || depTable.timetable.X}</td>
                            <td>{depTable.timetable.V2 || depTable.timetable.V3 || depTable.timetable.V4 || depTable.timetable.N}</td>
                            <td>{depTable.timetable.V3 || depTable.timetable.V4 || depTable.timetable.P}</td>
                        </tr>

                        <tr>
                            <th>4 pm - 4:55 pm</th>
                            <td>{depTable.timetable.U3 || depTable.timetable.U4 || depTable.timetable.J}</td>
                            <td>{depTable.timetable.H2 || depTable.timetable.H3 || depTable.timetable.L}</td>
                            <td>{depTable.timetable.X4 || depTable.timetable.X}</td>
                            <td>{depTable.timetable.V2 || depTable.timetable.V3 || depTable.timetable.V4 || depTable.timetable.N}</td>
                            <td>{depTable.timetable.I2 || depTable.timetable.P}</td>
                        </tr>

                        <tr>
                            <th>5 pm - 5:55 pm</th>
                            <td>{depTable.timetable.S3}</td>
                            <td>{depTable.timetable.H2 || depTable.timetable.H3}</td>
                            <td>{depTable.timetable.X4}</td>
                            <td>{depTable.timetable.S3}</td>
                            <td>{depTable.timetable.S3}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default TableContents;
