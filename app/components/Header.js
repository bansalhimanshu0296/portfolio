import React, { use, useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from "next/link";
import { fetchSocials } from '../utils/fetchSocials';

function Header() {
  const [socials, setSocials] = useState([])
  useEffect(()=>{
    fetchSocials().then((socials)=>{
      setSocials(socials)
    })
  },[])
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div 
        className="flex flex-row items-center"
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
          }
        }
        animate={{
          x: 0, 
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        {socials.map((social)=>{
            if(social.title !== "Discord" ){
              return(<SocialIcon 
               key={social._id}
               url={social.url}
               fgColor='gray'
               bgColor='transparent'
            />)}
            // else{
            //   return(<SocialIcon 
            //     url={social.url}
            //     key={social._id}
            //     bgColor='gray'
            //    />)
            // }
        })}
        
      </motion.div>
      <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
          }
        }
        animate={{
          x: 0, 
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
      }}>
        <Link href="https://drive.google.com/file/d/1TmJNdinPUIopz8vw3XigFQKnQaMpaphf/view?usp=share_link" target="_blank">
          <p className="uppercase inline-flex text-sm text-gray-400">Resume</p>
        </Link>
        <SocialIcon network='email'
         fgColor='gray'
         className="cursor-pointer"
         bgColor='transparent'
         url = '#contact'
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

export default Header