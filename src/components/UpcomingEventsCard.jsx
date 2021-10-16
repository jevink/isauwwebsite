import React from 'react';
import Card from 'react-bootstrap/Card';

function UpcomingEventsCard(props) {
    return (
        <div style={{ padding: "0.6vw", height: "100%" }}>
            <Card style={{ borderRadius: "16px", height: "100%" }}>
                <div className="div-gradient">
                    {/* Event Image */}
                    <Card.Img variant="top" src={props.img} style={{ borderRadius: "16px" }} />

                    {/* Text and dark filter overlay on top of image */}
                    <div className="div-overlay">
                        <div className="row" style={{ margin: "10px", height: "inherit" }}>

                            {/* Event Date */}
                            <div className="text-center div-events-card-date">
                                <p className="upcoming-events-month">{props.month}</p>
                                <p className="upcoming-events-date">{props.date}</p>
                            </div>

                            <div className="div-events-card-content">
                                {/* Event Name */}
                                <h3 className="events-card-title">{props.title}</h3>

                                {/* Time and Location */}
                                <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                    <div className="align-self-center align-middle no-hover">
                                        <i className="fas fa-clock events-card-icon"></i>
                                    </div>
                                    <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                        <p className="events-card-icon-text">
                                            {"6:30 PM"}
                                        </p>
                                    </div>
                                </div>
                                <div className="align-middle align-self-center" style={{ display: "flex", flex: "1" }}>
                                    <div className="align-self-center align-middle no-hover">
                                        <i className="fas fa-map-marker-alt events-card-icon"></i>
                                    </div>
                                    <div className="align-self-center align-middle" style={{ paddingLeft: "8px" }}>
                                        <p className="events-card-icon-text">
                                            {"Lyceum, HUB"}
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