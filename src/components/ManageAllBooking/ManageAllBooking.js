import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [deleteAcknowledged, setDeleteAcknowledged] = useState(false);
    const [modifiedAcknowledged, setModifiedAcknowledged] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://safe-citadel-81362.herokuapp.com/manageallorder')
            .then(res => res.json())
            .then(data => {
                setAllBooking(data)
                setIsLoading(false)
            });
    }, [deleteAcknowledged,modifiedAcknowledged]);
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
    const handleStatus = (id) =>{
        const status = {statu:"Confrimed"};
        fetch(`https://safe-citadel-81362.herokuapp.com/status/${id}`,{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(status)
            
        })
        .then(res=>res.json())
        .then(data => {
            if(data){
                alert("Status Updated to Confirmed");
                setModifiedAcknowledged(true)
            }
        })
    }
    return (
        <Container style={{ marginTop: '200px' }}>
            {
                <Row className='g-4 mt-5 booking-card'>
                    {
                        allBooking.map(booked => {
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
                                            <p> <b>{booked?.email}</b></p>
                                            <h6>Status : {booked?.status}</h6>
                                            <Button onClick={() => handleDelete(booked?._id)} className='mt-3 me-3'>Cancel Booking</Button>
                                            <Button onClick={()=>handleStatus(booked?._id)} className='mt-3'>Status change</Button>
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

export default ManageAllBooking;