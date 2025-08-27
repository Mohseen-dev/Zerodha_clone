import React from 'react'
function RightSection({imageUrl,title,desc,linkdata,link}) {
    return (
        <div className="container">
      <div className="row">
        <div className="col-6" style={{ paddingInline: "150px", paddingTop:"180px" }}>
          <h2 className="mb-4">{title}</h2>
          <p className="text-muted fs-6 fw-medium lh-lg">
            {desc}
          </p>
          <a className='text-decoration-none fw-medium' href={link}>{linkdata}{" "}
                <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className="col-6 ">
          <img src={imageUrl} style={{width:"90%"}}/>
        </div>
        
      </div>
    </div>
    );
}

export default RightSection;