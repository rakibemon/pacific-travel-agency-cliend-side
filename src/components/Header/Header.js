import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    // Style when the page active
    const activeStyle = {
        color: "#fff",
        backgroundColor: '#F15D30'
    }
    return (
        <div>
            <Navbar collapseOnSelect style={{ backgroundColor: '#E3E3E3' }} expand="lg" fixed='top' >
                <Container>
                    <Navbar.Brand> <NavHashLink to="/home#banner" style={{ textDecoration: 'none' }}><h2 className='logo'>Pacific<span>Travel Agency</span></h2></NavHashLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">


                        <Nav className="me-auto d-flex justify-content-start align-items-center">
                            <NavHashLink activeStyle={activeStyle} className="nav-link" to='/home#hero'> Home</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/home#destination'> Destinatios</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/home#about'> About</NavHashLink>

                            <NavHashLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/home#blog'> Blog</NavHashLink>

                            {/* This button will show only if login any user */}
                            {(user.displayName || user.email) &&

                                <div className='d-md-flex text-center'>
                                    <NavLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/mybooking'> My Booking </NavLink>

                                    <NavLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/manageallbooking'> Manage All bookings </NavLink>

                                    <NavLink activeStyle={activeStyle} className="nav-link" style={{ padding: '8px' }} to='/addaservice'> Add a Service </NavLink>
                                </div>

                            }


                            {/* When User logged in "Logout button" when not Login & SignUp button */}
                            {user.displayName || user.email ?

                                <Button className='auth-button' onClick={logOut}> Log out</Button>


                                :
                                <div style={{ padding: '8px' }}>
                                    <NavLink className="link" to='/login'> <Button className='auth-button'>Log in</Button></NavLink>
                                    <span className=' mx-2'> or </span>
                                    <NavLink className="link" to='/reg'> <Button className='auth-button'>SignUp</Button></NavLink>
                                </div>
                            }
                        </Nav>



                        {/* display logged user info */}
                        <Nav className="ms-auto">
                            {
                                (user.displayName || user.email) &&
                                <div className='d-flex user-info'>
                                    <p className='me-3 logged-user-name'>{user.displayName}</p>
                                    <figure>
                                        <img className='user-img' src={user.photoURL} alt={user.displayName + " Image"} />
                                    </figure>
                                </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;