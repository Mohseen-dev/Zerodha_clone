import React from 'react'
function Hero() {
    return (
        <div className='container my-5 text-center'>
            <div className='row py-5 border-bottom'>
                <h3 className='mb-3'>Technology</h3>
                <p className='fs-5 text-muted'>Sleek,modern and intuitive trading platforms</p>
                <p className='text-muted'>Check out our <a className='text-decoration-none' href='#'>investment offerings {" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>

        </div>
    );
}

export default Hero;