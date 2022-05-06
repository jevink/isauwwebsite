import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function KeratonGames() {
    return (
        <div style={{ backgroundColor: "#031B28"}}>
            <h1 className="py-5 keraton-section-header">Games</h1>
            <Row className="keraton-games-row">
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="https://cdn-image.hipwee.com/wp-content/uploads/2016/08/hipwee-lomba-balap-bakiak.jpg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Bakiak</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="../images/sack.jpeg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Sack Race</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
                <Col xs={4} style={{padding: "0", margin: "0", overflow: "hidden"}}>
                    <div className='keraton-games-container'>
                        <img src="../images/hopscotch.jpeg" className="keraton-games-image"></img>
                        <div style={{position: "relative"}}>
                            <p className="keraton-games-text">Engklek</p>
                        </div>
                        <span class="keraton-games-overlay-top"></span>
                        <span class="keraton-games-overlay-btm"></span>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default KeratonGames