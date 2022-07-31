import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function About() {


    useEffect(() => {
        Aos.init({ duration: 1000 });
    }
        , []);

    return (
        <div data-aos="fade-up" name="about" className='min-h-screen h-fit flex justify-center items-center px-5 py-4'>
            <div className='w-full'>

                <div className='max-w-[1080px] mx-auto px-4'>
                    <p className='text-4xl font-semibold text-white inline border-b-4 border-[#75454c]'>About</p>
                </div>

                <div className='md:flex items-center justify-between mt-6 gap-8 max-w-[1080px] mx-auto'>
                    <div className='w-full md:w-2/3 space-y-8'>
                        <p className='text-2xl md:text-4xl font-semibold text-[#4af041] text-left md:text-right'>
                            I'm Mohit, a frontend developer skilled in building responsive, mobile-first
                            websites & web-based applications.
                        </p>

                        <p className='text-sm md:text-base text-left md:text-right text-white'>
                            What do i do ? Well, i put my headphone on and code.
                            I play around with code, read some tech news or articles, learn some new technology.
                            I like to meet everyday with new challenges and solve new problems.
                            I’m very passionate about aesthetics UI/UX design and writing clean, reusable and maintainable code.
                            I build projects using HTML, CSS, JavaScript, React JS.
                            I’m looking for new opportunities. I'm ready to apply my passion for coding to a prominent
                            engineering team to develop
                            quality solutions. Want to hire me or want to collaborate? Shoot me a message.
                        </p>
                    </div>

                    <div className='flex items-center justify-center w-full md:w-1/3'>
                        <img src='pic.jpeg' alt='img' className='mt-10 md:mt-0 shadow-xl rounded-lg' />
                    </div>
                </div>
            </div>

        </div>
    )
}
