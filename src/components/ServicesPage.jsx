import React from 'react'

import { motion } from 'framer-motion';
import Section from './Section'
import { services } from '../constants'
import Button from './Button'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import Heading from './Heading'

const ServicesPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1, // Delay based on index
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };
  
  return (
    <Section id="servicespage"
    className="pt-[12rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    >
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Our Services"
        />

        <div className="flex flex-wrap gap-16 items-center justify-center mb-10">
        {services.map((item, index) => (
        <motion.div
          className="block relative cursor-pointer p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[32rem]"
          style={{
            backgroundImage: `url(${item.backgroundUrl})`,
          }}
          key={item.id}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
          custom={index} // Pass index for staggered delay
        >
          <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
            <h5 className="h5 mb-5">{item.title}</h5>
            <p className="body-2 mb-6 text-n-3">{item.text}</p>
            <div className="flex items-center mt-auto">
              <Button href="/contact" className={`mx-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider`}>
                Get in touch
              </Button>
            </div>
          </div>

          {item.light && <GradientLight />}

          <div
            className="absolute inset-0.5 bg-n-8"
            style={{ clipPath: "url(#benefits)" }}
            onClick={() => (window.location = '/contact')}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  width={380}
                  height={362}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>

          <ClipPath />
        </motion.div>
))}
        </div>
      </div>
    </Section>
    )
}

export default ServicesPage