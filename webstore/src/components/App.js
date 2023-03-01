import React from 'react'
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
import './custom.css'
import './responsive.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingBag from './pages/ShoppingBag';
import Favourites from './pages/Favourites';


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
     
     </Routes>
     
    </div>
    
    <Footer/>
  </BrowserRouter>
  
  )
  };

export default App;
