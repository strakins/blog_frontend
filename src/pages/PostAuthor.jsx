import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'

const PostAuthor = ({createdAt, authorID}) => {

  const [author, setAuthor] = useState([]);
  useEffect(() => {
    const getAuthor = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`)
        setAuthor(res?.data)
        // console.log(author)
      } catch (err) {
        console.log(err)
      }
    }
    getAuthor();
  }, [])

  return (
    <Link to={`/posts/users/${authorID}`} className='post_author'>
      <div className="post_athor_avatar">
        <img src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.avatar}`} alt="" />
      </div>
      <div className="post_author_detials">
        <h5>By: {author?.name}</h5>
        <small>{moment(createdAt).startOf("minutes").fromNow()}</small>
      </div>
    </Link>
  )
}

export default PostAuthor