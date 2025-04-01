import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from "react-router-dom" ;
import './index.css';
import Signup  from './landing_page/signup/Signup.js'
import Login from './landing_page/login/Login.js'
import HomePage from './landing_page/home/HomePage.js'
import SupportPage from './landing_page/support/SupportPage.js'
import ProductPage from './landing_page/products/ProductPage.js'
import PricingPage from './landing_page/pricing/PricingPage.js'
import AboutPage from './landing_page/about/AboutPage.js'
// import Navbar from './landing_page/Navbar'
// import Footer from './landing_page/Footer'
import NotFound from './landing_page/NotFound.js'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthPage from './landing_page/AuthPage.js'

//--new code added here ----------------

// import Apps from "./components/Apps";
// import Funds from "./components/Funds";
// import Holdings from "./components/Holdings";
// import Orders from "./components/Orders";
// import Positions from "./components/Positions";
// import Summary from "./components/Summary";
// import WatchList from "./components/WatchList";
// import { GeneralContextProvider } from "./components/GeneralContext";
// import Dashboard from "./components/Dashboard"
import Home from "./components/Home.js";
import { CookiesProvider } from "react-cookie"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<CookiesProvider>
  <BrowserRouter>
  {/* <Navbar/> */}
  <ToastContainer />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path="/verify" element={<AuthPage />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
      {/* added new code here */}

      {/* <Route path='/dashboard/*' element={<Dashboard/>}/> */}
      <Route path="/dashboard/*" element={<Home />} />

      {/* <Route path='/apps' element={<Apps/>}/>
      <Route path='/funds' element={<Funds/>}/>
      <Route path='/holdings' element={<Holdings/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/positions' element={<Positions/>}/>
      <Route path='/summary' element={<Summary/>}/>
      <Route path='/watchlist' element={<WatchList/>}/> */}
      {/* added code above it */}

      <Route path='*' element={<NotFound/>}/>
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
</CookiesProvider>
);



