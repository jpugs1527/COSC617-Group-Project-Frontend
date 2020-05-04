import React from "react";
import { Card } from 'react-bootstrap';

function VehicleCard(data) {
    let json = data.data;
    return (
        <div>
            <Card
                className="vehicleCards"
                border="dark"
                data-url={json.url}
                onClick={() => window.location.replace(json.url)}>
                <Card.Img variant="top" src={json.image} width="180px" height="180px" />
                <Card.Body>
                    <Card.Title>{json.vehicleName}</Card.Title>
                    <Card.Text>
                        Rent this car for only ${json.cost} per day!
                        <br/><br/>
                        <small>Located in: {json.location}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VehicleCard;