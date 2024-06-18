import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { SpaceCanvas, StarsCanvas } from './canvas'

import ErrorBoundary from './Boundaries'


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
            <span className='text-[#8A58B5] '>
              Sary
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web 
            <br className='sx:block' />
            & mobile applications.
          </p>
        </div>
      </div>

      <ErrorBoundary>
          <SpaceCanvas />
          {/* <StarsCanvas /> */}
      </ErrorBoundary>

      <div className='absolute xs:bottom-3 bottom-32 w-full flex justify-center items-center'>
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