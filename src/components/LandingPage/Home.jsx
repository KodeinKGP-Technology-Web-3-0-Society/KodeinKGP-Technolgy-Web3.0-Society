import Work from './Work.jsx'
import React, { useState } from 'react'
import Animation from './Animation.jsx'
import Landing from './Landing.jsx'
import './Home.css'

const MainContent = () => {
	// const [animate, setAnimate] = useState(true)
	// if (animate) return <Animation animate={animate} setAnimate={setAnimate} />

	return (
		<div className="bg-[rgb(1,1,27)] flex flex-col h-full w-full overflow-hidden">
			<Landing />
			<Work />
		</div>
	)
}

const Home = () => {
	return (
		<div className="App">
			<MainContent />
		</div>
	)
}

export default Home
