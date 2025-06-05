import React, { useRef, useState } from 'react'

const LoginModal = ({ isVisible, onClose, onLogin }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [loading, setLoading] = useState(false)
	const parentRef = useRef()

	const handleLogin = () => {
		onLogin(email, password)
	}

	const handleOutClick = e => {
		if (e.target == parentRef.current) {
			onClose()
		}
	}

	if (!isVisible) return null

	return (
		<div
			className="fixed top-0 left-0 w-full h-full bg-[#00000080] flex items-center justify-center z-100"
			onClick={handleOutClick}
			ref={parentRef}
		>
			<div className="bg-[#212121] text-[#f1f1f1] rounded-lg !p-5 w-[400px] shadow-md">
				<button className="border-none absolute text-[#f1f1f1] cursor-pointer text-2xl top-2.5 right-2.5" onClick={onClose}>
					&times;
				</button>
				<h2 className='!pb-2.5 text-2xl font-semibold'>Login</h2>
				<form
					onSubmit={e => {
						e.preventDefault()
						handleLogin()
					}}
				>
					<div className="!mb-4">
						<label htmlFor="email" className='block !mb-1.5 text-[0.9rem]'>Email</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='w-full p-2 rounded border-0 bg-[#333] focus:outline-none '
							required
						/>
					</div>
					<div className="!mb-4">
						<label htmlFor="password" className='block !mb-1.5 text-[0.9rem]'>Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full p-2 rounded border-0 bg-[#333] focus:outline-none'
							required
						/>
					</div>
					<button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
						Login
					</button>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
