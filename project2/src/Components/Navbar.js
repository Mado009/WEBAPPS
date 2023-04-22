import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className='container'>
                <h1 className='navlogo'>R Estate</h1>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <Link className='nav-item'>
                            <i class="fa-solid fa-house"></i>Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item'>
                            <i class="fa-solid fa-circle-info"></i>About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item'>
                            <i class="fa-solid fa-shop"></i>Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item'>
                            <i class="fa-solid fa-address-book"></i>Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-item'>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav >
        </>

    );
}

export default Navbar;