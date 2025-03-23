import React from 'react';

const ProspectAdd = () => {
  return (
    <div className='flex item-center justify-center min-h-screen   '>
      <div className=' flex  flex-col m-[20px] h-[80vh] w-[450px] shadow-lg'>
          <h2 className='font-semibold m-[30px]'>
              Prospects
          </h2>
          <ul className='m-[30px]'>
            <li className='mt-[14px]'>
             <strong>
              Name:
              </strong> John Doe
            
            </li>

            <li className='mt-[14px]'>
             <strong>
             Address:
             </strong>123 DownTown,Sydney
               
            </li>

            <li className='mt-[14px]'>
             <strong>
             Tel:</strong>
             (156) 789 383
             
            </li>

            <li className='mt-[14px]'>
             <strong>
             BloodType
             </strong>
             :Unknown
              
            </li>

            <li className='mt-[14px]'>
             <strong>
              Diseases:
              </strong>
              None
             
            </li>

            <li className='mt-[14px]'>
             <strong>
         Date:
         </strong>2024/12/01
             
            </li>

            <li className='mt-[14px]'>
             <strong>
              Weight:
              </strong>
              50kg
              
            </li>

            <li className='mt-[14px]'>
             <strong>
              Status:
              </strong>
              Pending
             
            </li>
          </ul>
          <span className="block m-[10px]">
            Do u want to approve James to a donar?
          </span>
          <button className='bg-red-500 text-white cursor-pointer p-[5px] w-[150px] m-[10px]'>
            Approve
          </button>
      </div>
    </div>
  );
}

export default ProspectAdd;
