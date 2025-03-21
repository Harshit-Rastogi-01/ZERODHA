import React from 'react'

const Awards = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 mt-5 text-center">
          <img src="images/largestBroker.svg" alt="Awards_image"  style={{width:"90%"}}/>
        </div>
        <div className="col-6 mt-4 p-2">
          <h1>Largest Stock Broker of India</h1>
          <p className="mt-3 mb-2">2+ million Zerodha clients contribute to  over 15% of all retail order volumes of India daily by trading and investing: </p>
          <div className="row">
            <div className="col-6 p-5">
            <ul>
              <li> <p>Futures and Options</p></li>
              <li> <p>Commodity derivatives</p></li>
              <li> <p>Currency Derivatives</p></li>
            </ul>
            </div>
            <div className="col-6 p-5">
            <ul>
              <li> <p>Stocks and IPOs</p></li>
              <li> <p>Direct Mutual Funds</p></li>
              <li> <p>Bonds and Govt. Security</p></li>
            </ul>
            </div>
            <img src="images/pressLogos.png" alt="press_image" style={{width:"95%"}}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Awards
