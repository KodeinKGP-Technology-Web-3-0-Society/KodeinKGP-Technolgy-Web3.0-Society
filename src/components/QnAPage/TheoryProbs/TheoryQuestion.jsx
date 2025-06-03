import React from 'react'
import dataJ from '../LabProbs/data.json'
import { useParams } from 'react-router-dom'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './TheoryQuestion.css'
export default function TheoryQuestion() {
	const [flag, setFlag] = React.useState(0)
	const [copy, setCopy] = React.useState(0)
	let arr = []
	const data = dataJ
	const param = useParams()
	const topic = param.topic
	const ind = param.ind
	if (topic == 'theoryTest') {
		let topicArray = [
			'initialBasics',
			'loops',
			'ArrayAndStrings',
			'functionsAndRecursions',
			'structuresAndPointers',
			'sortingAnd2dArrays',
			'linkedList',
		]
		topicArray.forEach(element => {
			arr = arr.concat(data[element][1].Elements)
		})
	} else arr = data[topic][0].Elements
	const q = arr[ind].Question
	const sol = arr[ind].Answer
	const handleCopy = () => {
		navigator.clipboard.writeText(sol)
		setCopy(1)
		setTimeout(() => {
			setCopy(0)
		}, 2000)
	}
	const fun = () => {
		if (flag === 0) {
			return <></>
		} else {
			return (
				<>
					<div className="solution">
						<div className="copy">
							{copy ? (
								<button className="copyBtn">
									<span className="clip">
										<ion-icon name="checkmark-sharp"></ion-icon>
									</span>
									copied!
								</button>
							) : (
								<button className="copyBtn" onClick={handleCopy}>
									<span className="clip">
										<ion-icon name="clipboard-outline"></ion-icon>
									</span>
									copy code
								</button>
							)}
						</div>
						<SyntaxHighlighter
							language="cpp"
							style={dracula}
							customStyle={{
								padding: '1.9rem',
								margin: '0rem',
							}}
							wrapLongLines={true}
						>
							{sol}
						</SyntaxHighlighter>
					</div>
				</>
			)
		}
	}
	const toggleHide = () => {
		const s = document.getElementById('toggleBtn')
		if (flag === 0) {
			s.innerHTML = 'hide solution'
			setFlag(1)
		} else {
			s.innerHTML = 'show solution'
			setFlag(0)
		}
	}
	return (
		<>
			<div className="question">
				<pre className="pretext">{q}</pre>
			</div>
			<button onClick={toggleHide} id="toggleBtn">
				show solution
			</button>
			<div>{fun()}</div>
			<button className="onlineEditor">
				<a
					href="https://www.programiz.com/c-programming/online-compiler/"
					target="blank"
					className="editorLink"
				>
					open online editor
				</a>
			</button>
		</>
	)
}
