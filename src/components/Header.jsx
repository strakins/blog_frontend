import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/strakins_logo.png';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { UserContext } from '../context/userContext';

const Header = () => {

  const {currentUser} = useContext(UserContext)  
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/' className='nav_logo'>
                <img src={Logo} alt="Nav_Logo" className='nav_img' />
            </Link>
            
            {currentUser?.id && 
              <ul className="nav_menu">
                <li><Link to={`/profile/${currentUser.id}`}>{currentUser?.name}</Link></li>
                <li><Link to='/create'>Create Post</Link></li>
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/logout'>Logout</Link></li>
              </ul> }
            {!currentUser?.id &&
              <ul className="nav_menu">
                <li><Link to='/authors'>Authors</Link></li>
                <li><Link to='/login'>Login</Link></li>
              </ul>
            }
            <button className='nav_toggle-btn'>
              {/* <FaBars /> */}
              < AiOutlineClose />
            </button>
        </div>
    </nav>
  )
}

export default Header