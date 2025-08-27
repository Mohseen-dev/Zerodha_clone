import React from 'react'
function Team() {
    return (
        <div className='container mb-5'>
            <div className='row mb-5'>
                <h1 className='text-center fs-3 fw-semibold mb-5'>People</h1>
                <div className='col-6 text-center'>
                    <img src='media/images/nithinKamath.jpg' className='rounded-circle mb-3' style={{width:"300px"}}/>
                    <h3 className='text-center fs-5'>Nithin Kamath</h3>
                    <p className='text-center fs-6 text-muted my-3'>Founder,CEO</p>
                </div>
                <div className='col-6 fs-6 lh-lg'>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p className='mb-5'>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>

        </div>
    );
}

export default Team;