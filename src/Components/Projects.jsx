import React from 'react';
import { AiOutlineFieldTime, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaArrowLeft, FaArrowRight, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoMdLaptop } from 'react-icons/io';
import { MdLiveTv } from 'react-icons/md';
import nineteen from "./../assets/19.svg"

const Projects = () => {
    return (
        <div className='wrapper overflow-hidden pb-[122px]'>
            <div className='flex items-center gap-[131.5px]'>
                <div className='font-roboto'>
                    <h5 className='font-semibold text-5xl leading-16 tracking-[0.25px] mb-[19px] text-[rgba(0,0,0,0.87)]'>Hands-on Projects</h5>
                    <p className='leading-8 tracking-[0.5px] text-[rgba(0,0,0,0.6)] mb-[25px] max-w-[481.64801025390625px]'>Find out how our Mentor transformed their careers by giving
                    Hands on Projects.</p>
                    <div className='flex gap-[27px]'>
                        <div className='bg-[#20AD96] shadow-[0_7px_29px_#63636E] text-white py-[6px] px-[55.5px] rounded-[5px]'>
                        <p className='font-bold text-[28px] leading-[23px]'>10+</p> 
                        <p className='text-base'>Projects</p>
                        </div>
                        <div className='bg-[#9747FF] shadow-[0_7px_29px_#63636E] text-white py-[6px] px-[55.5px] rounded-[5px]'>
                        <p className='font-bold text-[28px] leading-[23px]'>6+</p> 
                        <p className='text-base'>Domains</p>
                        </div>
                        
                    </div>
                    <div className='flex gap-4 mt-[37px]'>
                        <button className='w-[72px] h-[72px] rounded-[36px] bg-white shadow-[0_0_16px_4px_#7E7E7E] relative opacity-30'><FaArrowLeft className='absolute left-[28px] top-[28px]' /></button>
                        <button className='w-[72px] h-[72px] rounded-[36px] bg-white shadow-[0_0_16px_4px_#7E7E7E] relative'><FaArrowRight className='absolute left-[28px] top-[28px]'/></button>
                    </div>
                </div>
            <div className='relative'>
                <div className='font-roboto flex flex-col items-start gap-[22px] max-w-[630px] bg-white pt-11 ps-10 pb-9 pr-[150px] shadow-[1px_5px_50px_0_#54637A] rounded-[10px]'>
                    <h5 className='font-bold text-[22px] leading-[100%] text-center text-[#727695]'>Authentication</h5>
                    <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746366696/symantec_cobfxf.png" alt="" />
                    <p className='leading-[23px] text-[#646464] max-w-[440px]'>Create authentication technology to give access, Correspond to those stored in a database of authorized users.</p>
                    <div className='flex items-center justify-center gap-5'>
                        <p className='text-lg font-medium leading-[23px] text-[#646464]'>Tools:</p>
                        <FaReact  className='h-[33px] w-[33px] text-[#9747FF]'/><FaDatabase  className='h-[33px] w-[33px] text-[#008000]'/><FaDatabase className='h-[33px] w-[33px] text-[#1B99D4]' /><FaNodeJs className='h-[33px] w-[33px] text-[#008000]' />
                    </div>
                </div>
                <div className='font-roboto flex flex-col items-start gap-[22px] max-w-[630px] bg-white pt-11 ps-10 pb-9 shadow-[1px_5px_50px_0_#54637A] rounded-[10px] absolute -right-[539px] top-0'>
                    <h5 className='font-bold text-[22px] leading-[100%] text-center text-[#727695]'>Authentication</h5>
                    <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746366696/symantec_cobfxf.png" alt="" />
                    <p className='leading-[23px] text-[#646464] max-w-[440px]'>Create authentication technology to give access, Correspond to those stored in a database of authorized users.</p>
                    <div className='flex items-center justify-center gap-5'>
                        <p className='text-lg font-medium leading-[23px] text-[#646464]'>Tools:</p>
                        <FaReact  className='h-[33px] w-[33px] text-[#9747FF]'/><FaDatabase  className='h-[33px] w-[33px] text-[#008000]'/><FaDatabase className='h-[33px] w-[33px] text-[#1B99D4]' /><FaNodeJs className='h-[33px] w-[33px] text-[#008000]' />
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-[122px] flex gap-[55px]'>
                <div className='font-roboto border-[1px] rounded-[8px] border-[#D9D9D9] pt-[28px] pb-[30px] ps-[26px] pr-[40px] min-w-[310px]'>
                    <h6 className='font-semibold text-lg leading-[23px] text-[#1B99D4] mb-4'>Course Highlights</h6>
                    <div>
                        <div className='flex items-center gap-2.5 mb-4'>
                            <MdLiveTv className='text-[#1B99D4] text-[26px]'/>
                            <p className='leading-[23px]'>350+ Live sessions</p>
                        </div>
                        <div className='flex items-center gap-2.5 mb-4'>
                            <AiOutlineFundProjectionScreen className='text-[#1B99D4] text-[26px]'/>
                            <p className='leading-[23px]'>15+ Industry Projects</p>
                        </div>
                        <div className='flex items-center gap-2.5 mb-4'>
                            <AiOutlineFieldTime className='text-[#1B99D4] text-[26px]'/>
                            <p className='leading-[23px]'>Life time accessibility</p>
                        </div>
                        <div className='flex items-center gap-2.5 mb-4'>
                            <IoMdLaptop className='text-[#1B99D4] text-[26px]'/>
                            <p className='leading-[23px]'>Live project experience</p>
                        </div>
                    </div>
                </div>
                <div className='font-roboto pt-[54px] pb-[51px] ps-[39px] pr-[38px] border-[1px] rounded-[8px] border-[#D9D9D9]'>
                    <p className='leading-6 mb-[27px] max-w-[731.59px]'>We are driven by the idea of program affordability. So, we give you several financial options to manage
                    and budget the expenses of your course.</p>
                    <div className='flex items-end justify-between min-w-[851px]'>
                        <div>
                            <h5 className='font-bold text-[27px] text-[#2C2C2C] leading-[100%] mb-4'>Starting at ₹ 120,000 + GST</h5>
                            <p className='leading-[23px] text-[#2C2C2C]'>EMI starting from: ₹ 5,900/month</p>
                        </div>
                        <button className='bluebtn rounded-[5px]'>Apply Now</button>
                    </div>
                </div>
            </div>
            <div className='cohort font-roboto mx-[268px] mt-[83px]'>
                <h3 className='font-semibold text-4xl leading-[43px] text-center mb-[25px]'>Next Cohort Details</h3>
               <div className='border-[1px] border-[#D9D9D9] rounded-[8px] coupon relative bg-[rgba(248,246,255, 0.16)]'>
               <div className='flex justify-between items-center pt-[19px] pb-[31px] px-10 couponhead'>
                    <div className='flex gap-[9.08px]'>
                        <img src={nineteen} alt="" />
                        <p className='font-medium tracking-[3.63px] leading-[100%] text-[12.72px]'>MAR</p>
                    </div>
                    <p className='font-medium text-2xl leading-[23px] text-[#272727]'>Weekend Batch [Sat - Sun]</p>
                    <button className='bluebtn rounded-[2px]'>Enroll Now</button>
                </div>
                <div className='ps-10 pr-[46px] pb-[31px] pt-8 flex items-center justify-between'>
                    <div>
                        <p className='font-medium text-[15px] leading-[22px] text-[#272727]'>Batch</p>
                        <p className='text-lg leading-[24px] text-[#777D8C]'>Morning</p>
                    </div>
                    <div>
                        <p className='font-medium text-[15px] leading-[22px] text-[#272727]'>Time</p>
                        <p className='text-lg leading-[24px] text-[#777D8C]'>09:00 am-12:00 pm</p>
                    </div>
                    <div>
                        <p className='font-medium text-[15px] leading-[22px] text-[#272727]'>Seat</p>
                        <p className='text-lg leading-[24px] text-[#777D8C]'>Available</p>
                    </div>
                    <div>
                        <p className='font-medium text-[15px] leading-[22px] text-[#272727]'>Venue</p>
                        <p className='text-lg leading-[24px] text-[#777D8C]'>Virtual  Hall</p>
                    </div>
                </div>
               </div>

            </div>
        </div>
    );
};

export default Projects;