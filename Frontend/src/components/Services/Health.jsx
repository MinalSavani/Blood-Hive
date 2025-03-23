import React from 'react';

const Health = () => {
  return (
    <div>
      
      <div>
      <div className="w-full px-10">
  
      
      {/* Main Content Row */}
      <div className="flex items-center justify-between mt-10">
        {/* Left: Image Section */}
        <div className="w-1/2 flex flex-col px-10">
          <h1 className="text-6xl font-bold text-gray-500">02</h1>
          <h3 className="text-2xl font-semibold mt-4">Health Check</h3>
          <p className="mt-3 text-gray-400">
            We follow a safe and efficient process to ensure every blood donation helps save lives.
            Join us in making a difference.
          </p>
          
        </div>
        

        {/* Right: Text Section */}
        <div className="w-1/2 flex justify-center">
          <img className="h-[500px] object-cover" src="images/s2.jpeg" alt="About us" />
        </div>
        
      </div>
    </div>
    </div>
    </div>
  );
}

export default Health;
