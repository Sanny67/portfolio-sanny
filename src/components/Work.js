import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {
  return (
    <section className='min-h-[100vh] my-20' id='work'>
      <div className='container mx-auto'>

        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex flex-col lg:flex-row lg:flex-nowrap gap-y-12 mb-10 lg:mb-0'>
          
            {/* tile 1 */}
            <motion.div
              variants={fadeIn('up', '0.3')}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: '0.3' }}
              className="w-full lg:w-1/2 lg:pb-4 lg:pr-4"
            >
              {/* text */}
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br/>Work
              </h2>
              <p className='max-w-sm mb-16'>
                Ut ea exercitation occaecat occaecat eiusmod proident cupidatat non excepteur enim.
              </p>
              <button className='btn btn-sm'>
                <span>View all projects</span>
              </button>
            </motion.div>

            {/* tile 2 */}
            <motion.div
              variants={fadeIn('up', '0.4')}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: '0.3' }}
              className="w-full lg:w-1/2 lg:pb-4 lg:pl-4"
            >
              {/* image */}
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                
                {/* overlay */}
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

                {/* img */}
                <img src={Img1} alt='' className='group-hover:scale-125 transition-all duration-500'/>

                {/* pretitle */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-gradient'>Scalable Chat App</span>
                </div>

                {/* title */}
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3x1 text-white'>Tech Stack: Next.js, Node,js Redis, Web-socket</span>
                </div>

              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
