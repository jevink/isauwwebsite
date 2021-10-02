import React from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';


function PastEventsGallery() {
    function PastEventsNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "inline-block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto", top: `calc((1vw + 16px)* -1)`, right: "1vw", zIndex: "99" }}
                onClick={onClick}
            ><i className="fas fa-arrow-right  slick-past-events-button"></i></div>
        );
    }
    function PastEventsPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "inline-block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto", top: `calc((1vw + 16px)* -1)`, left: "auto", right: `calc(3vw + 24px)`, zIndex: "99" }}
                onClick={onClick}
            ><i className="fas fa-arrow-left  slick-past-events-button"></i></div>
        );
    }
    const settings = {
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 4,
        swipeToSlide: true,
        infinite: true,
        className: "carousel-center-mode",
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        nextArrow: <PastEventsNextArrow />,
        prevArrow: <PastEventsPrevArrow />
    };

    return (
        <section className="my-5 div-margin-top">

            <h1 style={{ marginBottom: "0" }}><strong >Past Events</strong></h1>

            <div style={{ height: "100%", padding: `calc(2.4vw + 24px) 0 calc(0.8vw + 8px)` }}>
                <div>
                    <Slider {...settings}>
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
                <div className="mx-auto" style={{ padding: `0 calc(0.6vw + 6px)` }} >
                    <p className="events-card-title" style={{ marginTop: `calc(0.6vw + 6px)` }}>{"Event Title, "}<span style={{ fontSize: `calc(11px + 0.3vw)`, fontWeight: "300", color: "#7F7F7F" }}>{"October 1 2021"}</span></p>
                    <p className="events-card-text" style={{ marginTop: "8px" }}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                </div>
            </div>

            <hr />

            <div style={{ height: "100%", padding: `calc(2.4vw + 24px) 0 calc(0.8vw + 8px)` }}>
                <div>
                    <Slider {...settings}>
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
                <div className="mx-auto" style={{ padding: `0 calc(0.6vw + 6px)` }} >
                    <p className="events-card-title" style={{ marginTop: `calc(0.6vw + 6px)` }}>{"Event Title, "}<span style={{ fontSize: `calc(11px + 0.3vw)`, fontWeight: "300", color: "#7F7F7F" }}>{"October 1 2021"}</span></p>
                    <p className="events-card-text" style={{ marginTop: "8px" }}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                </div>
            </div>

            <hr />

        </section >
    );
}

export default PastEventsGallery;