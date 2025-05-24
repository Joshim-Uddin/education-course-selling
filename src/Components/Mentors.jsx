import React from 'react';
import { FaLinkedin, FaQuoteLeft, FaRegStar, FaStar, FaStarHalf } from 'react-icons/fa';

const Mentors = () => {
    const mentors=[{name:"Sachin Sharma", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101459/sachin_caszqy.jpg", position:"Managing Director"},{name:"Santosh Kumar Mishra", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101406/santosh_szqz9y.jpg", position:"Managing Director"},{name:"Prem Kumar", image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1747101387/prem_uip2kk.jpg", position:"Mentorship"}]
    return (
        <div className='pb-[84px] wrapper'>
                            <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4] uppercase'>DISCOVER OUR MENTORS</h6>
                            <h3 className='text-2xl md:text-[32px] font-poppins font-semibold leading-8 md:leading-[42px] text-center text-[#231F40] mt-[5px] max-w-[922px] mx-auto'>We have Industry Experts as Mentor who guide you with Career Planning & Interview Preparation</h3>
                        
                            
                                <div className='flex flex-col md:flex-row items-center justify-center lg:gap-[53px] 2xl:gap-[80px] gap-4 mt-[57px]'>
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
                           
                        
                        <button className='bluebtn rounded-[4px] flex items-center gap-[5px] mx-auto mt-10 md:mt-[107px] mb-10  md:mb-[119px] cursor-pointer text-lg leading-6 font-poppins font-semibold'>More Mentor Details</button>
                        <div className='flex flex-col sm:flex-row gap-[67px]'>
                            <div className='max-w-[561px]'>
                                <h3 className='font-inter font-bold text-3xl sm:text-5xl leading-8 sm:leading-16 tracking-[0.5px] text-[rgba(0,0,0,0.87)] mb-5 max-w-[550px] pr-[20px]'>Thousands of stories of growth</h3>
                                <p className='font-poppins leading-8 text-[rgba(196,194,194,0.6)] max-w-[481.65px]'>Find out how our Learners transformed their careers after learning with us.</p>
                            </div>
                            <div className='max-w-[630px] px-[23px] py-[30px] shadow-[5px_3px_10px_5px_#767676] rounded-[10px] relative'>
                                <FaQuoteLeft className='text-[#1B99D4] text-[43px]'/>
                                <p className='font-inter font-medium text-justify md:text-left leading-[26px] text-[#767676] my-[23px]'>“As a senior engineer I have specially reviewed the System Design content and live classes of My_Tutor and I found it more on the implementation side instead of theoretical concepts which helps to work in real-time environment in the organization. I would recommend My_Tutor course to get expertise in System Design.”</p>
                                <div className=''>
                                    <div className='flex items-center gap-[13px]'>
                                        <img src={mentors[2].image} alt={`${mentors[2].name}'s image`} className='h-16 w-16 rounded-full'/>
                                        <div>
                                            <p className='mb-[15px] font-poppins font-semibold text-xl leading-5 text-[#1B99D4]'>{mentors[2].name}</p>
                                            <div className='text-[#FFBA49] flex'>
                                                <FaStar />
                                                 <FaStar />
                                                  <FaStar />
                                                   <FaStar /><FaRegStar />
                                            </div>
                                           
                                        </div>
                                    </div>
                                     <a href="#" className='flex items-center gap-[7.52px] font-poppins text-[13px] text-[#006DD9] absolute bottom-[33px] right-[23px]'>
                                            <FaLinkedin className='text-[18.05px]'/> <span>View Profile</span>
                                        </a>
                                </div>

                            </div>
                        </div>
                            
                </div>
    );
};

export default Mentors;