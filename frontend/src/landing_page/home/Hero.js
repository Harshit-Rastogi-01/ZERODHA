import React from 'react'
import { useNavigate } from "react-router-dom";


const Hero = () => {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // Redirects to /signup
    window.scrollTo(0, 0); // Scroll to top after navigating
  };
  return (
    
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src='images/homeHero.png' alt="Hero-image" className="mb-5"/>
        <h1 className="mt-5">Invest in everything.</h1>
        <p>Online platform to invest in stocks , derivatives , mutual funds , and more .</p>
        
        <button className="p-2 btn btn-primary fs-5" onClick={handleSignupClick}  style={{width:"18%", margin:"0 auto" }}>Signup Now</button>
        
        
        
      </div>
    </div>
    
  )
}

export default Hero
