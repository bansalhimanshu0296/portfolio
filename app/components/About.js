import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import {urlFor} from '../../sanity';

function About() {
   const [pageInfo, setPageInfo] = useState({})
   useEffect(()=>{
     fetchPageInfo().then((pageInfo)=>{
           setPageInfo(pageInfo)
       })
   },[])
  return (
    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row 
     max-w-7xl px-10 justify-evenly mx-auto items-center'
     initial={{
        opacity: 0
     }}
     whileInView={{
        opacity: 1
     }}
     transition={{
        duration: 1
     }}
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        {Object.keys(pageInfo).length !== 0 &&
        <motion.img
         initial={{
            x:-200,
            opacity:0
         }}
         transition={{
            duration: 1.2
         }}
         whileInView={{
            x:0,
            opacity:1
         }}
         viewport={{
            once: true
         }}
         src={urlFor(pageInfo?.profilePic).url()}
         className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
         md:rounded-lg md:w-64 md:h-95 xl:h-[500px] xl:w-[600px] absolute top-36 md:relative md:top-0'
        />}
        <div className='space-y-10 px-0 md:px-10 md:h-95 xl:h-[500px] overflow-scroll text-center h-72 relative top-36 md:top-0 scrollbar-none'>
            <h4 className='text-4xl font-semibold items-center'>Here is a{" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                background
            </h4>
            <p className='text-base text-justify'>
               {pageInfo.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About