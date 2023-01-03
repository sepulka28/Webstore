import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react'

export default function Register () {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function registerUser (e) {
  e.preventDefault();
  const response = await fetch('http://localhost:5000/register', {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name, 
      email,
      password,
    }),
    
  })

  const data = await response.json();
 
  if(data) {
    
    alert("User with this email already exists!")
  } else {
    alert("Successfully registered.")
  }
}

  return (
    <div>
      <Container fluid className="log_in_form">
      <Form onSubmit={ registerUser } >
        <div className="title"><span className="sign_in_title">Sign Up Form</span></div>
      <Form.Group>
        <Form.Label >Name</Form.Label>
        <Form.Control placeholder="Enter your name" className="name_label" onChange={(e) => setName( e.target.value )}/>
       
      </Form.Group>

      <Form.Group>
        <Form.Label className="email_reg_label_text">Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" className="email_reg_label" onChange={(e) => setEmail( e.target.value )}/>
      </Form.Group>

      <Form.Group>
        <Form.Label className="password_reg_label_text">Password</Form.Label>
        <Form.Control type="password" placeholder="Enter your password" className="password_reg_label" onChange={(e) => setPassword( e.target.value )}/>
      </Form.Group>
     
      <Button type="submit" className="log_in_form_btn" onClick={ registerUser }>
        Register
      </Button>

      <div><p className="already_a_member">Already a member? <a href="./login"> Log in</a></p></div>
      
    </Form>
    </Container>
    </div>
  );
  }


