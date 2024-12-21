import SelectedTeam from './SelectedTeam'
import sets from '../LandingPage/sets.png'

import React, { useState, useEffect } from 'react'

// Loading screen with selections poster
// const LoadingScreen = () => {
//   return (
//     <div
//       className="loading-container"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <img src={sets} alt="Loading" className="square-image" />
//     </div>
//   );
// };

const MainContent = () => {
	const [activeButton, setActiveButton] = useState('1')

	const ButtonClicked = e => {
		setActiveButton(e.target.id)
		// console.log(e.target.id);
	}
	return (
		<div className="teams">
			<div className="classif-buttons">
				<button
					className={`team-button ${activeButton === '1' ? 'active' : ''}`}
					id="1"
					onClick={ButtonClicked}
				>
					Tech Team
				</button>
				<button
					className={`team-button ${activeButton === '2' ? 'active' : ''}`}
					id="2"
					onClick={ButtonClicked}
				>
					AI & Metaverse Team
				</button>
				<button
					className={`team-button ${activeButton === '3' ? 'active' : ''}`}
					id="3"
					onClick={ButtonClicked}
				>
					Blockchain Team
				</button>
				<button
					className={`team-button ${activeButton === '4' ? 'active' : ''}`}
					id="4"
					onClick={ButtonClicked}
				>
					Events Team
				</button>
				<button
					className={`team-button ${activeButton === '5' ? 'active' : ''}`}
					id="5"
					onClick={ButtonClicked}
				>
					Design & Media Team
				</button>
			</div>
			<div>
				<SelectedTeam key={activeButton} id={activeButton} />
			</div>
		</div>
	)
}

const Teams = () => {
	// const [loading, setLoading] = useState(true);
	// useEffect(() => {
	//   const timer = setTimeout(() => {
	//     setLoading(false);
	//   }, 2000); // Display the loading screen for 4 seconds

	//   return () => clearTimeout(timer); // Clean up the timer
	// }, []);

	// return (
	//   <div className="App">{loading ? <LoadingScreen /> : <MainContent />}</div>
	// );
	return <div className="App">{<MainContent />}</div>
}

export default Teams
