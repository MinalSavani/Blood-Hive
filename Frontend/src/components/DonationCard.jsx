import React from 'react';

const DonationCard = ({title,image,icon,description}) => {
  return (
    <div className='backdrop-blur-lg border border-white/90 shadow-lg rounded-2xl
    flex flex-col h-[602px] w-[402px] bg-gray-200 transition-transform duration-700 ease-in-out transform hover:scale-105'
    >
      <div className='relative mt-5 mx-5'>
            <img className="h-[372px] w-full rounded-lg" src={image}  />
    

      {/* Icons  */}
      
          
      <div className='absolute top-[305px] left-1/2 -translate-x-1/2 flex items-center  justify-center h-[92px] w-[92px] bg-black rounded-full'>
            <img className='h-[42px] w-[58px] object-contain' src={icon} alt="Icon"/>

            
      </div>
      </div>
      <div className='flex flex-col mt-5 items-center text-center  px-5'>
                <h3>
                    {title}
                </h3>
                <p>
                    {description}
                </p>

               
      </div>

    </div>

   

  );
}

export default DonationCard;
