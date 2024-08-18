import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import data from "./EventsData.json"



const EventsPage = () => {
  const imagex =["NationalScienceWeek","Swadeshi_event","MoveEvent","Moveicon"]
  return (
    <>
      <div>
        <section className="hackathon_con"></section>

        <section>
          
          {data?.map((eventx, index) => (
            <div className="events" key={index}>
              <h2 className="heading" style={{ marginBottom: (index === 0 || index === 5) ? '3.5rem' : '0' }}>
                {index === 0 ? "Previous Hackathons" : (index === 5 ? "Previous Workshops" : null)}
              </h2>
              {/*EVENT */}
              <div className={index % 2 == 0 ? "event event2" : "event event1"}>
                <img src={`${eventx.image}`} alt="event" /> 
                <div className="event_content">
                  <h3 className="event_heading">{eventx.heading}</h3>
                  <p className="event_description" dangerouslySetInnerHTML={{ __html: eventx.description }} />
                  {Array.isArray(eventx.sponsor) && eventx.sponsor.length > 0 && (
                    <div className="sponsors">
                      <div className="sponsor_heading">
                        <h5>Sponsored by :</h5>
                      </div>
                      <div className="sponsor_list">
                        {eventx.sponsor.map((sponsor, i) => (
                          <div key={i} className="sponsor_item">
                            <img src={eventx.sponsor_img[i]} alt={sponsor} className="sponsor_logo" />
                            <h4 className="sponsor_name">{sponsor}</h4>
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
  );
};

export default EventsPage;
