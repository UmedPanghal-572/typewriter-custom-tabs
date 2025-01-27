import React, { useState } from 'react';
import { TABS } from '../utils/helper';

const CustomTab = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <div className="space-x-10 space-y-10 px-3 ">
        {TABS.map((obj, index) => (
          <button
            key={index}
            onClick={() => setValue(index)}
            className={`px-7 py-4 rounded-lg font-bold text-2xl transition-all duration-1000 ease-in-out ${value === index
              ? 'bg-purple-300 text-green-500'
              : 'bg-red-500 text-white'
              }`}
          >
            {obj.tab}
          </button>
        ))}
      </div>
      <p className="mt-10 text-3xl font-extrabold">{TABS[value].counting}</p>
    </div>
  );
};

export default CustomTab;

