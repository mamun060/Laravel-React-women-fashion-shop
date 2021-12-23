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
import CheckoutPage from './Pages/CheckoutPage';
import CategoryPage from './Pages/CategoryPage';
import SearchListingPage from './Pages/SearchListingPage';
import ContactPage from './Pages/ContactPage';
import WishlistPage from './Pages/WishListPage';
import MyAccountPage from './Pages/MyAccountPage';


class App extends Component {
 render(){
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/product" element={<ProductPage />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signin" element={<RegistrationPage />} />
         <Route path="/cart" element={<CartPage />} />
         <Route path="/productdetails" element={<ProductDetailsPage />} />
         <Route path="/checkout" element={<CheckoutPage />} />
         <Route path="/category" element={<CategoryPage />} />
         <Route path="/searchlistng" element={<SearchListingPage />} />
         <Route path="/contact" element={<ContactPage />} />

         <Route path="/wishlist" element={<WishlistPage />} /> 

         {/** User Dashboard page route below */}
         <Route path="/myaccount" element={<MyAccountPage />} />

      </Routes>
    </div>
  );
 }
}

export default App;
