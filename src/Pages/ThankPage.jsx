import React from 'react'
import { Link } from 'react-router-dom'

function ThankPage() {
    return (
        <section className='text-center py-5 my-5'>
            <img src="https://cdn-icons-png.flaticon.com/128/3472/3472620.png" alt="" />
            <h1>Thank for your order!</h1>
            <Link to='/react-project'>Continue Shoping</Link>
        </section>
    )
}

export default ThankPage