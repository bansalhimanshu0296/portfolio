import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";

function ContactMe() {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => {
    window.location.href = `mailto:bansalhimanshu0296@gmail.com?subject=${data.subject}&body=Hi, My name is ${data.name}. ${data.message} (${data.email})`
  };
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>
                I have just got what you need.{" "}
                <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk</span>
            </h4>
            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p>+1 (930)-215-3361</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p>bansalhimanshu0296@gmail.com</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p>800 Seneca St, Apt 415, Seattle, WA, US - 98101</p>
                </div>
            </div>
        
            <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex space-x-2'>
                    <input className='contactInput' type="text" placeholder='Name' {...register('name')}/> 
                    <input className='contactInput' type="text" placeholder='Email' {...register('email')}/>
                </div>
                <input className='contactInput' type="text" placeholder='Subject' {...register('subject')}/>
                <textarea className='contactInput' placeholder='Message' {...register('message')}/>
                <button className='bg-[#F7AB0A] text-black py-5 px-10 rounded-md font-bold text-lg' type='submit'>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe
