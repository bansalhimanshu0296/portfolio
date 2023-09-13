import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import { fetchEducation } from '../utils/fetchEducation';
import EducationCard from './EducationCard';

function Education() {

  const [educations, setEducations] = useState([])
  useEffect(()=>{
    fetchEducation().then(educations=>{
      setEducations(educations)
    })
  },[])
  return (
    <motion.div 
     initial={{
        opacity: 0
     }}
     whileInView={{
        opacity: 1
     }}
     transition={{
        duration: 1.5
     }}    
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
     max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Education
        </h3>
        <div 
         className={educations.length !== 0 ? 'w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:mt-32 mt-12 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 top-24 md:top-4 xl:top-2 absolute' : 
         'w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:mt-32 mt-12 items-center justify-center'}>
            {educations.length === 0 && (
              <div className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-[#F7AB0A] rounded-full dark:text-[#F7AB0A]" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
            )}
            {educations.length !==0 && educations.map((education)=>(
              <EducationCard 
               key={education._id}
               education={education}
              />
            ))}
        </div>
    </motion.div>
  )
}

export default Education