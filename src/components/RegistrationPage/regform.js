import react, { useEffect, useState } from 'react'
import { DB_URL } from '../EventsPage/DB_URL'
// import Navbar from "../LandingPage/Navbar";
import './regformcss.css'
import React from 'react'
import Select from 'react-select'
import aiimg from './ai3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AlertComponent from './AlertComponent'
import { Link } from 'react-router-dom'

const RegistrationForm = () => {
	const [nme, setName] = useState('')
	const [rollNumber, setRollNumber] = useState('')
	const [personalEmail, setPersonalEmail] = useState('')
	const [instituteEmail, setInstituteEmail] = useState('')
	const [contactNumber, setContactNumber] = useState('')
	const [otherInvolvements, setOtherInvolvements] = useState('')
	const [isLoad, setIsLoad] = useState(false)
	const [selTeams, setSelTeams] = useState([])
	const [alertMsg, setAlertMsg] = useState('')
	const [alertShown, setAlertShown] = useState(false)
	const [successShown, setSuccessShown] = useState(false)

	useEffect(() => {
		const handleBeforeUnload = () => {
			window.scrollTo(0, 0)
		}

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [])

	useEffect(() => {
		if (alertShown) {
			const timer = setTimeout(() => {
				setAlertShown(false)
			}, 5000)

			return () => clearTimeout(timer)
		}
	}, [alertShown])

	useEffect(() => {
		if (successShown) {
			const timer = setTimeout(() => {
				setSuccessShown(false)
			}, 5000)

			return () => clearTimeout(timer)
		}
	}, [successShown])

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoad(true)
		fetch(`${DB_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: nme,
				rollNumber,
				personalEmail,
				instituteEmail,
				contactNumber,
				otherInvolvements,
				selTeams,
			}),
		})
			.then(resp => {
				if (resp.ok) {
					setSuccessShown(true)
					setName('')
					setRollNumber('')
					setPersonalEmail('')
					setInstituteEmail('')
					setContactNumber('')
					setOtherInvolvements('')
					setSelTeams([])
				} else if (resp.status == 409) {
					setSuccessShown(true)
					setName('')
					setRollNumber('')
					setPersonalEmail('')
					setInstituteEmail('')
					setContactNumber('')
					setOtherInvolvements('')
					setSelTeams([])
				} else {
					resp.text().then(txt => {
						setAlertMsg(txt)
						setAlertShown(true)
					})
				}
			})
			.catch(e => {
				console.log(e)
				setAlertMsg('Please check all fields before submitting')
				setAlertShown(true)
			})

		setIsLoad(false)
	}

	const handleSelTeam = team => {
		setSelTeams(prevTeams => {
			const isTeamSelected = prevTeams.includes(team)
			if (isTeamSelected) {
				return prevTeams.filter(t => t !== team)
			} else {
				return [...prevTeams, team]
			}
		})
	}

	return (
		<>
			{/* <Navbar /> */}
			{/* <div className="regpage">
        <div className="imgofai">
          <img src={aiimg} className="aiimgreg" />
        </div>
        <div className="regbox">
          <h5 className=" reg-header">Registration Form </h5>
          <form onSubmit={handleSubmit} className="regformtag">
            <input
              type="text"
              id="name"
              value={nme}
              onChange={(e) => setName(e.target.value)}
              className="input_box "
              placeholder="Full Name"
              required
            />
            <input
              type="text"
              id="roll-number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="input_box"
              placeholder="Roll Number"
              required
            />
            <input
              type="email"
              id="personal-email"
              value={personalEmail}
              onChange={(e) => setPersonalEmail(e.target.value)}
              className="input_box"
              placeholder="Personal E-mail"
              required
            />
            <input
              type="email"
              id="institute-email"
              value={instituteEmail}
              onChange={(e) => setInstituteEmail(e.target.value)}
              className="input_box "
              placeholder="Institute E-mail"
              required
            />
            <input
              type="tel"
              id="contact-number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="input_box"
              placeholder="Contact Number"
              required
            />
            <div className="portfolio_selector">
              <input
                type="checkbox"
                id="Trainee Developer"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Trainee Developer")}
                required
              />
              <label for="Trainee Developer" className="label_portfolio">
                Trainee Developer
              </label>
              <input
                type="checkbox"
                id="Associate Design Member"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Associate Design Member")}
                required
              />
              <label for="Associate Design Member" className="label_portfolio">
                Associate Design Member
              </label>
              <input
                type="checkbox"
                id="Associate Event Coordinator"
                className="portfolio_checker"
                onClick={(e) => handleSelTeam(e.target.id)}
                checked={selTeams.find((d) => d == "Associate Event Coordinator")}
                required
              />
              <label for="Trainie Developer" className="label_portfolio">
                Associate Events Coordinator
              </label>
            </div>
            <input
              type="text"
              id="other-involvements"
              value={otherInvolvements}
              onChange={(e) => setOtherInvolvements(e.target.value)}
              className="input_box"
              placeholder="Involvements"
              required
            />
          </form>
          <div className="submit">
            <button type="submit" className="reg-btn" disabled={isLoad} onClick={(e) => handleSubmit(e)}>
              {isLoad && (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
              </svg>)}
              {!isLoad && (<div>
                Register
              </div>)}
            </button>
          </div>
        </div>
        {alertShown && <AlertComponent type={'warning'} title={'Error registering for selections'} message={alertMsg}/>}
        {successShown && <AlertComponent type={'success'} title={'Successfully registered for selections'} message={'Thank you for participating in selection'}/>}
      </div> */}
			<div
				style={{
					background:
						'linear-gradient(to bottom right, rgb(17, 227, 251), rgb(91, 230, 255), rgb(181, 246, 253), rgb(17, 227, 251))',
					WebkitBackgroundClip: 'text',
					backgroundClip: 'text',
					color: 'transparent',
					fontSize: '7vh',
					fontWeight: 'bold',
					textAlign: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '30vh',
					marginBottom: '20px',
					marginLeft: '20px',
					marginRight: '20px',
				}}
			>
				Registrations Are Closed For Now
			</div>

			<div
				style={{
					color: 'white',
					fontSize: '3vh',
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<span>You can check out our Tasks</span>
				<Link
					to="https://drive.google.com/drive/folders/1A4P7qn8dYh_D-i5c0MjSXHzImAFzWTyx?usp=sharing"
					style={{
						color: 'black',
						background:
							'linear-gradient(to right, rgb(17, 227, 251), rgb(91, 230, 255), rgb(181, 246, 253), rgb(17, 227, 251))',
						padding: '10px 30px',
						borderRadius: '30px',
						textDecoration: 'none',
						fontSize: '3vh',
						fontWeight: 'bold',
						marginTop: '30px',
						transition: 'all 0.4s ease',
						boxShadow: '0 4px 14px rgba(17, 227, 251, 0.5)',
						backgroundClip: 'padding-box',
						WebkitBackgroundClip: 'padding-box',
					}}
					onMouseEnter={e => {
						e.target.style.background =
							'linear-gradient(to right, rgb(91, 230, 255), rgb(181, 246, 253), rgb(17, 227, 251))'
						e.target.style.transform = 'scale(1.05)'
						e.target.style.boxShadow = '0 6px 16px rgba(17, 227, 251, 0.7)'
					}}
					onMouseLeave={e => {
						e.target.style.background =
							'linear-gradient(to right, rgb(17, 227, 251), rgb(91, 230, 255), rgb(181, 246, 253), rgb(17, 227, 251))'
						e.target.style.transform = 'scale(1)'
						e.target.style.boxShadow = '0 4px 14px rgba(17, 227, 251, 0.5)'
					}}
				>
					Here
				</Link>
			</div>
		</>
	)
}
export default RegistrationForm
