import React, { useEffect, useState } from 'react';
import { provider } from '../assets'; // Make sure 'provider' is the correct image import

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

  return <div className="text-5xl font-semibold text-indigo-500 mt-6">{count}</div>;
};

const CounterSection = () => {
  return (
    <div className="flex justify-between items-center p-12 ">
      <div className="w-1/2">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={provider} alt="Provider Image" className="w-[75%] rounded-lg shadow-lg mb-12" />
        </a>
      </div>
      <div className="w-1/2 space-y-12">
        <div className="flex justify-between">
          <div className="w-1/2 text-white text-center">
            <h3 className="text-2xl font-semibold">Projects Done</h3>
            <Counter endValue={30} />
          </div>
          <div className="w-1/2 text-white text-center">
            <h3 className="text-2xl font-semibold">Happy Clients</h3>
            <Counter endValue={25} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 text-white text-center">
            <h3 className="text-2xl font-semibold">Services     </h3>
            <Counter endValue={50} />
          </div>
          <div className="w-1/2 text-white text-center">
            <h3 className="text-2xl font-semibold">Integrations Done</h3>
            <Counter endValue={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
