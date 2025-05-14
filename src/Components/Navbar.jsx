import React from 'react'
import { RiUser2Fill } from 'react-icons/ri'

const Navbar = () =>{
  return (
    <nav className='max-h-[76px] bg-[#ffffff] wrapper'>
      <div className='flex justify-between items-center'>
      <a href='#' className='flex items-center gap-2.5'>
        <div className='bg-[#1B99D4] h-[41.41px] w-[42.6px] rounded-full relative'>
            <RiUser2Fill className='text-[28px] text-white absolute left-[7.6px] top-[6.29px]'/>
          </div>
        <h3 className='font-[Poppins] font-bold text-[22.3px]'>My_Tutor</h3>
      </a>
      <div className='font-[Inter] text-base leading-6 font-[500] flex items-center gap-[35px]'>
        <ul className='flex items-center gap-[45px] py-[26px]'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
        <button className='bluebtn rounded-[5px] font-inter cursor-pointer'>Apply Now</button>
      </div>
    </div>
    </nav>
  )
}

export default Navbar