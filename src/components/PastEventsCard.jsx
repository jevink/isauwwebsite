import React from 'react';
import Slider from 'react-slick';

function PastEventsCard(props) {
    return (
        <div style={{ padding: `1rem 0 calc(0.8vw + 8px)` }}>
            <div>
                <Slider {...props.settings}>
                    <div className="event-img-div">
                        <img src="https://picsum.photos/2200" className="img-fluid past-events-img"></img>
                    </div>
                    <div className="event-img-div">
                        <img src="https://picsum.photos/2200" className="img-fluid past-events-img"></img>
                    </div>
                    <div className="event-img-div">
                        <img src="https://picsum.photos/2200" className="img-fluid past-events-img"></img>
                    </div>
                    <div className="event-img-div">
                        <img src="https://picsum.photos/2200" className="img-fluid past-events-img"></img>
                    </div>
                    <div className="event-img-div">
                        <img src="https://picsum.photos/2200" className="img-fluid past-events-img"></img>
                    </div>
                </Slider>
            </div>
            <div className="mx-auto past-events-content">
                <p className="events-card-date">{props.date}</p>
                <p className="events-card-title">{props.title}</p>
                <p className="events-card-text">{props.text}</p>
            </div>
        </div >
    );
}

export default PastEventsCard;