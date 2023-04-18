import React from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Footer.css';
import { CiFacebook } from "react-icons/ci";
import {BsInstagram} from "react-icons/bs";
import {AiOutlineYoutube} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";


function Footer() {
  return (
    <div className='footer-container'>
      <section
        className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Regjistrohuni qe te arrini te merrni ofertat me te fundit nga ne:
        </p>
          Mundeni te ç'rregjistroheni kur te deshironi
        <p className='footer-subscription-text'>
        </p>
        <div className='input-areas'>
          <form>
            <input type='email' name='email'
              placeholder='Your Email' className='footer-input' />
            <Button buttonStyle='btn--outline'>Regjistrohu</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>Si funksionon?</Link>
            <Link to='/'>Karrierat</Link>
            <Link to='/'>Investoret</Link>
            <Link to='/'>Kushtet e Klientit</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Na Kontaktoni</h2>
            <Link to='/'>Kontakt</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinacionet</Link>
            <Link to='/'>Sponsorizime</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Video</h2>
            <Link to='/'>Dergoni Video</Link>
            <Link to='/'>Ambasadoret</Link>
            <Link to='/'>Agjencia</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              MADO <i class='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>MADO © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <CiFacebook/><i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <BsInstagram/><i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <AiOutlineYoutube/><i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <BsTwitter/><i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <BsLinkedin/><i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;