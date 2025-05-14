import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Faq = () => {
    const faqs= [{question:"How to enroll for a Course?", answer:" Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis odales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."},{question:"Can I get the recordings of my previous lectures?", answer:"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis odales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."},{question:"Who would be the instructor for enrolled course?", answer:"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis odales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."},{question:"What kind of placement support will be given post completion of program?", answer:"Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel erat quis odales. Nam ex enim, eleifend venenatis lectus vitae, accumsan auctor mi."}]
    console.log(faqs)
    return (
        <div className='wrapper'>
            <h6 className='font-poppins font-semibold leading-[26px] text-center tracking-[1.6px] text-[#1B99D4] uppercase'>ASK YOUR QUESTIONS</h6>
            <h3 className='text-[40px] font-poppins font-semibold leading-[56px] text-center text-[#231F40] mt-[5px] max-w-[922px] mx-auto'>Frequently Asked Questions</h3>
            <Accordion className='mt-[65px] mb-[84px] px-[118px] flex flex-col gap-[35px] text-xl'>
                {
                    faqs.map((faq, index)=><AccordionItem key={index} header={<p className='flex items-center gap-[5px] font-medium leading-[28px] text-[212121] ps-4 pt-[18px] pb-[19px]'><FaPlus className='text-[#1B99D4]'/>{faq.question}</p>} className="">
                        <p className='ps-4 pt-4 '>{faq.answer}</p>
                    </AccordionItem>)
                }
            </Accordion>
        </div>
    );
};

export default Faq;