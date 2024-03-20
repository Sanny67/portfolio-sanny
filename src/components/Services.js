import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from 'react-scroll';
import Service1 from '../assets/mern_icon.png';
import Service2 from '../assets/laravel_vue_icon.png';
import Service3 from '../assets/ai_icon.png';

const services = [
  {
    name: 'MERN Stack Development',
    image: Service1,
    description: 'My deep understanding of the MERN Stack ecosystem and System Design allows me to architect scalable and efficient solutions, making me a valuable asset to any development team. ',
    link: '#'
  },
  {
    name: 'Laravel Development',
    image: Service2,
    description: 'Over four years of Laravel expertise, crafting scalable web apps and RESTful APIs, integrated with Vue, React, and jQuery.',
    link: '#'
  },
  {
    name: 'Prompt Engineering',
    image: Service3,
    description: 'As a skilled prompt engineer, my expertise lies in crafting tailored prompts to achieve desired outcomes, leveraging my proficiency in prompt generation and deep knowledge of generative AI.',
    link: '#'
  },
];

const Services = () => {
  return (
    <section className='min-h-[90vh]' id='services'>
      <div className='container mx-auto px-0 py-10'>
        
        {/* <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-y-0'> */}
        <div className='flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-y-0'>

          {/* text & image */}
          <motion.div
            variants={fadeIn('right', '0.3')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: '0.3' }}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 w-50'>
            <h2 className='h2 text-accent mb-6'>What I Do.</h2>
            {/* <h3 className='h3 max-w-[455px] mb-16'>I excel in dynamic environments, using tech to solve complex problems</h3> */}
            <h3 className='h3 max-w-[455px] mb-16'>I thrive in dynamic environments where I can apply my expertise to create innovative solutions.</h3>
            <button className='btn btn-sm'>
                <span>
                  {/* <Link to='work' activeClass='active' smooth={true} spy={true} offset={-200} >See my work</Link> */}
                  <a href='https://github.com/Sanny67' target='_blank' >See my work</a>
              </span>
            </button>

          </motion.div>
          
          {/* services */}
          <motion.div
            variants={fadeIn('left', '0.3')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: '0.3' }}
          >
            
            {/* service list */}
            <div>
              {services.map(({name, image, description, link}, index) => (
                // h-[146px]
                <div key={index} className='border-b border-white/20 mb-[38px] flex'>
                  <div className='w-[100%] lg:max-w-[476px] mb-5'>
                    <h4 className='text-[20px] tracking-wider fonr-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondray leading-tight'>{description}</p>
                  </div>
                  <div className='hidden lg:flex flex-col flex-1 items-end'>
                    {/* <a href={link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <span><BsArrowUpRight/></span>
                    </a>
                    <a href={link} className='text-gradient text-sm'>
                      Learn More
                    </a> */}
                    <img src={image} alt={"icon"+index} width={100}/>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
