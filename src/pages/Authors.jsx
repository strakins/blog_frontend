import React, { useState } from 'react';
import Avatar from '../images/baby.jpg'
import { Link } from 'react-router-dom';

const authorsData = [
  {id: 1, avatar: Avatar, name: 'Rose Klein', posts: 4},
  {id: 2, avatar: Avatar, name: 'Bless Rhine', posts: 2},
  {id: 4, avatar: Avatar, name: 'John Doe', posts: 6},
  {id: 4, avatar: Avatar, name: 'Kloe Dennis', posts: 3},
]

const Authors = () => {

  const [authors, setAuthors] = useState(authorsData)
  return (
    <section className='authors'>
      {
        authors.length > 0 ?
        <div className="container authors_conatiner">
          {
            authors.map(({id, avatar, name, posts}) => {
              return <Link key={id} to={`/posts/users/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={avatar} alt={`Appearance of ${name}`} /> 
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