import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className='top' >
        <div className='social-logo'>
          <h1>R Estate</h1>
          <p>Aty ku enderra behet realitet.</p>
        </div>
        <div className='social-media'>
          <a href='/'>
            <i className='fa-brands fa-facebook-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram-square'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter-square'></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Additional Links</h4>
          <a href='/'>Home</a>
          <a href='/'>About</a>
          <a href='/'>Blog</a>
          <a href='/'>Politika e privatesise</a>
        </div>
        <div >
          <h4>Property Type</h4>
          <a href='/'>Apartment</a>
          <a href='/'>Villa</a>
          <a href='/'>Land</a>
          <a href='/'>Office / Practice</a>
        </div>
        <div >
          <h4>Rreth nesh</h4>
          <a href="tel:123-456-7890">Phone: 123-456-7890</a>
          <a href='mailto:info@restate.com'>Email: info@restate.com</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;