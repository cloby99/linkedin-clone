import React from 'react'
import "./Sidebar.css"

// import Avatar1 from './img/avatar.jpg'; // Import your avatar image file
import Avatar from '@mui/material/Avatar';
import Background from './img/background.jpg';
import { useSelector } from 'react-redux'; // Import 'useSelector' from react-redux
import { selectUser } from './features/userSlice';


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )


  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src={Background} alt=""  className='sidebar__background'/>
            {/* <img src={Avatar1} alt="Avatar" className='sidebar__avatar' width="60px" height="60px" /> */}
            <Avatar src={user.photoUrl} className='sidebar__avatar'> {user.email[0]} </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
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
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}

        </div>
    </div>
  )
}

export default Sidebar