import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';

const DeletedPosts = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  })


  return (
    <Link className='btn sm danger'> Delete</Link>
  )
}

export default DeletedPosts