import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom" ;
import './index.css';
import Signup  from './landing_page/signup/Signup.js'
import HomePage from './landing_page/home/HomePage.js'
import SupportPage from './landing_page/support/SupportPage.js'
import Universe from './landing_page/products/Universe.js'
import PricingPage from './landing_page/pricing/PricingPage.js'
import AboutPage from './landing_page/about/AboutPage.js'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<Universe/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);



