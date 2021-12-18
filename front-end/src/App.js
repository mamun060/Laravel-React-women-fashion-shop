import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
// eslint-disable-next-line no-unused-vars
import HomePage from './Pages/HomePage';
// eslint-disable-next-line no-unused-vars
import AboutPage from './Pages/AboutPage';

import ProductPage from './Pages/ProductPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import CartPage from '../src/Pages/CartPage.jsx';
import ProductDetailsPage from './Pages/ProductDetailspage';

class App extends Component {
 render(){
  return (
    <div className="App">
      <Routes>
         <Route path="/home" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/product" element={<ProductPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signin" element={<RegistrationPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
 }
}

export default App;
