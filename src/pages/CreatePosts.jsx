import React, { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from './../context/userContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('')
  
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;

  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  })

  const createPost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.set('thumbnail', thumbnail)

    try {
      const response = await axios.post(`http://localhost:5000/api/posts/create`, postData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      if(response.status == 201){
        return navigate('/')
      }
    } catch (err) {
      setError(err.response.data.message)
      setTimeout(() => {
        setError('')
      }, 5000)
    }
  }

  const modules = {
    toolbar: [
      [{'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'ordered', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullets'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ]
  }
  const formats = [
    'header',
    'bold', 'italics', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]
  const POST_CATEGORIES = [
    'Agriculture', 'Business', 'Education', 'Entertianment', 
    'Art', 'Investment', 'Uncategorized', 'Weather'
  ]
  


  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        {
          error && 
          <p className='form_error_message'>
            {error}
          </p>
        }
        {/* Create Post */}
        <form action="" className="form create_post-form" onSubmit={createPost}>
          <input 
            type="text" 
            placeholder='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            autoFocus
          />
          <select 
            name="category" 
            id="" 
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            {
              POST_CATEGORIES.map(cat => <option key={cat}>{cat}</option>)
            }
          </select>

          <ReactQuill 
            modules={modules} 
            formats={formats}  
            value={description}
            onChange={setDescription}  
            // className='ql-editor'
          />

         <input 
           type="file" 
           name="thumbnail" 
           onChange={e => setThumbnail(e.target.files[0])} 
           accept='png, jpg, jpeg'
          />

          <button type="submit" className='btn success'>Create</button>
        </form>
      </div>
    </section>
  )
}

export default CreatePosts