import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }
    , []);

  return (
    <div name="home" className="bg-[#546f9c] h-full">
      <Navbar />

      <div className='lg:flex items-center max-w-[1080px] h-screen m-auto px-5'>
        <div data-aos="zoom-in-right" className=' text-white flex flex-col mt-12 justify-center items-start'>
          <p className='text-[#4af041] text-2xl font-semibold'>Hi there, i am</p>
          <h1 className='text-6xl md:text-7xl text-white font-semibold'>Mohit</h1>
          <div className='flex gap-4'>
            <h2 className='text-4xl md:text-7xl text-[#4af041] font-semibold text-left inline align-top	'>I am a</h2>
            <div className='animated-text text-4xl md:text-7xl font-semibold'>
              <div>
                <span className="animation block text-left relative after:content-[''] after:absolute after:left-0 after:-right-2 after:h-full after:bg-[#546f9c] after:border-l-2">DEVELOPER</span>
                <span className="animation block text-left relative after:content-[''] after:absolute after:left-0 after:-right-2 after:h-full after:bg-[#546f9c] after:border-l-2">DESIGNER</span>
                <span className="animation block text-left relative after:content-[''] after:absolute after:left-0 after:-right-2 after:h-full after:bg-[#546f9c] after:border-l-2">DREAMER</span>
              </div>
            </div>
          </div>


          <p className='text-white text-lg py-4 text-left'>I'm a creative and curious front-end developer who is passionate about designing,
            developing clean, intuitive and better UI/UX. I specialize in React JS and responsive design.</p>
          <a href='https://drive.google.com/file/d/1MTDZ2GVFV-dkPWcV-n26nWZlQIemur3f/view?usp=sharing' target="_blank" rel="noreferrer"
            className='border-2 px-4 md:px-6 py-2 md:py-4 my-4 rounded-lg flex items-center gap-2 hover:bg-[#75454c] hover:border-[#75454c]'>
            Download CV <MdOutlineArrowRightAlt className='text-2xl' /> </a>
        </div>
        <img src='profile.svg' alt='profileimg' className='m-auto mt-8 md:mt-auto h-44 md:h-96' />
      </div>

      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home