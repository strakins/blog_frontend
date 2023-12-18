import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <ul className="footer_category">
        <li> <Link to="posts/categories/:Enginnering">Engineering</Link> </li>
        <li> <Link to="posts/categories/:Agriculture">Agriculture</Link> </li>
        <li> <Link to="posts/categories/:Travels">Travels</Link> </li>
        <li> <Link to="posts/categories/:Art">Art</Link> </li>
        <li> <Link to="posts/categories/:Weather">Weather</Link> </li>
      </ul>
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, Strakins.</small>
      </div>
    </footer>
  )
}

export default Footer