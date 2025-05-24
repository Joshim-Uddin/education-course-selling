import React, { useEffect } from 'react';
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';



gsap.registerPlugin(useGSAP, SplitText)

const Hero = () => { 
    
    useGSAP(()=>{

        gsap.set("h1", {opacity: 1})
        let split = SplitText.create("#heading", { type: "chars" });

         
        const heroTl = gsap.timeline()
        gsap.from(split.chars, 
            {
            y: 100,
            stagger: 0.05,
            autoAlpha: 0
            });

        heroTl.from(".heroImage", {
            x: -50,
            opacity: 0,
            y: -20,
            duration: 2,
            scale: 3
        })
        heroTl.from('.heroForm', {
             x: 50,
            opacity: 0,
            y: -20,
            duration: 1,
            scale: 3,
            delay:0
        })
        heroTl.from('.para',{
            y:20,
            opacity:0,
            duration:1
        })
        heroTl.from('.heading2',{
            y:-20,
            opacity:0,
            duration:1,
            color: "red",
            fill: "yellow"
        })
        heroTl.from('.whitebtn', {
            x:500,
            opacity:0,
            duration:0.5,
            scale: 2
        })
        
                    
       
    })

    return (
        <div className='hero bg-[#1B99D4] wrapper min-[768px]:flex justify-between items-center  md:gap-3 relative pt-5 pb-5 sm:pb-0 sm:pt-16 lg:pt-[100px]'>
            <div className='font-roboto text-white flex flex-col justify-start items-start gap-5 max-w-[455px] min-[1921px]:min-w-3/5'>
                <h6 className='bg-[#3DA8DA] text-[14px] font-medium py-[7px] px-2 rounded-[5px] text-center mx-auto sm:mx-0'>Specialization over generalization</h6>
                <h1 id='heading' className='font-bold text-[28px] sm:text-[32px] md:text-[42px] text-center sm:text-left leading-[32.5px] sm:leading-[35.5px] md:leading-[47.5px] heading'>Advanced Data Science 
                & AI Course</h1>
                <p className='para text-[15px] sm:text-[17px] leading-6 font-normal'>Equip yourself with data science skills through live, interactive lectures guided by industry expert mentors</p>
                <h4 className='heading2 text-[22px] sm:text-2xl md:text-[28px] leading-6 font-normal'>Live  Interactive Classes</h4>
                <button className='whitebtn text-sm sm:text-base flex items-center gap-[5px] mt-[17px]'><FiDownload/>Download Brochure</button>
            </div>
            <div className='absolute max-[1280px]:hidden bottom-0 left-1/4 2xl:left-1/3'>
                <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747271839/man-wearing-t-shirt-gesturing_xiwkfj.png" alt="image" className='max-h-[518px] heroImage' />
            </div>
            <div className='heroForm bg-white rounded-[10px] mt-5 mb-5 sm:mt-[50px] sm:mb-[45px]'>
                <form action="" className='applyForm'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl leading-[33.6px] font-bold font-roboto mb-2 sm:mb-[15px]'>We're here to help!</h3>
                    <p className='text-[18px] leading-[25px] font-normal font-roboto text-[#252525]'>Please contact us in case of any query.</p>
                    <div className='flex flex-col gap-5 mt-5 sm:mt-[45px]'>
                    <input type="text" name="name" id="name" placeholder='Your Name' />
                    <input type="email" name="email" id="email" placeholder='Your email address' />
                    <input type="tel" name="phone" id="phone" placeholder='Your phone number'/>
                    <select name="course" id="course" className='text-[#727695]'>
                        <option value="" disabled selected hidden>Select course</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                    </select>
                    <div>
                    <button className='bluebtn flex items-center gap-[15px] font-roboto mt-4 sm:mt-11'>Get in Touch <FaArrowRight /></button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Hero;