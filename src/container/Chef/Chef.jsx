import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
        </div>
        <p className="p__opensans "> ❝ At Taj, we believe every meal is a journey—a celebration of heritage, flavor, and heart. Our dishes are not just recipes but stories passed down through generations. We blend tradition with a touch of modern artistry, using the finest ingredients to honor the rich culinary legacy of India. <br />Hospitality is our soul, and every guest is family. We welcome you to experience the warmth, passion, and flavor that define our kitchen. ❞

Kevin Luo
Chef & Founder </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        
      </div>
    </div>
  </div>
);

export default Chef;