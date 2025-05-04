import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Projects = () => {
    return (
        <div className='wrapper'>
            <div>
                <div className='font-roboto'>
                    <h5 className='font-semibold text-5xl leading-16 tracking-[0.25px] mb-[19px] text-[rgba(0,0,0,0.87)]'>Hands-on Projects</h5>
                    <p className='leading-8 tracking-[0.5px] text-[rgba(0,0,0,0.6)] mb-[25px]'>Find out how our Mentor transformed their careers by giving
                    Hands on Projects.</p>
                    <div className='flex gap-[27px]'>
                        <div className='bg-[#20AD96] shadow-[0px_7px_29px_0_#63636E] text-white py-[6px] px-[55.5px] rounded-[5px]'>
                        <p className='font-bold text-[28px] leading-[23px]'>10+</p> 
                        <p className='text-base'>Projects</p>
                        </div>
                        <div className='bg-[#9747FF] shadow-[0px_7px_29px_0_#63636E] text-white py-[6px] px-[55.5px] rounded-[5px]'>
                        <p className='font-bold text-[28px] leading-[23px]'>6+</p> 
                        <p className='text-base'>Domains</p>
                        </div>
                        
                    </div>
                    <div className='flex gap-4'>
                        <button className='w-[72px] h-[72px] rounded-[36px] bg-white shadow-[0px_0px_16px_4px_#7E7E7E]relative'><FaArrowLeft className='absolute left-[95px] bottom-[10px]' /></button>
                        <button><FaArrowRight /></button>
                    </div>
                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    );
};

export default Projects;