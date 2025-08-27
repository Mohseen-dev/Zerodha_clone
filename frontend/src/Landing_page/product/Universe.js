import React from "react";
import UniverseCard from "./UniverseCard";
import { Link } from "react-router-dom";
function Universe() {
    return (
        <div className="container my-5">
            <div className="row text-center mb-5">
                <p className="my-5 fs-5">
                    Want to know more about our technology stack? Check out the
                    Zerodha.tech blog.
                </p>
                <h2 className="my-5 fs-3 ">The Zerodha Universe</h2>
                <p className="fs-6">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="d-flex flex-wrap gap-5 justify-content-center my-5">
                    <UniverseCard
                        imageUrl="media/images/zerodhaFundhouse.png"
                        desc="Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
"
                    />
                    <UniverseCard
                        imageUrl="media\images\sensibullLogo.svg"
                        desc="Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

"
                    />
                    <UniverseCard
                        imageUrl="media\images\tijori.svg"
                        desc="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.


"
                    />
                    <UniverseCard
                        imageUrl="media\images\streakLogo.png"
                        desc="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.


"
                    />
                    <UniverseCard
                        imageUrl="media\images\smallcaseLogo.png"
                        desc="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.


"
                    />
                    <UniverseCard
                        imageUrl="media\images\dittoLogo.png"
                        desc="Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.


"
                    />
                </div>

                {/* signup */}
                <Link to="/signup" ><button className='btn btn-primary btn-lg  m-auto fs-4 mb-5'>Signup for free</button></Link>
            </div>
        </div>
    );
}

export default Universe;
