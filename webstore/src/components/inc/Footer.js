import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MdLocalPhone } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";


// import Link from 'react-router-dom';


function Footer () {
  return (
    <div>
     <Container fluid>
      <Row className="footer">
        <Col className="col-md-4">
          <h1 className="about">About Company</h1>
          <hr className="hr"/>
          <p className="about_text">Hestia Furniture is a family business with over 20 years of tradition. <br/>
            Our aim is to deliver best quality furniture designed with passion and creativity. <br/> Thanks to carefully selected, solid materials and timeless design, <br/> You can connect with us for years.
            
          </p>
        </Col>
        <Col className="col-md-4">
        <h1 className="contact_information">Contact Information</h1>
        <hr className="hr"/>

        <div className="contact_info">

        <span className="phone_contact"> <MdLocalPhone/>Phone number: 734 829 131</span>
        <span className="location"> <MdLocationOn />Address: Krakowska 21/1a 31-102 Krakow</span>
        <span className="email"> <MdOutlineAlternateEmail/>Email: hestia.furniture@gmail.com</span>

        </div>
        </Col>
        <Col className="col-md-4">
        <h1 className="sign_up">Sign Up</h1>
        <hr className="hr"/>
        </Col>
      </Row>

     </Container>
      </div>
   
  );
  }

export default Footer;