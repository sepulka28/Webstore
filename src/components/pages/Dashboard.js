import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'


import jwt_decode from 'jwt-decode'

  const Dashboard = () => {

    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect (() => {
      const token = localStorage.getItem('token')
      if (token) {
        const user = jwt_decode(token)
        if (!user) {
          localStorage.removeItem('token')
          navigate('/login')
        } else {
          setUsername(user.name)
        }
      }
    
    }, [navigate])

  return (
    <div className="user_dashboard">
      <p className="welcome_message">Hello {username}!</p>
    </div>
  )
}

export default Dashboard;

