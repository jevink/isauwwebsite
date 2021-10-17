import React from "react";
import AboutUs from "./AboutUs";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function Officers() {
    return (
        <div>
            <AboutUs />
            <Container className="text-center" style={{ gridAutoRows: "1fr" }}>
                <Row xs={4} className="justify-content-center" style={{ display: "flex", position: "relative" }}>
                    <Col style={{ display: "flex", background: "linear-gradient(#fddd39 0 0) bottom/100% 70% no-repeat" }}>
                        <div style={{ position: "relative", alignSelf: "flex-end" }}>
                            <img src="https://cdn.contrastly.com/wp-content/themes/contrastly-v9/images/anthropics-portraitpro.png" style={{ width: "70%" }}></img>
                        </div>
                    </Col>

                    <Col style={{ display: "flex", background: "linear-gradient(#fddd39 0 0) bottom/100% 70% no-repeat" }}>
                        <div style={{ position: "relative", alignSelf: "flex-end" }}>
                            <img src="https://assets.grooveapps.com/images/5fff4a731d2cfa006f386042/1624073591_Professional-Headshots-Portraits-by-Jared-Wolfe-Alexandria-VA-Portrait-Studio-Testimonial-01.png" style={{ width: "70%" }}></img>
                        </div>
                    </Col>
                </Row>

                <Row xs={4} className="justify-content-center" style={{ display: "flex" }}>
                    <Col style={{ padding: "0", alignSelf: "flex-end" }}>
                        <div style={{ alignSelf: "flex-end" }}>
                            <h3 style={{ fontWeight: "700", fontSize: `calc(12px + 0.5vw)`, marginBottom: "0" }}>President</h3>
                            <p style={{ fontWeight: "300", fontSize: `calc(12px + 0.3vw)`, marginBottom: "0" }}>Names Goes Here</p>
                        </div>
                    </Col>

                    <Col style={{ padding: "0", alignSelf: "flex-end" }}>
                        <div style={{ alignSelf: "flex-end" }}>
                            <h3 style={{ fontWeight: "700", fontSize: `calc(12px + 0.5vw)`, marginBottom: "0" }}>Vice President</h3>
                            <p style={{ fontWeight: "300", fontSize: `calc(12px + 0.3vw)`, marginBottom: "0" }}>Names Goes Here</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Officers;