// HeaderOption.js
import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <img className='headerOption__icon' src={avatar} alt='Avatar' />
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOption;
