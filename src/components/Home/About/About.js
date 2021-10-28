import React from 'react';
import './About.css';
import aboutBanner from '../../../img/about-banner.jpg';
import aboutImg from '../../../img/about-img.jpg';
import { Col, Container, Row, Button } from 'react-bootstrap';
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
                            <div>
                                <h3>About Us</h3>
                                <h1>Make Your Tour <br /> Memorable and Safe <br /> With Us</h1>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <Button className='button text-white me-3'> Book Your Destination </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;