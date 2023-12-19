import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './../pages/PostAuthor';

const PostItem = ({postId, thumbnail, title, category, desc, authorID}) => {
  return (
    <article className='post'>
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post">
            <Link to={`/posts/${postId}`}>
                <h3>{title}</h3>
            </Link>
            <p>{desc}</p>
            <div className="post-footer">
                < PostAuthor />
                <Link to={`/posts/categories/${category}`}>
                    {category}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem