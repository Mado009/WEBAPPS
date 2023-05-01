import React from 'react';
import './Herosec.css';
import { Link } from 'react-router-dom';

function Herosec(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt='HeroPic' src={props.heroimg} />

                <div className='hero-text'>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <Link to={props.url} className={props.btnclass}>
                        {props.btntext}
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Herosec