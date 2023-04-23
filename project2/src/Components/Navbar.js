import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => { setClick(!click) }

    return (
        <>
            <nav className='container'>
                <h1 className='navlogo'>R Estate</h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times"
                        : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active"
                :"nav-menu"}>
                    <li  className='nav-item'>
                        <Link to='/' className='nav-links' >
                            <i class="fa-solid fa-house"/>Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links'>
                            <i class="fa-solid fa-circle-info"/>About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links'>
                            <i class="fa-solid fa-shop"></i>Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links'>
                            <i class="fa-solid fa-address-book"></i>Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links-mobile'>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <button>Sign Up</button>
            </nav >
        </>
    );
}

export default Navbar;