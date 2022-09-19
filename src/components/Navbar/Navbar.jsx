import React, { useState, useEffect } from 'react';
import logoImage from '../../assets/img/NP_Logo.svg';
import { menu } from './menu';
import './Navbar.scss';

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    document.body.classList.toggle('scroll-lock');
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <>
      <div className='navbar' id='menu'>
        <div className='container'>
          <div className='navbar__box'>
            <div className='navbar__logo'>
              <a href='/' className=''>
                <img src={logoImage} alt='' />
              </a>
            </div>
            <nav className='menu'>
              {screenWidth > 1000 && (
                <ul className='menu__list'>
                  {menu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className='menu__link'>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
            {screenWidth > 1000 ? (
              <div>
                <a href='#expertise' className='navbar__button'>
                  Sign Up
                </a>
              </div>
            ) : (
              <div className={toggleMenu ? 'open' : 'close'} onClick={toggleNav}>
                <div className={toggleMenu ? 'open__item' : 'close__item'}></div>
                <div className={toggleMenu ? 'open__item' : 'close__item'}></div>
                <div className={toggleMenu ? 'open__item' : 'close__item'}></div>
              </div>
            )}
          </div>
        </div>
        {screenWidth < 1000 && (
          <div className={`${toggleMenu && 'opened'} OpenMenu`} id='menu'>
            <div className='container'>
              <nav className='OpenMenu__nav'>
                <ul className='OpenMenu__list'>
                  {menu.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className='OpenMenu__link'>
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div>
                <a href='#expertise' className='OpenMenu__button'>
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
