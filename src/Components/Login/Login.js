import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div>
            <h2>This is Login Page</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br />
            <button onClick={signInUsingGithub}> GitHub Sign In </button>
            <br />
            <Link to="/register">New User?</Link>
        </div >
    );
};

export default Login;