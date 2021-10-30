import React from 'react';
import './About.css';
import aboutBanner from '../../../img/about-banner.jpg';
import aboutImg from '../../../img/about-img.jpg';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
const About = () => {
    return (
        <div>
            <div id='about'>
                <figure className='d-block'>
                    <img className='about-bg' src={aboutBanner} alt="" />
                </figure>
                <Container>
                    <Row className='g-4'>
                        <Col xs={12} md={6}>
                            <div>
                                <figure>
                                    <img className='img-fluid about-img' src={aboutImg} alt="" />
                                </figure>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='ms-4 about-text-container'>
                                <h3 className='about-subtitle'>About Us</h3>
                                <h1 className='about-title'>Make Your Tour <br /> Memorable and Safe <br /> With Us</h1>
                                <p className='about-description'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <NavHashLink to='/home#destination'><Button className='button about-button text-white me-3 py-2 px-3'> Book Your Destination </Button></NavHashLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;