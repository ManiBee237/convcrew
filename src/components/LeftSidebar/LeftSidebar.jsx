import React from 'react';
import './LeftSidebar.css';
import assets from '../../../public/assets/assets';
import { logout } from '../../config/firebase';

const LeftSidebar = () => {
  return (
    <div className="ls">
      {/* Navigation Bar */}
      <div className="ls-nav">
        <img src="./Brand-dark.png" className="logo" alt="Logo" />
        <h4>Convochat</h4>
        <div className="menu">
          <img src={assets.menu_icon} alt="Menu Icon" />
          <div className="sub-menu">
            <button>Edit profile</button>
            
            <button onClick={()=> logout()}>Logout</button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="ls-search">
        <img src={assets.search_icon} alt="Search Icon" />
        <input type="text" placeholder="Search here" />
      </div>

      {/* Chat List */}
      <div className="ls-list">
        {Array(12).fill("").map((item,index)=> (
            <div key={index} className="friends">
            <img src={assets.profile_img} alt="Profile" />
            <div>
              <p>Karthick</p>
              <span>Hello, how are you?</span>
            </div>
          </div>
        ))}
        {/* Add more friends as needed */}
      </div>
    </div>
  );
};

export default LeftSidebar;
