import React from 'react'

const ProblemStatement2 = () => {
	return (
		<div
			className="problem_statement"
			style={{ color: 'white', width: '90vw', margin: '0 auto' }}
		>
			<p className="text-white text-[1.35rem] xl:text-base my-1 text-center">
				<span  className="font-semibold">Problem Statement :</span> Forecasting Quality and Dependability
				at the IIT Kharagpur Campus with the Aid of Artificial Intelligence
			</p>
			<br />
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">Problem Overview :</span> The challenge in this hackathon is to
				develop an AI-driven platform designed to forecast the quality and
				dependability of businesses, individuals, and locations within the
				boundaries of the IIT Kharagpur campus. This platform aims to provide
				valuable insights to IIT Kharagpur students, faculty, and visitors,
				enabling them to make informed decisions when engaging with various
				aspects of campus life.
			</p>
			<br />
			<p className="text-[1.35rem] font-semibold underline">Components of the Problem</p>
			<br />
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">1. Business Evaluation:</span> Participants are tasked with
				creating a system that assesses the quality and reliability of
				businesses operating within the IIT Kharagpur campus. This system will
				take into account factors such as user reviews, public sentiment, and
				other pertinent data to generate scores indicating the quality and
				reliability of each business.
			</p>
			<p className="text-[1.2rem] my-1">
				<span>2. Individual Assessment:</span> In addition to businesses, the
				platform should also gauge the quality and reliability of individuals
				within the campus community. This involves analyzing user-generated
				data, including reviews, interactions, and social media activity, to
				determine the trustworthiness and dependability of individuals.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">3. Location Assessment:</span> To enhance the overall campus
				experience, the platform should assess the quality and desirability of
				various locations on the IIT Kharagpur campus. This assessment may be
				based on data such as crime statistics, user reviews, and other
				location-specific information.
			</p>
			<br />
			<p className="text-[1.35rem] font-semibold underline">Data Sources</p>
			<br />
			<p className="text-[1.2rem] my-1">
				Participants are encouraged to make use of a variety of data sources and
				APIs to gather and process relevant information. Suggested data sources
				include:
				<br />
				<br />
				<span className="font-semibold">1. Google Places API:</span> For details about businesses and
				campus locations.
				<br />
				<span className="font-semibold">2. Yelp Fusion API:</span> For user reviews and ratings of local
				businesses.
				<br />
				<span className="font-semibold">3. Twitter API:</span> To capture real-time sentiment data related
				to individuals and locations.
				<br />
				<span className="font-semibold">4. Local Crime Data:</span> Access to crime statistics from local
				law enforcement agencies.
				<br />
				<span className="font-semibold">5. Weather APIs:</span> To consider the influence of weather on
				quality assessments.
				<br />
				<span className="font-semibold">6. Geocoding Services:</span> For precise location data.
			</p>

			<br />
			<p className="text-[1.35rem] font-semibold underline">Considerations</p>
			<br />
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">Data Privacy:</span> It is imperative that all participants handle
				user-generated data with the utmost care, ensuring the privacy and
				anonymity of individuals and adhering to ethical guidelines.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">User Interface:</span> Develop an intuitive and user-friendly
				interface that enables users to easily access quality and reliability
				assessments.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">Scalability:</span> Ensure that the platform can grow to meet the
				evolving needs of the IIT Kharagpur campus.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">Feedback Mechanism:</span> Implement a feedback system that allows
				users to validate or dispute quality and reliability assessments.
			</p>
			<br />
			<p className="text-[1.35rem] font-semibold underline">Evaluation Criteria</p>
			<br />
			<p className="text-[1.2rem] my-1">
				Judges will evaluate hackathon submissions based on the following
				criteria:
				<br />
				<br />
				<span className="font-semibold">1. </span>Accuracy of Quality and Reliability Predictions.
				<br />
				<span className="font-semibold">2. </span>Usability and User Interface Design.
				<br />
				<span className="font-semibold">3. </span>Ethical Considerations and Data Privacy.
				<br />
				<span className="font-semibold">4. </span>Innovation in Data Processing and Analysis.
				<br />
			</p>

			<br />
			<br />
			<p className="text-[1.35rem] font-semibold underline">Deliverables</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">1. A fully functional AI-powered web platform:</span> (a locally
				hosted application is acceptable) that assesses quality and reliability
				based on the device's location.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">2. Documentation:</span> Detailing the data sources, methods, and
				technologies employed.
			</p>
			<p className="text-[1.2rem] my-1">
				<span className="font-semibold">3. A presentation:</span> Showcasing the platform's features and
				capabilities.
			</p>
			<br />
			<p className="text-[1.35rem] font-semibold underline">Prizes</p>
			<p className="text-[1.2rem] my-1">
				First, second, and third-place prizes will be awarded to the most
				innovative and effective solutions.
			</p>
		</div>
	)
}

export default ProblemStatement2
