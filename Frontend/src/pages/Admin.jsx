import React from 'react';
import { Gauge } from '@mui/x-charts/Gauge';
import { LineChart } from '@mui/x-charts/LineChart';
import {FaUser} from "react-icons/fa"
import { PieChart } from '@mui/x-charts/PieChart';

const Admin = () => {
  return (
    <div className='flex justify-between h-[100vh] p-10'>

      {/* Left Section - Charts */}
      <div className='flex flex-wrap gap-6 w-[70%] items-start'>

        {/* First Box - Gauge Chart */}
        <div className="bg-gray-50 h-[300px] w-[200px] shadow-xl flex flex-col items-center justify-center">
          <Gauge
            value={75}
            startAngle={0}
            endAngle={360}
            innerRadius="80%"
            outerRadius="100%"
          />
          <h2 className='font-semibold text-[18px] mt-4'>Prospects</h2>
        </div>

        {/* Second Box - Circular Progress */}
        <div className="bg-gray-50 h-[300px] w-[350px] shadow-xl flex flex-col items-center justify-center">
          <div className='h-[200px] w-[200px] border-[20px] border-red-400 border-solid rounded-full flex items-center justify-center'>

          </div>
          <div className='flex items-center'>
            
          </div>
          <h2 className='font-semibold text-[18px] mt-4'>Donors</h2>
        </div>

        {/* Line Chart */}
        <div>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={600}
            height={300}
          />
        </div>

      </div>

      {/* Right Section - Fixed Gray Box */}
      <div className=' flex flex-col bg-gray-100 h-[700px] w-[400px] shadow'>

                <div className='flex items-center m-[20px] '>
                   <FaUser/>
                   <span className='ml-[10px] font-semibold'>
                    LogOut
                   </span>
                </div>

                <div className=' flex flex-col flex-center  items-center mt-[20px]'>
                  <h2 className='font-bold'>
                    Recent Donars
                  </h2>

                  <ul>
                    <li>
                    1.Meera Savani
                    </li>
                    <li>
                      2.Reni Dhola
                    </li>
                    <li>
                      3.Jeni Desai
                    </li>

                    <li>
                      4. Dhruv Desai
                    </li>

                  </ul>

                </div>

                <PieChart
  series={[
    {
      data: [ 
      
          { id: 0, value: 10, label: 'Blood Group A' },
          { id: 1, value: 15, label: 'Blood Group O+' },
          { id: 2, value: 20, label: 'Blood Group AB' },
          {id:3,value:30,label:'Blood Group O-'},

       ],
      innerRadius:50,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
      startAngle: -45,
      endAngle: 225,
      cx: 150,
      cy: 100,
    }
  ]}
/>

                </div>
    </div>
  );
};

export default Admin;
