import React from 'react';

const Donation = () => {
  return (
    <div>
      <div className="w-full px-10">
      {/* Section Header */}
      <div className="text-center">
        <span className="mt-4 text-red-500 text-[20px] font-semibold">
          What We Do?
        </span>
        <h2 className="mt-3 text-[36px] font-extrabold">Our Best Services</h2>
      </div>

      {/* Main Content Row */}
      <div className="flex items-center justify-between mt-10">
        {/* Left: Image Section */}
        <div className="w-1/2 flex justify-center">
          <img className="h-[500px] object-cover" src="images/about4.png" alt="About us" />
        </div>

        {/* Right: Text Section */}
        <div className="w-1/2 flex flex-col px-10">
          <h1 className="text-6xl font-bold text-gray-400">01</h1>
          <h3 className="text-2xl font-semibold mt-4">Blood Donation Process</h3>
          <p className="mt-3 text-gray-600">
            We follow a safe and efficient process to ensure every blood donation helps save lives.
            Join us in making a difference.
          </p>
          
        </div>
      </div>
    </div>
    </div>
  );
}

export default Donation;
