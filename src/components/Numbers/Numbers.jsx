import React from 'react';
import './Numbers.scss';

export const Numbers = () => {
  return (
    <div className='numbers'>
      <div className='container'>
        <div className='numbers__text-container'>
          <h1 className='numbers__title'>We are the greatest</h1>
          <p className='numbers__text'>
            Bolt is the first European super-app, with the mission to make urban
            mobility more affordable, safe and sustainable.
          </p>
        </div>

        <div className='numbers__container'>
          <div className='numbers__card'>
            <h1 className='numbers__card-title'>30k+</h1>
            <p className='numbers__card-text'>full-time employees</p>
          </div>
          <div className='numbers__card'>
            <h1 className='numbers__card-title'>1.2B</h1>
            <p className='numbers__card-text'>parcels delivered</p>
          </div>
          <div className='numbers__card'>
            <h1 className='numbers__card-title'>76%</h1>
            <p className='numbers__card-text'>people recommend</p>
          </div>
        </div>
      </div>
    </div>
  );
};
