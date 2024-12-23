import React from 'react'
import HubspotContactForm from './HubSpotContactForm'
import Section from './Section'
import Heading from './Heading'
import { Gradient } from './design/Hero'
import { smallSphere, stars } from "../assets";
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';


const ContactPage = () => {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
      }
    };
    
    handleResize();  
    window.addEventListener('resize', handleResize);  
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return <>
  
  <Section id="contact">
      <div className="container">
        <Heading
          title="Get in Touch with Us"
          text="RevAmp Hub is here to help you unlock your business potential. Connect with us today to explore how we can optimize your HubSpot experience and create smarter workflows that drive measurable results. Let's work together to take your business to the next level."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            
          
          <div
            className="relative z-10 bg-gradient-to-r from-red-500 via-blue-500 to-purple-800 p-10 rounded-xl flex-1"
            style={{
              boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 25px 80px rgba(0, 0, 0, 0.4)",
              transform: "perspective(1000px) rotateY(2deg)",
              transformOrigin: "right center",
            }}
          >
            <div
              className="bg-white p-8 rounded-lg"
              style={{
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2), 0 15px 30px rgba(0, 0, 0, 0.15)",
              }}
            >
              <HubspotContactForm />
            </div>
          </div>
          
          {isLargeScreen && (
              <motion.div
                className="flex-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
                  <img
                    src={smallSphere}
                    className="relative z-1"
                    width={400}
                    height={400}
                    alt="Sphere"
                  />
                  <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src={stars}
                      className="w-full"
                      width={950}
                      height={400}
                      alt="Stars"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  
  </>
    
    
  
}

export default ContactPage