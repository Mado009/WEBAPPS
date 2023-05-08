import React from 'react'
import "./Contactform.css"

function Contactform() {
    return (
        <div className='form-container'>
            <h1>Contact us!</h1>
            <form>
                <input placeholder='Name'/>
                <input placeholder='Email'/>
                <input placeholder='Subject'/>
                <textarea placeholder="Messsage" rows="4" />
                <button>Send Messsage</button>
            </form>
        </div>
    )
}

export default Contactform