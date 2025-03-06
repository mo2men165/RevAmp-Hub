import React from "react";
import Section from "./Section";
import { socials } from "../constants";
import { provider, revamp } from "../assets";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-16  text-white">
      <div className="container grid lg:grid-cols-2  gap-10">
        {/* Left Side */}
        <div>
        <img src={revamp} width={90} height={90} alt="RevAmp" />
          <div className="mt-5">
            <a target="_blank" href="https://ecosystem.hubspot.com/marketplace/solutions/revamphub">
            <img src={provider} alt="HubSpot Partner Badge" className="w-[25%]" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-10">
          {/* Row 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul>
              <li>
                <a href="/services" className="hover:underline text-n-4">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:underline text-n-4">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li>
                <a href="/about" className="hover:underline text-n-4">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline text-n-4">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline text-n-4">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Row 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Blog</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="/blog" className="hover:underline text-n-4">
                  Blog
                </a>
              </li>
              <li>
              <a href="/faqs" className="hover:underline text-n-4">
                  FAQ
                </a>
              </li>
              <li>
              <a href="/case-studies" className="hover:underline text-n-4">
                  Case Study
                </a>
              </li>
              <li>
              <a href="/playbooks" className="hover:underline text-n-4">
                  Playbook
                </a>
              </li>  
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Social</h3>
            <ul className="flex gap-4">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full transition-colors hover:bg-gray-600"
                >
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    alt={item.title}
                  />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
