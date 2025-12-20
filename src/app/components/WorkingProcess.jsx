import React from 'react'
import Wrapper from './Wrapper'
import churchImage from '@/images/picture17.jpeg' // Replace with appropriate church image
import Button from './Button'

const WorkingProcess = () => {
  const ministryProcess = [
    {
      title: "Worship & Prayer", 
      desc: 'Our journey begins in the presence of God. Through fervent worship, intercessory prayer, and seeking divine guidance, we align our hearts and plans with God\'s perfect will for His church and our communities.'
    },
    {
      title: "Discipleship Training", 
      desc: 'We equip the saints for ministry. Comprehensive Bible teaching, leadership development, and spiritual formation programs prepare believers to grow in faith, character, and service to advance God\'s kingdom.'
    },
    {
      title: "Evangelism & Outreach", 
      desc: 'The Great Commission in action. Through crusades, community missions, street evangelism, and digital outreach, we proclaim the Gospel, making disciples and transforming lives by the power of Christ.'
    },
    {
      title: "Church Planting", 
      desc: 'Multiplying the harvest. We establish new congregations, train indigenous leaders, and provide resources to plant self-sustaining churches that will continue the work of the Gospel across Nigeria and beyond.'
    },
  ]

  return (
    <Wrapper className='md:my-40 my-60 grid md:grid-cols-[3.2fr_6.8fr] gap-20'>
      <div 
        className="p-10 py-20 rounded-xl flex flex-col space-y-5 items-start relative overflow-hidden" 
        style={{ backgroundImage: `url(${churchImage.src})` }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-purple-900/90 via-blue-900/80 to-indigo-900/90"></div>
        <p className="text-white font-light relative z-10 text-lg uppercase tracking-wider">MINISTRY JOURNEY</p>
        <h2 className='text-[2.3rem] font-bold text-white leading-tight relative z-10'>
          Our Ministry Process<br />
          <span className="text-purple-200">Growing God's Kingdom in Nigeria</span>
        </h2>
        <Button 
          text='Join Our Ministry' 
          className='text-white relative z-10 font-bold px-10 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg' 
        />
      </div>
      
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {ministryProcess.map((process, index) => (
          <div key={index} className="flex flex-col space-y-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200">
            <span className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              {index + 1}.
            </span>
            <h3 className="text-2xl text-gray-900 font-bold leading-tight">{process.title}</h3>
            <p className="text-gray-600 leading-relaxed text-base">{process.desc}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default WorkingProcess
