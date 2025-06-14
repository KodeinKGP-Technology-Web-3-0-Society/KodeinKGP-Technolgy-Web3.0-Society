// import logo from './logo.svg';
import React from 'react'

import Labtheory from './components/QnAPage/LabTheory'
import Lab from './components/QnAPage/LabProbs/Lab'
import Theory from './components/QnAPage/TheoryProbs/Theory'
import Questions from './components/QnAPage/LabProbs/Questions'
import LabQuestion from './components/QnAPage/LabProbs/LabQuestion'
import TheoryQuestion from './components/QnAPage/TheoryProbs/TheoryQuestion'
import RegistrationForm from './components/RegistrationPage/regform'
import Selection from './Selection'
import ArticlePage from './components/ArticlesPage/ArticlePage'
import TheoryTopic from './components/QnAPage/TheoryProbs/TheoryTopic'
import TeamsPage from './components/TeamsPage/TeamsPage'
import EventsPage from './components/EventsPage/EventsPage'
import Home from './components/LandingPage/Home'
import ApplyPage from './components/EventsPage/ApplyPage'
import Layout from './Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import './App.css'
function App() {
	return (
		<>
			<Router>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="" element={<Home />} />
						<Route path="/pds" element={<Labtheory />} />
						<Route path="/pds/lab" element={<Lab />} />
						<Route path="/pds/theory" element={<Theory />} />
						<Route path="/pds/lab/:topic" element={<Questions />} />
						<Route path="/pds/theory/:topic" element={<TheoryTopic />} />
						<Route
							path="/pds/lab/:topic/:subTopic/:ind"
							element={<LabQuestion />}
						/>
						<Route
							path="/pds/theory/:topic/:ind"
							element={<TheoryQuestion />}
						/>
						<Route path="/teams" element={<TeamsPage />}></Route>
						<Route path="/regform" element={<RegistrationForm />}></Route>
						<Route path="/events" element={<EventsPage />}></Route>
						<Route path="/events/apply" element={<ApplyPage />}></Route>
						<Route path="/articles" element={<ArticlePage />}></Route>
					</Route>
				</Routes>
			</Router>
		</>
	)
}

export default App
