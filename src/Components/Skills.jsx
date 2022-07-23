import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

export default function Skills() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }
        , []);

    return (
        <div data-aos="fade-up" name="skills" className='min-h-screen h-fit flex justify-center items-center px-5'>
            <div className='w-full'>
                <div className='text-white py-6 max-w-[1080px] mx-auto'>
                    <p className='text-4xl font-semibold text-white inline border-b-4 border-[#75454c]'>My Skills</p>
                    <p className='text-lg md:text-2xl my-6'>These are the technologies i've worked with.</p>
                </div>

                <div data-aos="zoom-in-up" className='grid md:grid-cols-2 gap-12 py-6 max-w-[1080px] mx-auto'>
                    <div>
                        <h1 className='text-[#4af041] text-lg'>Languages & Frameworks</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
                            <div className='space-y-4'>
                                <img src='./portfolio/html.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>HTML</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/css.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>CSS</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/javascript.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>JAVASCRIPT</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/react.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>REACT</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/tailwind.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>TAILWIND</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/nextjs.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>NEXT JS</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/mui.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>MATERIAL UI</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/bootstrap.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>BOOTSTRAP</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-[#4af041] text-lg'>Tools & Technologies</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
                            <div className='space-y-4'>
                                <img src='./portfolio/git.svg' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>GIT</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/github.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>GITHUB</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/vs.svg' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>VS CODE</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/figma.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>FIGMA</p>
                            </div>

                            <div className='space-y-4'>
                                <img src='./portfolio/npm.png' alt='html' className='h-16 w-16 m-auto hover:scale-125 duration-500' />
                                <p className='text-white'>NPM</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
