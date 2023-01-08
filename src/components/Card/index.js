import React from 'react';
import './styled.css';

const Card = ({ name, email }) =>
{
    return (
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <p>Nome: {name} </p>
                <p>Email: {email} </p>
            </div>
        </div>
    )
}

export default Card;
