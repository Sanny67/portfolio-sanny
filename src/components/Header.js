import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Header = () => {
  return (
    <div className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <Logo />
          </a>
          {/* button */}
          <button className='btn btn-sm'>
            <span>Work with me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
