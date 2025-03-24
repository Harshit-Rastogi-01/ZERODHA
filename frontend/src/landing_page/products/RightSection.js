import React from 'react'

const RightSection = ({imageURL,
  productName,
  productDescription,
  learnMore}
  ) => {
  return (
    <div className="container  mx -3 mb-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-3" style={{width:"80%"}}>{productDescription}</p>
          <a className="mt-3 " style={{textDecoration:"none"}} href={learnMore}> Learn More  <i className="fa-solid fa-arrow-right"></i> </a>
        </div>
        <div className="col-6 p-0 " >
          <img src={imageURL} className="mt-0 p-0" style={{width:"95%"}}  alt="right_image"/>
        </div>
      </div>
    </div>
  )
}

export default RightSection
