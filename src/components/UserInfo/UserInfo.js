import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
const UserInfo = () => {
    const [singleDestination, setSingleDestination] = useState({});
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { userid } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/destination/${userid}`)
            .then(res => res.json())
            .then(data => setSingleDestination(data))
    }, [userid]);
    const { user } = useAuth()
    const onSubmit = data => {
        if (singleDestination) {
            data.destation = singleDestination;
            fetch(`http://localhost:5000/userinfo`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        alert("Booking Successfully")
                    }
                })
            reset();
        }

    };
    return (
        <div className='mt-5 pt-5'>

            <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center mb-4 info-title'> Fill up this form </h1>
                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formPlaintextName">
                            <Form.Label column sm="2">Name</Form.Label>
                            <Col sm="10">
                                <Form.Control {...register("displayName")} style={{ fontWeight: '700', color: 'cadetblue' }} plaintext readOnly defaultValue={user?.displayName} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPlaintextEmail">
                            <Form.Label column sm="2">Email</Form.Label>
                            <Col sm="10">
                                <Form.Control {...register("email")} style={{ fontWeight: '700', color: 'cadetblue' }} plaintext readOnly defaultValue={user?.email} />
                            </Col>
                        </Form.Group>
                    </Row>



                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control  {...register("address", { required: true })} placeholder="1234 Main St" />
                    </Form.Group>



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control {...register("phone", { required: true })} />
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select {...register("State", { required: true })}>
                                <option>Mirpur</option>
                                <option>Dhanmondi</option>
                            </Form.Select>
                        </Form.Group>



                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control {...register("zip", { required: true })} />
                        </Form.Group>
                    </Row>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default UserInfo;