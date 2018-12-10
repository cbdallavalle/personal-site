import React from 'react';
import './Contact.scss';

export const Contact = () => {
  return (
    <div className='Contact'>
      <a href='mailto:cdallava3@gmail.com' >
        <i className='fas fa-envelope-square icon' id='email'></i>
      </a>
      <a href='https://www.linkedin.com/in/casey-dallavalle/'>
        <i className='fab fa-linkedin icon' id='linkedin'></i>
      </a>
      <a href='https://github.com/cbdallavalle/'>
        <i className='fab fa-github-square icon' id='github'></i>
      </a>
    </div>
  )
}