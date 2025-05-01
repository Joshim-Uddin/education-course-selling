import React, { useContext } from 'react';
import { PiHourglassMediumBold } from 'react-icons/pi';
import { Context } from '../Provider/Provider';
import { AdvancedImage } from '@cloudinary/react';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

// https://i.ibb.co.com/YFvKG9n7/kanika.png
// https://i.ibb.co.com/8Drz7p3x/man-wearing-t-shirt-gesturing.png
// https://i.ibb.co.com/7t2RPP4X/saumya.png
// https://i.ibb.co.com/Vptnt7yM/yadav.png

const cardsInfo = [{image:"https://res.cloudinary.com/dfxk2ofkn/image/upload/v1746082355/vmkertznoi01pjjoue6o.png", name:"Shaumaya Qha", designation:"Software Engineer", text:"Apart from regular live classes, I was assigned with a Mentor someone from Microsoft and he guided me very well through out the course.", prevstation:"", present:"", profile:""}, {title:"Guaranteed job referral", text:"Our program seeks to eliminate financial risk in the upskilling journey with our guaranteed Job referrals option"}, {title:"Crack FAANG Interview", text:"Interact and Learn from mentors working in top product based companies to crack interviews for your dream role."} ]

const Alumni = () => {
    
    return (
        <div className='pt-[70px] pb-[88px] wrapper mx-[63px]'>
                    <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4]'>Our Alumni Placed</h6>
                    <h3 className='text-[32px] font-poppins font-semibold leading-[56px] text-center text-[#231F40]'>Explore Our Alumni & Connect With Them</h3>
                    <div className='grid grid-cols-3 gap-[35px] mt-12'>
                        {cardsInfo.map((card, index)=><div className='px-[30px] pt-[35px] pb-[38px] bg-white card' key={index}>
                        <div className='bg-[#1B99D4] h-[70px] w-[70px] rounded-[36px] relative'>
                            <img src={card.image} alt="" />
                        </div>
                        <h6 className='font-semibold text-[21px] leading-[100%] text-center'>{card.title}</h6>
                        <p className='leading-[23.76px] text-center'>{card.text}</p>
                    </div>)}
                    </div>
                    
        </div>
    );
};

export default Alumni;