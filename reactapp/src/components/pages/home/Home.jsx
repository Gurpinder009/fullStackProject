import React from 'react';
import './home.css';
import background from '../../../images/background.jpg';

const Home = () => {
  return (
    <div className='home-container'>
      <div className='home-banner-container'>
        <img src={background} alt="Jewellery Background" className="background-image"/>
        <div className='home-text-overlay'>
          <h1 className='primary-heading'>Discover the Iconic Jewellery Here</h1>
          <p className='primary-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint debitis doloribus et dolorem unde natus libero, ratione tempore vitae assumenda.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
