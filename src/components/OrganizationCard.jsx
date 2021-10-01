import React from "react";
import Card from 'react-bootstrap/Card'

function OrganizationCard(props) {
    function renderButton(hasButton) {
        if (hasButton) {
            return (
                <button id={props.id} onClick={props.handleClick} className="btn btn-circle w-100 btn-block" ><i className={`fas fa-angle-down ${props.isSelected ? "btn-rotate" : "btn-unrotate"}`}></i></button >
            );
        }
    }

    return (
        <Card className="mx-auto" style={{ width: "calc(20vw + 32px)", maxWidth: "240px", borderRadius: "8px" }}>
            <Card.Img variant="top" src={props.image} style={{ height: "calc(20vw + 24px)", maxHeight: "240px", borderRadius: "8px 8px 0 0" }} />
            {/* Change card body padding only when the dropdown button is rendered */}
            <Card.Body style={{ padding: props.hasButton ? "calc(0.6vw + 4px) calc(0.8vw + 5px) 0" : "calc(0.6vw + 4px) calc(0.8vw + 5px) calc(0.6vw + 6px)" }}>
                <Card.Title style={{ fontWeight: "700", fontSize: "calc(0.5vw + 12px)", marginBottom: "0" }}>{props.position}</Card.Title>
                <Card.Text style={{ fontWeight: "300", fontSize: "calc(0.3vw + 12px)", marginBottom: "0" }}>{props.name}</Card.Text>
            </Card.Body>
            {renderButton(props.hasButton)}
        </Card >
    );
}

export default OrganizationCard;