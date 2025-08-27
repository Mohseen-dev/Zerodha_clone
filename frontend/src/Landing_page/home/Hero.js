import React from 'react'
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className='container text-center my-5'>
            <div className='row'>
                <img src='media/images/homeHero.png' alt='Home' className='mb-5'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p className='fs-5'>Online platform to invest in stocks,derivatives,mutual funds,and more</p>
                <Link to="/signup" ><button className='btn btn-primary btn-lg m-auto fs-4 mb-5'>Signup for free</button></Link>

            </div>
        </div>
     );
}

export default Hero;