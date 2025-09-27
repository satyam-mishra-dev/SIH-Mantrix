import video from '../../assets/video/mantrix.mp4'
import Row from '../Row'
import {useEffect, useState, useRef} from 'react';
import {motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { gsap } from "gsap";
import styles from './Style.module.css';
import { Power2, Power4 } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
// import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", {scale: 5})

function Home({ handleLoginClick }) {

    const container = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        var clutter = "";
        const para = document.querySelector(".toptext")
        const characters = para.textContent.split("")
        characters.forEach(function(e) {
            
            clutter += `<span style="color: white !important;">${e}</span>`
        })
        para.innerHTML = clutter;   
        gsap.set(".toptext span", {opacity: 1, color: 'white'})
        gsap.to(".toptext span", {
            scrollTrigger: {
                trigger: ".home",
                start: "top 50%",
                end: "bottom 90%",
                scrub: 1,
            },
            opacity: 1, 
            color: 'white',
            stagger: .03,
            
        })

    },[]);

    // Try to autoplay muted on mount
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {
                // Autoplay may be blocked; fallback handled below
            });
        }
    }, []);

    // Handle autoplay failure and retry on user interaction
    useEffect(() => {
        const handleAutoplayFailure = () => {
            const handleUserInteraction = () => {
                if (videoRef.current && videoRef.current.paused) {
                    videoRef.current.play().then(() => {
                        // Video started playing after user interaction
                        videoRef.current.muted = false;
                        videoRef.current.volume = 0.7;
                    }).catch(error => {
                        console.log('Video play failed:', error);
                    });
                }
                // Remove listeners after first interaction
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('touchstart', handleUserInteraction);
            };

            // Check if video is not playing after a delay
            const checkTimer = setTimeout(() => {
                if (videoRef.current && videoRef.current.paused) {
                    console.log('Autoplay failed, waiting for user interaction');
                    document.addEventListener('click', handleUserInteraction, { once: true });
                    document.addEventListener('touchstart', handleUserInteraction, { once: true });
                }
            }, 500);

            return () => {
                clearTimeout(checkTimer);
                document.removeEventListener('click', handleUserInteraction);
                document.removeEventListener('touchstart', handleUserInteraction);
            };
        };

        return handleAutoplayFailure();
    }, []);

    // Track first user interaction to allow unmuting and volume control
    const [hasInteracted, setHasInteracted] = useState(false);
    useEffect(() => {
        const onFirstInteract = () => {
            setHasInteracted(true);
            if (videoRef.current) {
                videoRef.current.muted = false;
                videoRef.current.volume = 0.7;
                if (videoRef.current.paused) {
                    videoRef.current.play().catch(() => {});
                }
            }
            window.removeEventListener('click', onFirstInteract);
            window.removeEventListener('touchstart', onFirstInteract);
            window.removeEventListener('keydown', onFirstInteract);
            window.removeEventListener('wheel', onFirstInteract);
        };
        window.addEventListener('click', onFirstInteract, { once: true });
        window.addEventListener('touchstart', onFirstInteract, { once: true });
        window.addEventListener('keydown', onFirstInteract, { once: true });
        window.addEventListener('wheel', onFirstInteract, { once: true });
        return () => {
            window.removeEventListener('click', onFirstInteract);
            window.removeEventListener('touchstart', onFirstInteract);
            window.removeEventListener('keydown', onFirstInteract);
            window.removeEventListener('wheel', onFirstInteract);
        };
    }, []);

    
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom bottom",
            scrub: .5,
            onUpdate: (self) => {
                // Control video playback based on GSAP progress
                if (videoRef.current) {
                    const progress = self.progress;
                    const circleSize = 100 - (progress * 100); // 100% to 0%
                    
                    // When circle is large enough (video visible), ensure it's playing
                    if (circleSize > 20 && videoRef.current.paused) {
                        videoRef.current.play().catch(() => {});
                    }
                    // When circle is very small (video hidden), pause it
                    else if (circleSize <= 5 && !videoRef.current.paused) {
                        videoRef.current.pause();
                    }
                }
            }
            }
         });
         tl.to(".vdodiv", {
            clipPath: 'circle(0% at 50% 50%)',
            ease: Power4,
          }, "start")
          tl.to(".slidesm", {
            scale: 1,
            ease: Power2,
         }, 'start');
         tl.to(".lft", {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');
         tl.to(".rgt", {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
            duration: 1,
         }, 'start');           
    }, container )

    const {scrollY} = useScroll();
    const [hidden, setHidden] = useState(false);
    const routeMap = {
        "Login": "/login",
        "About": "/about",
        "Know More": "/Know-More",
        "Team": "/team",
    };
  
    useMotionValueEvent(scrollY, "change", (latest) => {

        const previous = scrollY.getPrevious() ?? 0;
        console.log(previous, latest);

        if(latest > previous) {
        setHidden(true);
        }
        else {
        setHidden(false);
        }

        // Control video audio based on scroll position
        if (videoRef.current && hasInteracted) {
            const scrollProgress = latest / (window.innerHeight * 2); // Assuming 200vh height
            
            // Calculate volume based on scroll progress - fade out as video closes
            // The video starts closing around 50% scroll, so we fade audio accordingly
            let audioVolume = 1;
            if (scrollProgress > 0.5) {
                // Start fading when video begins to close
                audioVolume = Math.max(0, 1 - (scrollProgress - 0.5) * 2);
            }
            videoRef.current.volume = Math.max(0, Math.min(1, audioVolume));
            // Mute when video is mostly closed (circle clip path is small)
            videoRef.current.muted = scrollProgress > 0.7;
        }
    });
   
    
    return (
    <div ref={container} data-color="black" className="home section w-full h-[200vh] relative  ">
        <div className='w-full sticky top-0 left-0 '>
            {/* navbar */}
            <motion.div 
                variants={{
                visible: {y: 0},
                hidden: {y: "-100%"},
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{duration: 0.35, ease: "easeInOut"}}
                className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9]"
            >
                <div className="w-full flex sm:flex items-center justify-between  ">
                    <div className="ml-10 logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[10vh] cursor-pointer z-[9] flex items-center justify-center">
                        <h1 className="text-white font-['Allura'] text-[8vh] sm:text-[10vh] leading-none">
                            mantrix
                        </h1>
                    </div>                   
                    <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer ">
                        {["Login", "About", "Know More", "Team"].map((item, index) => (
                            <h4
                                key={index}
                                onClick={() => {
                                    if (item === "Login") {
                                      handleLoginClick();
                                    } else {
                                      const path = routeMap[item];
                                      if (path) {
                                        window.location.href = path;
                                      }
                                    }
                                  }}
                                className={`${styles.links} h-[3vh] relative py[2.4vh] px-[2.2vh] text-center text-white flex flex-col
                            font-[Sansita] text-[2.1vh] overflow-hidden font-medium leading-[2.5vh]`}
                            > 
                                <a className={`atag ${styles.atag} relative`}>{item} </a>
                                <a className={`atag ${styles.atag} relative`}>{item} </a>                      
                            </h4>   
                        ))}
                    </div>
                    
                        <BiMenu
                            style={{
                            
                            fontSize: "5.5vw",
                            }}
                            className=' inline-block sm:hidden z-[9] cursor-pointer'
                        />  
                 
                    
                </div>
            </motion.div>

            <div className='btmtext absolute z-[4] bottom-[4%] left-[25%] text-center sm:text-start sm:bottom-[7%] sm:left-8 w-48 '>
            <h1 className='sm:text-[2vh] font-semibold text-white'>
    One platform.  
    Smarter choices.  
    Brighter futures.  
    Welcome to Mantrix.  
 </h1>
 
            </div>
            {/* video div */}
            <div 
                
                className={` vdodiv w-full h-screen absolute z-[3] 
                top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
            >
                <video
                    ref={videoRef}
                    className="absolute w-full h-screen object-cover top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-1/2"
                    autoPlay
                    loop
                    muted
                    playsInline
                    webkit-playsinline="true"
                    preload="auto"
                    // Do not auto-unmute in event handlers; handled by interaction gate
                    src={video}
                >     
                </video> 
            </div>

            {/* marquee div */}
            <div 
                className="marqueecontainer w-full h-screen 
                relative overflow-hidden "
            >
                {/* /* top Heading div */ }
                <div 
                    className=' heading absolute  top-[12%] sm:top-[7%] left-1/2 
                    -translate-x-1/2 w-72'
                >
                    <h2 className='toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center' style={{color: 'white'}}>Crafting a new paradigm of career guidance,  
                    one that is...</h2>
                </div>

                <div 
                    
                    className='slidesm absolute scale-[5]  top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[90%]'
                >
                    <div className='row'>
                        <Row 
                            translateClass="-translate-x-1/2"  
                            direction="lft"
                        />
                        <Row 
                            translateClass="-translate-x-2/3"  
                            direction="rgt"
                        />
                        <Row 
                            translateClass="-translate-x-1/4"  
                            direction="lft" 
                        />
                        <Row 
                            translateClass="-translate-x-1/3"  
                            direction="rgt"
                        />
                    </div>            
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home
