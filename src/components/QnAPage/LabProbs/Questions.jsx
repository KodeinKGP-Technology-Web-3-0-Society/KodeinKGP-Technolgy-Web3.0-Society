import dataJ from '../../../data/qna/lab-questions.json'
import LabCard from './LabCard'

export default function Questions({ topic, subTopic, viewMode }) {
	const getQuestionsData = subTopic => {
		if (viewMode === 'Favourite Questions') {
			const savedFavourites =
				JSON.parse(localStorage.getItem('favourites')) || []
			const favQuestions = []
			savedFavourites.forEach(key => {
				const [topic, subT, ind] = key.split('-')
				console.log(topic, subT, ind)
				if (subT === subTopic) {
					favQuestions.push(dataJ[topic][0]['Subtopics'][subT][ind])
				}
			})
			return favQuestions
		} else if (viewMode === 'Incomplete Questions') {
			const completedQues = JSON.parse(localStorage.getItem('completed'))
			const incompleteQues = []
			dataJ[topic][0]['Subtopics'][subTopic].forEach((qa, ind) => {
				if (!completedQues.includes(`${topic}-${subTopic}-${ind}`)) {
					incompleteQues.push(qa)
				}
			})
			return incompleteQues
		} else if (viewMode === 'All Questions') {
			console.log(2)
			return dataJ[topic][0]['Subtopics'][subTopic]
		}
	}
	let questionsData = getQuestionsData(subTopic)
	return (
		<div className="overflow-x-auto">
			<table>
				<tbody>
					{questionsData.map((qa, ind) => (
						<LabCard
							key={dataJ[topic][0]['Subtopics'][subTopic].indexOf(qa)}
							qna={qa}
							topic={topic}
							subTopic={subTopic}
							ind={dataJ[topic][0]['Subtopics'][subTopic].indexOf(qa)}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}
