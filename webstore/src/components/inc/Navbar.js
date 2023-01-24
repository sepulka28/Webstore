import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Col from 'react-bootstrap/Col';
import { BsHandbag } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { BsSuitHeart } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import Button from 'react-bootstrap/Button';


function NavbarElement () {

  const [buttonName, setButtonName] = useState('LOG IN');
  let location = useLocation();

  useEffect(() => {
    if(location.pathname === '/dashboard'){
      setButtonName("LOG OUT")
    }
    
  }, [location.pathname]);
  
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
              <NavDropdown.Item href="/action"></NavDropdown.Item>
              <NavDropdown.Item href="/action4">
                Armchairs & Chairs
              </NavDropdown.Item>
              <NavDropdown.Item href="/action5">
                Dining & Coffe Tables
              </NavDropdown.Item>
              <NavDropdown.Item href="/action5">
                Dressers
              </NavDropdown.Item>
              <NavDropdown.Item href="/action5">
                Sofas
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact" style={{ color: "#181819"}}>Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </div>

          <div>
        <Form className="form">
            <Form.Control
              type="search"
              placeholder="Search for products"
              className="search_bar"
              aria-describedby="basic-addon2"
              
            />
            <Button className="search_btn"><TfiSearch className="search_icon"/></Button>  
          </Form>
          </div>

          <div className="navbar_icons">
          
          <span className="shopping_bag"><BsHandbag className='shop_bag_icon'/> SHOPPING BAG</span>
          <span className="favourite"><BsSuitHeart className='fav_icon'/> FAVOURITE</span>
          <Button className="log_in_button" href="/login"  onClick={() => setButtonName(buttonName)}><span><VscAccount className="log_in_icon"/> {buttonName}</span></Button>
         
          </div>
          
    </Container>
  </Navbar>

  )
}
export default NavbarElement;

