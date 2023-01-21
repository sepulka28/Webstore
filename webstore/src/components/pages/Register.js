import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
// import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { ErrorMessage } from '@hookform/error-message';
// import validateData from '../../model';


export default function Register () {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = data => console.log(data);

  console.log(errors)

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function registerUser (e) {
 
  e.preventDefault();
  const response = await fetch('http://localhost:5000/api/register', {
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

  if (data.status === "ok"){

    navigate('/login');
    alert('Successfully registered');
  }}


  return (
    <div>
      <Container fluid className="log_in_form">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="title"><span className="sign_in_title">Sign Up Form</span></div>
      <Form.Group>
        <Form.Label >Name*</Form.Label>
          <Form.Control placeholder="Enter your name" {...register("name", {required: true, minLength: 2, maxLength: 20, message: "This field is required"} )} className="name_label" onChange={(e) => setName( e.target.value )}/>
         <p>{errors.name}</p>
      </Form.Group>

      <Form.Group>
        <Form.Label className="email_reg_label_text">Email*</Form.Label>
        <Form.Control type="email" {...register("email", {required: true, message: "This field is required"} )} placeholder="Enter your email" className="email_reg_label" onChange={(e) => setEmail( e.target.value )} />
        <p>{errors.name}</p>
      </Form.Group>

      <Form.Group>
        <Form.Label className="password_reg_label_text">Password*</Form.Label>
        <Form.Control input type="password" 
        {...register("password", {required: true, minLength:
        {value: 8, message: "The password must contain at least 8 digits"} }) } placeholder="Enter your password" className="password_reg_label" onChange={(e) => setPassword( e.target.value )}/>
         <p>{errors.name}</p>
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


