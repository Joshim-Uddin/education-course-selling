import React from 'react';
import { FiDownload } from 'react-icons/fi';


const cardsInfo = [
    {title:"Foundation Of Programming"},{title:"Data Structures and Algorithms"},{title:"System Design in Depth"},{title:"Advance Data Structures & Algorithms"},{title:"Electives & Specialization"},{title:"Work on End to End Projects in Partnership With Startups"}
  ]

const Carriculum = () => {
    
    return (
        <div className='pb-12 md:pb-[88px] wrapper'>
                    <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4]'>A Roadmap For Sucess</h6>
                    <h3 className='text-2xl md:text-[32px] font-poppins font-semibold leading-8 md:leading-[56px] text-center text-[#231F40] mt-[5px]'>Our Comprehensive curriculum, Designed for professionals</h3>
                <div className='flex flex-col md:flex-row gap-[75px] mt-12'>
                    <div className='max-w-[856px] pt-[15px]'>
                        <h6 className='font-roboto font-bold text-2xl leading-9'>Course Description</h6>
                        <p className='font-roboto text-lg leading-[135%] mt-[26px] mb-[31px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
accumsan lacus vel facilisis.</p>
                        <div className='flex flex-col gap-[30px]'>
                            {cardsInfo.map((card, index)=><select name="carriculum" id="carriculum" key={index} className='outline-1 rounded-[5px] py-[17px] px-5 outline-[#D9D9D9] text-[#595665] font-inter font-medium text-[21px] leading-6'>
                                <option value={`Unit ${index} - ${card.title}`} >{`Unit ${index} - ${card.title}`}</option>
                            </select>)}
                        </div>
                    </div>
                    <div className='font-inter bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.7)] px-2 md:px-5 pb-[54px] pt-[63px] rounded-[8px] min-w-[300px] md:min-w-[360px] border-b-[4px] border-[#1B99D4]'>
                        <h6 className='text-lg text-center text-[#6F6B80] mb-[63px]'>Make Your Design Professional</h6>
                        <div className='flex flex-col counseling'>
                            <input type="text" placeholder='Enter Full Name'/><input type="email" placeholder='Enter email address' />
                            <input type="tel" name="phone" id="phone" placeholder='Enter phone number' />
                            <select name="select" id="select" className='text-[#727695]'>
                                <option value="" selected hidden>Select Course</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                            <input type="datetime" name="datetime" id="datetime" placeholder='Schedule Date & Time' />
                            <p className='font-roboto text-[12px] leading-[18px] text-[#727695] mt-[11px] mb-6'>By submitting the form, you agree to our Terms and Conditions and our Privacy Policy.</p>
                            <button className="bluebtn rounded-[5px]">Apply for Counselling</button>
                        </div>
                    </div>
                </div>
                <button className='whitebtn border-[1px] border-[#1B99D4] !text-[#1B99D4] flex items-center gap-[5px] mx-auto mt-20 cursor-pointer'><FiDownload/>Download Brochure</button>
                    
        </div>
    );
};

export default Carriculum;