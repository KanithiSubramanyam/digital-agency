// Header.js
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./header.css";

const navLinks = [
  {
    path: '/',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/services',
    display: 'Service'
  },
  {
    path: '/portfolio',
    display: 'Portfolio'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('header__shrink');
    } else {
      headerRef.current.classList.remove('header__shrink');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
        <Link to="/"><div className='logo'>
            <h2>Digital Marketing</h2>
          </div>
          </Link>

          <div className='navigation'>
            <ul className='menu'>
              {navLinks.map((item, index) => (
                <li className='menu__item' style={{ textDecoration: 'none' }} key={index}>
                  <Link to={item.path} className='menu__link'>
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
