import React from 'react'

const CreateTicket = () => {
  return (
    <div className="container p-5 ">
      <div className="row">
        <p className="fs-5 text-muted p-3 mb-2">To create a ticket, select a relevant topic</p>
        <div className="col-4 mt-2">
          <h4 className="fs-5"><i class="fa-solid fa-plus"></i> Account Opening</h4>
          <ul className="mt-4 ">
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Resident individual</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Minor</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Non Resident Indian (NRI)</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Company, Partnership, HUF and LLP</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Glossary</a><br/><br/>
          </ul>
        </div>
        <div className="col-4 mt-2">
          <h4 className="fs-5"><i class="fa-solid fa-user"></i>  Your Zerodha Account</h4>
          <ul className="mt-4">
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }} >Your Profile</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Account modification</a><br/>
           <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}> Client Master Report (CMR) and Depository Participant (DP)</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Nomination</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Transfer and conversion of securities</a><br/>
          </ul>
         
        </div>
        <div className="col-4 mt-2 ">
          <h4 className="fs-5"><i class="fa-solid fa-chart-simple"></i> Kite</h4>
          <ul className="mt-4">
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Resident individual</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Minor</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Non Resident Indian (NRI)</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Company, Partnership, HUF and LLP</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Glossary</a><br/><br/><br/>
          </ul>
        </div>

        <div className="col-4 mt-5">
          <h4 className="fs-5"><i class="fa-solid fa-wallet"></i> Funds</h4>
          <ul className="mt-4">
            <a href="#"  className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }} >Add money</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none",  lineHeight:"2.5"}}>Withdraw money</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }}> Add bank accounts</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }}>eMandates</a><br/><br/><br/><br/>
          </ul>
        </div>
        <div className="col-4 mt-5">
          <h4 className="fs-5"><i class="fa-brands fa-nfc-directional"></i> Console</h4>
          <ul className="mt-4">
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }} >Portfolio</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Corporate actions</a><br/>
           <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Funds statement</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Reports</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Profile</a><br/>
            <a href="#" style={{textDecoration:"none", lineHeight:"2.5" }}>Segments</a><br/>
          </ul>
        </div>
        <div className="col-4 mt-5 ">
          <h4 className="fs-5"><i class="fa-solid fa-coins"></i> Coin</h4>
          <ul className="mt-4">
            <a href="#"  className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }} >Understanding mutual funds and Coin</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none",  lineHeight:"2.5"}}>Coin app</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }}> Coin web</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }}>Transactions and reports</a><br/>
            <a href="#" className="mt-2"style={{textDecoration:"none", lineHeight:"2.5" }}>National Pension Scheme (NPS) </a><br/><br/><br/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
