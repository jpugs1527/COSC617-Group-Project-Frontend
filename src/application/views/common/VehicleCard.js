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

    let availability;
    if (json.status != "rented") {
        availability = <strong>
            This vehicle is available for rental today!
            </strong>
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
                        <br></br>
                        <br></br>
                        {availability}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VehicleCard;