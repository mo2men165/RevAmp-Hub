import { useState, useEffect } from "react";
import { provider } from "../assets";
import Button from "./Button";

const Counter = ({ endValue, isCountdown = false }) => {
  const [count, setCount] = useState(isCountdown ? endValue : 0);

  useEffect(() => {
    let current = isCountdown ? endValue : 0;
    const interval = setInterval(() => {
      if (isCountdown) {
        if (current > 0) {
          current--;
          setCount(current);
        } else {
          clearInterval(interval);
        }
      } else {
        if (current < endValue) {
          current++;
          setCount(current);
        } else {
          clearInterval(interval);
        }
      }
    }, 50);

    return () => clearInterval(interval);
  }, [endValue, isCountdown]);

  return <div className="text-5xl font-bold text-white">{count}{isCountdown? "" : "+" }</div>;
};
const CounterSection = () => {
  const stats = [
    { label: "Happy Customers", endValue: 50 },
    { label: "CRM Migrations", endValue: 20 },
    { label: "Professional Certifications", endValue: 10 },
    { label: "Challenges Unsolved", endValue: 50, isCountdown: true }, // Add `isCountdown`
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-orange-500 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <Counter endValue={stat.endValue} isCountdown={stat.isCountdown} />
              <h3 className="text-sm text-white mt-2 font-medium">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
        <div className="">
          <img
            src={provider}
            alt="HubSpot Elite Badge"
            className="mx-auto w-[25%] sm:w-[45%] xs:w-[55%]"
          />
          <Button
            className={`my-6`}
            href={`https://ecosystem.hubspot.com/marketplace/solutions/revamphub`}
          >
            Visit our Ecosystem
          </Button>
        </div>
        
      </div>
    </div>
  );
};
export default CounterSection;