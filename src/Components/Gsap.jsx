import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

const Gsap = () => {
    const container = useRef();
    gsap.registerPlugin(useGSAP);
    useGSAP(() => {
    gsap.from(".box", {opacity: 0, stagger: 0.5});
}, { scope: container })
    
    return (
        <div ref={container}>
      <div className="box">1</div>
      <div className="box">2</div>
      <div className="box">3</div>
  </div>
    );
};

export default Gsap;