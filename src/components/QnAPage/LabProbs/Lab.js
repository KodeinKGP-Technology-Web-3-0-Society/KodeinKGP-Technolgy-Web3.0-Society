import React, { useEffect, useState } from 'react'
import dataJ from './new_data.json'
import SubTopics from './SubTopics'
import './Lab.css'
import LoginModal from './LoginModal'


export default function Lab() {
	const BACKEND_URL = ' https://kik-backend.onrender.com/'
	const [openTopics, setOpenTopics] = useState([])
	const [viewMode, setViewMode] = useState('All Questions') // "All Questions", "Favourite Questions", Incomplete Questions
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [isLoginOpen, setIsLoginOpen] = useState(false);

	useEffect(() => {
		if (!localStorage.getItem('user')) {
			if(!localStorage.getItem('favourites')) localStorage.setItem('favourites', JSON.stringify([]));
		}else{
			const uid = localStorage.getItem('user');
			fetch(BACKEND_URL + 'status', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${uid}`
				}
			}).then((resp) => {
				if(resp.ok){
					resp.json().then((data) => localStorage.setItem('favourites', JSON.stringify(data.favourites)))
				}
			})
		}
	}, []);

	useEffect(() => {
		if (!localStorage.getItem('user')) {
			if (!localStorage.getItem('completed')) localStorage.setItem('completed', JSON.stringify([]));
		}else{
			const uid = localStorage.getItem('user');
			fetch(BACKEND_URL + 'status', {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${uid}`
				}
			}).then((resp) => {
				if(resp.ok){
					resp.json().then((data) => localStorage.setItem('completed', JSON.stringify(data.completed)))
				}
			})
		}
	}, []);

	const toggleTopic = topic => {
		setOpenTopics(prevOpenTopics =>
			prevOpenTopics.includes(topic)
				? prevOpenTopics.filter(t => t !== topic)
				: [...prevOpenTopics, topic]
		)
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}
	const handleViewModeChange = mode => {
		setViewMode(mode)
		setIsDropdownOpen(false)
	}

	const openLoginBox = () => {
		if(localStorage.getItem('user')){
			localStorage.removeItem('user');
		}else{
			setIsLoginOpen(true);
		}
	}

	const loginUser = (email, pswd) => {
		const favourites = JSON.parse(localStorage.getItem('favourites'));
		const complete = JSON.parse(localStorage.getItem('completed'));
		fetch(BACKEND_URL + 'makeUser', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({email, pswd, favourites, complete})
		}).then((data) => {
			if(data.ok){
				setIsLoginOpen(false);
				data.json().then((txt) => {
					localStorage.setItem('user', txt.user);
					localStorage.setItem('completed', JSON.stringify(txt.completed));
					localStorage.setItem('favourites', JSON.stringify(txt.favourites));
				});
			}
		});
	}

	return (
		<div className="lab-container">
			<h1 id="LabHeader">LAB PROBLEMS</h1>
			<div className="dropdown-filter">
				<div className="lab-problem-login">
					<button className="lt-btn-login" onClick={openLoginBox}>
						{localStorage.getItem('user') ? 'LogOut' : 'Login to Save'}
					</button>
				</div>
				<div
					className={`custom-dropdown ${isDropdownOpen ? 'open' : ''}`}
					onClick={toggleDropdown}
				>
					<div className="custom-dropdown-selected">
						{viewMode}
						<span className="custom-dropdown-icon">
							{isDropdownOpen ? '▲' : '▼'}
						</span>
					</div>
					<div className="custom-dropdown-options">
						<div
							className="custom-dropdown-option"
							onClick={() => handleViewModeChange('All Questions')}
						>
							All Questions
						</div>
						<div
							className="custom-dropdown-option"
							onClick={() => handleViewModeChange('Favourite Questions')}
						>
							Favourite Questions
						</div>
						<div
							className="custom-dropdown-option"
							onClick={() => handleViewModeChange('Incomplete Questions')}
						>
							Incomplete Questions
						</div>
					</div>
				</div>
			</div>
			<div id="Lab">
				{Object.keys(dataJ).map((topic, index) => (
					<div key={index} className="dropdown">
						<div className="dropdown-header" onClick={() => toggleTopic(topic)}>
							{topic
								.replace(/([a-z])([A-Z0-9])|([A-Z])([0-9])/g, '$1$3 $2$4')
								.replace(/\bAnd\b/g, 'and')}
							<span className="dropdown-icon">
								{openTopics.includes(topic) ? '-' : '+'}
							</span>
						</div>
						{openTopics.includes(topic) && (
							<div className="dropdown-content">
								<SubTopics topic={topic} viewMode={viewMode} />
							</div>
						)}
					</div>
				))}
			</div>
			<LoginModal isVisible={isLoginOpen} onClose={() => setIsLoginOpen(false)} onLogin={loginUser}/>
		</div>
	)
}
