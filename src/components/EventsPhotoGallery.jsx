import React from 'react';
import EventCard from './EventCard';
import Slider from 'react-slick';

function EventsPhotoGallery() {
    function UpcomingEventsNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto" }}
                onClick={onClick}
                isDisabled={className?.includes("slick-disabled")}
            ><i className="fas fa-angle-right slick-upcoming-events-button"></i></div>
        );
    }
    function UpcomingEventsPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto" }}
                onClick={onClick}
                isDisabled={className?.includes("slick-disabled")}
            ><i className="fas fa-angle-left slick-upcoming-events-button"></i></div>
        );
    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        nextArrow: <UpcomingEventsNextArrow />,
        prevArrow: <UpcomingEventsPrevArrow />
    };

    function PastEventsNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "inline-block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto", top: "0", right: "1vw", zIndex: "99" }}
                onClick={onClick}
            ><i className="fas fa-chevron-circle-right  slick-past-events-button"></i></div>
        );
    }
    function PastEventsPrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "inline-block", color: "rgba(0,0,0,0.5)", width: "auto", height: "auto", top: "0", left: "auto", right: `calc(3vw + 24px)`, zIndex: "99" }}
                onClick={onClick}
            ><i className="fas fa-chevron-circle-left  slick-past-events-button"></i></div>
        );
    }
    const otherSettings = {
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        swipeToSlide: true,
        infinite: true,
        className: "carousel-center-mode",
        speed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        nextArrow: <PastEventsNextArrow />,
        prevArrow: <PastEventsPrevArrow />
    };

    return (
        <div>
            <section className="my-5 div-margin-btm">
                <h1><strong>Upcoming Events</strong></h1>
                {/* Past Events */}
                <Slider {...settings}>
                    <EventCard month="JAN" date="01" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                    <EventCard month="JAN" date="02" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                    <EventCard month="JAN" date="03" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                    <EventCard month="JAN" date="04" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                    <EventCard month="JAN" date="05" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                </Slider>
            </section >

            <hr />

            <section className="my-5 div-margin-top">
                <h1><strong>Past Events</strong></h1>

                <div className="row">
                    <div className="col-sm-4 col-6" style={{ paddingRight: "0" }} >
                        <div className="test">
                            <p className="events-card-title">{"Event title"}</p>
                            <p className="events-card-text">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}</p>
                        </div>
                    </div>
                    <div className="col-sm-8 col-6">
                        <Slider {...otherSettings}>
                            <div className="event-img-div">
                                <img src="https://picsum.photos/2200" className="img-fluid event-img"></img>
                            </div>
                            <div className="event-img-div">
                                <img src="https://picsum.photos/2200" className="img-fluid event-img"></img>
                            </div>
                            <div className="event-img-div">
                                <img src="https://picsum.photos/2200" className="img-fluid event-img"></img>
                            </div>
                            <div className="event-img-div">
                                <img src="https://picsum.photos/2200" className="img-fluid event-img"></img>
                            </div>
                            <div className="event-img-div">
                                <img src="https://picsum.photos/2200" className="img-fluid event-img"></img>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section >
        </div >

    );
}

export default EventsPhotoGallery;