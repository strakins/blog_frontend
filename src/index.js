import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './components/Layout'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import PostDetails from './pages/PostDetails';
import Register from './pages/Register';
import UserProfile from './pages/UserProfile';
import Authors from './pages/Authors';
import Login from './pages/Login';
import CreatePosts from './pages/CreatePosts';
import EditPosts from './pages/EditPosts';
import CategoryPosts from './pages/CategoryPosts';
import AuthorsPosts from './pages/AuthorsPosts';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import DeletedPosts from './pages/DeletedPosts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: < Home />},
      {path: 'posts/:id', element: < PostDetails />},
      {path: 'register', element: < Register />},
      {path: 'myposts/:id', element: < Dashboard />},
      {path: 'login', element: < Login />},
      {path: 'profile/:id', element: < UserProfile />},
      {path: 'authors', element: < Authors />},
      {path: 'posts/users/:id', element: < AuthorsPosts />},
      {path: 'create', element: < CreatePosts />},
      {path: 'posts/:id/edit', element: < EditPosts />},
      {path: 'posts/:id/delete', element: < DeletedPosts />},
      {path: 'posts/categories/:category', element: < CategoryPosts />},
      {path: 'logout', element: < Logout />},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < RouterProvider router={router} />
  </React.StrictMode>
);


