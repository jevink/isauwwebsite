import React from 'react';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom'

// Navbar
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'

import Home from './Home';
import Officers from './Officers'
import Events from './Events'

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

    const [showPopUp, setShowPopUp] = React.useState(true);
    function renderPopUp() {
        if (showPopUp) {
            return (
                <Alert className="alert-fixed"
                    variant="dark"
                    onClose={() => setShowPopUp(false)}
                    dismissible
                    closeVariant="white">
                </Alert>
            );
        }
    }

    return (
        <BrowserRouter basename="/isauw">
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
                                <Link to="/">
                                    <img alt="isauwlogo-white" src="images/isauwlogo-white.png" className="isauw-logo" />
                                </Link>
                            </Navbar.Brand>

                            {/* Collapses to a hamburger menu at the expand="lg" breakpoint */}
                            <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto navList"> {/* ms-auto right aligns the nav links */}
                                    <NavLink to="/" className="navLink" exact activeClassName="navLinkActive">Home</NavLink>
                                    <NavLink to="/officers" className="navLink" exact activeClassName="navLinkActive">Officers</NavLink>
                                    <NavLink to="/events" className="navLink" exact activeClassName="navLinkActive">Events</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>

                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/officers" component={Officers} />
                    <Route path="/events" component={Events} />
                </Switch>

                {renderPopUp()}

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