import React from 'react';
import './styled.css';

const ButtonAnimat = ({ title, hover, onClick }) =>
{
    return (
        <div className="scene">
            <div className="cube">
                <span className="side top" onClick={onClick} >
                    {hover === 'Início' ? (<i className='fa fa-home'> {title} </i>) : (<i className='fa fa-users'> {title} </i>)}
                </span>
                <span className="side front" onClick={onClick} > {hover}
                </span>
            </div>
        </div>
    )
}

export default ButtonAnimat
