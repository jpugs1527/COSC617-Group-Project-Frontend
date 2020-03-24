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
                <Card.Img variant="top" src={json.image}/>
                <Card.Body>
                    <Card.Title>{json.vehicleName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        <br/><br/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VehicleCard;