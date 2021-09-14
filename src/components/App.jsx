import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

// Navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

// Carousel
import Carousel from 'react-bootstrap/Carousel';

import Home from './Home';
import OrganizationStrcuture from './OrganizationStructure'

import Footer from './Footer';


function App() {
    // 'load' event listener to hide the preloader once the main content is loaded
    window.addEventListener('load', () => {
        document.getElementById("preloader").style.display = "none";
    });

    // 'scroll' event listener to change opacity of navbar. Initially transparent, but turns opaque after scrolling down 100px.
    const [navbar, setNavbar] = React.useState(false);
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 100) {
            setNavbar(true); // true = opaque
        } else {
            setNavbar(false); // false = transparent
        }
    });

    return (
        <BrowserRouter>
            <div>
                <section id="preloader">
                    <img alt="isauwbird" src="images/isauwbird-red.png" />
                </section>

                <header>
                    {/* Navbar */}
                    <Navbar expand="lg" variant="dark" fixed="top" className={navbar ? "navActive" : "navInactive"}>
                        <Container>
                            {/* ISAUW Brand */}
                            <Navbar.Brand href="#home">
                                <img alt="isauwlogo-white" src="images/isauwlogo-white.png" style={{ height: "56px" }} />
                            </Navbar.Brand>

                            {/* Collapses to a hamburger menu at the expand="lg" breakpoint */}
                            <Navbar.Toggle className="gay" aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto navList"> {/* ms-auto right aligns the nav links */}
                                    {/* TO DO: Add "active" class to the Nav.Links dynamically */}
                                    <Nav.Link as={Link} to="/" className="navLink">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/officers" className="navLink">Officers</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* Carousel */}
                    <Carousel style={{ height: "calc(50vh + 10vw)" }}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/2000"
                                alt=""
                            />
                            <Carousel.Caption style={{ bottom: "20%", letterSpacing: "10pt" }}>
                                <div className="animated fadeInDown">
                                    <h1 className="carouselCaption">SEATTLE 101</h1>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/2200"
                                alt=""
                            />
                            <Carousel.Caption style={{ bottom: "20%", letterSpacing: "10pt" }}>
                                <div className="animated fadeInDown">
                                    <h1 className="carouselCaption">KERATON</h1>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://picsum.photos/2400"
                                alt=""
                            />
                            <Carousel.Caption style={{ bottom: "20%", letterSpacing: "10pt" }}>
                                <div className="animated fadeInDown">
                                    <h1 className="carouselCaption">SANTAPAN</h1>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </header>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/officers" component={OrganizationStrcuture} />
                </Switch>

                <Footer />

                {/* Bootstrap JS */}
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin></script>
                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin></script>
            </div>
        </BrowserRouter>

    );
}

export default App;