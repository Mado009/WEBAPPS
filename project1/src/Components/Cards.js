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
                            src="/images/img-9.jpg"
                            text="Explore the "
                            label='Adventure'
                            path='/services'
                        />

                        <CardItem
                            src="/images/img-2.jpg"
                            text="Explore the beautiful beaches"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-8.jpg"
                            text="Explore the beautiful beaches"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="/images/img-9.jpg"
                            text="Explore the beautiful beaches"
                            label='Adventure'
                            path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>


    )
}

export default Cards;