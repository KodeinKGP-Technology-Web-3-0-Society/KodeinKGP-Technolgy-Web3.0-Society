import React from 'react'
import Founders from './Founders'
import Heads from './Heads.js'
import OldHeads from './OldHeads.js'
// import Teams from './Teams.js'
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

				{/* <div className="teams">
					<h3 className="members_title our_teams_title">Our Teams</h3>
					<Teams />
				</div> */}
			</div>
		</>
	)
}

export default TeamsPage

// const indicator = (member) => {
//   return (
//  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={`${member.id-1 }`} className={member.id==1 ? "active":""} aria-label={`Slide ${member.id}`}></button>
//      )

//  };
//  const slide = (member) => {
//    return (
//     <div className={ member.id == 1 ? "carousel-item active" :"carousel-item" }>
//     <article className="member" key={member.id}>
//       <div className="photo-image">
//         <img src={member.image_url} alt="profile-photo" />
//         <div className="hello">
//           <span>
//             <a href={member.facebook} target="_blank">
//               <i className="fa-brands fa-facebook"></i>
//             </a>
//           </span>
//           <span>
//             <a href={member.mailid} target="_blank">
//               <i className="fa-solid fa-envelope"></i>
//             </a>
//           </span>
//           <span>
//             <a href={member.instagram} target="_blank">
//               <i className="fa-brands fa-instagram-square"></i>
//             </a>
//           </span>
//           <span>
//             <a href={member.linkedin} target="_blank">
//               <i className="fa-brands fa-linkedin"></i>
//             </a>
//           </span>
//           <span>
//             <a href={member.github} target="_blank">
//               <i className="fa-brands fa-github"></i>
//             </a>
//           </span>
//         </div>
//       </div>
//       <h5>
//         <strong>{member.name}</strong>
//       </h5>
//     </article>
//     </div >
//   );

//  }
//  const teams = (team)=>{
//    return (
//    <div className="team">
//        <div className="app">
//        <div id={`carouselExampleRide${team[0][0].teamId}`} className="carousel slide" data-bs-ride="carousel">
//          <div className="carousel-indicators">
//      {team[0].map(indicator)}
//    </div>
//    <div className="carousel-inner">
//      {team[0].map(slide)}
//    </div>
//    <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExampleRide${team[0][0].teamId}`} data-bs-slide="prev">
//      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//      <span className="visually-hidden">Previous</span>
//    </button>
//    <button className="carousel-control-next" type="button" data-bs-target={`#carouselExampleRide${team[0][0].teamId}`} data-bs-slide="next">
//      <span className="carousel-control-next-icon" aria-hidden="true"></span>
//      <span className="visually-hidden">Next</span>
//    </button>
//  </div>
//        </div>
//        <div className="teamContent">
//          {team[1].content}
//        </div>
//        </div>
//    );
//  }

// import WebTeam from "./WebTeam.json";
// import DesignTeam from "./DesignTeam.json";
// import EventTeam from "./EventTeam.json";
// import BlockchainTeam from "./BlockchainTeam.json";
// import AITeam from "./AITeam.json";
