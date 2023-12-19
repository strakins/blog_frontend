import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '', 
    password: '', 
    passwordconfirm: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }


  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className='form register_form'>
          <p className='form_error_message'>This is an Error Message</p>
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
            value={userData.password} 
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