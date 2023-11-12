import React from 'react';

const ProblemStatement2 = () =>{
    return (
        <div className='problem2' style={{color:"white",width:"90vw",margin:"0 auto"}}>
            <p className='apply_details'><span>Problem Statement :</span>Forecasting Quality and Dependability at the IIT Kharagpur Campus with the Aid of Artificial Intelligence.</p><br/>
            <p className='problem_text'>The challenge in this hackathon is to develop an AI-driven platform designed to forecast the quality and dependability of businesses, individuals, and locations within the boundaries of the IIT Kharagpur campus. This platform aims to provide valuable insights to IIT Kharagpur students, faculty, and visitors, enabling them to make informed decisions when engaging with various aspects of campus life.</p>
            <br/>
            <p className='problem_subheading'>Components of the Problem : </p><br/>
            <p className='problem_text'><span>Business Evaluation: </span>Participants are tasked with creating a system that assesses the quality and reliability of businesses operating within the IIT Kharagpur campus. This system will take into account factors such as user reviews, public sentiment, and other pertinent data to generate scores indicating the quality and reliability of each business.<br/><br/>
            <span>Individual Assessment: </span> In addition to businesses, the platform should also gauge the quality and reliability of individuals within the campus community. This involves analyzing user-generated data, including reviews, interactions, and social media activity, to determine the trustworthiness and dependability of individuals.<br/><br/>
            <span>Location Assessment:</span> To enhance the overall campus experience, the platform should assess the quality and desirability of various locations on the IIT Kharagpur campus. This assessment may be based on data such as crime statistics, user reviews, and other location-specific information.
            </p><br/><br/>
            <p className='problem_subheading'>Data Sources :</p><br/>
            <p className='problem_text'>Participants are encouraged to make use of a variety of data sources and APIs to gather and process relevant information. Suggested data sources include:<br/><br/><span>Google Places API:</span> For details about businesses and campus locations.<br/>
            <span>Yelp Fusion API: </span>For user reviews and ratings of local businesses.<br/>
            <span>Twitter API:</span> To capture real-time sentiment data related to individuals and locations.<br/>
            <span>Local Crime Data: </span>Access to crime statistics from local law enforcement agencies.<br/>
            <span>Weather APIs: </span>To consider the influence of weather on quality assessments.<br/>
            <span>Geocoding Services:</span> For precise location data.</p><br/><br/>
            <p className='problem_subheading'>Considerations:</p><br/>
            <p className='problem_text'><span>1.Data Privacy: </span>It is imperative that all participants handle user-generated data with the utmost care, ensuring the privacy and anonymity of individuals and adhering to ethical guidelines.<br/>
            <span>2.User Interface:</span> Develop an intuitive and user-friendly interface that enables users to easily access quality and reliability assessments.<br/>
            <span>3.Scalability:</span> Ensure that the platform can grow to meet the evolving needs of the IIT Kharagpur campus.<br/>
            <span>4.Feedback Mechanism:</span> Implement a feedback system that allows users to validate or dispute quality and reliability assessments.<br/></p><br/>
            <p className='problem_subheading'>Evaluation Criteria:</p><br/>
            <p className='problem_text'>1.Accuracy of Quality and Reliability Predictions.<br/>
            2.Usability and User Interface Design.<br/>
            3.Ethical Considerations and Data Privacy.<br/>
            4.Innovation in Data Processing and Analysis.<br/><br/></p>
            <p className='problem_subheading'>Deliverables:</p><br/>
            <p className='problem_text'>1.A fully functional AI-powered web platform (a locally hosted application is acceptable) that assesses quality and reliability based on the device's location.<br/>2.Documentation detailing the data sources, methods, and technologies employed.<br/>3.A presentation showcasing the platform's features and capabilities.</p><br/>
            <p className='problem_subheading'>Prizes:</p><br/>
            <p className='problem_text'>First, second, and third-place prizes will be awarded to the most innovative and effective solutions.</p>
        </div>
    )
}

export default ProblemStatement2;




