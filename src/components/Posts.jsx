import { useState }  from 'react';
import PostItem from './PostItem';
import { TestPosts } from '../data';



const Posts = () => {

    const [posts, setPosts] = useState(TestPosts)

  return (
    <section className="posts">
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

export default Posts