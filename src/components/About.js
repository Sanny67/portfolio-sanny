import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Bullet from "../assets/bullet.svg";
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const skillSetArray = [
    ["React.js", "Vue.js", "Node.js", "Nuxt.js", "Laravel"],
    ["MySQL", "MongoDB", "PHP", "Shopify", "ZEND"],
    ["Jquery", "Javascript", "Sass", "Tailwind Css", "Bootstrap"]
  ];

  return (
    <section className='section min-h-[100vh] my-10' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0'>

          {/* image */}
          <motion.div
            variants={fadeIn('right', '0.3')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: '0.3' }}
            className='hidden lg:flex flex-1 bg-about bg-contain bg-no-repeat min-h-[400px] lg:min-h-[600px] mix-blend-lighten bg-top '
          ></motion.div>

          {/* text */}
          <motion.div 
            variants={fadeIn('left', '0.5')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: '0.3' }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About me</h2>
            <h3 className='h3 mb-4'>My background includes extensive work in both Laravel and MERN Stack Developer roles.</h3>
            <div className='mb-6 flex lg:gap-x-20 gap-x-3'>
              {skillSetArray.map((skillSet, i) => (
                <div key={i} className='flex flex-col'>
                    {skillSet.map((skill, j) => (
                        <p key={j}>
                            <img src={Bullet} alt='bullet' style={{height: '25px'}} className='inline h-[30px]'/>
                            {skill}
                        </p>
                    ))}
                </div>
              ))}
            </div>

            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mt-1 mb-12'>
              
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={4} duration={3} /> : ""}+
                </div>

                <div className='font-primary text-sm tracking-[2px]'>Years of <br/>Experience</div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : ""}+
                </div>

                <div className='font-primary text-sm tracking-[2px]'>Projects <br/>Completed</div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={5} duration={3} /> : ""}+
                </div>
                <div className='font-primary text-sm tracking-[2px]'>Satisfied <br/>Clients</div>
              </div>

            </div>

            {/* button */}
            <div className='flex gap-x-8 items-center'>
              <Link to='contact' smooth={true} spy={true} >
                <button className='btn btn-lg'>
                  <span>Contact me</span>
                </button>
              </Link>
              <a
                download={true}
                className='text-gradient btn-link'
                href='../assets/Sayantani Chatterjee - CV.pdf'
              >My Resume</a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
