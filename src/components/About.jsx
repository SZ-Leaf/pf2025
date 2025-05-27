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
    fr:"Je suis un développeur Fullstack avec un parcours professionnel en IT (systèmes et réseaux). Doté d’un bon relationnel client et capable de m’adapter rapidement, je suis à la recherche de nouvelles opportunités pour mettre mes compétences en pratique sur des projets concrets. Reconnu pour mes capacités de résolution de problèmes et ma passion pour l'innovation, je suis prêt à relever de nouveaux défis professionnels et reste également ouvert à des missions freelance où mon expertise pourrait être utile.",
    en:"I’m a Fullstack developer with a professional background in IT (systems and networks). With strong customer relations skills and a quick adaptability, I’m looking for new opportunities to apply my expertise to real-world projects. Known for my problem-solving abilities and passion for innovation, I’m ready to take on new professional challenges and also open to freelance work where my skills can be of value."
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