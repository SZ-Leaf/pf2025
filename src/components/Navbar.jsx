import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import Cover from '../assets/createdLogo/cover.png'
import Default from '../assets/createdLogo/default.png'
import Profile from '../assets/createdLogo/profile.png'


const Navbar = () => {

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`
      ${styles.paddingX}
      w-full flex items-center py-5 fixed top-0 z-20 bg-primary
    `}>

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>

        <Link to='/' className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>

          <img src={Default}
          alt="logo"
          className='w-9 h-9 object-contain'
          />

          <p>Sary<span className='sm:block hidden'>| App. Developer</span></p>

        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) =>(
            <li key={link.id}
                className={`${
                  active === link.title
                    ? "text-white" : "text-secondary"
                }
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          style={{
            transition: "all 0.3s ease-in-out"
          }}
          onClick={() => setToggle(!toggle)} />
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar

// filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"

// style={{
//   boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.75)",
//   WebkitBoxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.75)",
//   MozBoxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.75)",
//   flexBasis: "100%"
//   }}