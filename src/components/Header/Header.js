import React from 'react';
import { Contact } from '../Contact/Contact';
import './Header.scss';

export const Header = () => {
  return (
    <header className='Header'> 
      <div className='background'></div>
      <div className='overlay'></div>
      <div className='information'>
        <h1>CASEY DALLAVALLE</h1>
        <h2>FRONT-END DEVELOPER</h2>
        <p>I am a driven, creative, and community-minded developer, with a passion for learning. As a former biological researcher, I enjoy experimenting with code and working with others to create simple, effective applications.</p>
        <Contact />
      </div>
    </header>
  )
}