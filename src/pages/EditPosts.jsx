import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../context/userContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditPosts = () => {
  const {id} = useParams();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('uncategorized');
  const [description, setDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const {currentUser} = useContext(UserContext);
  const token = currentUser?.token;
  // If token does not exist, redirect to login page
  useEffect(() => {
    if(!token) {
      navigate('/login')
    }
  });

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${id}`)
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
        setThumbnail(response.data.thumbnail)
      } catch (err) {
        setError(err.response.data.message)
        setTimeout(() => {
          setError('')
        }, 5000)
      }
    }

    getPost();
  }, [])

  const editPost = async (e) => {
    e.preventDefault();

    const postData = new FormData();
    postData.set('title', title)
    postData.set('category', category)
    postData.set('description', description)
    postData.set('thumbnail', thumbnail)

    try {
      const response = await axios.patch(`http://localhost:5000/api/posts/${id}`, postData, {withCredentials: true, headers: {Authorization: `Bearer ${token}`}})
      if(response.status == 200){
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
        <h2>Edit Post {title}</h2>
        { error && <p className='form_error_message'>
          {error}
          </p>
        }

        {/* Create Post */}
        <form action="" className="form create_post-form" onSubmit={editPost}>
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

          <button type="submit" className='btn success'>Update Post</button>
        </form>
      </div>
    </section>
  )
}

export default EditPosts