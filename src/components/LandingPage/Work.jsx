import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Work.css'
import Robot from './Robo.json'
import Lottie from 'lottie-react'
import WEBDEV from './WEB.json'
import Blockchain from './Blockchain.json'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import programmer from './programmer-image.png'

gsap.registerPlugin(ScrollTrigger)

export default function Teams() {
	const cardRefs = useRef([])

	useEffect(() => {
		cardRefs.current.forEach((card, index) => {
			// eslint-disable-next-line no-undef
			if (typeof window !== 'undefined' && window.innerWidth > 768) {
				let xOffset = index === 0 ? '-30vw' : index === 1 ? '0vw' : '30vw'
				let angle = index === 0 ? -10 : index === 1 ? 0 : 10

				gsap
					.timeline({
						scrollTrigger: {
							trigger: card,
							start: '20% bottom',
							end: 'center center',
							scrub: true,
						},
					})
					.fromTo(
						card,
						{
							x: 0,
							rotation: angle,
							scale: 1,
						},
						{
							x: xOffset,
							rotation: 0,
							scale: 1.1,
						}
					)
			} else {
				var t3 = gsap.timeline({
					scrollTrigger: {
						trigger: card,
						start: 'top bottom',
						end: 'top center',
						scrub: true,
						scroller: 'body',
						immediateRender: true,
					},
				})

				t3.fromTo(
					card,
					{
						x: -300,
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						stagger: 0.2,
						ease: 'linear',
					}
				)
			}
		})

		var t4 = gsap.timeline({
			scrollTrigger: {
				trigger: '.pds-page-poster-wrapper',
				start: 'center bottom',
				end: 'center center',
				scrub: 1,
				scroller: 'body',
			},
		})

		t4.fromTo(
			'.pds-page-poster-wrapper',
			{
				x: -300,
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 0.5,
				stagger: 0.2,
			}
		)
	}, [])

	return (
		<div className="work-wrapper">
			<h2 id="recentHeader">Our Expertise</h2>

			<div className="field-cards">
				<div
					className="field-card card1"
					ref={el => (cardRefs.current[0] = el)}
				>
					<Lottie animationData={Robot} height={10} />
					<p className="field-heading">AI & Metaverse</p>
					<p className="field-description">
						Enter a realm where AI drives immersive Metaverse encounters,
						pushing boundaries of what&apos;s possible.
					</p>
				</div>
				<div
					className="field-card card2"
					ref={el => (cardRefs.current[1] = el)}
				>
					<Lottie animationData={WEBDEV} height={10} />
					<p className="field-heading">Web Development</p>
					<p className="field-description">
						Crafting dynamic, responsive websites that deliver exceptional user
						experiences across all devices.
					</p>
				</div>
				<div
					className="field-card card3"
					ref={el => (cardRefs.current[2] = el)}
				>
					<Lottie animationData={Blockchain} height={10} />
					<p className="field-heading">Blockchain</p>
					<p className="field-description">
						Building the decentralized future with secure, transparent
						blockchain solutions and smart contracts.
					</p>
				</div>
			</div>

			<div className="separator-line"></div>

			<div className="pds-page-poster-wrapper">
				<Link to="/pds" style={{ textDecoration: 'none' }}>
					<div className="pds-page-poster">
						<div className="pds-page-poster-left">
							<h1>Still Getting Stuck in PDS?</h1>
							<h2>Our curated PDS Problems set works right for you...</h2>
						</div>
						<div className="pds-page-poster-right">
							<img src={programmer} alt="img" />
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}
