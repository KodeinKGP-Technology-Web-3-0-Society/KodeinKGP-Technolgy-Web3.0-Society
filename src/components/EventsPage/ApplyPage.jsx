import React, { useState } from 'react'
import ProblemStatement1 from './ProblemStatement1'
import ProblemStatement2 from './ProblemStatement2'
import ProblemStatement3 from './ProblemStatement3'
import './ApplyPage.css'
const ApplyPage = () => {
	const [activeButton, setActiveButton] = useState('1')

	const ButtonClicked = e => {
		setActiveButton(e.target.id)
	}

	function ProblemSelect() {
		switch (activeButton) {
			case '1':
				return <ProblemStatement1 />
			case '2':
				return <ProblemStatement2 />
			case '3':
				return <ProblemStatement3 />
			default:
				return null
		}
	}

	return (
		<div className="w-full">
			<div className="flex flex-col justify-center items-center">
				<img
					src="/EventsImages/Swadeshi_event.png"
					alt="event-image"
					className="w-[20rem] md:w-[40rem]"
				/>
				<h2
					className="text-2xl my-2 text-white"
					style={{ fontFamily: "'Black Ops One', cursive" }}
				>
					INNOVATE4SWADESHI
				</h2>
				<p className="text-white text-[1.35rem] m-1 text-center max-[1200px]:text-[1rem]">
					<span className="font-semibold">Registration deadline : </span>27th Nov 2023
				</p>
				<p className="text-white text-[1.35rem] m-1 text-center max-[1200px]:text-[1rem]">
					<span className="font-semibold">Submission deadline : </span>2nd Dec 2023
				</p>

				<div className="flex gap-4 mt-4">
					{['1', '2', '3'].map(id => (
						<button
							key={id}
							className={`px-4 py-2 rounded-md font-medium border ${
								activeButton === id
									? 'bg-blue-600 text-white border-blue-700'
									: 'bg-white text-black border-gray-300'
							}`}
							id={id}
							onClick={ButtonClicked}
						>
							Question {id}
						</button>
					))}
				</div>
			</div>

			<div className="mt-8">
				<ProblemSelect />
			</div>
		</div>
	)
}

export default ApplyPage
