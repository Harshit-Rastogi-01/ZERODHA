import React from 'react'
import { useNavigate } from "react-router-dom";

const OpenAccount = () => {
   const navigate = useNavigate();
    const handleSignupClick = () => {
      navigate("/signup"); // Redirects to /signup
      window.scrollTo(0, 0); // Scroll to top after navigating
    };

  return (
    <div className="container p-5 mb-5">
      <div className="row text-center mt-3">
        <h1 className="mt-5 ">Open a Zerodha account</h1>
        <p className="text-muted mt-2 mb-4">Mordern platforms and apps , &#8377;0 investments , and flat &#8377;20 intraday and F&O trades.</p>
        <button className="p-2 btn btn-primary fs-5" onClick={handleSignupClick} style={{width:"18%", margin:"0 auto" }}>Sign up Now</button>
      </div>
    </div>
  )
}

export default OpenAccount
