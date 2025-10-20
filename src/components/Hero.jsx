import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SpaceCanvas, StarsCanvas } from './canvas'
import {github_logo, linkedin_logo} from '../assets/index.js'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`section1div ${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-start mt-5'>

          <div className='w-5 h-5 rounded-full bg-[#8A58B5] ' />
          <div className='w-1 sm:h-80 h-40 violet-gradient ml-2' />

        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm&nbsp;
            <span className='text-[#8A58B5]'>
              Sary
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Junior <span className='text-[#8A58B5]'>fullstack;</span> developer.
          </p>
          <ul className='flex gap-4 mt-5 relative z-10'>
            <li>
              <a href="https://github.com/SZ-Leaf">
                <img className='w-8 h-8' src={github_logo} alt="SZ-Leaf - Github" />
              </a>
            </li>
              <a href="https://www.linkedin.com/in/saryzeaiter/">
                <img className='w-8 h-8' src={linkedin_logo} alt="Sary Zeaiter - Linkedin" />
              </a>
            <li>
              
            </li>
          </ul>
        </div>

        <div>
          
        </div>
      </div>

        <SpaceCanvas />

      <div className='absolute bottom-14 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[25px] h-[50px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero