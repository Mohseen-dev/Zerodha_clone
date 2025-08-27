import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid text-white"
      style={{ backgroundColor: "#387ed1", height: "400px" }}
    >
      <div className="container p-5">
        <div className="d-flex justify-content-between">
          <h4>Support Portal</h4>
          <p className="text-white">
            <a className="text-white fs-6" href="">
              Track Tickets
            </a>
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-5 text-white">
            <p className="fs-3 ">
              Search for answer or browse help topics to create a ticket
            </p>
            <input
              className="form-control p-3 fs-6 fw-medium"
              placeholder="Eg. how do i activate F&Q,why is order getting rejected...."
            />
            <br />
            <a className="text-white me-3" href="">
              Track account opening
            </a>
            <a className="text-white me-3 " href="">
              Track segment activation
            </a>
            <a className="text-white me-3 " href="">
              Intraday.margin
            </a>
            <a className="text-white me-3 " href="">
              Kite user manual
            </a>
          </div>

          <div className="col-2"></div>
          <div className="col-5 text-white">
            <h5 className="fs-4">Featured</h5>
            <ul style={{listStyleType: "decimal" , color: "white"}}>
              <li className="mb-3 fs-6 ">
                <a href="#" className=" text-white pt-5">
                  Currents Takeovers and Delisting-January 2024
                </a>
              </li>
              <li className="mb-3 fs-6">
                <a href="#" className=" text-white pt-5">
                  Latest Intraday leverage-MIS & CO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
