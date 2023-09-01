import React from 'react'
import { motion } from 'framer-motion';


function BackgroundCircles() {
  return (
    <motion.div className='relative flex justify-center items-center'
      intial = {{
        opacity: 0
      }}
      animate = {{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
      }}
      transition ={{
        duration: 2.5
      }}
    >
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
      <div className='border border-[#333333] opacity-50 rounded-full h-[300px] w-[300px] absolute mt-52'/>
      <div className='border border-[#333333] rounded-full lg:h-[500px] lg:w-[500px] h-[450px] w-[450px] absolute mt-52'/>
      <div className='border border-[#F7AB0A] opacity-20 rounded-full lg:h-[650px] lg:w-[650px] h-[550px] w-[550px] absolute mt-52 animate-pulse'/>
      <div className='border border-[#333333] rounded-full lg:h-[750px] lg:w-[750px] h-[650px] w-[650px] absolute mt-52'/>
    </motion.div>
  )
}

export default BackgroundCircles 