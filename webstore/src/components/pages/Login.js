import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import { useState } from 'react'

export default function Login () {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function userLogin (e) {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/login', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      email,
      password
    })
    
  })
 
  const data = await response.json();

  if(data) {

    window.location.href = '/dashboard'
  } else {
    alert("The data is incorrect. Please check your login and password.")
  }
 
}
  return (
    <div>
      <Container fluid className="log_in_form">
      <Form onSubmit={ userLogin }>
        <div className="title"><span className="login_title">Login form</span></div>
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="mkdir mongoose_tutorial">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="email_label" onChange={(e) => setEmail( e.target.value )}/>
       
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="password_label_text">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" className="password_label" onChange={(e) => setPassword( e.target.value )}/>
      </Form.Group>
     
      <Button className="log_in_form_btn" onClick={ userLogin }>
        Login
      </Button>
      <div><p className="not_a_member">Not a member yet? <a href="./register"> Sign up now!</a></p></div>
    </Form>
    </Container>
    </div>
  );
  }
