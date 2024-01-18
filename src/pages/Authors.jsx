import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';



const Authors = () => {

  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  

  useEffect(() => {

    const getAuthors = async () => {
      setIsloading(true)
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
        setAuthors(res.data)
        // console.log(authors)
      } catch (error) {
        console.log(error)
      }
      setIsloading(false)
    }
    getAuthors() 
  }, [])

  if(isLoading) {
    return < Loader />
  }

  return (
    <section className='authors'>
      {
        authors.length > 0 ?
        <div className="container authors_conatiner">
          {
            authors.map(({_id: id, avatar, name, posts}) => {
              return <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`} alt={`Appearance of ${name}`} /> 
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>{posts}</p>
                </div>
              </Link>
            })
          }
        </div>
        :
        <h2 className='center'>No Authors / Users Found</h2> 
      }
    </section>
  )
}

export default Authors