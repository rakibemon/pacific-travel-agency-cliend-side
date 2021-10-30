import React, { useEffect, useState } from 'react';
import { Container, Button, Spinner, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    const [modifiedAcknowledged, setModifiedAcknowledged] = useState(false);
    //change the title when change the route
    useEffect(() => {
        document.title = 'Manage All Booking (Admin)';
    }, []);

    // Load all user data from DB
    useEffect(() => {
        setIsLoading(true)
        fetch('https://safe-citadel-81362.herokuapp.com/manageallorder')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data)
                setIsLoading(false)
            });
    }, [deleteAcknowledged, modifiedAcknowledged]);

    // Show spinner when data isn't loaded up
    if (isLoading) {
        return (
            <div className='text-center'>
                <Spinner style={{ marginTop: '120px' }} animation="grow" variant="warning" />
            </div>
        );
    };

    // Delete specific Booking
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

    // Update Status Pending to Confirm
    const handleStatus = (id) => {
        const status = { statu: "Confrimed" };
        fetch(`https://safe-citadel-81362.herokuapp.com/status/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(status)

        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Status Updated to Confirmed");
                    setModifiedAcknowledged(true)
                }
            })
    };

    return (
        <Container style={{ marginTop: '200px' }}>
            {
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>SL.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Place name</th>
                            <th>Duration</th>
                            <th>Status</th>
                            <th>Cancel</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    {
                        allBooking.map((booked, index) => {
                            return (
                                <tbody key={booked?._id} style={{ fontWeight: '500' }}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{booked?.displayName}</td>
                                        <td>{booked?.email}</td>
                                        <td>{booked?.destation?.name}</td>
                                        <td>{booked?.destation?.duration}</td>
                                        <td style={{ color: '#f15d30' }}>{booked?.status}</td>
                                        <td><Button onClick={() => handleDelete(booked?._id)} className='button me-3'>Cancel Booking</Button></td>
                                        <td><Button onClick={() => handleStatus(booked?._id)} className='button'>Change Status</Button></td>
                                    </tr>
                                </tbody>
                            );
                        })
                    }
                </Table>
            }
        </Container>
    );
};


export default ManageAllBooking;