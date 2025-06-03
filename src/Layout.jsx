import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Header/Navbar'
import Animation from './components/LandingPage/Animation'

function Layout() {

	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
