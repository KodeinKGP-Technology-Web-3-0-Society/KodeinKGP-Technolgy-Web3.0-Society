import React, { useState } from 'react'
import dataJ from '../../../data/qna/lab-questions.json'
import Questions from './Questions'

export default function SubTopics({ topic, viewMode }) {
	const [openSubTopics, setOpenSubTopics] = useState([])

	const toggleSubTopic = topic => {
		setOpenSubTopics(prevOpenTopics =>
			prevOpenTopics.includes(topic)
				? prevOpenTopics.filter(t => t !== topic)
				: [...prevOpenTopics, topic]
		)
	}
	return (
		<div className="sub-topic-container">
			<div id="subTopics">
				{Object.keys(dataJ[topic][0]['Subtopics']).map((subTopic, index) => (
					<div key={index} className="w-full bg-[#01011b] rounded-lg !mb-4 overflow-hidden">
						<div
							className="text-[1.5rem] font-semibold bg-[#43434390] text-white flex justify-between cursor-pointer border-b border-b-[#5be6ff] items-center !p-5"
							onClick={() => toggleSubTopic(subTopic)}
						>
							{subTopic
								.replace(/([a-z])([A-Z0-9])|([A-Z])([0-9])/g, '$1$3 $2$4')
								.replace(/\bAnd\b/g, 'and')}
							<span className="text-[1.5rem]">
								{openSubTopics.includes(subTopic) ? '-' : '+'}
							</span>
						</div>
						{openSubTopics.includes(subTopic) && (
							<div className="sub-dropdown-content">
								<Questions
									topic={topic}
									subTopic={subTopic}
									viewMode={viewMode}
								/>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	)
}
