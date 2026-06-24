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
    <div className='h-auto relative' style={{
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
        <Wrapper className={'py-30 grid md:grid-cols-2 grid-cols-1 items-center relative'}>
            <div className="flex flex-col space-y-5">
                <h1 ref={textRef} className='font-bold text-white md:text-5xl text-3xl md:leading-15'>Church of Nigeria</h1>
                <h1 ref={textRef} className='font-bold text-white md:text-5xl text-3xl md:leading-15'>Love Jesus <br /> Love Like Jesus</h1>
                <p className='text-white text-xl split-word'>For the first time ever, Church of Nigeria will offer SIX Christmas Eve services! We're looking forward to these two days of celebrating the Newborn King with you and your guests. Click the link to plan your Christmas!</p>
                <PlayAnimation />
            </div>
            <div className="p-10 rounded-2xl flex flex-col space-y-5 bg-white md:w-[70%] ms-auto w-full md:my-0 my-5">
                <span className="font-bold text-black text-2xl">Schedule Your Appointment</span>
                <p className="font-light">
                    We here to help you 24/7 with experts
                </p>
                <form action="" className='flex flex-col space-y-5 relative'>
                    <input id='name' type='text' placeholder='Name' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                    <input id='email' type='email' placeholder='Email' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                    <input id='phone' type='tel' placeholder='Phone' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                    <input id='age' type='age' placeholder='Age' className="bg-[#f6f7f9] p-4 w-full rounded-lg outline-none border-none" />
                    <Button text={'Submit Now'} className={'w-full rounded-sm font-semibold p-5'} />
                </form>
            </div>
        </Wrapper>
    </div>
  )
}

export default Hero