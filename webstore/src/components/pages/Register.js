import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import * as Yup from 'yup';

    const validateInput = values => {
    const errors = {};

    if(!values.name) {
      errors.name = "This field is required"
    } else if (values.name.length > 20){
      errors.name = "Name can't exceed 20 characters"
    }

    if(!values.email) {
      errors.email = "This field is required"
    } 

    if(!values.password) {
      errors.password = "This field is required"
    } else if (values.password.length < 8){
      errors.password = "Password must be at least 8 characters"
    }

    return errors
  }


export default function Register () {

  const formik = useFormik({
    initialValues: {

      name: "",
      email: "",
      password: ""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This field is required"),
        
      email: Yup.string().email("Invalid email address").required("This field is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be 20 characters or less")
        .required("This field is required"),
    }),

    validateInput,
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
    
  });


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
      
      <Form onSubmit={formik.handleSubmit}>
        <div className="title"><span className="sign_in_title">Sign Up Form</span></div>
      <Form.Group>
        <Form.Label >Name*</Form.Label>
          <Form.Control placeholder="Enter your name" className="name_label" id = "name" value = {formik.values.name} onChange={(e) => setName( e.target.value )} onInput = {formik.handleChange}  onBlur={formik.handleBlur}/>
          {formik.touched.name && formik.errors.name ? ( <p className = "error_paragraph">{formik.errors.name}</p> ) : null}
         
      </Form.Group>

      <Form.Group>
        <Form.Label className="email_reg_label_text">Email*</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" className="email_reg_label" id = "email" value = {formik.values.email} onChange={(e) => setEmail( e.target.value )} onInput = {formik.handleChange}  onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email ? ( <p className = "error_paragraph">{formik.errors.email}</p>  ) : null}
        
      </Form.Group>

      <Form.Group>
        <Form.Label className="password_reg_label_text">Password*</Form.Label>
        <Form.Control input type="password" placeholder="Enter your password" className="password_reg_label" id = "password" value = {formik.values.password} onChange={(e) => setPassword( e.target.value )} onInput = {formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password ? ( <p className = "error_paragraph">{formik.errors.password}</p> ) : null}
         
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
 




