import './Events.css'
import data from '../../data/events/EventsData.json'
import { text } from '@fortawesome/fontawesome-svg-core'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

const EventsPage = () => {
	return (
		<>
			<div >
				<section className="hackathon_con"></section>

				<section >
					{data?.map((eventx, index) => (
						<div className=" flex flex-col w-[95%] mx-auto" key={index}>{/** Event Container */}
							<h2 
								className="text-white text-[48px] ml-[5px] mb-6 mt-[32px]  max-lg:text-[35px] max-lg:ml-4
   bg-clip-text font-poppins font-bold"
								style={{
									marginBottom: index === 0 || index === 5 ? '3.5rem' : '0',
									background:`radial-gradient(64.18% 64.18% at 71.16% 35.69%, #def9fa 0.89%, #bef3f5 17.23%, #9dedf0 42.04%, #7de7eb 55.12%, #5ce1e6 71.54%, #33bbcf 100%)`,
									WebkitBackgroundClip: 'text',
									WebkitTextFillColor: 'transparent',
									backgroundClip: 'text',
									FontFamily: 'Poppins',
								}}
							>{/* Heading for Previous Hackathons or Workshops */}
								{index === 0
									? 'Previous Hackathons'
									: index === 5
										? 'Previous Workshops'
										: null}
							</h2>
							<div className={`flex gap-8 max-lg:flex-col max-lg:gap-4 color-white max-lg:m-0 mr-0 pb-4 border-b-[2px] border-white ${index % 2 === 0 ? 'flex-row-reverse pr-12 max-lg:pr-0' : 'mt-4'}`}> {/*event */}
								<img src={`${eventx.image}`} alt="event" className='w-[45%] max-h-[350px] rounded-[8px] max-lg:w-[88%] max-lg:mx-auto ' /> {/* event img */}
								<div className="event_content">
									<h3 className="text-[30px] text-white  mt-2 mb-4 font-kanit mx-0 max-lg:text-[25px]">{eventx.heading}</h3>

									<div
										className={`leading-[30.8px] max-lg:m-0 max-lg:text-[14px] font-normal text-[#ffffffb3]  text-base ${
											index % 2 !== 0 ? 'md:mr-20' : ''
										}`}
										dangerouslySetInnerHTML={{ __html: eventx.description }}
									/>

								{Array.isArray(eventx.sponsor) &&
									eventx.sponsor.length > 0 && (
										<div className="flex gap-[20px] mt-4 items-center max-lg:pr-2">{/* Sponsor Section */}
											<div className="text-[20px] text-white font-poppins">{}
												<h5>Sponsored by :</h5>
											</div>
											<div className="flex flex-wrap gap-[10px]">
												{eventx.sponsor.map((sponsor, i) => (
														<div key={i} className="flex items-center gap-1">
															<img
																src={eventx.sponsor_img[i]}
																alt={sponsor}
																className="w-[35px] h-[35px] rounded-full object-cover"
															/>
															<h4 className="my-0 text-white mx-[10px]">{sponsor}</h4>
														</div>
													))}
												</div>
											</div>
										)}
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</>
	)
}

export default EventsPage
