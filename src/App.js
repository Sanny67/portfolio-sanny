import React, { useRef } from 'react';
// toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import { distance } from 'framer-motion';
import CustomCursor from './components/CustomCursor';

const App = () => {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <CustomCursor />
      <Header />
      <Nav />
      <Banner />
      <About />
      <Services />
      {/* <Work /> */}
      <Contact />
      <div className=''></div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default App;
