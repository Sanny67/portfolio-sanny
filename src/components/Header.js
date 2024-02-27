import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='pt-5 pb-3'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <Logo />
          </a>
          {/* button */}
          <Link to='contact' smooth={true} spy={true} >
            <button className='btn btn-sm'>
              <span>Work with me</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
