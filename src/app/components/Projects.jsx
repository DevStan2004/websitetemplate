import React from 'react'
import Image from 'next/image'
import churchProjectsBg from '@/images/banner2.jpeg' // Replace with church auditorium/projects image
import Wrapper from './Wrapper'
import Carousel from './Carousel'

const Projects = () => {
  return (
    <Wrapper className='relative h-[30rem] py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900'>
      <Image 
        src={churchProjectsBg} 
        width={1000} 
        height={1000} 
        alt='Church of Nigeria Projects' 
        className='w-full h-full absolute top-0 left-0 object-cover opacity-20'
      />
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <p className="font-light text-lg uppercase tracking-wider mb-4">MINISTRY PROJECTS</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
          Our Recent Ministry Initiatives
          <br />
          <span className="text-purple-300 block mt-2">Transforming Nigeria for Christ</span>
        </h2>
      </div>
      
      <Carousel />
    </Wrapper>
  )
}

export default Projects
