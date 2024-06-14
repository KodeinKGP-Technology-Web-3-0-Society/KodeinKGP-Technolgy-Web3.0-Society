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
                            <td>{depTable.timetable["Monday"]["8 AM - 9 AM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["8 AM - 9 AM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["8 AM - 9 AM"]}</td>
                            <td>{depTable.timetable["Thursday"]["8 AM - 9 AM"]}</td>
                            <td>{depTable.timetable["Friday"]["8 AM - 9 AM"]}</td>
                        </tr>
                        <tr>
                            <th>9 am - 9:55 am</th>
                            <td>{depTable.timetable["Monday"]["9 AM - 10 AM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["9 AM - 10 AM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["9 AM - 10 AM"]}</td>
                            <td>{depTable.timetable["Thursday"]["9 AM - 10 AM"]}</td>
                            <td>{depTable.timetable["Friday"]["9 AM - 10 AM"]}</td>
                        </tr>
                        <tr>
                            <th>10 am - 10:55 am</th>
                            <td>{depTable.timetable["Monday"]["10 AM - 11 AM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["10 AM - 11 AM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["10 AM - 11 AM"]}</td>
                            <td>{depTable.timetable["Thursday"]["10 AM - 11 AM"]}</td>
                            <td>{depTable.timetable["Friday"]["10 AM - 11 AM"]}</td>
                        </tr>
                        <tr>
                            <th>11 am - 11:55 am</th>
                            <td>{depTable.timetable["Monday"]["11 AM - 12 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["11 AM - 12 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["11 AM - 12 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["11 AM - 12 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["11 AM - 12 PM"]}</td>
                        </tr>
                        <tr>
                            <th>12 pm - 12:55 pm</th>
                            <td>{depTable.timetable["Monday"]["12 PM - 1 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["12 PM - 1 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["12 PM - 1 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["12 PM - 1 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["12 PM - 1 PM"]}</td>
                        </tr>
                        <tr>
                            <th>1 pm - 1:55 pm</th>
                            <th colSpan={5}>LUNCH BREAK</th>
                        </tr>
                        <tr>
                            <th>2 pm - 2:55 pm</th>
                            <td>{depTable.timetable["Monday"]["2 PM - 3 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["2 PM - 3 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["2 PM - 3 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["2 PM - 3 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["2 PM - 3 PM"]}</td>
                        </tr>
                        <tr>
                            <th>3 pm - 3:55 pm</th>
                            <td>{depTable.timetable["Monday"]["3 PM - 4 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["3 PM - 4 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["3 PM - 4 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["3 PM - 4 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["3 PM - 4 PM"]}</td>
                        </tr>
                        <tr>
                            <th>4 pm - 4:55 pm</th>
                            <td>{depTable.timetable["Monday"]["4 PM - 5 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["4 PM - 5 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["4 PM - 5 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["4 PM - 5 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["4 PM - 5 PM"]}</td>
                        </tr>
                        <tr>
                            <th>5 pm - 5:55 pm</th>
                            <td>{depTable.timetable["Monday"]["5 PM - 6 PM"]}</td>
                            <td>{depTable.timetable["Tuesday"]["5 PM - 6 PM"]}</td>
                            <td>{depTable.timetable["Wednesday"]["5 PM - 6 PM"]}</td>
                            <td>{depTable.timetable["Thursday"]["5 PM - 6 PM"]}</td>
                            <td>{depTable.timetable["Friday"]["5 PM - 6 PM"]}</td>
                        </tr>
                    </tbody>
                </table>
            ))}
        </div>
    );
}

export default TableContents;
