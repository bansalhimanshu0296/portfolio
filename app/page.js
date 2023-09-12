'use client'

import About from './components/About'
import ContactMe from './components/ContactMe'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 z-0">
      <Header/>
      <section id='hero' className="snap-start">
        <Hero />
      </section>
      <section id='about' className="snap-center pt-[2vh]"> 
        <About />
      </section>
      <section id='experience' className="snap-center pt-[2vh]">
        <Experience/>
      </section>
      <section id='skills' className="snap-start pt-[2vh]">
        <Skills />
      </section>
      <section id='projects' className="snap-start">
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    
    </main>
  )
}

