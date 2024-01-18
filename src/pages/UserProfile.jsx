import React, {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { FaCheck, FaEdit } from "react-icons/fa";
import axios from 'axios';

const UserProfile = () => {

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [isAvatarTouched, setIsAvatarTouched] = useState(false)
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  const {currentUser} = useContext(UserContext)
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  })

  // useEffect(() => {
  //   const getUserDetail = async () => {
  //     const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
  //     const {name, email, avatar} = response.data
  //     setName(name);
  //     setEmail(email);
  //     setAvatar(avatar);
  //   }

  //   getUserDetail();
  // }, [])


  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    try {
      const avaData = new FormData();
      avaData.set('avatar', avatar);
      const response = await axios.post(`http://localhost:5000/api/users/change-avatar`, avaData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      setAvatar(response?.data.avatar)

    } catch (error) {
      
    }
  }
  
  useEffect(() => {
    const getUserDetails = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`,
      {withCredentials: true, headers: {Authorization: `Bearer ${token}`}}
    )
    const {name, email, avatar} = response.data;
    setName(name);
    setEmail(email);
    setAvatar(avatar);
    }

    getUserDetails();
  }, [])

 const updateUserDetails = async (e) => {
  try {
    
    e.preventDefault();
    const userData = new FormData();
    userData.set('name', name)
    userData.set('email', email)
    userData.set('currentPassword', currentPassword)
    userData.set('newPassword', newPassword)
    userData.set('confirmNewPassword', confirmNewPassword)
  
    const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/users/edit-user`, userData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
    if(response.status == 200) {
      navigate('/logout')
    }
  } catch (error) {
    setError(error.response.data.message);
  }
 }

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={`/myposts/${currentUser.id}`} className='btn'>My Posts</Link>
      </div>

      <div className="profile_details">
        <div className="avatar_wrapper">
          <div className="profile_avatar">
            <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt="" className='user_avatar' />
          </div>
          <form className="avatar_form">
            <input 
              type="file" 
              name="avatar" 
              id="avatar" 
              accept='png, jpg, jpeg'
              onChange={e => setAvatar(e.target.files[0])}
            />
            <label htmlFor="avatar" className='avatar_icon' onClick={() => setIsAvatarTouched(true)}> <FaEdit /> </label>
          </form>
          {isAvatarTouched && <button className='profile_avatar-btn' onClick={changeAvatarHandler}> <FaCheck /> </button>}
        </div>

        <h1>{currentUser?.name}</h1>
        {/* Update Profile */}
        <section className="profile_form">
          <div className="container">
            <form action="" className='form register_form' onSubmit={updateUserDetails}>
              { error &&  <p className='form_error_message'>{error}</p>}
              <input 
                type="text" 
                placeholder='Full Name'
                className='form register-form'
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <input 
                type="email" 
                placeholder='Email'
                className='form register-form'
                // name='email'
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                />
              <input 
                type="password" 
                placeholder='Current Password'
                className='form register-form'
                // name='currentPassword'
                value={currentPassword}
                onChange={e => setCurrentPassword(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='New Password'
                className='form register-form'
                // name='newPassword'
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)} 
              />
              <input 
                type="password" 
                placeholder='Confirm New Password'
                className='form register-form'
                // name='confirmNewPassword'
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