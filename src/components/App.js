import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarElement from "./inc/Navbar"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Footer from "./inc/Footer"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import AC from "./pages/AC"
import ShoppingBag from './pages/ShoppingBag';
import Favourites from './pages/Favourites';
import Tables from './pages/Tables';
import Dressers from './pages/Dressers';
import Sofas from './pages/Sofas';

import './custom.css'
import './responsive.css'


function App() {
  return (
    
    <BrowserRouter>
    <div>
        <NavbarElement />
     <Routes>

        <Route path="/home" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/contact" element={<Contact />} /> 

        <Route path="/login" element={<Login />} /> 

        <Route path="/register" element={<Register />} /> 

        <Route path="/dashboard" element={<Dashboard />} /> 

        <Route path="/AC" element={<AC />} /> 

        <Route path="/shoppingbag" element={<ShoppingBag />} /> 

        <Route path="/favourites" element={<Favourites />} /> 

        <Route path="/tables" element={<Tables />} /> 

        <Route path="/dressers" element={<Dressers />} /> 

        <Route path="/sofas" element={<Sofas />} /> 
     
     </Routes>
     
    </div>
    
    <Footer/>
  </BrowserRouter>
  
  )
  };

export default App;
