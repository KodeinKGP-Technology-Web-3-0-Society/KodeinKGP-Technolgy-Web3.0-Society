import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faSquareCheck,
	faSquare,
	faStar,
} from '@fortawesome/free-solid-svg-icons'

export default function LabCard({ qna, topic, subTopic, ind }) {
	const BACKEND_URL = 'https://kik-backend.onrender.com/'
	const key = `${topic}-${subTopic}-${ind}`
	const [isFav, setisFav] = useState(() => {
		const savedFavourites = JSON.parse(localStorage.getItem('favourites'))
		return savedFavourites.indexOf(key) !== -1
	})

	useEffect(() => {
		const savedFavourites = JSON.parse(localStorage.getItem('favourites'))
		if (isFav) {
			if (!savedFavourites.includes(key)) {
				savedFavourites.push(key)
			}
		} else {
			const index = savedFavourites.indexOf(key)
			if (index !== -1) {
				savedFavourites.splice(index, 1)
			}
		}
		localStorage.setItem('favourites', JSON.stringify(savedFavourites))
		if (localStorage.getItem('user')) {
			const uid = localStorage.getItem('user')
			fetch(BACKEND_URL + 'status/favourites', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${uid}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ favourites: savedFavourites }),
			})
		}
	}, [isFav, key])

	const toggleFavourite = () => {
		setisFav(prevFav => !prevFav)
	}

	const [isComp, setisComp] = useState(() => {
		const savedComp = JSON.parse(localStorage.getItem('completed'))
		return savedComp.indexOf(key) !== -1
	})

	useEffect(() => {
		const savedComp = JSON.parse(localStorage.getItem('completed'))
		if (isComp) {
			if (!savedComp.includes(key)) {
				savedComp.push(key)
			}
		} else {
			const index = savedComp.indexOf(key)
			if (index !== -1) {
				savedComp.splice(index, 1)
			}
		}
		localStorage.setItem('completed', JSON.stringify(savedComp))
		if (localStorage.getItem('user')) {
			const uid = localStorage.getItem('user')
			fetch(BACKEND_URL + 'status/completed', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${uid}`,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ complete: savedComp }),
			})
		}
	}, [isComp, key])

	const toggleCompleted = () => {
		setisComp(prevComp => !prevComp)
	}

	let path = `/pds/lab/${topic}/${subTopic}/${ind}`
	let question_words = qna.Question.split(' ').slice(0, 13).join(' ') + '...'
	let question_chars = qna.Question.slice(0, 100) + '...'
	return (
		<tr className="border border-[#555] bg-[rgba(91,230,255,0.04)] p-0 rounded-none shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-[transform,box-shadow] duration-200 max-w-full w-full">
			<td className="mark-completed">
			<span 
				className="text-white cursor-pointer" 
				onClick={() => toggleCompleted()}
			>
				{isComp ? (
				<FontAwesomeIcon icon={faSquareCheck} />
				) : (
				<FontAwesomeIcon icon={faSquare} />
				)}
			</span>
			</td>
			<td className="lc-ques py-[0.5rem] pl-[0.7rem] pr-[0.5rem] align-middle !text-[1.2rem] !text-left w-full whitespace-nowrap">
			<Link to={path} className="ques-link text-white no-underline" target="_blank">
				{question_words.length > question_chars.length
				? question_chars
				: question_words}
			</Link>
			</td>
			<td className="favourite">
			<span
				className="fav-star cursor-pointer"
				style={{
				color: isFav ? 'yellow' : 'white',
				}}
				onClick={() => toggleFavourite()}
			>
				<FontAwesomeIcon icon={faStar} />
			</span>
			</td>
		</tr>
	)
}
