import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './../pages/PostAuthor';

const PostItem = ({postId, thumbnail, title, category, desc, authorID}) => {
  
    const postDesc = desc.length > 120 ? desc.substr(0, 120) + '......' : desc;
    const postTitle = title.length > 30 ? desc.substr(0, 30) + '......' : title;

  return (
    <article className='post'>
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post-content">
            <Link to={`/posts/${postId}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p>{postDesc}</p>
            <div className="post-footer">
                < PostAuthor />
                <Link to={`/posts/categories/${category}`} className='btn'>
                    {category}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem