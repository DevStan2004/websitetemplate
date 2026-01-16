import React from 'react'
import contactPageBackground from '@/images/banner.jpeg'
import Wrapper from './Wrapper'
import Link from 'next/link'

const ContactHero = () => {
  return (
    <div className='h-[25rem] flex justify-center items-center flex-col gap-3' style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8)),url(${contactPageBackground.src})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center'
    }}>
        <h1 className='text-5xl font-bold text-white'>About</h1>
        <div className="flex items-center gap-3 text-white font-light text-sm">
            <Link href="/">Home</Link>
            <span>/</span>
            <p>Contact</p>
        </div>
    </div>
  )
}

export default ContactHero