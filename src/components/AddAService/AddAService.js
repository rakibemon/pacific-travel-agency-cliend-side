import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const AddAService = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://safe-citadel-81362.herokuapp.com/addaservice', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Service Added Successfully");
                    reset();
                }
            })


    };
    return (
        <div className='mt-5 pt-5'>

            <Container className='d-flex justify-content-center align-items-center' style={{ marginTop: '100px', height: '60vh' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center mb-4 info-title'> Add a Service </h1>




                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control  {...register("img", { required: true })} placeholder="https://imglink.jpg" />
                    </Form.Group>



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

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control {...register("description", { required: true })} as="textarea" rows={3} />
                    </Form.Group>
                    {errors.exampleRequired && <span>This field is required</span>}
                    <Button variant="primary" type="submit">
                        Add a Service
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default AddAService;