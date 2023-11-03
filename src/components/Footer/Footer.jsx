import React from 'react';

import './footer.css'

const quickLinks01 = [
    {
        path : '#',
        display : 'Marketing',
    },
    {
        path : '#',
        display : 'Analytics',
    },
    {
        path : '#',
        display : 'Commerce',
    },
];
const quickLinks02 = [
    {
        path : '#',
        display : 'Price',
    },
    {
        path : '#',
        display : 'Documentation',
    },
    {
        path : '#',
        display : 'Guides',
    },
];
const quickLinks03 = [
    {
        path : '#',
        display : 'About',
    },
    {
        path : '#',
        display : 'Contact',
    },
    {
        path : '#',
        display : 'Services',
    },
]
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__logo'>
                    <h2>Digital Marketing</h2>
                    <p className='description'>Grow with us</p>
                    <p className='small__text description'>We provide digital experience services 
                    to startups and small businesses velit purus aliquet, massa fringilla</p>
                </div>
                <div className='footer__quick-link'>
                    <h3 className='quick__link-title'>Solutions</h3>
                        <ul className='quick__link'>
                        {
                                quickLinks01.map((items,index) =>(
                                        <li className='quick__link-item' key={index}>
                                            <a href = {items.path} > {items.display}</a>
                                        </li>
                                    ))
                        } 
                        </ul>
                </div>

                <div className='footer__quick-link'>
                    <h3 className='quick__link-title'>Support</h3>
                        <ul className='quick__link'>
                        {
                                quickLinks02.map((items,index) =>(
                                        <li className='quick__link-item' key={index}>
                                            <a href = {items.path} > {items.display}</a>
                                        </li>
                                    ))
                        } 
                        </ul>
                </div>

                <div className='footer__quick-link'>
                    <h3 className='quick__link-title'>Company</h3>
                        <ul className='quick__link'>
                        {
                                quickLinks03.map((items,index) =>(
                                        <li className='quick__link-item' key={index}>
                                            <a href = {items.path} > {items.display}</a>
                                        </li>
                                    ))
                        } 
                        </ul>
                </div>
            </div>
            <p className='copyrights'>Copyrights {year} developed by sravani. All rights reserved.{" "}</p>
        </div>
    </footer>
  )
}

export default Footer