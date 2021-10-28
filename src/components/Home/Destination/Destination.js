import React from 'react';
import { Col,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Destination.css'
const Destination = ({destination}) => {
    const {name,img,description, price} = destination || {};
    const history = useHistory();
    const handleBookNow = () =>{
        history.push(`/userinfo`)
    }
    return (
        <Col xs={12} md={6} lg={4} >
            <div className='p-3 rounded destination-card'>
                <img className='rounded' src={img} alt={name + " Image"} />
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{description.slice(0, 100)}</p>
                <div className='text-center'>
                    <Button onClick={handleBookNow} className='button text-white me-3'> Book Now </Button>
                    <Button className='button text-white'> Delete </Button>
                </div>
            </div>
        </Col>
    );
};

export default Destination;