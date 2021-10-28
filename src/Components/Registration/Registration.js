import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Registration = () => {
    return (
        <div>
            <h4>Please Register</h4>
            <form>
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Link to='/login'>Already Registered?</Link>
        </div>
    );
};

export default Registration;