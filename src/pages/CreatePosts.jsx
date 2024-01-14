import React, { useState, useContext, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UserContext } from './../context/userContext';
import { useNavigate } from 'react-router-dom';

const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  
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
  
  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  })

  return (
    <section className="create-post">
      <div className="container">
        <h2>Create Post</h2>
        <p className='form_error_message'>
          This is an Error Message
        </p>
        {/* Create Post */}
        <form action="" className="form create_post-form">
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
            onChange={e => setDescription}  
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