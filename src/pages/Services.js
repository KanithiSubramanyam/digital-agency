import React from 'react'

import aboutImg from '../images/about-img.jpg';
import missionImg from '../images/our-mission.jpg';

import { useState, useEffect } from 'react';

const Services = () => {

  return (
    <section className='about__page'>
    <div className='container'>

      <div className='about__page__wrapper'>
        <div className='about__page__content'>
          <div className='content'>
            <h2>Application Development</h2>
            <p className='p'>
            In today's increasingly digital world, applications have become an integral part of our daily lives. Whether it's the mobile apps that help us communicate and stay organized, the web applications that power our online experiences, or the desktop software that enables us to perform various tasks, applications are ubiquitous. This essay delves into the fascinating world of application development, shedding light on its various facets, challenges, and the critical role it plays in shaping our digital landscape.
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
            <h2>Web Design</h2>
            <p className='p'>
            In the digital age, web design stands as the bridge between information and aesthetics, functionality and user experience. It plays a pivotal role in shaping the online world, where websites have become the face of businesses and platforms for communication, commerce, and interaction.

            Web design is an art and science that marries creativity and technology. It is more than just creating visually appealing layouts; it's about building seamless and engaging digital experiences. This essay delves into the world of web design, exploring its significance, principles, tools, and future possibilities.</p>
          </div>
        </div>

        <div className='vision__page__content'>
          <div className='content'>
            <h2>Digital Marketing</h2>
            <p  className='p'>
            Digital marketing encompasses a spectrum of strategies and techniques aimed at promoting products, services, or brands to a global audience in the online realm. It is a multifaceted discipline that leverages the power of the internet and digital technologies to engage, inform, and influence consumers.

One of the key pillars of digital marketing is the utilization of various online channels. Social media platforms like Facebook, Instagram, and Twitter have become integral to marketing strategies. They provide an avenue for brands to engage with their audience, build communities, and share content. The interactive nature of social media allows for real-time communication and feedback, making it an invaluable tool for marketers.
</p>
          </div>
          <div>
          <img className='vision__img' src={aboutImg} alt='about-img' />
          </div>
        </div>

        <div className='centered__page__content'>
          <div>
          <img className='mission__img' src={missionImg} alt='mission-img' />
          </div>
          <div className='mission'>
            <h2>Graphic Design</h2>
            <p className='p'>
            Graphic design is a versatile discipline encompassing the creation and manipulation of visual elements to convey messages, concepts, and ideas. It is not confined to any single medium; rather, it spans across diverse platforms, from print media, digital design, branding, advertising, to user interface and user experience (UI/UX) design.</p>
            <p className='p'>As technology continues to evolve, graphic design will adapt and innovate. Emerging technologies like artificial intelligence, augmented reality, and virtual reality are likely to influence the field, offering new tools and avenues for creative expression.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
  )
}

export default Services