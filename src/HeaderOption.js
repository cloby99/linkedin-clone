// HeaderOption.js
import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <img className='headerOption__icon' src={avatar} alt='Avatar' />
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
