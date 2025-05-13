import React from 'react';
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Mentors = () => {
    const mentors=[{name:"Sachin Sharma", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101459/sachin_caszqy.jpg", position:"Managing Director"},{name:"Santosh Kumar Mishra", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101406/santosh_szqz9y.jpg", position:"Managing Director"},{name:"Prem Kumar", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101387/prem_uip2kk.jpg", position:"Mentorship"}]
    return (
        <div className='pb-[119px] wrapper'>
                            <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4] uppercase'>DISCOVER OUR MENTORS</h6>
                            <h3 className='text-[32px] font-poppins font-semibold leading-[42px] text-center text-[#231F40] mt-[5px] max-w-[922px] mx-auto'>We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation</h3>
                        
                            
                                <div className='flex items-center justify-center gap-[53px] mt-[57px]'>
                                    {mentors.map((mentor, index)=><div key={index} className='max-w-[316px] bg-white rounded-[10px] h-[414px] relative shadow-[1px_10px_20px_0px_rgba(0,0,0,0.5)]'>
                                        <img src={mentor.image} alt={`mentor ${index+1} image`} className='rounded-t-[10px] h-[270px] w-[316px]' />
                                        <div className='pt-4 ps-[15px] pr-3 pb-[15px]'>
                                            <div className='flex justify-between items-start'>
                                            <div className='font-roboto'>
                                                <p className='text-xl font-semibold leading-6 '>{mentor.name}</p>
                                                <p className='text-[14px] leading-6 text-[rgba(0,0,0,0.5)]'>{mentor.position}</p>
                                            </div>
                                            <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/pv9dndyumzwmjo3wbdql.png" alt="microsoft logo" className='h-[21px]'/>
                                        </div>
                                        <a href="#" className='flex items-center gap-[7.52px] font-poppins text-[13px] text-[#006DD9] absolute left-[15px] top-[377px]'>
                                            <FaLinkedin className='text-[18.05px]'/> <span>View Profile</span>
                                        </a>
                                        </div>
                                    </div>)}
                                </div>
                           
                        
                        <button className='bluebtn rounded-[4px] flex items-center gap-[5px] mx-auto mt-[107px] cursor-pointer text-lg leading-6 font-poppins font-semibold'>More Mentor Details</button>
                            
                </div>
    );
};

export default Mentors;