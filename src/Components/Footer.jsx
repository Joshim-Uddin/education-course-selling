import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaTwitter } from 'react-icons/fa';
import { FaAnglesRight} from 'react-icons/fa6';
import { MdMailOutline } from 'react-icons/md';
import { RiUser2Fill } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';

const Footer = () => {
    return (
        <div className='wrapper bg-[#1B99D4] pt-[115px] pb-5 text-white'>
            <div className='grid grid-cols-4 justify-between gap-[83px] pb-[25.53px]'>
                <div>
                    <a href='#' className='flex items-center gap-[9.1px] mb-9'>
                        <div className='bg-white h-[41.41px] w-[42.6px] rounded-full relative'>
                            <RiUser2Fill className='text-[28px] text-[#1B99D4] absolute left-[7.6px] top-[6.29px]'/>
                        </div>
                        <h3 className='font-[Poppins] font-bold text-[22.3px]'>My_Tutor</h3>
                    </a>
                    <p className='font-inter font-medium leading-[28.5px] mb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    <div className='flex items-center gap-[14px]'>
                        <a href='#' className='relative h-[50px] w-[50px] rounded-[4px] bg-[rgba(255,255,255,0.1)]'>
                        <FaFacebookF className='absolute text-lg top-[18px] left-[16.81px]'/>
                        </a>
                        <a href='#' className='relative h-[50px] w-[50px] rounded-[4px] bg-[rgba(255,255,255,0.1)]'>
                        <FaLinkedinIn className='absolute text-lg top-[18px] left-[16.81px]'/>
                        </a>
                        <a href='#' className='relative h-[50px] w-[50px] rounded-[4px] bg-[rgba(255,255,255,0.1)]'>
                        <FaPinterestP className='absolute text-lg top-[18px] left-[16.81px]'/>
                        </a>
                        <a href='#' className='relative h-[50px] w-[50px] rounded-[4px] bg-[rgba(255,255,255,0.1)]'>
                        <FaTwitter className='absolute text-lg top-[18px] left-[16.81px]'/>
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className='font-inter font-semibold text-2xl leading-9 mb-9'>Explore</h3>
                    <div className='flex flex-col gap-[27.08px]'>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> About Us</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Blog</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Campus Project</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Become a Mentor</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Contact us</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Hire From us</a>
                    </div>
                </div>
                <div>
                    <h3 className='font-inter font-semibold text-2xl leading-9 mb-9'>Useful Links</h3>
                    <div className='flex flex-col gap-[27.08px]'>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Privacy Policy</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Terms of use</a>
                        <a href='#' className='font-medium font-inter leading-[26px] flex items-center gap-[11px]'><FaAnglesRight /> Refund Policy</a>
                    </div>
                </div>
                <div>
                    <h3 className='font-inter font-semibold text-2xl leading-9 mb-9'>Contact Info</h3>
                    <div className='flex flex-col gap-[27.08px]'>
                        <div className='flex flex-col gap-[15px]'>
                            <p className='flex items-start gap-[3.73px]'> <SlLocationPin className='text-xl pt-[4px]' /> 4517 Washington Ave. Manchester, Kentucky 39495</p>
                            <p className='flex items-center gap-[3.73px]'><FaPhoneAlt className='text-lg pt-[4px]'/>+91-9024250272</p>
                            <p className='flex items-center gap-[3.73px]'><MdMailOutline className='text-xl pt-[4px]'/>shubhammodi820@gmail.com</p> 
                        </div>
                    </div>
                </div>
                
            </div>
            <p className='text-center font-inter font-medium leading-[26.08px] text-white pt-[52px]'>Copyright 2024 My_Tutor| Designed By Shubham Modi.</p>            
        </div>
    );
};

export default Footer;