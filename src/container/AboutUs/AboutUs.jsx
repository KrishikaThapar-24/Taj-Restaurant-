import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Taj, we blend timeless Indian hospitality with culinary artistry. Nestled in the heart of Connaught Place, our restaurant is a tribute to rich flavors, impeccable service, and refined ambiance.Every dish we serve is crafted with the freshest ingredients and a passion for excellence. Whether you're here for a quiet dinner, a business lunch, or a family gathering, Taj promises a dining experience that’s both luxurious and unforgettable.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded with a vision to revive the royal flavors of India, Taj has become a culinary landmark in New Delhi. What began as a dream by seasoned chefs and restaurateurs has evolved into a celebrated dining destination. Inspired by traditional recipes and modern techniques, our kitchen pays homage to India’s diverse food heritage. Over the years, we’ve grown, but our commitment to quality, authenticity, and guest satisfaction remains unchanged.

</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;