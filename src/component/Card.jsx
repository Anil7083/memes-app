import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MemeCard = (porps) => {
    const navigate=useNavigate();
    return (
        <Card style={{ width: '18rem', margin:'25px' }}>
            <Card.Img variant="top" src={porps.img} />
            <Card.Body>
                <Card.Title>{porps.title}</Card.Title>
                <Button onClick={(e)=> navigate(`/edit?url=${porps.img}`)} 
                variant="primary">Edit</Button>
            </Card.Body>
        </Card>
    );  
};
export default MemeCard;