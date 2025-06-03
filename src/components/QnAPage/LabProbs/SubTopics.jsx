import React, { useState } from 'react'
import dataJ from './new_data.json'
import Questions from './Questions'
import './SubTopic.css'

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
					<div key={index} className="subdrop">
						<div
							className="dropdown-header"
							onClick={() => toggleSubTopic(subTopic)}
						>
							{subTopic
								.replace(/([a-z])([A-Z0-9])|([A-Z])([0-9])/g, '$1$3 $2$4')
								.replace(/\bAnd\b/g, 'and')}
							<span className="dropdown-icon">
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
