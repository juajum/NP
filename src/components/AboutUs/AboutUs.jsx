import React from 'react';
import './AboutUs.scss';
import cardimg_1 from '../../assets/img/aboutUs_1.jpg';
import cardimg_2 from '../../assets/img/aboutUs_2.jpg';
import cardimg_3 from '../../assets/img/aboutUs_3.jpg';

export const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='container'>
        <div className='aboutUs__box-forText'>
          <h1 className='aboutUs__title'>
            Born in Ukraine. Working everywhere.
          </h1>
          <p className='aboutUs__text'>
            First European super-app, with the mission to make urban mobility
            more affordable, safe and sustainable.
          </p>
          <button type='submit' className='aboutUs__button'>
            Learn more
          </button>
        </div>

        <div className='aboutUs__box-forCards'>
          <img
            src={cardimg_1}
            alt=''
            className='aboutUs__card aboutUs__card-1'
          />
          <img
            src={cardimg_2}
            alt=''
            className='aboutUs__card aboutUs__card-2'
          />
          <img
            src={cardimg_3}
            alt=''
            className='aboutUs__card aboutUs__card-3'
          />
        </div>
      </div>
    </div>
  );
};
