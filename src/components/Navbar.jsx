import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'
import Cover from '../assets/createdLogo/cover.png'
import Default from '../assets/createdLogo/default.png'
import Profile from '../assets/createdLogo/profile.png'


const Navbar = () => {

  const openCvInNewTab = () => {
    const cvPath = '';
    window.open(cvPath, '_blank');
  };

  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);


  return (
    <nav className={`
      ${styles.paddingX}
      w-full flex items-center py-3 fixed top-0 z-20 bg-primary
    `}>

      <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>

        <Link to='/' className='flex items-center gap-2'
        onClick={() => {
          setActive('');
          window.scrollTo(0, 0);
        }}>

          <img src={Default}
          alt="logo"
          className='w-9 h-9 object-contain rounded-md'
          />

          <p className='text-white text-[17px] font-bold cursor-pointer flex'>| Sary Zeaiter</p>

        </Link>

        <div className='flex gap-10'>

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

          <button className='text-white hidden sm:block px-2.5 bg-[#8A58B5] rounded-md'  onClick={openCvInNewTab}>
            CV 🠗
          </button>

        </div>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle(!toggle)} />
        
          <div className={`${!toggle ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'} transition-all duration-300 p-6 black-gradient absolute top-16 right-0 mx-4 min-w-[130px] z-10 rounded-xl `}>

            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) =>(
                <li key={link.id}
                    className={`${
                      active === link.title
                        ? "text-white" : "text-secondary"
                    }
                    font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);

                    }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li className='text-white px-2.5 bg-[#8A58B5] rounded-md w-full text-center'>
                CV 🠗
              </li>
            </ul>

          </div>
        </div>
        
      </div>

    </nav>
  )
}

export default Navbar