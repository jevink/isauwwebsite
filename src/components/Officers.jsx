import React from "react";
import AboutUs from "./AboutUs";
import Container from 'react-bootstrap/Container'
import OfficersTree from "./OfficersTree";

function Officers() {
    return (
        <div>
            <AboutUs />
            <Container className="text-center" style={{ gridAutoRows: "1fr" }}>
                <OfficersTree />
            </Container>
        </div>
    );
};

export default Officers;