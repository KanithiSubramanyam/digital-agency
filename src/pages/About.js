import React from 'react';

import aboutImg from '../images/about-img.jpg';
import missionImg from '../images/our-mission.jpg';
import Newsletter from '../components/ui/Newsletter';
const About = () => {
  return (
    <><section className='about__page'>
      <div className='container'>
        <div className='about__page__wrapper'>
          <div className='about__page__content'>
            <div className='content'>
              <h2>About Our</h2>
              <h2 className='h2__highlight'>Digital Marketing Company</h2>
              <p className='p'>
                Welcome to our digital marketing agency! We are dedicated to helping businesses thrive in the digital world. Our team of experts specializes in various digital marketing strategies to enhance your online presence and drive results.
                Founded with a vision and driven by a relentless commitment to innovation and excellence, Digital Marketing has emerged as a leader in the Technology sector.
                Our journey, marked by dedication, passion, and a relentless pursuit of customer satisfaction, has not only defined us but also set the standard for the industry.
              </p>
            </div>
            <div>
              <img className='page__img' src={aboutImg} alt='about-img' />
            </div>
          </div>

          <div className='centered__page__content'>
            <div>
              <img className='mission__img' src={missionImg} alt='mission-img' />
            </div>
            <div className='mission'>
              <h2>Our Mission</h2>
              <p className='p'>
                Welcome to our digital marketing agency! We are dedicated to helping businesses thrive in the digital world. Our team of experts specializes in various digital marketing strategies to enhance your online presence and drive results.
                Founded with a vision and driven by a relentless commitment to innovation and excellence, Digital Marketing has emerged as a leader in the Technology sector.
                Our journey, marked by dedication, passion, and a relentless pursuit of customer satisfaction, has not only defined us but also set the standard for the industry.
              </p>
            </div>
          </div>

          <div className='vision__page__content'>
            <div className='content'>
              <h2> Our Vision</h2>
              <p className='p'>
                Welcome to our digital marketing agency! We are dedicated to helping businesses thrive in the digital world. Our team of experts specializes in various digital marketing strategies to enhance your online presence and drive results.
                Founded with a vision and driven by a relentless commitment to innovation and excellence, Digital Marketing has emerged as a leader in the Technology sector.
                Our journey, marked by dedication, passion, and a relentless pursuit of customer satisfaction, has not only defined us but also set the standard for the industry.
              </p>
            </div>
            <div>
              <img className='vision__img' src={aboutImg} alt='about-img' />
            </div>
          </div>

        </div>
      </div>
    </section><Newsletter /></>
  );
}

export default About;
