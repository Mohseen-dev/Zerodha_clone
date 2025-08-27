import React from "react";
function UniverseCard({ imageUrl, desc }) {
  return (
    <div className="col-3 m-4">
      <div className="row">
        <img
            src={imageUrl}
            style={{ width: "250px", margin:"auto"}}
          />
          <p className="fs-6 mt-4 text-muted">
            {desc}
          </p>
        </div>
      </div>
    
  );
}

export default UniverseCard;
