import Founders from './Founders'
import Heads from './Heads.jsx'
import OldHeads from './OldHeads.jsx'
import './TeamsPage.css'

const TeamsPage = () => {
	return (
		<>
			<div
				className="teamspage"
				style={{
					backgroundColor: 'rgb(1, 1, 27)',
					textAlign: 'center',
					color: 'white',
					fontFamily: 'Montserrat',
				}}
			>
				<div className="members">
					<h3 className="members_title heads_title">Heads</h3>
					<Heads />
				</div>
				<div className="members">
					<h3 className="members_title founders_title">Founders</h3>
					<Founders />
				</div>
				<div className="members">
					<h3 className="members_title advisors_title">Advisors</h3>
					<OldHeads />
				</div>
			</div>
		</>
	)
}

export default TeamsPage
