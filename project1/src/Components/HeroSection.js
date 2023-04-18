import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>AVENTURA PO PRET</h1>
            <p>A je gati?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    FILLO KETU
                </Button>
                <a href="https://youtube.com/watch?v=_YrUybV_VVY"
                    target="_blank" rel="noreferrer">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        SHIKO TRAILERIN
                        <i className='far fa-play-circle' />
                    </Button>
                </a>
            </div>
        </div>
    )
}

export default HeroSection;