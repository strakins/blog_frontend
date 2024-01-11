import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/userContext';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '', 
    password: '', 
  })

  const navigate = useNavigate();
  const [error, setError] = useState('');
 
  const{setCurrentUser} = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData);
      const user = res.data;
      setCurrentUser(user)
      navigate('/')
    } catch (err) {
      setError(err.response.data.message)
    }

  }

  const changeInputHandler = async (e) => {
    setUserData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }


  return (
    <section className="register">
      <div className="container">
        <h2>Login</h2>
        <form action="" className='form login_form' onSubmit={handleLogin}>
          { error && <p className='form_error_message'>{error}</p>}
          <input 
            type="email" 
            placeholder='Email'
            className='form register-form'
            name='email'
            value={userData.email} 
            onChange={changeInputHandler}
          />
          <input 
            type="password" 
            placeholder='Enter Desired Password'
            className='form register-form'
            name='password'
            value={userData.password} 
            onChange={changeInputHandler}
          />

          <button type="submit" className='btn success'>Login</button>
        </form>

        <small>Don't have an account? <Link to='/register' >Sign Up</Link></small>
      </div>
    </section>
  )
}

export default Login