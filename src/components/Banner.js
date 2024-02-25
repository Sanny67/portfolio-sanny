import React from 'react';
// import Image from "../assets/avatar.svg";
import Image from "../assets/avatar.png";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[90vh] pt-0 pb-16 flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            {/* <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>SANNY <span>DEV</span></h1> */}
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold font-secondary leading-[0.8] lg:text-[90px]'
            >SANNY</motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[50px] font-secondary font-senmibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Laravel Developer',
                2000,
                'Database Designer',
                2000,
                'UI/UX Developer',
                2000,
              ]} speed={50} className='text-accent' wrapper='span' repeat={Infinity}/>
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              As a seasoned Fullstack Developer with over 4 years of experience, I bring a proven track record of creating robust and scalable web applications. Proficient in a diverse technology stack, my skills encompass advanced expertise in Laravel, as well a s MERN Stack roles.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'>
                <span>Contact me</span>
              </button>
              <a href='#' className='text-gradient button-link'>My Resume</a>
            </motion.div>

            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex test-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a
                target="_blank"
                href='https://github.com/Sanny67'
              ><FaGithub /></a>
              <a
                target="_blank"
                href='https://www.linkedin.com/in/sannydev/'
              ><FaLinkedin /></a>
              <a
                target="_blank"
                href='https://stackoverflow.com/users/11780611/sayantani-chatterjee'
              ><FaStackOverflow /></a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
          >
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
