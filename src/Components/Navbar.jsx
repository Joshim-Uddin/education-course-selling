import React from 'react'
import logo from './../assets/logo.svg'

const Navbar = () =>{
  return (
    <nav className='max-h-[76px] bg-[#ffffff] wrapper'>
      <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2.5'>
        <img src={logo} alt="image of logo" />
        <h3 className='font-[Poppins] font-bold text-[22.3px]'>My_Tutor</h3>
      </div>
      <div className='font-[Inter] text-base leading-6 font-[500] flex items-center gap-[35px]'>
        <ul className='flex items-center gap-[45px] py-[26px]'>
          <li>About Us</li>
          <li>Courses</li>
          <li>Events</li>
          <li>Blogs</li>
        </ul>
        <button className='bluebtn font-inter'>Apply Now</button>
      </div>
    </div>
    </nav>
  )
}

export default Navbar