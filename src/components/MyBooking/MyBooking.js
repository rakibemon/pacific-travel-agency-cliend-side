import React, { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row, Spinner, Button } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    const [booking, setBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    const { user } = useAuth();
    const { email } = user || {};
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://safe-citadel-81362.herokuapp.com/mybooking/${email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                setIsLoading(false)
            })
    }, [email,deleteAcknowledged]);
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };
    const handleDelete = (id) => {
        const warning = window.confirm("Are you sure to cancle the booking")
        if (warning) {
            fetch(`https://safe-citadel-81362.herokuapp.com/delete/${id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert('Booking Canceled Successfully');
                        setDeleteAcknowledged(true)
                    }
                })
        }
    };
    return (
        <Container style={{ marginTop: '200px' }}>
            {
                <Row className='g-4 mt-5 booking-card'>
                    {
                        booking.map(booked => {
                            return (
                                <Col xs={12} md={6} key={booked?._id}>
                                    <div className='d-flex'>
                                        <figure>
                                            <img src={booked?.destation?.img} alt="" />
                                        </figure>
                                        <div className='ms-4'>
                                            <h3>{booked?.destation?.name}</h3>
                                            <p>${booked?.destation?.price}</p>
                                            <p>{booked?.destation?.place}</p>
                                            <h6>Status : {booked?.status}</h6>
                                            <Button onClick={() => handleDelete(booked?._id)} className='mt-3'> Cancel Booking</Button>
                                        </div>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
            }
        </Container>
    );
};

export default MyBooking;