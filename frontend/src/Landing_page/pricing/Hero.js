import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row m-auto text-center">
        <section className="py-5  text-center">
          <h2 className="text-center  fs-1 fw-semibold lh-base">Charges</h2>
          <p className="fs-4 text-muted">List of all charges and taxes</p>
        </section>
        <div className="row text-center" style={{marginBlock:"8rem"}}>
            <div className="col-4 p-2">
              <img
                src="media/images/pricing0.svg"
                style={{ width: "100%", height: "auto" }}
              />
              <h4 className="fs-2">Intraday and F&O trades</h4>
              <p className="mt-4 text-muted fs-5">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 p-2">
              <img
                src="media\images\intradayTrades.svg"
                style={{ width: "100%", height: "auto" }}
              />
              <h4 className="fs-2">Free equity delivery</h4>
              <p  className="mt-4 text-muted fs-5">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-2">
              <img
                src="media/images/pricing0.svg"
                style={{ width: "100%", height: "auto" }}
              />
              
              <h4 className="fs-2">Free direct MF</h4>
              <p className="mt-4 text-muted fs-5">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
