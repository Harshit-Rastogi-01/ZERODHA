import React from 'react'

const Brokerage = () => {
  return (
    <div className="container border-top ">
      <div className="row p-5 mt-5 ">
        <div className="row col-8 mt-5 text-center">
          <h3 className="fs-2">
            <a href="#" style={{textDecoration:"none"}}>
              Brokerage Calculator
            </a>
          </h3>
          <div className="col-4 mt-4 text-muted ">
            <ul className="fs-5" style={{textAlign:"left" ,lineHeight:"4" ,listStyle: "none"}}>
              <li>Brokerage</li>
              <li>STT/CTT</li>
              <li>Transaction charges</li>
              <li>GST</li>
              <li>SEBI charges</li>
            </ul>
          </div>
          <div className="col-4 mt-4 ">
          <ul style={{textAlign:"left" , listStyle: "none"}}>
              <li className="mt-3 mb-5">0.03% or Rs. 20/executed order whichever is lower</li>
              <li  className="mt-3 mb-5">0.01% on sell side (Non-Agri)</li>
              <li  className="mt-3 mb-5">MCX: 0.0021%
                  NSE: 0.0001%
              </li>
              <li  className="mt-3 mb-4">	18% on (brokerage + SEBI charges + transaction charges)</li>
              <li  className="mt-3 mb-5">Agri:₹1 / crore
                  Non-agri:₹10 / crore
              </li>
            </ul>
          </div>

        </div>
        <div className="col-4 mt-5 ">
          <h3 className="fs-2 mb-5">
            <a href="#" style={{textDecoration:"none"}}>
              List of Charges 
            </a>
          </h3>
          <ul className="mt-5" style={{textAlign:"left" , listStyle: "none"}}>
              <li className="mt-3 mb-5">	₹ 20/executed order</li>
              <li  className="mt-3 mb-5">0.05% on sell side</li>
              <li  className="mt-3 mb-5">MCX: 0.0041%
                  NSE: 0.0001%
              </li>
              <li  className="mt-3 mb-5">	₹10 / crore</li>
              <li  className="mt-5">.003% or ₹300 / crore on buy side
              </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Brokerage
