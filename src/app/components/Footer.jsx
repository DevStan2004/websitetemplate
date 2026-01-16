import React from 'react'
import Wrapper from './Wrapper'
import Image from 'next/image'
import logo from '@/images/churchlogo.png'
import footerBackground from '@/images/footerBackground.png'
import { Clock, Facebook, Instagram, LocationEdit, LocationEditIcon, Mail, MapPinIcon, Phone, Send, Twitter } from 'lucide-react'
import Link from 'next/link'
import Button from './Button'

const Footer = () => {
  return (
    <Wrapper className={'md:py-20 flex flex-col md:gap-20 relative'}>
        <div className="flex md:flex-row flex-col justify-between gap-5 md:items-center items-start relative">
            <p className='text-[#5a6265]'>© 2025 All Rights Reserved</p>
            <div className="flex gap-3 items-center">
                <div className="w-12 h-12 flex justify-center hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group items-center rounded-full bg-white">
                    <Facebook strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                </div>
                <div className="w-12 h-12 flex justify-center hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group items-center rounded-full bg-white">
                    <Twitter strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                </div>
                <div className="w-12 hover:bg-purple-900 transition-all duration-500 ease-in-out cursor-pointer group h-12 flex justify-center items-center rounded-full bg-white">
                    <Instagram strokeWidth={1} size={20} className='group-hover:text-white text-[#5a6265]' />
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5 items-center">
                <div className="flex gap-3 items-center">
                    <Link href="/" className='text-[#516265]'>Home</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="/about" className='text-[#516265]'>About</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="/contact" className='text-[#516265]'>Contact</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                {/* <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>Blog</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>Shop</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div>
                <div className="flex gap-3 items-center">
                    <Link href="#" className='text-[#516265]'>FAQS</Link>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[bg-gradient-to-l from-[#2f0e2d] to-[#b576b3]] to-purple-500" />
                </div> */}
            </div>
        </div>
    </Wrapper>
  )
}

export default Footer