import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './News.scss';
import { newsCards } from './newsCards';

import 'swiper/css';

export const News = () => {
  const [screenWidthSwiper, setScreenWidthSwiper] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidthSwiper = () => {
      setScreenWidthSwiper(window.innerWidth);
    };

    window.addEventListener('resize', changeWidthSwiper);

    return () => {
      window.removeEventListener('resize', changeWidthSwiper);
    };
  }, []);

  return (
    <div className='news'>
      <div className='container'>
        <div className='news__title'>
          <h1 className='news__subtitle'>Latest news</h1>
          <a className='news__link' href='https://www.w3schools.com/'>
            All news
          </a>
        </div>

        <div className='news__container'>
          {screenWidthSwiper > 1024 ? (
            <>
              {newsCards.map((card) => (
                <div className={card.class} key={card.img}>
                  <img src={card.img} alt='' className='news__card' />
                  <div className='news__text'>{card.text}</div>
                  <div className='news__date'>{card.date}</div>
                </div>
              ))}
            </>
          ) : (
            <Swiper
              slidesPerView={'auto'}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 'auto',
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {newsCards.map((card) => (
                <SwiperSlide className={card.class} key={card.img}>
                  <img src={card.img} alt='' className='news__card' />
                  <div className='news__text'>{card.text}</div>
                  <div className='news__date'>{card.date}</div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};
