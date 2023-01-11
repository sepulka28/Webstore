import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const jwt = require('jsonwebtoken');

  const Dashboard = () => {
    const navigate = useNavigate();

    useEffect (() => {
      const token = localStorage.getItem('token')
      if (token) {
        const user = jwt.decode(token)
        if (!user) {
          localStorage.removeItem('token')
          navigate('/login')
        }
      }
    
    }, [])
  return (
    <div className="user_dashboard">
      <p className="welcome_message">Successfully logged in!</p>
    </div>
  )
}

export default Dashboard
