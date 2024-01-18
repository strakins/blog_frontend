import { useEffect, useState }  from 'react';
import PostItem from './PostItem';
import Loader from '../components/Loader';
// import { TestPosts } from '../data';
import axios from 'axios'



const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsloading] = useState(false)

  useEffect(() => {
    
    const fetchPosts = async () => {
    setIsloading(true);
    try {
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/`)
      const res = await axios.get(`https://strakinsblog-server.vercel.app/api/posts/`)
      setPosts(res?.data)
      console.log(posts)
    } catch (err) {
      console.log(err)
    }

    setIsloading(false)
   } 

   fetchPosts();
  }, [])


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
          //  <div className='loader-control'>
             <Loader />
          //  </div>
          // <h2 className='center'>No Post Found</h2>
        }
    </section>
  )
}

export default Posts