import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion'
import { useState } from 'react';
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[300px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', '0.5' * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:650
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text=white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {

  const [language, setLanguage] = useState('fr');

  const translations = {
    fr:"Développeur Fullstack issu du monde des systèmes et réseaux, je combine expertise technique et sens du relationnel pour donner vie à des projets concrets. Que ce soit en collaboration avec des clients ou face à des défis complexes, je m’épanouis en créant des solutions fiables et intelligentes. Curieux de nature et toujours prêt pour la prochaine aventure, je suis ouvert aux nouvelles opportunités ainsi qu’aux collaborations freelance où mes compétences peuvent vraiment faire la différence.",
    en:"Fullstack developer with roots in IT systems and networks, I bring both technical depth and a human touch to every project. Whether it’s collaborating with clients or diving into complex problems, I thrive on crafting smart, reliable solutions that make a real impact. Curious by nature and always up for the next adventure, I’m open to new opportunities and freelance collaborations where my skills can truly make a difference."
  };

  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        {/* Language toggle */}
        <div className="flex gap-3">
          <button
            onClick={() => setLanguage('fr')}
            className={`px-4 py-1 rounded-full text-sm ${
              language === 'fr' 
                ? 'bg-[#915EFF] text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-4 py-1 rounded-full text-sm ${
              language === 'en' 
                ? 'bg-[#915EFF] text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
            }`}
          >
            ENG
          </button>
        </div>
      </motion.div>

      <motion.p 
        variants={fadeIn('','','0.1','1')}
        className='mt-4 text-secondary text=[18px] max-w-3xl leading-[30px]'
      >
        {translations[language]}
      </motion.p>

      <div className='mt-12 flex justify-center flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')