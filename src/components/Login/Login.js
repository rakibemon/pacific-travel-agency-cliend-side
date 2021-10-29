import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css';
const Login = () => {
    const { signInUsingGoogle, setUser, error, setError, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    //where user wanted to go or send user to homepage
    const redirect_uri = location.state?.from || '/home';
    //Google Sign in
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                setUser(result.user);
                history.push(redirect_uri)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false)
            })
    };
    //change the title when change the route
    useEffect(()=>{
        document.title='Login';
      },[]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='mt-5 pt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="test" {...register("example")} />

                <input {...register("exampleRequired", { required: true })} />

                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
                {error ? <p className='text-danger mt-4'> {error}</p> : ''}
            </form>
                <div className="d-flex mt-5 align-items-center">
                    <p className='login-with'>Or log in With</p>
                    <i onClick={handleGoogleSignIn} className="fab fa-google-plus-square mx-4 login google"></i>
                </div>
        </div>
    );
};

export default Login;