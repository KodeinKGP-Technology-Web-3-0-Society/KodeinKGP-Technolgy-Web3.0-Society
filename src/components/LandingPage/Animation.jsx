import React, { useRef, useEffect, useState } from 'react'
import anime from './anime.gif'
import './anime.css'
import animeMob from './animeMob.gif'

const Animation = ({ animate, setAnimate }) => {
	const wordRef = useRef(null)
	const [gifPlayed, setGifPlayed] = useState(false)
	const gifDuration = 1600

	useEffect(() => {
		const timer = setTimeout(() => {
			setGifPlayed(true)
		}, gifDuration)

		return () => clearTimeout(timer)
	})

	useEffect(() => {
		if (gifPlayed) {
			setAnimate(false)
		}
	}, [gifPlayed])

	return (
		<div className="intro" ref={wordRef}>
			<div className="loading-gif">
				{!gifPlayed && (
					<img src={window.innerWidth < 768 ? animeMob : anime} alt="GIF" />
				)}
			</div>
		</div>
	)
}

export default Animation
