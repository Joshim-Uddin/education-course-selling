import React from 'react';
import { PiHourglassMediumBold } from "react-icons/pi";

const cardsInfo = [{title:"Real Work Experience", text:"Work with companies directly on software development projects to master your skills and build a strong project portfolio to get your."}, {title:"Guaranteed job referral", text:"Our program seeks to eliminate financial risk in the upskilling journey with our guaranteed Job referrals option"}, {title:"Crack FAANG Interview", text:"Interact and Learn from mentors working in top product based companies to crack interviews for your dream role."} ]
const RelatedCourses = () => {
    return (
        <div className='pt-5 pb-5 md:pt-[70px] md:pb-[88px] wrapper mx-3 md:mx-5 lg:mx-[63px]'>
            <h6 className='uppercase font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4]'>RELATED COURSES</h6>
            <h3 className='text-4xl font-roboto font-semibold leading-12 md:leading-16 lg:leading-[100px] text-center'>Why Join this Program ?</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[35px] mt-12'>
                {cardsInfo.map((card, index)=><div className='px-[30px] pt-[35px] pb-[38px] bg-white font-roboto card' key={index}>
                <div className='bg-[#1B99D4] h-[70px] w-[70px] rounded-[36px] relative'>
                    <PiHourglassMediumBold className='absolute top-[16.44px] left-[14.67px] h-10 w-10 text-white'/>
                </div>
                <h6 className='font-semibold text-[21px] leading-[100%] text-center'>{card.title}</h6>
                <p className='leading-[23.76px] text-center'>{card.text}</p>
            </div>)}
            </div>
        </div>
    );
};

export default RelatedCourses;