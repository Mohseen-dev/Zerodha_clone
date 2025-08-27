import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row my-5">
        <section className="py-5 border-bottom">
          <h2 className="text-center pb-5 fs-4 fw-semibold lh-base">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </h2>
        </section>
        <div className="row">
          <div className="fs-6 text-muted col-6 px-3 py-5 lh-lg">
            <p>
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p>
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p>
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>
          <div className="fs-6 text-muted col-6 balance px-3 py-5 lh-lg">
            <p>
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and
              investors..
            </p>
            <p>
              TRainmatter, our fintech fund and incubator, has invested in
              several fintech startups with the goal of growing the Indian
              capital markets.
            </p>
            <p>
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is saying
              about us or learn more about our business and product
              philosophies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
