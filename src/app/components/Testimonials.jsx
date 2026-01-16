import React from 'react'
import Wrapper from './Wrapper'
import Card from './Card'
import quoteIcon from '@/images/quoteIcon.png'
import jorina from '@/images/picture24.jpeg'
import richard from '@/images/picture25.jpeg'
import mike from '@/images/picture26.jpeg'
import monty from '@/images/picture27.jpeg'
import rashid from '@/images/picture28.jpeg'
import AnimatedSlide from './AnimatedSlide'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const cardDetails = [
        {
            name: 'Most Rev. Dr. Henry Ndukuba',
            title: 'Primate, Church of Nigeria',
            desc: 'The Church of Nigeria stands as a beacon of hope and transformation across our nation. Through faithful preaching of the Word and Holy Spirit empowerment, we are witnessing a great revival that will impact generations to come.',
            quote: quoteIcon,
            image: rashid
        },
        {
            name: 'RT. Rev. Dr. Ezekiel Azubuike',
            title: 'Bishop, Abuja Diocese',
            desc: 'God is doing marvelous things through the ministries of Church of Nigeria. Our youth programs, church planting initiatives, and community outreach are bearing abundant fruit for His kingdom.',
            quote: quoteIcon,
            image: monty
        },
        {
            name: 'Rev. Canon Chidi Okoroafor',
            title: 'Rector, Cathedral Church',
            desc: 'The Anglican tradition combined with Pentecostal fire has created a powerful movement. Families are being strengthened, souls are being saved, and Nigeria is being transformed by the Gospel.',
            quote: quoteIcon,
            image: mike
        },
        {
            name: 'John Richard',
            title: 'CEO, Brick Solution',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: richard
        },
        {
            name: 'Jorina Bibi',
            title: 'CEO, Brick Consulting',
            desc: 'Capitalize on low handing fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            quote: quoteIcon,
            image: jorina
        },
    ]
  return (
    <Wrapper className={'py-30 mt-50 pb-50 bg-[#f6f7f9]'}>
        <div className="flex flex-col space-y-3 items-center">
            <p className="text-purple-900 font-light">Testimonies of Fath</p>
            <h3 className='text-4xl text-center font-bold'>Voices from our own Church Family</h3>
            <AnimatedSlide />
        </div>
        <div className="flex gap-10 my-5">
            {cardDetails.map((card, index) => (
                <TestimonialCard key={index} src={card.image} desc={card.desc} name={card.title} title={card.title} quote={card.quote} />
            ))}
        </div>
    </Wrapper>
  )
}

export default Testimonials