import React from 'react'
import {motion} from 'framer-motion'

function ExperienceCard(props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
     w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
     opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img src="/pngwing.com-2.png" className='w-32 h-32 rounded-full xl:w-[175px]
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
            <h4 className='text-4xl font-light'>Student Intern</h4>
            <p className='font-bold text-2xl mt-1'>Luddy SICE</p>
            <div className='flex space-x-2 my-2'>
                <img src="/logo-javascript-icon-256.png" className='h-10 w-10 rounded-full'/>
                <img src="/logo-javascript-icon-256.png" className='h-10 w-10 rounded-full'/>
                <img src="/logo-javascript-icon-256.png" className='h-10 w-10 rounded-full'/>
            </div>
            <p className='uppercase py-5 text-gray-300'>
                Started work... - Ended...
            </p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard