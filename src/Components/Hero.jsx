import React from 'react';
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import heroImage from "./../assets/man-wearing-t-shirt-gesturing.png"

const Hero = () => {
    return (
        <div className='bg-[#1B99D4] wrapper flex justify-between items-center relative'>
            <div className='font-roboto text-white flex flex-col justify-start items-start gap-5 max-w-[455px]'>
                <h6 className='bg-[#3DA8DA] text-[14px] font-medium'>Specialization over generalization</h6>
                <h1 className='font-bold text-[42px] leading-[47.5px]'>Advanced Data Science 
                & AI Course</h1>
                <p className='text-[17px] leading-6 font-normal'>Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors</p>
                <h4 className='text-[28px] leading-6 font-normal'>Live  Interactive Classes</h4>
                <button className='whitebtn flex items-center gap-[5px] mt-[17px]'><FiDownload/>Download Brochure</button>
            </div>
            <div className='absolute bottom-0 left-1/4'>
                <img src={heroImage} alt="image" className='max-h-[518px]' />
            </div>
            <div className='bg-white rounded-[10px] mt-[50px] mb-[45px]'>
                <form action="" className='applyForm'>
                    <h3 className='text-4xl leading-[33.6px] font-bold font-roboto mb-[15px]'>We're here to help!</h3>
                    <p className='text-[18px] leading-[25px] font-normal font-roboto text-[#252525]'>Please contact us in case of any query.</p>
                    <div className='flex flex-col gap-5 mt-[45px]'>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                    <input type="email" name="email" id="email" placeholder='Your email address' />
                    <input type="tel" name="phone" id="phone" placeholder='Your phone number'/>
                    <select name="course" id="course">
                        <option value="" disabled selected hidden>Select course</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                    </select>
                    <div>
                    <button className='bluebtn flex items-center gap-[15px] font-roboto mt-11'>Get in Touch <FaArrowRight /></button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;