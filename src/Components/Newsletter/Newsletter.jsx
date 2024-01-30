import React from 'react'
import "./Newletter.css"


const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your Email</h1>
        <p>Subscribe to stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter