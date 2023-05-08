import React from 'react'
import "./Latest.css"
import LatestaData from './LatestaData'

function Latest() {
  return (
    <div className='latest'>
        <h1>Latest Properties Sold</h1>
        <div className='latestcard'>
            <LatestaData
            image="/images/img-3.jpg"
            head="Vile"
            text="Vila me vlere 350,000 € "
            />
            <LatestaData
            image="/images/img-4.jpg"
            head="Vile"
            text="250.000"
            />
            <LatestaData
            image="/images/img-5.jpg"
            head="Apartament"
            text="100.000"
            />

        </div>
    </div>
  )
}

export default Latest