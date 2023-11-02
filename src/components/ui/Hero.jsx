import React from 'react'
import '../styles/hero.css'
import HeroImage from '../../images/hero-img.png'

const Hero = () => {
  return (
    <section className='hero__section'>
        <div className='container'>
            <div className='hero__wrapper'>
                <div className='hero__content'>
                    <div>
                        <h2>We're Creating Perfect</h2>
                        <h2> Digital Products To</h2>
                        <h2 className='highlight'>Promote Yout Brand</h2>
                    </div>
                    <p className='description'>
                    We provide digital experience services to startups 
                    and small businesses velit purus aliquet, massa fringilla
                    </p>
                    <div className='hero__btns'>
                        <button className='primary__btn'>Get Started Now</button>
                        <button className='secondary__btn'>Discover</button>
                    </div>  
                </div>
                <div className='hero__img'>
                    <img src={HeroImage} alt='hero-img' />
                </div>
            </div>
        </div>
        </section>
  )
}

export default Hero