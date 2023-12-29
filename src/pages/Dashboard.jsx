import React, {useState} from 'react';
import { TestPosts } from '../data.js';
import { Link } from 'react-router-dom';

const Dashboard = () => {

  const [posts, setPosts] = useState(TestPosts)

  return (
    <section className="dashboard">
      {
        posts.length ? <div className="container dashboard_conatiner">
          {
            posts.map(post => {
              return <article key={post.id} className='dashboard_post'>
                <div className="dashboard_post-info">
                  <div className="dashboard_post-thumbnail">
                    <img src={post.thumbnail} alt={post.title} />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post-actions">
                  <Link to={`/posts/${post.id}`} className='btn success'>View</Link>
                  <Link to={`/posts/${post.id}/edit`} className='btn primary'>Edit</Link>
                  <Link to={`/posts/${post.id}/delete`} className='btn danger'>Delete</Link>
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