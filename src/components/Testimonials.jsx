import React from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../constants'
import { GradientLight } from './design/Benefits'
import ClipPath from '../assets/svg/ClipPath'
import Section from './Section'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Mousewheel, Keyboard  } from 'swiper/modules';
import Heading from './Heading'

const Testimonials = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return <>
  
  <Section
    customPaddings
    >
      <Heading
      title={`Testimonials`}
      text={`What some of our clients said about RevAmp Hub`}
      />
      <div className="flex flex-wrap container mx-auto text-center gap-6 my-20">
              {testimonials.map((testimonial, index) => (
                  <div
                  className="block relative mx-auto p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${testimonial.backgroundUrl})`,
                  }}
                  key={testimonial.id}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card is in view
                  custom={index} // Pass index for staggered delay
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{testimonial.name}</h5>
                    <p className="body-2 mb-6 text-n-1">{testimonial.position}</p>
                    <p className="body-2 text-n-3">{testimonial.testimonial}</p>
                  </div>

                  {testimonial.light && <GradientLight />}
                  <ClipPath />
                </div>
      ))}
    </div>
    </Section>
  
  </>
}

export default Testimonials
