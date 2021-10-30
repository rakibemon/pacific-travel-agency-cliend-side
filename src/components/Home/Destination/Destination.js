import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Destination.css'
const Destination = ({ destination }) => {
    const { _id, name, img, description, price, duration, place } = destination || {};
    const history = useHistory();
    const handleBookNow = (id) => {
        history.push(`/destination/${id}`)
    };
    const handleUpdate = (id) => {
        history.push(`/updateservice/${id}`)
    }
    return (
        <Col xs={12} md={6} lg={4} >
            <div className='p-3 rounded destination-card'>
                <figure>
                    <img className='rounded' src={img} alt={name + " Image"} />
                    <span className='price'> $ {price} / Person</span>
                </figure>
                <div className='destination-card-without-img'>
                    <p className='duration'>{duration}</p>
                    <h3>{name}</h3>
                    <p className="location"> <i className="fas fa-map-marker-alt me-2"></i>{place}</p>
                    {/* <p>${price}</p> */}
                    <p>{description.slice(0, 80)}</p>
                    <div className='text-center'>
                        <Button onClick={() => handleBookNow(_id)} className='button text-white me-3'> Book Now </Button>
                        <Button onClick={() => handleUpdate(_id)} className='button text-white'> Update </Button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Destination;