import React from 'react';

const Three = () => {
  return (
    <div>

<div className="w-full px-10">
      {/* Section Header */}
    

      {/* Main Content Row */}
      <div className="flex items-center justify-between mt-10">
        {/* Left: Image Section */}
        <div className="w-1/2 flex justify-center">
          <img className="h-[500px] object-cover" src="images/bldbnk.png" alt="About us" />
        </div>

        {/* Right: Text Section */}
        <div className="w-1/2 flex flex-col px-10">
          <h1 className="text-6xl font-bold text-gray-400">03</h1>
          <h3 className="text-2xl font-semibold mt-4">
            Blood Bank

          </h3>
          <p className="mt-3 text-gray-600">
          "Reliable & Lifesaving Blood Bank Services – We provide safe and timely blood donations to those in need. Your health, our priority!"
          </p>
          
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default Three;
