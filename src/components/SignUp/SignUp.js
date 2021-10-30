import React from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
const SignUp = () => {
    return (
        <div style={{ marginTop: '120px' }}>
            <h4> Please Login for now. Later this Sign up page will be modified</h4>
            <Link to='/login'> <Button className="button"></Button></Link>
        </div>
    );
};

export default SignUp;