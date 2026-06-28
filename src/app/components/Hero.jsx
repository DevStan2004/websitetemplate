'use client'
import React, { useEffect, useRef, useState } from 'react'
import priest from '@/images/priest.jpeg'
import banner from '@/images/banner1.jpeg'
import Wrapper from './Wrapper'
import Button from './Button'
import PlayAnimation from './PlayAnimation'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { cn } from '../lib/utils'
gsap.registerPlugin(SplitText);

const IMAGES = [
    {
        image: banner,
    },
    {
        image: priest,
    },
]

const Hero = () => {
    const textRef = useRef()
    const carouselRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            if(activeIndex < IMAGES.length - 1) {
                setActiveIndex(activeIndex + 1)
            } else {
                setActiveIndex(activeIndex - 1)
            }
        }, 3000)
        return () => {
            clearInterval(interval)
        }
    }, [activeIndex])
  return (
    <div className='h-screen relative' style={{
        clipPath: 'polygon(100% 85.21%, 100% 0%, 0% 0%, 0% 85.21%, 50% 100%)'
    }}>
        {IMAGES.map(({image}, index) => (
            <div key={index} ref={(el) => {carouselRef.current[index] = el}} className={cn("w-full h-full absolute left-0 top-0", `${activeIndex === index ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 transition-opacity duration-500 delay-100'}`)} style={{    
                backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(${image.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }} />
        ))}
        <Wrapper className={'py-30 relative text-center'}>
            <div className="flex flex-col space-y-5 items-center">
                <h1 ref={textRef} className='font-bold text-white md:text-8xl text-4xl md:leading-15 leading-5'>Church of Nigeria</h1>
                <h2 className='font-bold text-white md:text-6xl text-2xl md:leading-15'>(ANGLICAN COMMUNION)</h2>
                <div className='text-white text-3xl split-word'>Dioces of Kalabari</div>
            </div>
        </Wrapper>
        <div className="absolute md:bottom-15 bo md:left-5 flex flex-col bg-white md:rotate-8 md:w-[40%] w-full">
            <h3 className='md:text-5xl text-3xl font-bold p-5 text-center'>WELCOME TO CHURCH</h3>
            <div className="bg-black text-white p-3">
                <p>We the Bishop of Diocese of Akoko (Anglican Communion) welcome you to this Official Website.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero