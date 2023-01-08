import React from 'react'
import './styled.css';

const Input = ({ name, value, onChange }) =>
{
    return (
        <div className="group">
            <input value={value} onChange={onChange} type="text" className="input" />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label> {name} </label>
        </div>
    )
}

export default Input;
