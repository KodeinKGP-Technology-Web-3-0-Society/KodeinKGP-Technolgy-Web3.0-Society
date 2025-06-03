import React, { useState } from 'react'

const MainContent = () => {
	const [activeButton, setActiveButton] = useState('1')

	const ButtonClicked = e => {
		setActiveButton(e.target.id)
	}

	return <div className="teams"></div>
}

const Teams = () => {
	return (
		<div className="App">
			<MainContent />
		</div>
	)
}

export default Teams
