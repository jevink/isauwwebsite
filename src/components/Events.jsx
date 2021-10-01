import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel';
import EventsPhotoGallery from './EventsPhotoGallery';

function Events() {
    return (
        <div>
            {/* Carousel */}
            <Carousel touch={true} style={{ height: "calc(50vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2000"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">SEATTLE 101</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2200"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">KERATON</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="https://picsum.photos/2400"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carousel-title">SANTAPAN</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            < Container >
                <EventsPhotoGallery />
            </Container>
        </div>
    )
}

export default Events;