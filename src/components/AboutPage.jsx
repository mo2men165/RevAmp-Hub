import React from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import Heading from './Heading'
import Testimonials from './Testimonials'
import { benefitImage2, HubSpotLogo, roadmap3, roadmap4, robot } from '../assets' // Assuming you have a HubSpot logo image
import Button from './Button'

const AboutPage = () => {
  return (
    <>
        <Heading className={`my-20`} title="About Us" text="Learn about RevAmp Hub and how we can help you unlock the full potential of HubSpot." />

      {/* About Text Section */}
      <Section
        id="about-text"
        className="py-16"
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 p-8">
              <h2 className="text-3xl text-n-1 font-semibold mb-4">Our Mission</h2>
              <p className="text-lg text-n-3 mb-6">
                RevAmp Hub is all about transforming HubSpot into a powerhouse for sales, marketing, and customer success teams. We are a team of HubSpot enthusiasts who offer a solution to every problem and insight into every opportunity.
              </p>
              <p className="text-lg text-n-3 mb-6">
                HubSpot is not just about automation, it's the overall design and how the tiny details are synced in harmony. That's where we shine most, by implementing and strictly following a precise and visually clear process map.
              </p>
              <p className="text-lg text-n-3 mb-6">
                With quality right before our eyes in every detail, we have a dedicated team that does only that, with the sole objective of making sure that every project and every task is tested and does not overlap with other pieces.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <motion.img
                src={benefitImage2} // Replace with the actual image path
                alt="RevAmp Hub Team"
                className="w-[450px] rounded-lg shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Enhanced Efficiency Section */}
      <Section
        id="enhanced-efficiency"
        className="py-16"
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Enhanced Efficiency Through Automation</h2>
          <p className="text-lg text-n-3 mb-6">
            At RevAmp Hub, we harness the power of HubSpot to automate your business processes, reducing manual tasks and freeing up valuable time. Our tailored solutions streamline operations, ensuring your team can focus on what truly matters—growing your business.
          </p>
        </div>
      </Section>

      {/* Optimized Marketing Section */}
      <Section
        id="optimized-marketing"
        className="py-16 "
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-4">Optimized Marketing and Sales Workflows</h2>
            <p className="text-lg text-n-3 mb-6">
              Our expertise in designing and managing complex workflows means your marketing and sales processes are not only efficient but highly effective. We create customized sequences that align with your business goals, driving higher conversion rates and increasing your return on investment.
            </p>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={roadmap4} alt="Marketing Workflow" className="w-full rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </Section>

      {/* Improved CRM Section */}
      <Section
        id="improved-crm"
        className="py-16"
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 p-8">
            <h2 className="text-3xl font-semibold mb-6">Improved CRM Performance</h2>
            <p className="text-lg text-n-3 mb-6">
              RevAmp Hub specializes in enhancing your CRM capabilities by leveraging HubSpot’s robust features. We help you manage customer relationships more effectively, ensuring you have the insights needed to build lasting connections and drive business growth.
            </p>
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={roadmap3} alt="CRM Performance" className="w-full rounded-lg shadow-xl" />
          </motion.div>
        </div>
      </Section>

      {/* HubSpot Provider Showcase Section */}
      <Section
        id="hubspot-showcase"
        className="py-16"
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left pr-8">
            <h2 className="text-3xl text-n-1 font-semibold mb-6">Our HubSpot Partnership</h2>
            <p className="text-lg text-n-3 mb-4">
              As a certified HubSpot provider, we help businesses get the most out of their HubSpot investment with customized workflows, integrations, and automation that align with your goals.
            </p>
            <a className="text-sm text-pink-500 hover:underline" href='https://ecosystem.hubspot.com/marketplace/solutions/revamphub' >
              Visit our HubSpot provider page for more details
            </a>
          </div>

          {/* Image Section with Animation */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={HubSpotLogo} alt="HubSpot Provider" className="w-[450px] object-contain mb-4" />
          </motion.div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section
        id="testimonials"
        className="py-16"
        customPaddings="px-6 lg:px-24"
        crosses
        crossesOffset={-150}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
          <Testimonials />
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section
        id="cta"
        className="py-16 text-white text-center"
        crosses
        crossesOffset={-150}
      >
        <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">Let us help you unlock the true potential of your business with HubSpot. Contact us today!</p>
        <Button className=" text-white px-6 py-3 rounded-lg text-xl font-semibold" href={'/contact'}>
          Get in Touch
        </Button>
      </Section>
    </>
  )
}

export default AboutPage
