import React, {useContext, useEffect, useState} from 'react';
import Couple from '../images/couple.jpg';
import PostAuthor from './PostAuthor';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import DeletedPosts from './DeletedPosts';
import axios from 'axios';
import Loader from '../components/Loader'



const PostDetails = () => {
  const {id} = useParams();
  const [post, setPost] = useState(null)
  const [creatorId, setCreatorId] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsloading] = useState(false)

  const {currentUser} = useContext(UserContext)

  useEffect(() => {
    const getPost = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setPost(res.data)
        // console.log(post)
        setCreatorId(res.data.creator)

      } catch (err) {
        setError(err)
      }
      setIsloading(false)
    }

    getPost();
  }, [])

  if(isLoading) {
    return <Loader />
  }
  return (
    <section className="postDetail">
      { post &&
        <div className="container post-detail">
          <div className="post-detail-header">
            <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
          
            { currentUser?.id == post?.creator &&
              <div className="post-detail-buttons">
                <Link to={`/posts/${post?._id}/edit`} className='btn sm primary'>Edit</Link>
                <DeletedPosts postId={id} />
              </div>
            }
            
          </div>
            <h1>{post.title}</h1>
            <div className="post-details-thumbnail">
              <img src={`http://localhost:5000/uploads/${post.thumbnail}`} alt='post-desc'/>
            </div>
            <p dangerouslySetInnerHTML={{__html: post.description}}></p>                     
        </div>
      }
    </section>
  )
}

export default PostDetails