'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import churchPlantingImage from '@/images/picture18.jpeg'
import youthMinistryImage from '@/images/picture19.jpeg'
import womenMinistryImage from '@/images/picture20.jpeg'
import missionCrusadeImage from '@/images/picture21.jpeg'
import schoolBuildingImage from '@/images/picture22.jpeg'
import hospitalProjectImage from '@/images/picture23.jpeg'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useMotionValue } from 'framer-motion'

const Carousel = () => {
  const carouselRef = useRef(null)
  const viewportRef = useRef(null)
  const [count, setCount] = useState(0)
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [carouselGap, setCarouselGap] = useState(0)
  
  const carouselData = [
    {
      title: "Church Planting", 
      subtitle: "Anglican Expansion", 
      image: churchPlantingImage
    },
    {
      title: "Youth Ministry", 
      subtitle: "Next Generation", 
      image: youthMinistryImage
    },
    {
      title: "Women Ministry", 
      subtitle: "Family Strengthening", 
      image: womenMinistryImage
    },
    {
      title: "Mission Crusades", 
      subtitle: "Soul Winning", 
      image: missionCrusadeImage
    },
    {
      title: "School Projects", 
      subtitle: "Education Outreach", 
      image: schoolBuildingImage
    },
    {
      title: "Medical Outreach", 
      subtitle: "Healing Ministry", 
      image: hospitalProjectImage
    },
    {
      title: "Church Planting", 
      subtitle: "Anglican Expansion", 
      image: churchPlantingImage
    },
    {
      title: "Youth Ministry", 
      subtitle: "Next Generation", 
      image: youthMinistryImage
    },
    {
      title: "Women Ministry", 
      subtitle: "Family Strengthening", 
      image: womenMinistryImage
    },
  ]

  const dragThreshold = 50
  const dragX = useMotionValue(0)

  const snapToItem = useCallback((targetCount) => {
    const newX = -((carouselWidth + carouselGap) * targetCount)
    dragX.set(newX, {
      type: 'spring',
      stiffness: 300,
      damping: 25,
      mass: 0.8
    })
  }, [carouselWidth, carouselGap, dragX])

  const handleDragEnd = useCallback(() => {
    const x = dragX.get()
    
    if(x <= -dragThreshold && count < carouselData.length - 1){
      setCount(prev => prev + 1)
    } else if(x >= dragThreshold && count > 0){
      setCount(prev => prev - 1)
    }
  }, [count, carouselData.length, dragX])

  useEffect(() => {
    if (carouselRef.current && viewportRef.current) {
      const width = carouselRef.current.getBoundingClientRect().width
      setCarouselWidth(width)

      const gap = window.getComputedStyle(viewportRef.current.firstChild).columnGap
      setCarouselGap(parseInt(gap))

      snapToItem(count)
    }
  }, [count, snapToItem])

  useEffect(() => {
    const rightButton = document.querySelector('.right-hide')
    const leftButton = document.querySelector('.left-hide')

    if (count >= carouselData.length - 1){
      if (rightButton) rightButton.style.display = 'none'
      if (leftButton) leftButton.style.display = 'flex'
    } else if (count <= 0){
      if (leftButton) leftButton.style.display = 'none'
      if (rightButton) rightButton.style.display = 'flex'
    } else {
      if (rightButton) rightButton.style.display = 'flex'
      if (leftButton) leftButton.style.display = 'flex'
    }
  }, [count, carouselData.length])

  return (
    <div className='relative group px-6'>
      {/* Navigation Buttons */}
      <motion.button
        className='left-hide absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center w-12 h-12'
        onClick={() => count > 0 && setCount(prev => prev - 1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft className='w-6 h-6 text-gray-800' />
      </motion.button>
      
      <motion.button
        className='right-hide absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center w-12 h-12'
        onClick={() => count < carouselData.length - 1 && setCount(prev => prev + 1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowRight className='w-6 h-6 text-gray-800' />
      </motion.button>

      <div ref={viewportRef} className="overflow-hidden">
        <motion.div 
          className='flex md:gap-10 gap-6 my-5' 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x: dragX }}
          animate={{ translateX: -((carouselWidth + carouselGap) * count) }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
            mass: 1
          }}
          onDragEnd={handleDragEnd}
          whileTap={{ cursor: "grabbing" }}
        >
          {carouselData.map((carousel, index) => (
            <div 
              ref={index === 0 ? carouselRef : null} 
              key={index} 
              className='flex-shrink-0 md:w-[32%] w-full flex items-center flex-col relative group/item'
            >
              <div className='relative overflow-hidden rounded-xl shadow-2xl group-hover/item:shadow-3xl transition-all duration-500'>
                <Image 
                  src={carousel.image} 
                  width={400} 
                  height={300} 
                  alt={carousel.title} 
                  className='w-full h-64 object-cover hover:scale-105 transition-transform duration-700' 
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-white/95 backdrop-blur-sm p-6 w-[85%] rounded-xl flex flex-col gap-3 shadow-xl border border-gray-100 hover:border-purple-200 hover:bg-white transition-all duration-300 mt-[-3rem] relative z-10 mx-auto">
                <h3 className='text-2xl font-bold text-gray-900 text-center leading-tight'>{carousel.title}</h3>
                <span className='text-purple-600 font-semibold text-center text-lg bg-purple-50 px-4 py-1 rounded-full mx-auto block w-fit'>
                  {carousel.subtitle}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Carousel
