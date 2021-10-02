import React from 'react';
import EventCard from './EventCard';
import Slider from 'react-slick';

function UpcomingEventsGallery() {

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

    return (
        <section className="my-5 div-margin-btm">
            <div className="row">
                <div className="col-12">
                    <h1 className="my-3"><strong>Upcoming Events</strong></h1>
                    {/* Past Events */}
                    <Slider {...settings}>
                        <EventCard month="JAN" date="01" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                        <EventCard month="JAN" date="02" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                        <EventCard month="JAN" date="03" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                        <EventCard month="JAN" date="04" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel turpis ac est eleifend imperdiet. " />
                        <EventCard month="JAN" date="05" title="Event Title" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
                    </Slider>
                </div>
            </div>
        </section >
    );
}

export default UpcomingEventsGallery;