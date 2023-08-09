import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { VscAccount } from "react-icons/vsc";
import { TfiSearch } from "react-icons/tfi"; 
import { MdAppRegistration } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Fuse from 'fuse.js';

import {ProductData} from '../ProductData';


function NavbarElement () {
  
  const [searchInput, setSearchInput] = useState(""); 
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  
  };

    const options = {
      keys: ['title', 'description'], 
      threshold: 0.3 
    };
  
    const fuse = new Fuse(Object.values(ProductData).flatMap(category => category.products), options);
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
  
      const searchResults = fuse.search(searchInput);
      
      if (searchResults.length > 0) {
        const firstResult = searchResults[0].item;
        navigate(firstResult.path);
      } else {
        console.log("No matching results found");
      }
    };



  return (
    <Navbar className="nav" expand="lg">
    <Container fluid className="nav_container">
      
    <Navbar.Brand ><span className="brand_name">HESTIA FURNITURE</span></Navbar.Brand>
    
    <div className="navbar_elements">
    <Navbar.Toggle aria-controls="navbarScroll" className=""/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="nav_categories"
            navbarScroll
          >
            <Nav.Link href="/home" style={{ color: "#181819"}}>Home</Nav.Link>
            
            <NavDropdown title="Products" id="navbarScrollingDropdown">
              
              <NavDropdown.Item href="/AC">
                Armchairs & Chairs
              </NavDropdown.Item>
              <NavDropdown.Item href="/Tables">
                Dining & Coffe Tables
              </NavDropdown.Item>
              <NavDropdown.Item href="/Dressers">
                Dressers
              </NavDropdown.Item>
              <NavDropdown.Item href="/Sofas">
                Sofas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" style={{ color: "#181819"}}>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </div>

          <div>
        <Form className="form" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              value={searchInput}
              placeholder="Search for products"
              className="search_bar"
              aria-describedby="basic-addon2"
              onChange={handleChange}
              
            />
            <Button className="search_btn"><TfiSearch className="search_icon"/></Button>  
          </Form>
          </div>

          <div className="navbar_icons">
          <Button className="log_in_button" href="/login"><span><VscAccount className="log_in_icon"/> LOG IN</span></Button>
          <Button className="register_button" href="/register"><span><MdAppRegistration className="register_icon"/> REGISTER</span></Button>
          </div>
          
    </Container>
  </Navbar>

  )
}
export default NavbarElement;

