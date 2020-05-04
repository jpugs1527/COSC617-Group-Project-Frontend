import React from "react";
import { Card } from 'react-bootstrap';

function VehicleCard(data) {
    let json = data.data;
    
    let text = "";
    if (json.page == "searchView") {
        text = <>
            Rent this vehicle for only ${json.cost} per day!
                <br/><br/>
                <small>Located in: {json.location}</small>
            </>;
    } else if (json.page == "userVehicleView"){
        text = <>
            Cost Per Day: ${json.cost}
                <br/><br/>
                <small>Located in: {json.location}</small>
            </>;
    }
    
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
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VehicleCard;