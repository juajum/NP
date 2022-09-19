import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Header } from './components/Header/Header';
import { Services } from './components/Services/Services';
import { Numbers } from './components/Numbers/Numbers';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Business } from './components/Business/Business';
import { News } from './components/News/News';
import { Promo } from './components/Promo/Promo';
import { Footer } from './components/Footer/Footer';

import './App.scss';
import './Fonts.scss';

export function App() {
  return (
    <div className='box'>
      <Navbar />
      <Header />
      <Services />
      <Numbers />
      <AboutUs />
      <Business />
      <News />
      <Promo />
      <Footer />
    </div>
  );
}
