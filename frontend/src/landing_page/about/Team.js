import React from 'react'

const Team = () => {
  return (
    <div className="container">
      <div className="row mb-0 mt-5 p-5" >
        <h1 className="text-center ">People </h1>
      </div>
      <div className="row mt-0" style={{lineHeight: "1.5" , fontSize:"1.2em"}}>
        {/* empty div for better spacing width:1-col */}
        <div className="col-1"></div>

        <div className="col-5 text-muted mt-0 mb-5 text-center">
          <img src="images/nithinKamath.jpg" alt="owner_image"  style={{borderRadius:"100%" ,width:"55%"}}/> 
          <h4 className="mt-4">Nitin Kamath</h4>
          <h6>Founder , CEO</h6>
        </div>

        <div className="col-5 text-muted mt-3 mb-5 fs-6">
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          <br/>
          <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
         <br/>
          <p>
          Playing basketball is his zen.</p>
          <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage </a>/ <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
        
        </div>
        {/* empty div for better spacing  width:1-col */}
        <div className="col-1"></div>
      </div>

      
    </div>
  )
}

export default Team
