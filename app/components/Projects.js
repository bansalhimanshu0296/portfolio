import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { fetchProjects } from '../utils/fetchProjects'
import {urlFor} from '../../sanity'
import Link from 'next/link'

function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(()=>{
   fetchProjects().then((projects)=>{
      setProjects(projects)
   })
  },[])
  return (
    <motion.div className='h-screen relative flex flex-col overflow-hidden text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0'
     initial={{
        opacity: 0
     }}
     whileInView={{
        opacity: 1
     }}
     transition={{
        duration: 1.5
     }} 
     >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div 
         className={projects.length !== 0 ? 'relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' : 
         'w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory md:mt-32 mt-12 items-center justify-center'}>
            {projects.length === 0 && (
              <div classNam="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-[#F7AB0A] rounded-full dark:text-[#F7AB0A]" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
            )}
            {projects.length !== 0 && projects.map((project,i)=>
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-44 h-screen'
            key={i}>
                <motion.img src={urlFor(project?.image).url()}
                 alt=''
                 initial={{
                    y:-300,
                    opacity: 0
                 }}
                 transition={{
                    duration: 1.2
                 }}
                 whileInView={{
                    y: 0,
                    opacity: 1
                 }}
                 viewport={{
                    once: true
                 }}
                 className='w-[35vw]'
                />
                 <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='md:text-3xl font-semibold text-center text-xl'>
                        <Link href={project.linkToBuild} className='underline decoration-[#F7AB0A]/50'>Project {i+1} of {projects.length}:</Link>
                        {" "}
                        {project.title}
                    </h4>
                    <p className='text-md md:text-lg text-center md:text-left h-24 overflow-y-scroll'>{project.summary}</p>
                 </div>
            </div>)}


        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[380px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects