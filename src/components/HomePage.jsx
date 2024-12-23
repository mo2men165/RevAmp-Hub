import React from 'react'
import Benefits from './Benefits';
import Collaboration from './Collaboration';
import Hero from './Hero';
import Services from './Services';
import Pricing from './Pricing';
import Roadmap from './Roadmap';

const HomePage = () => {
    return (
      <>
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
      </>
    );
  };
  

export default HomePage