import React from 'react'
import { Link } from 'react-router-dom'

// import './Theory.css'

export default function Theory() {
	return (
		<>
			<div className="bg-[rgb(1,1,27)] font-sans">

				<h1 id="LabHeader" className="text-center text-2xl text-[#5be6ff] my-5">THEORY TOPICS</h1>

				<div id="Lab" className="flex flex-col sm:flex-row sm:flex-wrap justify-evenly items-center p-5 gap-5">

					<a
						href="https://drive.google.com/file/d/1mcCy5NUCcITwl-UzIew_MTzGMILz3ux2/view?usp=sharing"
						target="_blank"
						className="no-underline text-xl font-semibold"
					>
						<div id="initialBasics" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							Initial Basics
						</div>
					</a>

					<a
						href="https://drive.google.com/file/d/1Me41FYbSzZlJkm5KrJYbci5TRnMrxPGw/view?usp=sharing"
						target="_blank"
						className="no-underline text-xl font-semibold"
					>
						<div id="loops" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							Loops
						</div>
					</a>

					<a
						href="https://drive.google.com/file/d/16MjuU4kc4NhuYv75RwGxw26x8GIXWsZy/view?usp=sharing"
						target="_blank"
						className="no-underline text-xl font-semibold"
					>
						<div id="oneDArrays" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							1D Arrays and Strings
						</div>
					</a>

					<a
						href="https://drive.google.com/file/d/1ASeMcDy76F4dbjsibkxp40hM-dSTPJa2/view?usp=sharing"
						target="_blank"
						className="no-underline text-xl font-semibold"
					>
						<div id="functions" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							Functions and Recursions
						</div>
					</a>

					<a
						href="https://drive.google.com/file/d/15C3mjMMzMH-LIc3kULCD288yzgx4ht26/view?usp=sharing"
						target="_blank"
						className="no-underline text-xl font-semibold"
					>
						<div id="pointers" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							Structures and Pointers
						</div>
					</a>
					<Link to="/pds/theory/theoryTest" className="no-underline text-xl font-semibold">
						<div id="theoryTest" className="bg-[#434343] border border-[#555] rounded-[10px] shadow-md text-white flex-1 m-2.3 !p-5 text-center no-underline transition-transform duration-200 w-[80vw] hover:-translate-y-1.5">
							Theory Tests [Combined]
						</div>
					</Link>
				</div>
			</div>
		</>
	)
}
