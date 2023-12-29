import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPosts = () => {
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

  return (
    <section className="create-post">
      <div className="container">
        <h2>Edit Post {title}</h2>
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

          <button type="submit" className='btn success'>Update Post</button>
        </form>
      </div>
    </section>
  )
}

export default EditPosts