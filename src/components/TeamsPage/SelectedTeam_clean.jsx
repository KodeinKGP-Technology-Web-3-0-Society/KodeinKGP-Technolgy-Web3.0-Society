import { useState, useEffect } from 'react'
import WebTeam from '../../data/teams/WebTeam.json'
import DesignTeam from '../../data/teams/DesignTeam.json'
import EventTeam from '../../data/teams/EventTeam.json'
import BlockchainTeam from '../../data/teams/BlockchainTeam.json'
import AITeam from '../../data/teams/AITeam.json'
import './SelectedTeam.css'
import WebImage from '../../assets/Web search-rafiki.svg'
import AIImage from '../../assets/Cool robot-cuate.svg'
import BlockchainImage from '../../assets/Bitcoin P2P-amico.svg'
import DesignImage from '../../assets/Designer girl-bro.svg'
import EventsImage from '../../assets/Events-bro.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faInstagram, faLinkedin, faGithub, faEnvelope)

const SelectedTeam = props => {
	let number = props.id - 1
	let totalData = [WebTeam, AITeam, BlockchainTeam, EventTeam, DesignTeam]
	let selectedData = totalData[number]
	let memberDetails = selectedData[0]
	const [transition, setTransition] = useState(false)
	let teamImage

	switch (props.id - 1) {
		case 0:
			teamImage = WebImage
			break
		case 1:
			teamImage = AIImage
			break
		case 2:
			teamImage = BlockchainImage
			break
		case 3:
			teamImage = DesignImage
			break
		case 4:
			teamImage = EventsImage
			break
		default:
			teamImage = null
	}

	useEffect(() => {
		setTransition(false)
		setTimeout(() => setTransition(true), 100)
	}, [props.id])

	return (
		<div className={`selected-team-container ${transition ? 'active' : ''}`}>
			<h2 className="team_name">{selectedData[1].teamName}</h2>
			<div className="heads">
				{memberDetails.map(member => {
					return member.image_url ? (
						<div className="member" key={member.name}>
							<div className="photo-image">
								<img src={member.image_url} alt={member.name} />
								<div className="photo-details">
									<span>
										<a href={member.facebook} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon={['fab', 'facebook']} />
										</a>
									</span>
									<span>
										<a href={member.mailid} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon="envelope" />
										</a>
									</span>
									<span>
										<a href={member.instagram} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon={['fab', 'instagram']} />
										</a>
									</span>
									<span>
										<a href={member.linkedin} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon={['fab', 'linkedin']} />
										</a>
									</span>
									<span>
										<a href={member.github} target="_blank" rel="noreferrer">
											<FontAwesomeIcon icon={['fab', 'github']} />
										</a>
									</span>
								</div>
							</div>
							<h5 className="photo-name">
								<strong>{member.name}</strong>
							</h5>
						</div>
					) : (
						<div key={member.name}></div>
					)
				})}
			</div>
		</div>
	)
}

export default SelectedTeam
