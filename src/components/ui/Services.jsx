import React from 'react'

import '../styles/services.css';

const serviceData = [
    {
        icon:'ri-apps-line',
        title:'App Development',
        desc:'Need something changed or is there something not quite working Aellente',
    },
    {
        icon:'ri-rocket-line',
        title:'Digital Marketing',
        desc:'Need something changed or is there something not quite working Aellente',
    },
    {
        icon:'ri-landscape-line',
        title:'Graphics Design',
        desc:'Need something changed or is there something not quite working Aellente',
    },
    {
        icon:'ri-code-s-slash-line',
        title:'Web Design',
        desc:'Need something changed or is there something not quite working Aellente',
    },
]
const Services = () => {
  return (
    
    <section className='service'>
        <div className='container'>
            <div className='services__top-content'>
                <h6 className='subtitle'>Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2 className='highlight'>our best services</h2>
            </div>
            <div className='service__item-wrapper'>
                {
                    serviceData.map((item,index)=>(
                    <div className='services__item'>
                        <span className='service__icon'>
                            <i className={item.icon} ></i>
                        </span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='description'>
                        {item.desc}
                        </p>
                    </div>
                    ))
                }
                
            </div>
        </div>
    </section>
  )
}

export default Services