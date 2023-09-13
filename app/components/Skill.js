import React from 'react'
import PropTypes from 'prop-types'
import { urlFor } from '../../sanity'
import {motion} from 'framer-motion'

export default function Skill(props={
    directionLeft: false,
    title,
    progress,
    image
}) {
  const {directionLeft} = props
  return (
    <div className='group relative flex cursor-pointer'>    
        <motion.img 
            initial={{
                x: directionLeft ? -100 : 100,
                opacity: 0
            }}
            transition = {{duration: 1}}
            whileInView ={{opacity:1, x:0}}
            src = {urlFor(props.image).url()}
            className='rounded-full border border-gray-500 object-cover w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition
            duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:h-32 xl:w-32
         rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{props.progress}%</p>
            </div>
        </div>
    </div>

  )
}

Skill.prototype = {
    directionLeft: PropTypes.bool
}
