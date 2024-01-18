import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext.js';
import axios from 'axios';
import Loader from '../components/Loader.jsx';
import DeletedPosts from './DeletedPosts.jsx';


const Dashboard = () => { 
 
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);

  const {id} = useParams();
  
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  })

  useEffect(() => {
    const fetchPosts = async () => {
      setIsloading(true)
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/users/${id}`,
          {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
        setPosts(response.data)
        setIsloading(false)
      } catch (err) {
        
      }
    }

    fetchPosts()
  }, [id])


  if(isLoading) {
    return < Loader />
  }

  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard_conatiner">
          { 
            posts.map(post => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`} alt={post.title} />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post._id}`} className='btn success'>View</Link>
                  <Link to={`/posts/${post._id}/edit`} className='btn primary'>Edit</Link>
                  < DeletedPosts postId={post._id} />
                </div>
              </article>
            })
          }
        </div> : <h2 className='center'>You have no posts yet</h2>
      }
    </section>
  )
}

export default Dashboard