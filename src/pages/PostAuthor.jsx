import React from 'react'
import { Link } from 'react-router-dom';
import Child from '../images/baby.jpg'

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/jdhskd`} className='post_author'>
      <div className="post_athor_avatar">
        <img src={Child} alt="" />
      </div>
      <div className="post_author_detials">
        <h5>By: Strakins B</h5>
        <small>Just Now</small>
      </div>
    </Link>
  )
}

export default PostAuthor