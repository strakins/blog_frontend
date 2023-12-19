import React, { useState } from 'react';
import { TestPosts } from '../data';
import PostItem from '../components/PostItem';

const CategoryPosts = () => {
  const [posts, setPosts] = useState(TestPosts)


  return (
    <section className="authorposts">
    { posts.length > 0 ?
      <div className="container post_conatiner">
        {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => 
            <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} title={title} desc={desc} authorID={authorID}  /> )
        }
      </div> :
      <h2 className='center'>No Post Found</h2>
    }
</section>
  )
}

export default CategoryPosts