import React, { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';

const MyBooking = () => {
    const [booking, setBooking] = useState([])
    const {user} = useAuth();
    const {email} = user || {};
    // const {email} = user || {}
    useEffect(()=>{
        fetch(`http://localhost:5000/mybooking/${email}`)
        .then(res => res.json())
        .then(data => setBooking(data))
    },[email])
    return (
        <div>
            <h3 style={{marginTop:'200px'}}>{booking.length}</h3>
        </div>
    );
};

export default MyBooking;