import React from 'react'
import Benefits from './Benefits';
import Collaboration from './Collaboration';
import Hero from './Hero';
import Services from './Services';
import Pricing from './Pricing';
import Roadmap from './Roadmap';
import Flywheel from './FlyWheel';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
      <>
        <Hero />
        <Benefits />
        <Flywheel />
        <Collaboration />
        <Testimonials />  
        <Services />
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
      </>
    );
  };
  

export default HomePage