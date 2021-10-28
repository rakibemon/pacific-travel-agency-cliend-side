import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <Container>
            <Row className='g-4'>
                <h3>Our Blog</h3>
                <h1>Recent Post</h1>
                {
                    blogs.map(blog => {
                        return (
                            <Col xs={12} md={6} lg={4} key={blog?._id}>
                                <div >
                                    <figure>
                                        <img className='img-fluid' src={blog?.img} alt="" />
                                    </figure>

                                    <div className='blog-text'>
                                        <h3>{blog?.name}</h3>
                                        <Button className='button text-white me-3'> Read More </Button>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    );
};

export default Blog;