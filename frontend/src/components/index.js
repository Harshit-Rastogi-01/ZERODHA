import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./component.css";
import Home from "./Home";
import { CookiesProvider } from "react-cookie"; 
import "./component.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CookiesProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </CookiesProvider> 
  </React.StrictMode>
);
