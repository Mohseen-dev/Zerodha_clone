import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./Landing_page/home/HomePage";

import Signup from './Landing_page/signup/Signup'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import AboutPage from "./Landing_page/about/AboutPage";
import ProuductPage from "./Landing_page/product/ProductPage";
import SupportPage from "./Landing_page/support/SupportPage";

import PricingPage from "./Landing_page/pricing/PricingPage";
import NavBar from "./Landing_page/NavBar";
import Footer from "./Landing_page/Footer";
import NotFound from "./Landing_page/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/signup" element={<Signup/>}/>

    <Route path="/support" element={<SupportPage/>}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/pricing" element={<PricingPage/>}/>
    <Route path="/produts" element={<ProuductPage/>}/>
    <Route path="*" element={<NotFound/>}/>
    
   
  </Routes>
  <Footer/>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
