import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../../sanity'

function EducationCard({education}) {

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[90vw] md:w-[46vw] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden overflow-y-scroll
     h-[71vh]'>
        <motion.img src={urlFor(education?.orgImage).url()}className='w-32 h-32 rounded-full xl:w-[175px]
         xl:h-[175px] object-cover object-center' alt=""
         initial={{
            y:-100,
            opacity:0
         }}
         transition={{
            duration: 1.2
         }}
         whileInView={{
            y:0,
            opacity:1
         }}
         viewport={{
            once: true
         }}/>
        <div className='px-0 md:px-10'>
            <h4 className='text-xl font-light'>{education.organization}</h4>
            <p className='font-bold text-lg mt-1'>{education.city}, {education.state}, {education.country}</p>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(education.dateStarted).toDateString()} - {education.isCurrentlyAttending ? <>Present</> : new Date(education.dateEnded).toDateString()}
            </p>
            <p className='text-lg font-semibold text-gray-300'>
                {education.level}         
            </p>
            <p className='text-md text-gray-300'>
                {education.major}         
            </p>
            <p className='uppercase py-5 text-gray-300'>
                CGPA: {education.cgpa}         
            </p>
            
        </div>
    </article>
  )
}

export default EducationCard