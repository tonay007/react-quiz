import React from 'react';
import classes from './styles/Illustration.module.css';
import image from '../assets/images/login.svg'

const Illustration = () => {
    return (
        <div className={classes.illustration}>
            <img src={image} alt="Login" />
        </div>
    );
};

export default Illustration;