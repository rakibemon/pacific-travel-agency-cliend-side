import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Destination from '../Destination/Destination';
import './Destinations.css'
const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    // use this state to determain data is lodded or not
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://safe-citadel-81362.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => {
                setDestinations(data)
                setIsLoading(false)
            })
    }, []);

    // Show spinner when data is not lodded
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };
    return (
        <Container id='destination'>
            <Row className='g-4 my-4'>
                <h2 className='text-center destination-subtitle'>Destination</h2>
                <h1 className='text-center destination-title'>Tour Destination</h1>
                {
                    destinations.map(destination => <Destination key={destination._id} destination={destination}></Destination>)
                }
            </Row>
        </Container>
    );
};

export default Destinations;