import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Login () {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function userLogin (e) {
  e.preventDefault();

  const response = await fetch('http://localhost:8000/api/login', {
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
  console.log(data)

  if (data.user) {
    
    localStorage.setItem('token', data.user);

    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);

    toast.success("Logged in!");
    
  } else {
    toast.error("User doesn't exist. Please, check the credentials.")
  };


};

  return (
    <div>
      <ToastContainer position="top-center" 
      autoClose={1000}
      pauseOnHover={false}
      hideProgressBar={true}
      closeOnClick={true}/>

      <Container fluid className="log_in_form">
      <Form>
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

 
  
  
 

