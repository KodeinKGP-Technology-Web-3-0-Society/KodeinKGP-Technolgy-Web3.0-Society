import React, { useRef, useState } from 'react'
import './LoginModal.css'

const LoginModal = ({ isVisible, onClose, onLogin }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('');
	const parentRef = useRef();

	const handleLogin = () => {
		onLogin(email, password)
	}

	const handleOutClick = (e) => {
		if(e.target == parentRef.current){
			onClose();
		}
	}

	if (!isVisible) return null

	return (
		<div className="login-modal-overlay" onClick={handleOutClick} ref={parentRef}>
			<div className="login-modal">
				<button className="close-button" onClick={onClose}>
					&times;
				</button>
				<h2>Login</h2>
				<form
					onSubmit={e => {
						e.preventDefault()
						handleLogin()
					}}
				>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="login-button">
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
