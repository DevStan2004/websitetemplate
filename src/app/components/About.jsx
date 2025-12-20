'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import picture9 from '@/images/picture9.jpeg'
import picture10 from '@/images/picture10.jpeg'
import picture11 from '@/images/picture11.jpeg'
import Button from './Button'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const counterRef = useRef();
    const isInView = useInView(counterRef, { once: false, amount: 0.5 })

    useGSAP(() => {
        gsap.to('.animate-image', {
            translateY: 0,
            translateX: 0,
            opacity: 1,
            duration: 5, 
            ease: 'power4.out',
            stagger: 0.5,
            scrollTrigger: {
                trigger: '.animate-container',
                start: 'top center',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            }
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }
    })
  return (
    <Wrapper className={'grid md:grid-cols-2 grid-cols-1 my-40'}>
        <div className="relative animate-container flex justify-center items-center">
            <motion.div className="md:w-[80%] w-[70%] relative z-1" 
                initial={{
                    clipPath: 'polygon(0% 0%, 10% 0%, 10% 100%, 20% 100%, 20% 0%, 30% 0%, 30% 100%, 40% 100%, 40% 0%, 50% 0%, 50% 100%, 60% 100%, 60% 0%, 70% 0%, 70% 100%, 80% 100%, 80% 0%, 90% 0%, 90% 100%, 100% 100%, 100% 0%, 100% 10%, 0% 10%, 0% 20%, 100% 20%, 100% 30%, 0% 30%, 0% 40%, 100% 40%, 100% 50%, 0% 50%, 0% 60%, 100% 60%, 100% 70%, 0% 70%, 0% 80%, 100% 80%, 100% 90%, 0% 90%, 0% 100%)',
                }}
                whileInView={{
                    clipPath: 'polygon(0% 0%, 10% 0%, 10% 70%, 20% 70%, 20% 0%, 30% 0%, 30% 80%, 40% 80%, 40% 0%, 50% 0%, 50% 80%, 60% 80%, 60% 0%, 70% 0%, 70% 80%, 80% 80%, 80% 0%, 90% 0%, 90% 80%, 100% 80%, 100% 0%, 100% 20.25%, 0% 20.75%, 0% 20%, 100% 20%, 100% 40%, 0% 40%, 0% 40%, 100% 40%, 100% 60%, 0% 60.25%, 0% 60%, 100% 60%, 100% 80%, 0% 80.75%, 0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 100%)',
                    transition: {
                        duration: 1, 
                        ease: 'easeInOut'
                    }
                }}
            >    
            <Image src={picture9} width={1000} height={1000} alt='about image 1' className='w-full rounded-xl' />
            </motion.div>
            <Image src={picture10} width={1000} height={1000} alt='about image 2' className='md:w-[40%] w-[70%] absolute md:-left-20 -left-10 md:-top-1 -top-20 -translate-y-200 rounded-xl translate-x-200 opacity-0 animate-image' />
            <Image src={picture11} width={1000} height={1000} alt='about image 3' className='md:w-[12rem] w-[80%] absolute md:-bottom-10 -bottom-20 md:-left-18 -translate-y-250 translate-x-200 opacity-0 animate-image rounded-xl' />
        </div>
        <div className="flex md:mt-0 flex-col space-y-5 mt-20 items-start">
            <div className="flex space-x-8 items-center">
                <div className="flex gap-3">
                    <div className="w-4 h-1 bg-purple-900"></div>
                    <div className="w-10 h-1 bg-purple-900"></div>
                </div>
                <p className="text-blue-900 font-light text-sm">ABOUT US</p>
            </div>
            <h2 className="font-bold text-black text-4xl leading-12">
                We Are Advancing God's Kingdom Through Faith
            </h2>
            <p className="text-[#454545] text-lg">Welcome to the Church of Nigeria, a vibrant Anglican communion rooted in the rich heritage of the Church of England and passionately committed to the Great Commission. Established in 1979, we are the largest Anglican province in the world, with over 18 million members across 164 dioceses, proclaiming the Gospel of Jesus Christ through worship, evangelism, and service.</p>
            <div className="flex flex-col space-y-5 w-full items-start">
                <Button text={'Learn More'} className={'rounded-4xl px-10 font-semibold py-4 my-5'} />
            </div>
        </div>
    </Wrapper>
  )
}

export default About