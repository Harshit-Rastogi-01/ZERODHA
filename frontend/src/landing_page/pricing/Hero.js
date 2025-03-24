import React from 'react'

const Hero = () => {
  return (
    <div className="container ">
      <div className="row mt-5 mb-5  py-5 text-center border-bottom">
        <h1>Charges</h1>
        <h5 className="text-small text-muted mt-3 fs-5"> Free equity investments and flat ₹20 intraday and F&O trades </h5>
      </div>
      <div className="row mb-5 text-center ">
        <div className="col-4">
          <img src="images/pricing0.svg" alt="image_pricing"/>
          <h3>Free equity delivery</h3>
          <p className="mt-3 text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
        </div>
        <div className="col-4 ">
          <img src="images/intradayTrades.svg" alt="image_pricing"/>
          <h3>Intraday and F&O trades</h3>
          <p className="mt-3 text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4 ">
          <img src="images/pricing0.svg" alt="image_pricing"/>
          <h3>Free direct MF</h3>
          <p className="mt-3 text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
