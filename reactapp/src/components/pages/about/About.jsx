import React from 'react';
import './about.css'; 

// import aboutus2 from '../images/aboutus2.jpg'
// import aboutus from '../images/aboutus.jpg'

import aboutus2 from '../../../images/aboutus2.jpg'
import aboutus from '../../../images/aboutus.jpg'


const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Us</h2>

      <div className="about-us-section">
      <div className="text-section">
          <h3>Our Story</h3>
          <p>
            At Iconic Jewelers, we believe in celebrating life's precious moments with elegance and style. Founded in [Year], our brand has been a symbol of luxury, quality, and craftsmanship. We pride ourselves on creating exquisite jewelry that not only enhances beauty but also tells a story.
            At Iconic Jewelers, we believe in celebrating life's precious moments with elegance and style. Founded in [Year], our brand has been a symbol of luxury, quality, and craftsmanship. We pride ourselves on creating exquisite jewelry that not only enhances beauty but also tells a story.
          </p>
        </div>
        <div className="image-section">
          <img src={aboutus} alt="Jewelry Craft" className="about-us-image" />
        </div>
        
      </div>



      <div className="about-us-section">
        <div className="image-section">
          <img src={aboutus2} alt="Jewelry" className="about-us-image" />
        </div>
        <div className="text-section">
          <h3>Welcome to Iconic Jewelers</h3>
          <p>
            At Iconic Jewelers, we believe in celebrating life's precious moments with elegance and style. Founded in [Year], our brand has been a symbol of luxury, quality, and craftsmanship. We pride ourselves on creating exquisite jewelry that not only enhances beauty but also tells a story.
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default AboutUs;
