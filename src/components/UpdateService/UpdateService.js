import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
const UpdateService = () => {
    const {serviceId} = useParams();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://safe-citadel-81362.herokuapp.com/updateservice/${serviceId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Service Updates Successfully");
                    reset();
                }
            })


    };
    return (
        <div className='mt-5 pt-5'>

            <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center mb-4 info-title'> Update Service Info of <b>{serviceId}</b> insert here</h1>



                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control {...register("name", { required: true })} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridDuration">
                            <Form.Label>Duration</Form.Label>
                            <Form.Control {...register("duration", { required: true })} />
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPlace">
                            <Form.Label>Place</Form.Label>
                            <Form.Control {...register("place", { required: true })} />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control {...register("price", { required: true })} />
                        </Form.Group>
                    </Row>

                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button variant="primary" type="submit">
                        Update Service
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default UpdateService;