import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '', 
    password: '', 
    password2: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const changeInputHandler = (e) => {
    setUserData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const registerUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      const newUser = await res.data;
      console.log(newUser)
      if(!newUser) {
        setError("Couldn't register User")
      }
      navigate('/login')
    } catch (err) {
      setError(err.response.data.message)
    }
  }

  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className='form register_form' onSubmit={registerUser}>
          { error && <p className='form_error_message'>{error}</p>}
          
          <input 
            type="text" 
            placeholder='Full Name'
            className='form register-form'
            name='name'
            value={userData.name} 
            onChange={changeInputHandler}
          />
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
          <input 
            type="password"  
            placeholder='Confirm Password'
            className='form register-form'
            name='password2'
            value={userData.password2} 
            onChange={changeInputHandler}
          />

          <button type="submit" className='btn success'>Register</button>
        </form>

        <small>Already have an acount? <Link to='/login' >Sign in</Link></small>
      </div>
    </section>
  )
}

export default Register