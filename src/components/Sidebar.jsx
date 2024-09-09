import React from 'react';
import { FaCat, FaEarlybirds, FaImage, FaLeaf, FaMountain, FaTree } from 'react-icons/fa';
import { FaEarthOceania } from 'react-icons/fa6';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../protectedRoute/AuthProvider'; // Import the AuthContext for authentication state

const Sidebar = () => {
  const { isAuthenticated, logout } = useAuth(); // Use authentication state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Call logout function to clear localStorage and set user as unauthenticated
    navigate('/sign-up'); // Redirect user to the sign-up page after logging out
  };

  return (
    <main>
      <div className='sidebar'>
        <div className='side-header'>
          <input type="search" name="search" id="search" placeholder='Search...' />
          <button className='btn'>Search</button>
        </div>
        <ul>
          <li>
            <Link to='/'>
              <span><FaImage /></span>
              <span>All Photos</span>
            </Link>
          </li>
          <li>
            <Link to='nature'>
              <span><FaEarthOceania /></span>
              <span>Nature</span>
            </Link>
          </li>
          <li>
            <Link to='plants'>
              <span><FaLeaf /></span>
              <span>Plants</span>
            </Link>
          </li>
          <li>
            <Link to='forest'>
              <span><FaTree /></span>
              <span>Forest</span>
            </Link>
          </li>
          <li>
            <Link to='mountains'>
              <span><FaMountain /></span>
              <span>Mountains</span>
            </Link>
          </li>
          <li>
            <Link to='birds'>
              <span><FaEarlybirds /></span>
              <span>Birds</span>
            </Link>
          </li>
          <li>
            <Link to='animals'>
              <span><FaCat /></span>
              <span>Animals</span>
            </Link>
          </li>
        </ul>

        <div className="auth-button">
          {isAuthenticated ? (
            <button className="sign-btn" onClick={handleLogout}>LOG OUT</button>
          ) : (
            <Link to='/sign-up'><button className="sign-btn">SIGN UP</button></Link>
          )}
        </div>
      </div>

      <div className="pages">
        <Outlet />
      </div>
    </main>
  );
};

export default Sidebar;
