import React from 'react';
import CardItem from './Carditem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Shikoni keto destinacione fantastike:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src="/images/img-1.jpg"
                            text="Plazhet Mahnitese"
                            label='Aventure'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img-2.jpg"
                            text="Qyteti i Beratit"
                            label='Tradite'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-5.jpg"
                            text="Syri I Kalter"
                            label='Aventure'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-8.jpg"
                            text="Alpet e Shqiperise"
                            label='Aventure'
                            path='/services'
                        />
                        
                    </ul>

                </div>
            </div>
        </div>


    )
}

export default Cards;