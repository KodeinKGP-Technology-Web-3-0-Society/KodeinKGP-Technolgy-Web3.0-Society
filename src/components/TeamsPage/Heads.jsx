import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TeamsPage.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faFacebook,
	faInstagram,
	faLinkedin,
	faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Head from './Heads.json'

library.add(faFacebook, faInstagram, faEnvelope, faLinkedin, faGithub)

const Heads = () => {
	function eachHead(head) {
		return (
			<article className="member head">
				<h4 className="photo-role">
					<strong>{head.role}</strong>
				</h4>
				<div className="photo-image">
					<img src={head.image_url} alt="" />
					<div className="photo-details">
						<span>
							<a href={head.facebook} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'facebook']} />
							</a>
						</span>
						<span>
							<a href={head.mailid} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon="envelope" />
							</a>
						</span>
						<span>
							<a href={head.instagram} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'instagram']} />
							</a>
						</span>
						<span>
							<a href={head.linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'linkedin']} />
							</a>
						</span>
						<span>
							<a href={head.github} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'github']} />
							</a>
						</span>
					</div>
				</div>
				<h5 className="photo-name">
					<strong>{head.name}</strong>
				</h5>
			</article>
		)
	}
	return <div className="heads">{Head.map(eachHead)}</div>
}

export default Heads
