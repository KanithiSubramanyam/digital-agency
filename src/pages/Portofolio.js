import React from 'react';

import Marketing1 from '../images/marketing1.jpg';
import Marketing2 from '../images/marketing2.jpg';
import Marketing3 from '../images/marketing3.jpg';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Our dedicated team of experts will collaborate closely with you to create a customized and comprehensive strategy that aligns with your brands unique goals and values.Ultimately, our digital marketing project will not only increase your online visibility but also drive more traffic to your website, generate leads, and boost your bottom line. We are committed to helping your business thrive in the digital landscape, and we look forward to the opportunity to partner with you.',
      image: Marketing1,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Our focus is on optimizing your website for search engines (SEO) to ensure that it ranks prominently in relevant search results. This will drive organic traffic to your site, increasing your visibility and authority within your industry.In addition to SEO, we will design and implement a holistic content strategy that includes blog posts, articles, infographics, and more. These valuable pieces of content will engage your audience, answer their questions, and position your brand as an industry thought leader..',
      image: Marketing2,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Our social media experts will create and manage your social profiles, tailoring content to each platforms unique audience. Well engage with your followers, fostering a loyal community of customers and brand advocates. Our paid advertising campaigns will target specific demographics and geographical regions, ensuring a high return on investment.Email marketing is a powerful tool in our arsenal. Well craft compelling email campaigns that reach your subscribers with personalized content and promotions, nurturing leads and driving conversions.',
      image: Marketing3,
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-items">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
