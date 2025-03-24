import React from 'react'

const Universe = () => {
  return (
    <div className="container  mt-5 mx -3 mb-5">
      <div className="row text-center ">
        <h1 className="mt-5">The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms </p>

        <div className="col-4 mt-5  p-3 ">
          <img src="images/zerodhaFundhouse.png" alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">Thematic investing platform that helps you invest in divesified baskets of stocks on ETFs .
          </p>
        </div>
        <div className="col-4  mt-5 p-3" >
          <img src="images/sensibullLogo.svg"  alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">
            Systematic trading platform that allows you create and backtest strategies without coding .
          </p>
        </div>
        <div className="col-4 mt-5 p-3" >
          <img src="images/streakLogo.png" alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for you goals .</p>
          </div>

          <div className="mt-5 col-4 p-3 ">
          <img src="images/dittoLogo.png" alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">Thematic investing platform that helps you invest in divesified baskets of stocks on ETFs .
          </p>
        </div>
        <div className="col-4 mt-5  p-3" >
          <img src="images/goldenpiLogo.png"  alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">
            Systematic trading platform that allows you create and backtest strategies without coding .
          </p>
        </div>
        <div className="col-4 mt-5 p-3" >
          <img src="images/smallcaseLogo.png" alt="image1" className="img-fluid d-block mx-auto" style={{ width: "100px", height: "100px", objectFit: "contain" }} />
          <p className="text-small text-muted">Our asset management venture that is creating simple and transparent index funds to help you save for you goals .</p>
          </div>
      </div>

      <div className="row mt-5 text-center">
        <button className="p-2 mb-5 btn btn-primary  fs-5"  style={{width:"18%", margin:"auto" }}>Signup Now</button>
      </div>
    
  </div>
  )
}

export default Universe
