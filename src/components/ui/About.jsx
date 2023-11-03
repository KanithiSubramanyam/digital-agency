import React from 'react'

import '../styles/about.css';

import aboutImg from '../../images/about-us.jpg';
const chooseData=[
    {
     icon:   'ri-wifi-line',
     title : 'First working process',
     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    },
    {
        icon:   'ri-team-line',
        title : 'dedicated team',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
       },
       {
        icon:   'ri-headphone-fill',
        title : '24/7 Hours',
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
       },
]
const About = () => {
  return (
    <section id='about'>
        <div className='container'>
            <div className='about__wrapper'>
                <div className='about__content'>
                    <h6 className='subtitle'>
                        Why choose us
                    </h6>
                    <h2>
                        Specialist in avoiding clients on 
                    </h2>
                    <h2 className='highlight'>
                        financial challenges
                    </h2>
                    <p className='description about__content-desc'>
                    We work with forward-thinking companies to craft and produce 
                    impactful solutions through website & mobile app experiences.
                    You will work closely with skilled Dolor in reprehenderit in 
                    voluptate velit esse cillum
                    </p>
                         
                    <div className='choose__item-wrapper'>
                        {
                            chooseData.map((item,index)=>(
                            <div className='choose__us-item'>
                                <span className='choose__us-icon'>
                                    <i className={item.icon}></i>
                                </span>
                                <div>
                                    <h4 className='choose__us-title'>{item.title}</h4>
                                    <p className='description'>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
                <div className='about__img'>
                        <img src={aboutImg} alt='about' />
                </div>
            </div>

        </div>
    </section>
  )
}

export default About