import React from "react";
function LeftSection({imageUrl,title,desc,learmMore,playstore,appleStore,trydemo}) {
  return (
    <div className="container p-5 my-5">
      <div className="row mt-5">
        <div className="col-6">
          <img src={imageUrl} style={{ width: "80%" }} />
        </div>
        <div className="col-6 py-5" style={{ paddingInline: "100px" }}>
          <h2 className="mb-4">{title}</h2>
          <p className="text-muted fs-6 fw-medium lh-lg">
            {desc}
          </p>
          <div className="row my-4 fw-medium" style={{ paddingRight: "150px" }}>
            <div className="col-6">
              <a href={trydemo} className="text-decoration-none">
                Try demo{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="col-6">
              <a href={learmMore} className="text-decoration-none">
                Learn More{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="row" style={{ paddingRight: "150px" }}>
            <div className="col-6">
              <a href={playstore}>
                <img src="media\images\googlePlayBadge.svg" />
              </a>
            </div>
            <div className="col-6">
              <a href={appleStore}>
                <img src="media\images\appstoreBadge.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
