import { React, useState, useEffect } from 'react';
import { company } from './company';
import { personal } from './personal';
import { business } from './business';
import logoImage from '../../assets/img/NP_Logo.svg';
import { ReactComponent as Facebook } from '../../assets/img/Facebook.svg';
import { ReactComponent as Instagram } from '../../assets/img/Instagram.svg';
import { ReactComponent as YouTube } from '../../assets/img/YouTube.svg';
import { ReactComponent as Telegram } from '../../assets/img/Telegram.svg';
import './Footer.scss';

export function Counter() {
  const [count, setCount] = useState(13234024248);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, 700);
    return () => clearInterval(id);
  }, []);
  let result = count.toString();

  return (
    <div className='count-box'>
      <h1 className='footer__bottompart-num'>{`${result.slice(
        0,
        2
      )} ${result.slice(2, 5)} ${result.slice(5, 8)} ${result.slice(
        8,
        13
      )}`}</h1>
      <div className='footer__bottompart-text'>parcels sent</div>
    </div>
  );
}

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__toppart'>
          <div className='grid-1'>
            <a href='/' className=''>
              <img src={logoImage} alt='' className='footer__logo' />
            </a>

            <p className='footer__text'>
              We provide a full range of logistics and related services.
            </p>
            <div>
              <a
                href='https://www.facebook.com/nova.poshta.official'
                target='_blank'
                rel='noreferrer'
                className='footer__linkicon'
              >
                <Facebook className='footer__icon' />
              </a>
              <a
                href='https://www.instagram.com/accounts/login/?next=/novaposhta.official/'
                target='_blank'
                rel='noreferrer'
                className='footer__linkicon'
              >
                <Instagram className='footer__icon' />
              </a>
              <a
                href='https://www.youtube.com/c/%D0%BD%D0%BE%D0%B2%D0%B0%D0%BF%D0%BE%D1%88%D1%82%D0%B0'
                target='_blank'
                rel='noreferrer'
                className='footer__linkicon'
              >
                <YouTube className='footer__icon' />
              </a>
              <a
                href='https://www.youtube.com'
                target='_blank'
                rel='noreferrer'
                className='footer__linkicon'
              >
                <Telegram className='footer__icon' />
              </a>
            </div>
          </div>

          <div className='grid-2'>
            <h1 className='footer__title'>Company</h1>
            <ul className='footer__links'>
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className='footer__link'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='grid-3'>
            <h1 className='footer__title'>Business</h1>
            <ul className='footer__links'>
              {business.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className='footer__link'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='grid-4'>
            <h1 className='footer__title'>Personal</h1>
            <ul className='footer__links'>
              {personal.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className='footer__link'>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='footer__bottompart'>
          <div className='footer__line'></div>
          <div className='footer__bootomContain'>
            <p className='footer__bottompart-text'>© 2006–2022 «Nova Poshta»</p>

            <Counter />
          </div>
        </div>
      </div>
    </div>
  );
};
