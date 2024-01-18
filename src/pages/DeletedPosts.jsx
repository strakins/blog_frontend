import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import Loader from '../components/Loader';

const DeletedPosts = ({postId: id}) => {

  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const [error, setError] = useState('');
  const [isLoading, setIsloading] = useState(false)

  const location = useLocation();
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login') 
    }
  })

  if(isLoading) {
    return <Loader />
  }

  const removePost = async () => {
    setIsloading(true)
    try {
      const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/posts/${id}`, 
          {withCredentials: true, 
          headers: {Authorization: `Bearer ${token}`}}
      )
      if(response.status == 200) {
        if(location.pathname == `/myposts/${currentUser.id}`) {
          navigate(0)
        } else {
          navigate('/')
        }
      }
      setIsloading(false)
    } catch (err) {
      setError(err)
    }
  }


  return (
    // <Link className='btn sm danger' onClick={() => console.log(`Deleted ${id}`)}> Delete</Link>
    <Link className='btn sm danger' onClick={() => removePost(id)}> Delete</Link>
  )
}

export default DeletedPosts 