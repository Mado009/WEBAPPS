import React from 'react'
import "./Latest.css"

function LatestaData(props) {
    return (
        <div className='lcard'>
            <div className='limg'>
                <img src={props.image} alt='image' />
            </div>
            <h4>{props.head}</h4>
            <p>{props.text}</p>

        </div>
    )
}

export default LatestaData