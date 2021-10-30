import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container, Spinner, Button, Table } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import './MyBooking.css';

const MyBooking = () => {
    //change the title when change the route
    useEffect(() => {
        document.title = 'My Booking';
    }, []);
    const [booking, setBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    const { user } = useAuth();
    const { email } = user || {};

    // Loaded Logged user's Booking details
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://safe-citadel-81362.herokuapp.com/mybooking/${email}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
                setIsLoading(false)
            })
    }, [email, deleteAcknowledged]);

    // Show Spinner when data isn't loaded up
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };

    // Cancel one of user's booking
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
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Place name</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                {
                    booking.map((booked, index) => {
                        return (
                            <tbody key={booked?._id} style={{ fontWeight: '500' }}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user?.displayName}</td>
                                    <td>{user?.email}</td>
                                    <td>{booked?.destation?.name}</td>
                                    <td>{booked?.destation?.duration}</td>
                                    <td style={{ color: '#f15d30' }}>{booked?.status}</td>
                                    <td>{<Button onClick={() => handleDelete(booked?._id)} className='button'> Cancel Booking</Button>}</td>
                                </tr>
                            </tbody>
                        );
                    })
                }
            </Table>

        </Container >
    );
};

export default MyBooking;