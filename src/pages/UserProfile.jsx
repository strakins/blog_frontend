import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../images/baby.jpg';
import { FaCheck, FaEdit } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');


  

 

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/sdef`} className='btn'>My Posts</Link>
      </div>

      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={Avatar} alt="" className='user_avatar' />
          </div>
          <form className="avatar_form">
            <input 
              type="file" 
              name="avatar" id="avatar" 
              accept='png, jpg, jpeg'
              onChange={e => setAvatar(e.target.files[0])}
            />
            <label htmlFor="avatar" className='avatar_icon'> <FaEdit /> </label>
            <button className='profile_avatar-btn'> <FaCheck /> </button>
          </form>
        </div>
        <h1>Ray Bornes</h1>
        {/* Update Profile */}
        <section className="profile_form">
          <div className="container">
            <form action="" className='form register_form'>
              <p className='form_error_message'>This is an Error Message</p>
              <input 
                type="text" 
                placeholder='Full Name'
                className='form register-form'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)} 
              />
              <input 
                type="email" 
                placeholder='Email'
                className='form register-form'
                name='email'
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                />
              <input 
                type="password" 
                placeholder='Current Password'
                className='form register-form'
                name='password'
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='New Password'
                className='form register-form'
                name='password'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='Confirm New Password'
                className='form register-form'
                name='password'
                value={confirmNewPassword}
                onChange={e => setConfirmNewPassword(e.target.value)} 
              />
              

              <button type="submit" className='btn success'>Update Details</button>
            </form>

          </div>
        </section>
      </div>
    </section>
  )
}

export default UserProfile