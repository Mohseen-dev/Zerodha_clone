import React from "react";
function Footer() {
  return (
    <div className="container mx-auto">
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <img src="media/images/logo.svg" style={{ width: "150px" }} />
            <p className="fs-6 fw-medium text-muted my-4">
              &copy;2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="socialIcon d-flex gap-3">
              <img
                src="media/images/twitterFilled.svg"
                style={{ width: "25px" }}
              />
              <img src="media/images/facebook.svg" style={{ width: "25px" }} />
              <img src="media/images/instagram.svg" style={{ width: "25px" }} />
              <img src="media/images/linkedin.svg" style={{ width: "25px" }} />
              <img src="media/images/telegram.svg" style={{ width: "25px" }} />
            </div>
          </div>
          <div className="col-xs-12 col-sm-3">
            <ul style={{ listStyle: "none" }}>
              <li className="fs-4 fw-semibold mb-3 text-muted">Company</li>
              <li className="mb-3 fs-6 fw-medium text-muted">About</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Products</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Pricing</li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                Referral programme
              </li>
              <li className="mb-3 fs-6 fw-medium text-muted">Careers</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Zerodha.tech</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Press & media</li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                Zerodha cares (CSR)
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <ul style={{ listStyle: "none" }}>
              <li className="fs-4 fw-semibold mb-3 text-muted">Support</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Contact</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Support portal</li>
              <li className="mb-3 fs-6 fw-medium text-muted">Z-Connect blog</li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                List of charges
              </li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                Downloads & resources
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-3">
            <ul style={{ listStyle: "none" }}>
              <li className="fs-4 fw-semibold mb-3 text-muted">Account</li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                Open an account
              </li>
              <li className="mb-3 fs-6 fw-medium text-muted">Fund transfer</li>
              <li className="mb-3 fs-6 fw-medium text-muted">
                60 day challenge
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI
            Registration no.: INZ000038238 Registered Address: Zerodha Broking
            Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
            School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>


          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>



          <p className="text-muted " style={{ fontSize: "10.5px" }}>
           <a className="text-decoration-none" href="#">Smart Online Dispute Resolution</a> | <a className="text-decoration-none" href="#">Grievances Redressal Mechanism</a>
          </p>


          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            Investments in securities market are subject to market risks; read all the related documents carefully before investing
          </p>


          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>

          
          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            India's largest broker based on networth as per NSE. <a className="text-decoration-none" href="#">NSE broker factsheet</a>
          </p>


          <p className="text-muted" style={{ fontSize: "10.5px" }}>
            "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" className="text-decoration-none">create a ticket here.</a>
          </p>
          
        </div>
      </div>
  );
}

export default Footer;
