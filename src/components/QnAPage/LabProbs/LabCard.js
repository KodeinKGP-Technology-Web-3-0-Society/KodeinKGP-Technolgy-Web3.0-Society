import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './LabCard.css'
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
		<tr className="cardDiv">
			{/* <td className="index">{ind + 1}</td> */}
			<td className="mark-completed">
				<span className="checkbox" onClick={() => toggleCompleted()}>
					{isComp ? (
						<FontAwesomeIcon icon={faSquareCheck} />
					) : (
						<FontAwesomeIcon icon={faSquare} />
					)}
				</span>
			</td>
			<td className="lc-ques">
				<Link to={path} className="ques-link" target="_blank">
					{question_words.length > question_chars.length
						? question_chars
						: question_words}
				</Link>
			</td>
			<td className="favourite">
				<span
					className="fav-star"
					style={{
						color: isFav ? 'yellow' : 'white',
					}}
					onClick={() => toggleFavourite()}
				>
					<FontAwesomeIcon icon={faStar} />
				</span>
			</td>
			{/* <td className="lc-link">
        <Link to={path} className="quest" target="_blank">
          <FontAwesomeIcon icon={faNewspaper} />
        </Link>
      </td> */}
		</tr>
	)
}
