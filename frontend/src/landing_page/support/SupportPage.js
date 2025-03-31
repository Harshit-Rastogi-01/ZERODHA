import React from 'react'
import Hero from "./Hero.js"
import CreateTicket from "./CreateTicket.js"
import Navbar from "../Navbar"
import Footer from "../Footer"
const SupportPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CreateTicket/>
      <Footer/>
    </div>
  )
}

export default SupportPage
