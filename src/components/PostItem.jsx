import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './../pages/PostAuthor';

const PostItem = ({postId, thumbnail, title, category, description, authorID, createdAt}) => {
  
    const postDesc = description.length > 120 ? description.substr(0, 120) + '......' : description;
    const postTitle = title.length > 30 ? description.substr(0, 30) + '......' : title;

  return (
    <article className='post'>
        <div className="post_thumbnail">
            <img src={`http://localhost:5000/uploads/${thumbnail}`} alt={title} />
        </div>
        <div className="post-content">
            <Link to={`/posts/${postId}`}>
                <h3>{postTitle}</h3>
            </Link>
            <p dangerouslySetInnerHTML={{__html: postDesc}}></p>
            <div className="post-footer">
                < PostAuthor authorID={authorID} createdAt={createdAt}/>
                <Link to={`/posts/categories/${category}`} className='btn'>
                    {category}
                </Link>
            </div>
        </div>
    </article>
  )
}

export default PostItem