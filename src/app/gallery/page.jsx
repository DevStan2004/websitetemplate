'use client'
import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import picture1 from '@/images/picture1.jpeg'
import picture2 from '@/images/picture2.jpeg'
import picture3 from '@/images/picture3.jpeg'
import picture4 from '@/images/picture4.jpeg'
import picture5 from '@/images/picture5.jpeg'
import picture6 from '@/images/picture6.jpeg'
import picture7 from '@/images/picture7.jpeg'
import picture8 from '@/images/picture8.jpeg'
import picture9 from '@/images/picture9.jpeg'
import picture10 from '@/images/picture10.jpeg'
import picture11 from '@/images/picture11.jpeg'
import picture12 from '@/images/picture12.jpeg'
import picture13 from '@/images/picture13.jpeg'
import picture14 from '@/images/picture14.jpeg'
import picture15 from '@/images/picture15.jpeg'
import picture16 from '@/images/picture16.jpeg'
import picture17 from '@/images/picture17.jpeg'
import picture18 from '@/images/picture18.jpeg'
import picture19 from '@/images/picture19.jpeg'
import picture20 from '@/images/picture20.jpeg'
import picture21 from '@/images/picture21.jpeg'
import picture22 from '@/images/picture22.jpeg'
import picture23 from '@/images/picture23.jpeg'
import picture24 from '@/images/picture24.jpeg'
import picture25 from '@/images/picture25.jpeg'
import picture26 from '@/images/picture26.jpeg'
import picture27 from '@/images/picture27.jpeg'
import picture28 from '@/images/picture28.jpeg'
import picture29 from '@/images/picture29.jpeg'
import picture30 from '@/images/picture30.jpeg'
import picture31 from '@/images/picture31.jpeg'
import picture32 from '@/images/picture32.jpeg'
import picture33 from '@/images/picture33.jpeg'
import picture34 from '@/images/picture34.jpeg'
import picture35 from '@/images/picture35.jpeg'
import picture36 from '@/images/picture36.jpeg'
import picture37 from '@/images/picture37.jpeg'
import picture38 from '@/images/picture38.jpeg'
import picture39 from '@/images/picture39.jpeg'
import picture40 from '@/images/picture40.jpeg'
import Image from 'next/image'
import { X } from 'lucide-react'

const page = () => {
    const [changeUrl, setChangeUrl] = useState('')
  return (
    <Wrapper className={'my-1 relative'}>
        <div className={`fixed top-0 left-0 h-full w-full bg-black/90 flex justify-center items-center ${changeUrl ? 'block' : 'hidden'}`}>
            <div onClick={() => setChangeUrl('')} className="absolute top-20 right-10 w-10 h-10 rounded-full flex justify-center items-center bg-black/20 cursor-pointer">
                <X color='white' />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                {changeUrl ? (
                    <Image src={changeUrl} width={1000} height={1000} alt='picture' />
                ) : null}
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <div className="grid md:grid-cols-[2fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture1)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture1} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture2)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture2} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture3)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture3} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture4)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture4} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture5)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture5} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture6)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture6} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture7)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture7} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture8)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture8} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture9)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture9} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture10)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture10} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div  className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture11)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture11} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture12)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture12} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture13)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture13} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture14)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture14} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture15)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture15} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture16)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture16} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture17)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture17} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture18)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture18} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture19)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture19} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture20)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture20} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture21)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture21} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture22)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture22} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture23)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture23} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture24)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture24} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture25)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture25} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture26)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture26} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture27)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture27} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture28)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture28} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture29)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture29} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture30)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture30} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_2fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture31)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture31} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture32)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture32} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture33)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture33} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture34)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture34} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture35)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture35} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[1fr_1fr_1fr] grid-cols-3 gap-3">
                <div onClick={() => setChangeUrl(picture36)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture36} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture37)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture37} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture38)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture38} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="grid md:grid-cols-[2fr_1fr] grid-cols-2 gap-3">
                <div onClick={() => setChangeUrl(picture39)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture39} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
                <div onClick={() => setChangeUrl(picture40)} className="w-full md:h-[20rem] h-[7rem]">
                    <Image src={picture40} alt='picture1' width={1000} height={1000} className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

export default page