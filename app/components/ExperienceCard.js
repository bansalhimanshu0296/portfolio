import React from 'react'
import {motion} from 'framer-motion'
import { urlFor } from '../../sanity'

function ExperienceCard({experience}) {

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[90vw] md:w-[60vw] xl:w-[40vw] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-x-hidden overflow-y-scroll
     scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
     h-[71vh]'>
        <motion.img src={urlFor(experience?.orgImage).url()}className='w-32 h-32 rounded-full xl:w-[175px]
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
            <h4 className='text-xl font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-lg mt-1'>{experience.organization}</p>
            <div className='flex space-x-2 my-2 flex-wrap'>
                {experience.technologies.map((technology, id)=>(
                    <img src={urlFor(technology.image).url()} className='h-10 w-10 rounded-full' key={id}/>
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? <>Present</> : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc space-y-4 ml-5 text-md'>
                {experience.points.map((point, id)=>(
                    <li key={id}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard