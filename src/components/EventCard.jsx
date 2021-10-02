import React from 'react';
import Card from 'react-bootstrap/Card';

function EventCard(props) {
    return (
        <div style={{ padding: "0.6vw", height: "100%" }}>
            <Card style={{ borderRadius: "16px", height: "100%" }}>
                <Card.Img variant="top" src="https://picsum.photos/2000" style={{ borderRadius: "16px 16px 0 0" }} />
                <div className="row" style={{ margin: "10px", height: "inherit" }}>
                    <div className="col-2 text-center " style={{ padding: "0", margin: "auto" }}>
                        <p className="upcoming-events-month">{props.month}</p>
                        <p className="upcoming-events-date">{props.date}</p>
                    </div>
                    <div class="col-10" style={{ padding: "0px 0px 0px 12px" }}>
                        <h3 className="events-card-title">{props.title}</h3>
                        <p className="events-card-text">{props.text}</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default EventCard;