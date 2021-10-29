import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    useEffect(() => {
        fetch('https://safe-citadel-81362.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    return (
        <Container>
            <Row className='g-4 my-4'>
                <h1 className='text-center'>Tour Destination</h1>
                {
                    destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)
                }
            </Row>
        </Container>
    );
};

export default Destinations;