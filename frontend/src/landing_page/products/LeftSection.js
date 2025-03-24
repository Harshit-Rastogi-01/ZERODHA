import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURL} />
        </div>

        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p className="text-muted mt-3" style={{width:"80%"}}>{productDescription}</p>

          <div >
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} className="mx-5" style={{textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>

          <div className="mt-4">
            <a href={googlePlay} >
            <img src="images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} className="mx-3">
            <img src="images/appstoreBadge.svg" />
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
