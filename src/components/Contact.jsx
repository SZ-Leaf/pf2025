import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import SectionWrapper from '../hoc/SectionWrapper'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    message:'',
    email:'',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.email || !form.message) {
      alert('Please fill in all fields.');
      setLoading(false);
      return; // Stop submission if empty
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert('Invalid email!');
      setLoading(false);
      return;
    }
    emailjs.send(
      'service_b5q2w9u',
      'template_20m730l',
      {
        from_name: form.name,
        to_name: 'Sary',
        from_email: form.email,
        to_email: 'saryzeaiter@gmail.com',
        message: form.message,
      },
      'uvjgv6MZ8NamDzx3V'
    )
    .then(() => {
      setLoading(false),
      alert('Thank you for contacting me! I will get back to you as soon as possible.');
      setForm({
        name:'',
        email:'',
        message:'',
      })
    }, (error) => {
      setLoading(false),
      console.log(error),
      alert('Something went wrong!')
    })
  }

  return (
    <div className='lg:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[1] bg-black-100 p-8 pt-4 pb-4 rounded-2xl'
      >

        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-6 flex flex-col gap-4'  
        >

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Your email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-3'>Your Message</span>
            <textarea name='message' rows='4' value={form.message} onChange={handleChange} placeholder='Your message here' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-empty shadow-primary rounded-xl'>
            {loading ? 'Sending...' : "Send"}
          </button>

        </form>
        
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='lg:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");