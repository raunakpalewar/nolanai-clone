import React, { useState, useEffect } from 'react';
import './styles.css';
import nolanlogo from '../nolan.webp';

const Main = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`top-bar ${scrollPosition > 0 ? 'scrolled' : ''}`}>
        <div className="logo">Nolan</div>
        <div className="options">
          <a href="#">Dashboard</a>
          <a href="#">Create Script</a>
          <button class='Login-button'>
            <a href="#">Log in</a>
            </button>
        </div>
      </div>
      <div className="background-image">
        <div className='nolan'>
            <img src={nolanlogo} className='nolan-img'></img>
            <h1>Film Industry Service Hub</h1>
            <h2>Helping bring the next masterpiece to the big screens.</h2>
            <div className='abc'>

            <button className='get-nolan '>Get NolanAi Free</button>
            <button className='login'>Login</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
