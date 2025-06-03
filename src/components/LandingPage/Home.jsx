import './Home.css'
import Work from './Work.jsx'
import React, { useState } from 'react'
import Animation from './Animation.jsx'
import Landing from './Landing.jsx'

const MainContent = () => {
	const [animate, setAnimate] = useState(true)
	if (animate) return <Animation animate={animate} setAnimate={setAnimate} />

	return (
		<div className="landing-page">
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
