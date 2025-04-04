import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    
    <div className="bg-[url('images/bg-3.png')]  bg-no-repeat bg-cover bg-center h-[85vh] px-[200px] md:px-20 flex flex-col">
      {/* Hero Content */}
      <div className="flex flex-col w-[50%] pt-[10%]">
        {/* Animated Subheading */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 8 }}
          className="text-red-600 font-sans text-4xl"
        >
          Donate blood, Save life!
        </motion.h3>

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-red-900  font-[Poppins] font-bold text-6xl"        >
          Donate Blood And Inspire Others
        </motion.h1>

       
        <div className="flex items-center mt-[50px]">
          <button className="bg-red-500 p-[15px] rounded-md text-white mr-10 ml-7">
            Explore Now!
          </button>
        </div>

        <div className="flex flex-row h-[300px] w-[1400px]">
         
          <div className="flex flex-col font-bold h-[200px] w-[600px] mt-[100px] mr-2 ml-6 py-4 px-6 rounded-2xl bg-red-400/100 backdrop-blur-lg border border-red-800/40 shadow-lg">
            <h2 className="text-[25px] text-white font-bold mr-4 ml-4 font-sans">
              Donate Now
            </h2>
            <div className="flex flex-row">
              <h3 className="text-[16px] text-black mt-6 ml-4 mr-4">
                Join us today and make a difference! Register now to become a part of our community—because every action counts.
              </h3>
              
              {/* Clickable Icon to Navigate to Register Page */}
              <Link to="/register">
                <FiLogIn className="text-6xl mt-6 text-white cursor-pointer hover:text-gray-300 transition" />
              </Link>
            </div>
          </div>

         
          <div className="flex flex-col font-bold h-[200px] mt-[100px] w-[600px]mr-2 ml-6 py-4 px-6 rounded-2xl bg-red-600/100 backdrop-blur-lg border border-red-600/40 shadow-lg">
            <h3 className="text-[25px] text-white mr-4 ml-4  mt-6 font-sans">Volunteer  Now!!</h3>
            <div className="flex flex-row justify-between h-[300px] w-[600px]">
            Join us in making a difference! Your time and effort can save lives. Step up, volunteer today, and be a part of something meaningful.
               <Link to="/volunteer">
                <FiLogIn className="text-6xl mt-6 text-white cursor-pointer hover:text-gray-300 transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
