import React, { useState } from 'react'

const MainContent = () => {
	const [activeButton, setActiveButton] = useState('1')

	const ButtonClicked = e => {
		setActiveButton(e.target.id)
	}

	return <div className="flex flex-wrap justify-around items-center gap-6 w-[90vw] mx-auto my-8 md:w-[50vw]"></div>
}

const Teams = () => {
	return (
		<div className="w-full">
			<MainContent />
		</div>
	)
}

export default Teams
