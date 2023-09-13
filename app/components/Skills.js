import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import Skill from './Skill'
import { fetchSkills } from '../utils/fetchSkills'


export default function Skills() {
  const [skills, setSkills] = useState([])
  useEffect(()=>{
    fetchSkills().then((skills)=>{
      setSkills(skills);
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
     className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
     max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for currency Proficiency
        </h3>
        <div 
         className={skills.length !== 0 ? 'grid grid-cols-4 gap-5 h-[70vh] overflow-y-scroll p-5 scrollbar-none scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 top-48 absolute' : 
         'w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:mt-32 mt-12 items-center justify-center'}>
            {skills.length === 0 && (
              <div className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-[#F7AB0A] rounded-full dark:text-[#F7AB0A]" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
            )}
            {skills.length !==0 && skills.slice(0, skills.length/2).map((skill)=>(
              <Skill 
               key={skill._id}
               title={skill.title}
               progress={skill.progress}
               image={skill.image}
               directionLeft = {true}
              />
            ))}
            {skills.length !==0 && skills.slice(skills.length/2, skills.length).map((skill)=>(
              <Skill 
               key={skill._id}
               title={skill.title}
               progress={skill.progress}
               image={skill.image}
               directionLeft = {false}
              />
            ))}
        </div>
    </motion.div>
  )
}


