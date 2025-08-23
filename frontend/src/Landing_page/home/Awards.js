import React from 'react'
function Awards() {
    return ( 
     <div className='container my-5'>
        <div className='row'>
            <div className='col-6 p-3'>
                <img src='media/images/largestBroker.svg' style={{width:"80%"}}/>
            </div>
            <div className='col-6 p-4 mb-5'>
                <h1>Largest stock broker in India</h1>
                <p className='mb-5 fw-normal'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row mb-2'>
                    <div className='col-6'>
                        <ul>
                            <li className='mb-3'>Futures and Options</li>
                            <li  className='mb-3'>Commodity derivatives</li>
                            <li  className='mb-3'>Currency derivatives</li>
                            
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li  className='mb-3'>Stock & IPOs</li>
                            <li  className='mb-3'>Direct mutual funds</li>
                            <li  className='mb-3'>Bonds and Gob.Securities</li>
                            
                        </ul>
                    </div>
                </div>
                <img src='media/images/pressLogos.png' className='mb-5' style={{width:"90%"}}/>
            </div>

        </div>
     </div>
     );
}

export default Awards;