import React, { useContext } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { FaArrowRight, FaLinkedin } from 'react-icons/fa';
import { IoIosTrendingUp } from 'react-icons/io';


const cardsInfo = [
    {image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082355/vmkertznoi01pjjoue6o.png", name:"Shaumaya Qha", designation:"Software Engineer", text:"Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well through out the course.", prevstation:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082350/fminh1ilp204lzbetxm5.png", present:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/vzv3lamutnxd06winrmi.png", rate:"120"}, 
    {image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/nivmgxgay5w9xahww4oh.png", name:"Subhangi Duhan", designation:"Software Researcher", text:"My focus and expectations was more into System Design and I have learned a lot of it, Specially High Level design and that helped me to crack Microsoft.", prevstation:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082350/fminh1ilp204lzbetxm5.png", present:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/pv9dndyumzwmjo3wbdql.png",rate:"90"},
    {image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082352/repj3qbdqr2dkcufnvsh.png", name:"Paras Yadav", designation:"Software Tester", text:"Consistency is the key, that I have learned from my Mentor at My_Tutor. He usually motivates me to be consistent is class and solving problems.", prevstation:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082350/ru5o8mfvo31vyi45fbcd.png", present:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082351/a7zlfv2jnxzdqq4yvayb.png",rate:"80"},
  ]

const Alumni = () => {
    
    return (
        <div className='pt-5 pb-8 md:pt-[70px] md:pb-[88px] wrapper mx-4 md:mx-[40px] xl:mx-[63px]'>
                    <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4]'>Our Alumni Placed</h6>
                    <h3 className='text-2xl md:text-[32px] font-poppins font-semibold leading-10 md:leading-[56px] text-center text-[#231F40] mt-[5px]'>Explore Our Alumni & Connect With Them</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-[23px] xl:gap-[50px] mt-12'>
                        {cardsInfo.map((card, index)=><div className='p-5 bg-white font-poppins alumni-card h-[377.08px] relative' key={index}>
                        <div className='flex items-start justify-between'>
                            <div>
                            <img src={card.image} alt="profile photo" className='h-[72px] w-[72px] rounded-[36px]' />
                            <p className='font-semibold text-lg md:text-[20px] leading-5 md:leading-8 tracking-[0.1px] min-w-[155px] sm:min-w-full'>{card.name}</p>
                            <p className='text-[15px] md:text-base min-w-[160px] sm:min-w-full'>{card.designation}</p>
                            </div>
                            <div className='flex items-center gap-[7.28px] text-[14px] font-semibold text-[#43A55D] border-[0.73px] py-[2.18px] px-2 md:px-[10.92px] rounded-[2px]'>
                                <IoIosTrendingUp />
                                <p className='max-w-10 sm:max-w-full'>{card.rate}% Hike</p>
                            </div>
                        </div>
                        <p className='text-sm md:text-base leading-6 mt-1'>{card.text}</p>
                        <div className="absolute bottom-[17px]">
                        <div className='flex items-center gap-[5px]'>
                            <img src={card.prevstation} alt="" className='max-h-5 max-w-[100px] md:max-h-[26px]' />
                            <GoArrowRight />
                            <img src={card.present} alt="" className='max-h-5 max-w-[100px] md:max-h-[26px]'/>
                        </div>
                        <div className='flex items-center gap-[10px] mt-[15.39px]'>
                            <FaLinkedin className='text-[#0A66C2]' />
                            <a href='#' className='leading-[28.7px] tracking-[0.5px] text-[#006DD9]'>Read full review</a>
                        </div>
                        </div>
                        

                    </div>)}
                </div>
                <button className='bluebtn font-poppins font-semibold text-[18px] leading-6 flex items-center gap-[10px] rounded-[4px] mt-[86.5px] mx-auto cursor-pointer'>Connect Now <FaArrowRight /></button>
                    
        </div>
    );
};

export default Alumni;