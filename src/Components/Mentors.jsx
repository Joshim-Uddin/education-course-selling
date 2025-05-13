import React from 'react';
import { FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const Mentors = () => {
    const mentors=[{name:"Sachin Sharma", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101459/sachin_caszqy.jpg", position:"Managing Director"},{name:"Santosh Kumar Mishra", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101406/santosh_szqz9y.jpg", position:"Managing Director"},{name:"Prem Kumar", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101387/prem_uip2kk.jpg", position:"Mentorship"}]
    return (
        <div className='pb-[88px] wrapper'>
                            <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4] uppercase'>DISCOVER OUR MENTORS</h6>
                            <h3 className='text-[32px] font-poppins font-semibold leading-[42px] text-center text-[#231F40] mt-[5px] max-w-[922px] mx-auto'>We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation</h3>
                        
                            
                                <div className='flex gap-[53px]'>
                                    {mentors.map((mentor, index)=><div key={index} className='max-w-[316px] bg-white rounded-[10px]'>
                                        <img src={mentor.image} alt={`mentor ${index+1} image`} className='rounded-t-[10px]' />
                                        <div>
                                            <div>
                                                <p>{mentor.name}</p>
                                                <p>{mentor.position}</p>
                                            </div>
                                            <img src="https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/pv9dndyumzwmjo3wbdql.png" alt="microsoft logo" />
                                        </div>
                                        <a href="#">
                                            <FaLinkedin /> View Profile
                                        </a>
                                    </div>)}
                                </div>
                           
                        
                        <button className='whitebtn border-[1px] border-[#1B99D4] !text-[#1B99D4] flex items-center gap-[5px] mx-auto mt-20 cursor-pointer'><FiDownload/>Download Brochure</button>
                            
                </div>
    );
};

export default Mentors;