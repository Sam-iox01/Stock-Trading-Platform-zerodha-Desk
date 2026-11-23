import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Landingpage/home/Homepage';
import Signup from './Landingpage/signup/Signup';
import Aboutpage from './Landingpage/about/Apoutpage';
import Pricingpage from './Landingpage/pricing/Pricingpage';
import Supportpage from './Landingpage/support/Supportpage';
import Productpage from './Landingpage/products/Productpage';
import Navbar from './Landingpage/Navbar';
import Footer from './Landingpage/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<Aboutpage/>}/>
    <Route path='/product' element={<Productpage/>}/>
    <Route path='/pricing' element={< Pricingpage/>}/>
    <Route path='/support' element={<Supportpage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
