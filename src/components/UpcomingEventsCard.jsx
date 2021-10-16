import React from 'react';
import Card from 'react-bootstrap/Card';

function UpcomingEventsCard(props) {
    return (
        <div style={{ padding: "0.6vw" }}>
            <Card style={{ borderRadius: "16px" }}>
                <div className="upcoming-events-overlay">
                    {/* Event Image */}
                    <Card.Img variant="top" src={props.img} style={{ borderRadius: "16px" }} />

                    {/* Text and dark filter overlay on top of image */}
                    <div className="upcoming-events-content">
                        <div className="row" style={{ margin: "10px" }}>
                            {/* Event Date */}
                            <div className="text-center div-upcoming-events-date">
                                <p className="upcoming-events-month">{props.month}</p>
                                <p className="upcoming-events-date">{props.date}</p>
                            </div>

                            <div className="div-upcoming-events-content">
                                {/* Event Name */}
                                <h3 className="events-title">{props.title}</h3>

                                {/* Time and Location */}
                                <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                    <div className="align-self-center align-middle no-hover">
                                        <i className="fas fa-clock upcoming-events-icon"></i>
                                    </div>
                                    <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                        <p className="upcoming-events-icon-text">
                                            {props.time}
                                        </p>
                                    </div>
                                </div>
                                <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                    <div className="align-self-center align-middle no-hover">
                                        <i className="fas fa-map-marker-alt upcoming-events-icon"></i>
                                    </div>
                                    <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                        <p className="upcoming-events-icon-text">
                                            {props.loc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default UpcomingEventsCard;