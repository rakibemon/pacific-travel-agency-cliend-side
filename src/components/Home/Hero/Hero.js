import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import './Hero.css';
const Hero = () => {
    return (
        <div>
            <div className='home-bg' id='hero'>
                <Container>
                    <Row className='hero-section'>
                        <Col xs={12} md={12}>
                            <h1 className='hero-title'>Discover Your Favorite<br /> <b> Place with Us</b></h1>
                            <p>Travel to the any corner of the world, without going around in circles</p>
                            <NavHashLink to='/home#destination'><Button variant='success rounded-lg py-3 px-4'>Take a Look</Button></NavHashLink>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Hero;