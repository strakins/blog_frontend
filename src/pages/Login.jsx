import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '', 
    password: '', 
  })

  const changeInputHandler = (e) => {
    setUserData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }


  return (
    <section className="register">
      <div className="container">
        <h2>Login</h2>
        <form action="" className='form login_form'>
          <p className='form_error_message'>You Entered Invalid Credentials</p>
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