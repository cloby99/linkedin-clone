// HeaderOption.js
import React from 'react';
import './HeaderOption.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Avatar from '@mui/material/Avatar';


function  HeaderOption({ avatar, Icon, title, onClick }) {

  const user = useSelector(selectUser);  

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
