import React from 'react'
import Wrapper from './Wrapper'
import worshipImage from '@/images/picture12.jpeg'
import missionsImage from '@/images/picture13.jpeg'
import bibleStudyImage from '@/images/picture14.jpeg'
import youthMinistryImage from '@/images/picture15.jpeg'
import outreachImage from '@/images/picture16.jpeg'
import familyMinistryImage from '@/images/picture6.jpeg'
import Card from './Card'
import AnimatedSlide from './AnimatedSlide'

const Services = () => {
    const cardDetails = [
        {
            title: 'Worship & Liturgy',
            desc: 'We lead vibrant worship services that draw believers closer to God. From traditional Anglican liturgy to contemporary expressions, our services nurture spiritual growth and create sacred spaces for encountering the living God.',
            image: worshipImage
        },
        {
            title: 'Evangelism & Missions',
            desc: 'Proclaiming the Gospel across Nigeria and beyond. We equip believers for personal evangelism, support missionary outreach, and plant churches in unreached communities, fulfilling the Great Commission in our generation.',
            image: missionsImage
        },
        {
            title: 'Discipleship Training',
            desc: 'Building mature followers of Christ through systematic Bible teaching, small groups, and leadership development programs. We provide resources and training to help believers grow in faith, character, and service.',
            image: bibleStudyImage
        },
        {
            title: 'Youth & Children Ministry',
            desc: 'Investing in the next generation through age-appropriate programs, camps, and mentorship. We create safe spaces where young people can discover their identity in Christ and develop godly character.',
            image: youthMinistryImage
        },
        {
            title: 'Community Outreach',
            desc: 'Demonstrating Christ\'s love through practical compassion. We run food banks, medical outreaches, education programs, and skill acquisition centers to meet both spiritual and physical needs in our communities.',
            image: outreachImage
        },
        {
            title: 'Family Life Ministry',
            desc: 'Strengthening marriages and families through counseling, marriage preparation courses, parenting seminars, and family retreats. We equip families to thrive as God\'s design for society.',
            image: familyMinistryImage
        },
    ]

    return (
        <Wrapper className={'py-30 bg-[#f6f7f9]'}>
            <div className="flex flex-col space-y-3 items-center">
                <p className="text-purple-900 font-light">MINISTRIES</p>
                <h3 className='text-4xl text-center font-bold'>We Are Equipping Believers for <br /> Kingdom Ministry</h3>
                <AnimatedSlide />
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3 my-5">
                {cardDetails.map((card, index) => (
                    <Card key={index} src={card.image} desc={card.desc} name={card.title} title={card.title} />
                ))}
            </div>
        </Wrapper>
    )
}

export default Services
