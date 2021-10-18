import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Officers from './officers.json'

function OfficersTree() {

    return (
        <div>
            {Officers.map((row, i) => {
                return (
                    <div>
                        <Row xs={3} className="justify-content-center" style={{ display: "flex" }}>
                            {row.content.map((officer, j) => {
                                return (
                                    <Col style={{ display: "flex", background: "linear-gradient(#fddd39 0 0) bottom/100% 70% no-repeat" }}>
                                        <div style={{ alignSelf: "flex-end" }}>
                                            <img src={officer.img} style={{ width: "70%" }}></img>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                        <Row xs={3} className="justify-content-center" style={{ display: "flex", marginBottom: "50px" }}>
                            {row.content.map((officer, j) => {
                                return (
                                    <Col style={{ alignSelf: "flex-start" }}>
                                        <p style={{ fontWeight: "300", fontSize: `calc(10px + 0.3vw)`, marginBottom: "0" }}>{officer.name}</p>
                                        <h3 style={{ fontWeight: "700", fontSize: `calc(10px + 0.4vw)`, marginBottom: "0" }}>{officer.position}</h3>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                )
            })}
        </div>
    );
}

export default OfficersTree;