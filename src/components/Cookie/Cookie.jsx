/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import cookie from '../../assets/img/cookie.svg';
import './Cookie.scss';

export const Cookie = () => {
  const [iscookieVisible, setIscookieVisible] = useState(true);

  const localStorageCookie = () => {
    localStorage.setItem('cookieVisible', true);
    setIscookieVisible(false);
  };

  useEffect(() => {
    const cookieVisible = localStorage.getItem('cookieVisible');
    if (cookieVisible) {
      setIscookieVisible(false);
    }
  }, []);

  return (
    <>
      {iscookieVisible && (
        <div className='cookie'>
          <div className='cookie__img'>
            <img src={cookie} alt='' />
          </div>
          <div className='cookie__box'>
            <h1 className='cookie__title'>This website uses cookies</h1>
            <p className='cookie__text'>
              We use cookies to ensure that we offer you the best experience
              while browsing our website. Check our{' '}
              <a className='cookie__link'>Cookie Declaration</a> for more
              information.
            </p>
          </div>
          <div className='cookie__buttonBox'>
            <button
              className='cookie__button cookie__manage'
              onClick={localStorageCookie}
            >
              Manage Cookies
            </button>
            <button
              className='cookie__button cookie__accept'
              onClick={localStorageCookie}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
};
