import React, { useState } from 'react'
import { FaBarsStaggered } from 'react-icons/fa6'
import { RiUser2Fill } from 'react-icons/ri'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

const Navbar = () =>{
  const [clicked, setClicked] = useState(false)
  console.log(clicked)

  // useGSAP(()=>{
  //   const collapseTl = gsap.timeline()
  //   collapseTl.to("collapse", {
  //     opacity: 0,
  //     y:-30,
  //   }, "+=0.8")
  // })

  return (
    <>
    <nav className='sm:block hidden max-[769px]:max-w-[768px] max-h-[76px] bg-[#ffffff] wrapper md:fixed w-full z-40'>
      <div className='flex justify-between items-center'>
      <a href='#' className='flex items-center gap-2.5'>
        <div className='bg-[#1B99D4] h-[41.41px] w-[42.6px] rounded-full relative'>
            <RiUser2Fill className='text-[28px] text-white absolute left-[7.6px] top-[6.29px]'/>
          </div>
        <h3 className='font-[Poppins] font-bold text-[22.3px]'>My_Tutor</h3>
      </a>
      <div className='font-[Inter] text-base leading-6 font-[500] flex items-center gap-[35px]'>
        <ul className='flex items-center min-[640px]:gap-4 min-[768px]:gap-[45px] py-[26px]'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
        <button className='bluebtn rounded-[5px] font-inter cursor-pointer'>Apply Now</button>
      </div>
    </div>
    </nav>
    <nav className='bg-[#ffffff] z-40 py-2 sm:hidden'>
      <div className='flex justify-between items-center px-2'>
      <a href='#' className='flex items-center gap-2.5'>
        <div className='bg-[#1B99D4] h-[25.41px] w-[26.6px] rounded-full relative'>
            <RiUser2Fill className='text-xl text-white absolute left-[3.6px] top-[2.29px]'/>
          </div>
        <h3 className='font-[Poppins] font-bold text-[15.3px]'>My_Tutor</h3>
      </a>
      <FaBarsStaggered onClick={()=>setClicked(!clicked)}/>
     
    </div>
    </nav>
    <div className={clicked?'font-[Inter] text-sm leading-6 gap-2 items-center bg-amber-400 p-2 w-full transition-opacity ease-linear opacity-100 duration-500 min-[640px]:hidden':'absolute -top-52'}>
        <ul className='flex flex-col items-center gap-[15px]'>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Blogs</a></li>
          <li><button className='bluebtnmini text-sm rounded-[5px] font-inter cursor-pointer'>Apply Now</button></li>
        </ul>
        
      </div>
    </>

  )
}

export default Navbar