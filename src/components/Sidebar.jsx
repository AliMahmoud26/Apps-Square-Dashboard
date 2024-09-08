import React from 'react';
import { FaCat, FaEarlybirds, FaImage, FaLeaf, FaMountain, FaTree } from 'react-icons/fa';
import { FaEarthOceania } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom'; // Import Outlet

const Sidebar = () => {
  return (
    <main>
      <div className='sidebar'>
        <div className='side-header'>
          <input type="search" name="search" id="search" placeholder='Search...'/>
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
      </div>

      <div className="pages">
        <Outlet />
      </div>
    </main>
  );
};

export default Sidebar;
