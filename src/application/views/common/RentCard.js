import React from "react";
import { Card, Button } from 'react-bootstrap';

function RentCard(data, vehicleData) {
    let json = data.data;
    
    return (
        <div>
            <Card
                className="rentCards"
                border="dark">
                <Card.Body>
                    <Card.Title>{json.vehicle}</Card.Title>
                    <Card.Text>
                        Total Cost: {json.totalCost}<br/>
                        Rent Length (Days): {json.rentLength}<br/>
                        Dates: {json.start} to {json.end}<br/>
                        Location: {json.location}<br/>
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
        </div>
    );
}

export default RentCard;