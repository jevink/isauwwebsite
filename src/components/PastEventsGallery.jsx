import React from 'react';
import Slider from 'react-slick';
import PastEventsCard from './PastEventsCard';

function PastEventsGallery() {
    function PastEventsNextArrow(props) {
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
    function PastEventsPrevArrow(props) {
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
        centerMode: true,
        centerPadding: 0,
        slidesToShow: 3,
        swipeToSlide: true,
        infinite: true,
        className: "carousel-center-mode",
        speed: 1000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '20%',
                    slidesToShow: 1,
                }
            }
        ],
        nextArrow: <PastEventsNextArrow />,
        prevArrow: <PastEventsPrevArrow />
    };

    return (
        <section className="my-5 div-margin-top">
            <h1 className="past-events-title"><strong >Past Events</strong></h1>

            <PastEventsCard title="KERATON" date="SAT, OCT 2 2021" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." settings={settings} />
            <hr />
            <PastEventsCard title="KERATON" date="SAT, OCT 2 2021" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." settings={settings} />
            <hr />
        </section >
    );
}

export default PastEventsGallery;