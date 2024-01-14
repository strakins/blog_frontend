import React, { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Loader from '../components/Loader';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(false) 

  const {category} = useParams();
  useEffect(() => {
    
    const fetchPosts = async () => {
    setIsloading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/posts/categories/${category}`)
      setPosts(res?.data)
      console.log(posts)
    } catch (err) {
      console.log(err)
    }

    setIsloading(false)
   } 

   fetchPosts();
  }, [category])

  if(isLoading) {
    return < Loader />
  }


  return (
    <section className="posts">
        { posts.length > 0 ?
          <div className="container post_conatiner">
            {
                posts.map(({_id: id, thumbnail, category, title, description, creator: authorID, createdAt}) => 
                <PostItem key={id} postId={id} thumbnail={thumbnail} category={category} createdAt={createdAt} title={title} description={description} authorID={authorID}  /> )
            }
          </div>
           :
          <h2 className='center'>No Post Found</h2>
        }
    </section>
  )
}

export default CategoryPosts