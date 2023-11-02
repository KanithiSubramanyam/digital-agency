import React from 'react'

import "./header.css";
const nav__links = [
    {
        path: '#home',
        display : 'Home'
    },
    {
        path: '#about',
        display : 'About'
    },
    {
        path: '#service',
        display : 'Service'
    },
    {
        path: '#portfolio',
        display : 'Portfolio'
    },
    {
        path: '#contact',
        display : 'Contact'
    },

]
const Header = () => {
  return (
        <header className='header'>
            <div className='container'>
                <div className='nav__wrapper'>
                    <div className='logo'>
                        <h2>Digital Marketing</h2>
                    </div>

                    <div className='navigation'>
                        <ul className='menu'>
                            {
                                nav__links.map((item,index) => (
                                    <li className='menu__item'>
                                        <a href={item.path} className='menu__link'>
                                            {item.display}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* lightmode */}
                    <div className='light__mode'>
                        <span><i className='ri-sun-line'></i>Lighr Mode</span>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header