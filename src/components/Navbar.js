import React from 'react'
import logo from "../assets/logo.jpg"
import { BiWorld,BiUser } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

function Navbar() {
  return (
    <div className='border-b sticky top-0 bg-white/[95%] z-50'>
          <div className='flex items-center justify-between   sm:mx-6 md:mx-10 lg:mx-12'>
      {/* left */}
      <div className='flex'>
        <img src={logo} className="h-20 object-cover -my-2" />
      </div>
      {/* middle */}
      <div className='hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full'>
        <input
         type="search" 
         placeholder='' 
         className='py-2.5 w-[20rem] rounded-full outline-0'/>
        <div className='flex justify-between absolute w-full pr-16 font-semibold text-gray-600 '>
          <button className='w-full'>Place</button>
          <button className='border-l border-x px-6'>Time</button>
          <button className='w-full text-gray-600/60 pl-2'>Group size</button>
        </div>
        <div className='bg-[#ff5a60]  p-2 rounded-full mr-2'>
          <FiSearch className='text-white w-full'/>
          </div>
      </div>
      {/* right */}
      <div className='flex items-center   pr-3 font-semibold text-gray-600'>
        
        <p className='text-[17px] '>Rent house</p>
        <div className='flex items-center mx-8 gap-1'></div>
        <BiWorld className='mx-4 text-2xl'/>
        <div className=''>EN</div>
        <div className='flex items-center px-3 py-2 rounded-full bg-[#ff5a60] gap-3 border
          text-white font-bold shadow-lg shadow-gray-300 hover:bg-green duration-100 ease-out'>
          <p className=''>
            sign in
          </p>
          <BiUser className='text-[19px]'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar