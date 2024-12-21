import React from 'react'
import dataJ from '../LabProbs/data.json'
import { useParams } from 'react-router-dom'
import TheoryCard from './TheoryCard'
import './TheoryTopic.css'
export default function TheoryTopic() {
	// const data = JSON.parse(dataJ);
	const data = dataJ
	const param = useParams()
	const topic = param.topic
	let arr = []
	if (topic == 'theoryTest') {
		console.log('hi')
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

	return (
		<div className="TheoryTopic">
			{arr.map((ele, ind) => {
				return (
					<>
						<TheoryCard qna={arr[ind]} topic={topic} ind={ind} />
					</>
				)
			})}
		</div>
	)
}
