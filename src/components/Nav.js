import React from 'react';
//import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase,  BsChatSquare } from 'react-icons/bs';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <nav className='fixed bottom-2 w-full lg:bottom-8 lg:w-1/2 lg:w-2/5 overflow-hidden z-50 left-1/2 transform -translate-x-1/2'>
        {/* nav inner */}
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1 text-white/50'>
          <Link
            to='home'
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BiHomeAlt />
          </Link>

          <Link
            to='about'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BiUser />
          </Link>

          <Link
            to='services'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BsClipboardData />
          </Link>

          {/* <Link
            to='work'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BsBriefcase />
          </Link> */}

          <Link
            to='contact'
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'>
            <BsChatSquare />
          </Link>

        </div>
    </nav>
  );
};

export default Nav;
