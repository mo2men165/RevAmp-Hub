import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Heading from "./Heading";
import Button from "./Button";
import { sections } from "../constants";
import Section from "./Section";

const Flywheel = () => {
  const [selectedService, setSelectedService] = useState(sections[0]);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [activeWedgeIndex, setActiveWedgeIndex] = useState(0);

  const radius = 300;
  const center = radius + 50;
  const anglePerSection = 360 / sections.length;

  const getPath = (startAngle, endAngle) => {
    const polarToCartesian = (cx, cy, r, angle) => {
      const rad = (angle - 90) * (Math.PI / 180);
      return {
        x: cx + r * Math.cos(rad),
        y: cy + r * Math.sin(rad),
      };
    };

    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      `M ${center} ${center}`,
      `L ${start.x} ${start.y}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
      "Z",
    ].join(" ");
  };

  useEffect(() => {
    const handleScroll = () => {
      const flywheelSection = document.getElementById("flywheel");
      const sectionPosition = flywheelSection?.getBoundingClientRect()?.top;
      if (sectionPosition && sectionPosition < window.innerHeight * 0.75 && !animationTriggered) {
        setAnimationTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationTriggered]);

  const handleWedgeClick = (index) => {
    setSelectedService(sections[index]);
    setActiveWedgeIndex(index);
  };

  return (
    <Section id="flywheel" className="relative" crosses crossesOffset>
      <div className="relative z-2 text-center" id="flywheel">
      <Heading className="md:max-w-md lg:max-w-2xl mb-20" title="Our Services" />
      <div className="flex flex-col xl:flex-row justify-between items-center h-auto w-full">
        <svg width={
    screen.width > 1400 
      ? center * 2 
      : screen.width > 1200 
        ? center * 1.8 
        : screen.width > 768 
          ? center * 1.5 
          : center * 1.2
  }  height={center * 2} className="flex-shrink-0 justify-center items-center" viewBox={`0 0 ${center * 2} ${center * 2}`}>
          {sections.map((section, index) => {
            const startAngle = index * anglePerSection;
            const endAngle = (index + 1) * anglePerSection;
            const isActive = index === activeWedgeIndex;

            return (
              <motion.path
                key={activeWedgeIndex}
                d={getPath(startAngle, endAngle)}
                fill={activeWedgeIndex === section.id ? "#FFFFFF" : section.color}
                initial={{ scale: 1 }}
                transition={{ type: "tween", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.1, fill: "#FFFFFF" }}
                onClick={() => handleWedgeClick(index)}
              />
            );
          })}

          <motion.circle
            cx={center}
            cy={center}
            r="100"
            fill="#4B0082"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />

          <text
            x={center}
            y={center}
            fill="#FFFFFF"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="24"
            fontWeight="bold"
            className="aldrich"
          >
            RevAmp Hub
          </text>

          {sections.map((section, index) => {
            const angle = (index + 0.5) * anglePerSection;
            const polarToCartesian = (cx, cy, r, angle) => {
              const rad = (angle - 90) * (Math.PI / 180);
              return {
                x: cx + r * Math.cos(rad),
                y: cy + r * Math.sin(rad),
              };
            };

            const labelPos = polarToCartesian(center, center, radius / 1.5, angle);

            return (
              <text
                key={index}
                x={labelPos.x}
                y={labelPos.y}
                fill="#000"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontSize="16"
                fontWeight="bold"
                style={{ wordWrap: "break-word", width: "80px" }}
                className="aldrich"
                onClick={() => handleWedgeClick(index)}
              >
                {section.title.split(" ").map((word, i) => (
                  <tspan key={i} x={labelPos.x} dy={i === 0 ? 0 : 15}>
                    {word}
                  </tspan>
                ))}
              </text>
            );
          })}
        </svg>

        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 container">
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 aldrich">{selectedService.title}</h2>
            <p className="text-lg text-gray-300 mb-6">{selectedService.text}</p>
            <ul className="text-gray-300 mb-6 list-none">
              {selectedService.bulletPoints.map((point, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">•</span>{point}
                </li>
              ))}
            </ul>
            <Button White href="/pricing">
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Section>
  );
};

export default Flywheel;
