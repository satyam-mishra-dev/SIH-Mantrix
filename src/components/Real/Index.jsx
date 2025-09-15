
import img1 from '../../assets/images/real4.jpg'
import img2 from '../../assets/images/real2.jpg'
import img3 from '../../assets/images/real3.jpg'
import img4 from '../../assets/images/real1.jpg'
import img5 from '../../assets/images/real5.jpg'
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import img6 from '../../assets/images/real6.jpg'
import img7 from '../../assets/images/real7.jpg'
import img8 from '../../assets/images/real8.jpg'
import img9 from '../../assets/images/real9.jpg'
import { useRef} from 'react';
import { gsap } from "gsap";
import { Power2,} from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Real() {

    const container = useRef(null);
    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            }
         });
         tl.to(".slide", {
            xPercent: -300,
            ease: Power2
         })
         tl.to(".image7", {
            opacity: 0,
         })              
    }, container );


  return (
    <div  
        data-color="salmon" 
        ref={container} 
        className="real section sm:w-full  px-8 sm:px-8 mt-32"
    >
      <div 
        className="cont h-[400vh] relative"
    >
        <div  
            className="slides w-full h-[130vh] overflow-hidden
             sticky top-0 left-0 flex"
        >
            {/* 1st slide */}
            <div 
                className="slide w-full flex sm:flex items-center 
                justify-center h-screen flex-shrink-0 "
            >
                <div 
                    className="text1 font-[SansitaReg] text-[7vh] leading-[8vh]
                    sm:text-[15vh] sm:leading-[18vh] text-center"
                >
                    <h1 className="text-white">
                        Real Guidance,
                    </h1>
                    <h1 className="text-white">
                        Real Futures
                    </h1>
                </div>
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] -translate-y-2/5
                    top-1/2 sm:-translate-y-1/2 translate-x-1/2
                    right-0 "
                >
                    <img 
                        src={img1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>
            {/* 2nd slide */}
            <div   
                className="slide w-full h-screen sm:flex flex items-center 
                justify-center flex-shrink-0 relative "
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] 
                    top-10 -translate-y-1/2 right-1/6"
                >
                    <img 
                        src={img2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 className='text-[2.2vh] sm:text-[2.5vh] font-semibold text-white mb-8'>
                        We're here to make career choices simple, personal, and powerful.
                    </h3>
                    <h1 className='font-semibold text-[10vh] sm:text-[20vh] leading-none text-white mb-8'>
                        20.4K
                    </h1>
                    <h3 className='text-[2vh] sm:text-[5vh] font-semibold text-white'>
                        Students guided with clarity and confidence.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[12vh] sm:w-[20vh] sm:h-[20vh] top-4/5 bottom-[10vh]
                    sm:top-2/3 sm:left-1/4 -translate-x-1/2"
                >
                    <img 
                        src={img4}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] sm:w-[45vh] sm:h-[45vh] 
                    sm:bottom-0 sm:right-1/6 right-0 sm:-translate-x-2/3 sm:translate-y-1/2
                    translate-y-[20vh]"
                >
                    <img 
                        src={img3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[20vh] top-10 -right-2/3 sm:w-[45vh] sm:h-[45vh] sm:top-1/2 
                    sm:-translate-y-1/2 sm:translate-x-1/2 sm:right-0 "
                >
                    <img 
                        src={img5}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>
            
            {/* 3rd slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                flex-shrink-0  relative"
            >
                <div 
                    className="image absolute w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh]  
                    sm:top-20 sm:-translate-x-1/5 bottom-[20vh] right-[20vh]
                    sm:-translate-y-1/2 sm:right-1/6"
                >
                    <img 
                        src={icon2}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>
                    <h3 className='text-[2vh] sm:text-[2.5vh] font-semibold text-white mb-8'>
                        Diverse voices. Shared vision. Stronger outcomes.
                    </h3>
                    <h1 className='font-semibold text-[10vh] sm:text-[20vh] leading-none text-white mb-8'>
                        49%
                    </h1>
                    <h3 className='text-[3.5vh] sm:text-[6vh] font-semibold text-white'>
                        Women mentors and leaders in our network.
                    </h3>    
                </div>
                <div 
                    className="image absolute w-[30vh] sm:w-[60vh] sm:h-[60vh] bottom-10 right-2/4 
                    translate-y-1/3 -translate-x-1/5"
                >
                    <img 
                        src={icon1}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] sm:w-[50vh] sm:h-[50vh] top-1/2 -translate-y-1/4 translate-x-1/3
                    right-0 "
                >
                    <img 
                        src={icon3}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>

            {/* 4th slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div 
                    className="hidden sm:inline-block image absolute w-[20vh] h-[20vh] sm:w-[40vh] sm:h-[40vh] top-10 translate-x-1/2
                    -translate-y-1/2 right-2/3"
                >
                    <img 
                        src={img6}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h1 className='font-semibold text-[10vh] sm:text-[20vh] leading-none text-white mb-8'>
                        13
                    </h1>
                    <h3 className='text-[3.1vh] sm:text-[6vh] font-semibold text-white'>
                        Languages supported so every student feels at home.
                    </h3>    
                </div>
                <div 
                    className="image7 absolute sm:w-[45vh] sm:h-[45vh] bottom-0 right-2/4 
                    translate-y-1/2 -translate-x-1/2"
                >
                    <img 
                        src={img7}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute top-0 -right-10 w-[20vh] h-[20vh] sm:w-[45vh] sm:h-[45vh] sm:top-0 sm:translate-y-1/5
                    sm:translate-x-2/3  sm:right-0 "
                >
                    <img 
                        src={img9}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <div 
                    className="image absolute w-[15vh] h-[15vh] top-2/3 translate-y-1/5
                    -translate-x-1/3  right-1/4 "
                >
                    <img 
                        src={img8}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
            </div>

            {/* 5th slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h3 className='text-[2vh] sm:text-[2.5vh] font-semibold text-white mb-8'>
                        Powered by data. Driven by people.
                    </h3>
                    <h1 className='font-semibold text-[10vh] sm:text-[20vh] leading-none text-white mb-8'>
                        AI + Mentors
                    </h1>
                    <h3 className='text-[2vh] sm:text-[5vh] font-semibold text-white'>
                        Career paths shaped by intelligence and empathy.
                    </h3>    
                </div>
            </div>

            {/* 6th slide */}
            <div 
                className="slide w-full h-screen flex sm:flex items-center justify-center 
                relative flex-shrink-0 "
            >
                <div className='w-[60%] text-center font-[SansitaReg] relative'>                   
                    <h3 className='text-[2vh] sm:text-[2.5vh] font-semibold text-white mb-8'>
                        Future-ready guidance for every learner.
                    </h3>
                    <h1 className='font-semibold text-[10vh] sm:text-[20vh] leading-none text-white mb-8'>
                        Next Steps
                    </h1>
                    <h3 className='text-[2vh] sm:text-[5vh] font-semibold text-white'>
                        Stream selection, career prediction, and beyond.
                    </h3>    
                </div>
            </div>   
        </div>
      </div>
    </div>
  )
}

export default Real;
