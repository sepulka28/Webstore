import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


const jwt = require('jsonwebtoken');

  const Dashboard = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect (() => {
      const token = localStorage.getItem('token')
      if (token) {
        const user = jwt.decode(token)
        if (!user) {
          localStorage.removeItem('token')
          navigate('/login')
        } else {
          setUsername(user.name)
        }
      }
    
    }, [])

  return (
    <div className="user_dashboard">
      <p className="welcome_message">Hello {username}!</p>
    </div>
  )
}

export default Dashboard;

