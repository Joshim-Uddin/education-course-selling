import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';
import { FiTrendingUp } from "react-icons/fi";
import { PiBriefcase, PiChalkboardTeacher } from "react-icons/pi";

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Achievement = () => {
    useGSAP(()=>{
        let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
        trigger: '.achievment',
        start: 'top center', // when the top of the trigger hits the top of the viewport
        end: '200px bottom', // end after scrolling 500px beyond the start
        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
});

// add animations and labels to the timeline
tl.from('.achievment', 
    { y:50, ease:"elastic.in", duration:3, autoAlpha: 0 })

    })
    return (
        <div className='achievment font-roboto ms-0 mr-0 sm:ms-[50px] sm:mr-[40px] lg:ms-[163px] lg:mr-[149px] flex flex-col gap-3 sm:gap-0 sm:flex-row my-5 sm:my-[45px] md:my-[70px] py-[34px] px-[42px] bg-white shadow-[1px_5px_50px_#54637A1A] rounded-[10px] sm:justify-between sm:items-center'>
            <div className='flex items-center gap-5'>
                <div className='h-[58px] w-[58px] rounded-[29px] bg-[#F4F6F9] relative'>
                <FiTrendingUp className='h-[40px] w-[40px] absolute top-[9px] left-[9px]'/>
                </div>
                
                <div>
                    <p className="rate text-[#27B94E]">126%</p>
                    <p className='leading-[22px] tracking-[0.1px]'>170% Average Salary Hike</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='h-[58px] w-[58px] rounded-[29px] bg-[#F4F6F9] relative'>
                <PiBriefcase className='h-[40px] w-[40px] absolute top-[9px] left-[9px]' />
                </div>
                
                <div>
                    <p className="rate text-[#FFA41B]">100+</p>
                    <p className=''>Job Placments</p>
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <div className='h-[58px] w-[58px] rounded-[29px] bg-[#F4F6F9] relative'>
                <PiChalkboardTeacher className='h-[40px] w-[40px] absolute top-[9px] left-[9px]'/>
                </div>
                
                <div>
                    <p className="rate text-[#D60000]">Live</p>
                    <p className=''>Interactive Sessionse</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default Achievement;