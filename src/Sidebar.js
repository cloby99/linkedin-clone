import React from 'react'
import "./Sidebar.css"

import Avatar from './img/avatar.jpg'; // Import your avatar image file
import Background from './img/background.jpg';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={Background} alt=""  className='sidebar__background'/>
            <img src={Avatar} alt="Avatar" className='sidebar__avatar' width="60px" height="60px" />
            <h2>Anuradha Basnayake</h2>
            <h4>anuradhabsnk@gmail.com</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,534</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>
  )
}

export default Sidebar