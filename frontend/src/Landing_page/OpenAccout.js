import React from 'react'
import { Link } from 'react-router-dom';
function OpenAccount() {
    return (
        <div className='container text-center my-5'>
            <div className='row'>
                <h1 className='fs-4 mb-4'>Open a Zerodha account</h1>
                <p className='fs-5 mb-4 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades</p>
                <Link to='/signup'><button className='btn btn-primary btn-lg  m-auto fs-4 mb-5 col-2' >Sign up for free</button></Link>

            </div>
        </div>
    );
}

export default OpenAccount;