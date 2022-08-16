import React from "react";
import { Link } from "react-router-dom";

function Explore({
  Explore,
  setExplore,
}: {
  Explore: boolean;
  setExplore: (val: boolean) => void;
}) {
  return (
    <div
      className={`${
        Explore ? "w-screen" : "w-0 overflow-hidden"
      } fixed z-10 text-slate-400 ease-in-out transform  transition-all duration-200 h-screen bg-black`}
    >
      <div
        className='top-0 right-0 left-auto absolute cursor-pointer p-3  text-5xl rounded-lg m-3 bg-bgr1  hover:bg-bgr hover:text-white'
        onClick={() => setExplore(false)}
      >
        &times;
      </div>
      <div className='h-screen w-screen p-22 flex flex-col space-y-9 sm:justify-center items-center animate-fade overflow-y-scroll sm:overflow-hidden'>
        <div className=' sm:flex space-x-10 space-y-7 sm:space-y-3 sm:space-x-4 '>
          {/* <div className=' md:flex space-x-5 space-y-3 '> */}
          <div className='flex space-x-7'>  
            <div className='Cardbg1  w-44 h-64 rounded-xl cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center p-5 mt-2 ml-10 mr-2 '>
              Explore Education Statistics Among States
            </div>
            <div className='Cardbg flex space-x-10 space-y-10 w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center ml-10 mr-2'>
              Explore State Historical DropOut Rate
            </div> 
          </div>
          <div className='flex space-x-7'>
            <div className='bg-gradient-to-r from-sky-400 to-cyan-300 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center mr-2'>
              Gender Pararity Index Historical data
            </div>
              <div className='bg-gradient-to-r from-fuchsia-600 to-pink-600 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center mr-2'>
                FindOut Out-Turn Rate Accross Country
              </div>
          </div>
          <div className='flex space-x-7'> 
             <div className='Cardbg2 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
                Pass & fail Statistics Analysis
              </div>
            <Link to={"/Enrollmentrate"}>
              <div className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-400 font-bold font-mono text-2xl justify-center items-center mr-2'>
                Student Enrollment rate Data Analytics accross INDIA
              </div>
            </Link>
          </div>

        <div className='flex space-x-7'> 
        {/* <div className='flex space-x-10  animate-fade'> */}
          <div className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-300 font-bold font-mono text-2xl justify-center items-center mr-2'>
            Find Out How Literacy Rate did Over Years
          </div>
          <div className='Cardbg2 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center mr-2'>
            Educational Institutions and their Performance in INDIA
          </div>
        </div>

          <div className='flex space-x-7'>
          <div className='Cardbg flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center mr-2'>
            Caste Based educational info From Ages Simplified
          </div>
          <div className='bg-gradient-to-r from-sky-400 to-cyan-300 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center mr-2'>
            Historical information about India
          </div>
          </div>

          <div className='flex space-x-7'> 
          <div className='bg-gradient-to-r from-fuchsia-600 to-pink-600 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-xl  justify-center items-center mr-2'>
            How to Contribute , documentation devs who made it possible
          </div>

          <Link to='/Teachers-Students'>
            <div className='Cardbg1 flex w-44 h-64  rounded-xl p-5 cursor-pointer transition ease-in-out hover:scale-110 duration-300 text-slate-600 font-bold font-mono text-2xl justify-center items-center'>
              How Many Students does a Average Teacher get Assigned?
            </div>
          </Link>
        </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Explore;
