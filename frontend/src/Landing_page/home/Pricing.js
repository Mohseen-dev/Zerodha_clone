import React from "react";
function Pricing() {
  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="fs-3 mb-5">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a className="text-decoration-none" href="#">
            See pricing{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col-6 p-5 text-center border">
              <h1>₹0</h1>
              <p> Free account opening</p>
            </div>
            <div className="col-6 p-5 text-center border">
              <h1>₹20</h1>
              <p> Intraday and
F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
