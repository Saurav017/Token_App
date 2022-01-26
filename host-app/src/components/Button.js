import React from 'react';
import { useNavigate } from 'react-router-dom';
const Button = (props) => {

    const handleClick = () => {
        const navigate = useNavigate();

        navigate.push(`${props.params}`)
    }

    return (
        <button onClick={handleClick}>{props.title}</button>
    );
};

export default Button;
