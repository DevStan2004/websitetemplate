import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import aboutIncreaseImage from '@/images/picture29.jpeg'
import aboutImageEffect from '@/images/aboutImageEffect.png'
import aboutImageEffect1 from '@/images/aboutImageEffect1.png'
import Button from './Button'

const AboutUs = () => {
  return (
    <Wrapper className={'grid md:grid-cols-2 grid-cols-1 md:gap-20 my-20 gap-10'}>
        <div className="flex justify-center items-center relative">
            <Image src={aboutIncreaseImage} width={1000} height={1000} alt='about increase image' className='w-[37rem] h-[37rem] object-cover  rounded-full relative z-1' />
            <Image src={aboutImageEffect} width={1000} height={1000} alt='about effect image' className='md:w-[70%] w-[35%] absolute md:left-0 md:top-0' />
            <Image src={aboutImageEffect1} width={1000} height={1000} alt='about effect image' className='w-20 absolute md:right-0 md:bottom-0 -bottom-5 right-30' />
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

export default AboutUs