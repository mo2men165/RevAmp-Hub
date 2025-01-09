import React, { useEffect, useState } from "react";
import { provider } from "../assets"; // Make sure 'provider' is the correct image import
import Button from "./Button";

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      if (start < endValue) {
        start++;
        setCount(start);
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [endValue]);

  return <div className="text-5xl font-bold text-white">{count}+</div>;
};

const CounterSection = () => {
  const stats = [
    { label: "Happy Customers", endValue: 50 },
    { label: "Professional Certifications", endValue: 20 },
    { label: "Completed Integrations", endValue: 19 },
    { label: "HubSpot Accreditations", endValue: 10 },
  ];

  return (
    <div className="py-16 ">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <img
            src={provider}
            alt="HubSpot Elite Badge"
            className="mx-auto w-[25%] sm:w-[45%] xs:w-[55%] "
          />
          <Button className={`my-6`} href={`https://ecosystem.hubspot.com/marketplace/solutions/revamphub`}>
            Visit our Ecosystem
          </Button>
          
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <Counter endValue={stat.endValue} />
              <h3 className="text-sm text-white mt-2 font-medium">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
