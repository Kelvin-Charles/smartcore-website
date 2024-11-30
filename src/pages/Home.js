import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Solutions from '../components/home/Solutions';
import Reason from '../components/home/Reason';
import Partners from '../components/home/Partners';
import News from '../components/home/News';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Solutions />
      <Reason />
      <Partners />
      <News />
    </main>
  );
};

export default Home; 