import React from 'react';

const Featured = () => {
  return (
    <div className='flex items-center justify-center py-16 px-8 lg:px-20 xl:px-32'>
      <div className='max-w-screen-xl flex flex-col lg:flex-row items-center gap-10'>
        {/* Text/Info Section */}
        <div className='lg:w-1/2 p-8 bg-white/80 backdrop-blur-lg border border-white/40 shadow-lg rounded-2xl'>
          <div className='mb-8'>
            <h1 className='text-3xl font-semibold text-purple-800 mb-2'>
              Who We Are
            </h1>
            <hr className='bg-red-500 w-20 h-1 mb-4' />
            <p className='text-lg text-gray-700 leading-relaxed'>
              BloodHive is a public donation center connecting blood donors with
              those in need, contributing to a stronger healthcare system.
            </p>
          </div>
          <ul className='list-disc list-inside text-gray-700 space-y-2'>
            <li>Specialized blood donors and clinical expertise.</li>
            <li>Enhanced communication with our members.</li>
            <li>High-quality assessment, diagnosis, and treatment.</li>
            <li>Critical examination to ensure alignment.</li>
            <li>The comprehensive care of a multidisciplinary team.</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className='lg:w-1/2 rounded-2xl overflow-hidden shadow-lg'>
          <video
            src='/images/video.mp4'
            className='w-full h-full object-cover'
            loop
            autoPlay
            muted
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;