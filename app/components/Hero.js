import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from "next/link";

function Hero() {
  const [text] = useTypewriter({
    words:[
        "Hi, The Name's Himanshu",
        "Guy-who-loves-Tech.js",
        "<ButLovesToCodeMore />"
    ],
    loop: true,
    delaySpeed: 2000
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[160px]'>
        <BackgroundCircles />
        <img
        src='/IMG_6840.jpg'
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        alt=''
        />
        
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                &nbsp;Software Engineer
            </h2>
            <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero